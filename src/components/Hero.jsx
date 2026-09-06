import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiDownload,
  FiMail,
  FiCheck,
  FiTerminal,
  FiExternalLink,
  FiCode,
  FiMaximize2,
  FiMinimize2,
  FiArrowRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const GITHUB_USERNAME = "codes4vinay";
const CONTRIBUTION_COLORS = [
  "var(--contribution-level-0)",
  "var(--contribution-level-1)",
  "var(--contribution-level-2)",
  "var(--contribution-level-3)",
  "var(--contribution-level-4)",
];
const CELL_SIZE = 10;
const CELL_GAP = 3;
const WEEKDAY_LABELS = [
  { label: "Mon", row: 1 },
  { label: "Wed", row: 3 },
  { label: "Fri", row: 5 },
];
const FALLBACK_YEARS = ["2026", "2025", "2024"];

const formatUtcDate = (date) => date.toISOString().slice(0, 10);

const getUtcDate = (year, month, day) =>
  new Date(Date.UTC(year, month, day, 12, 0, 0));

const addUtcDays = (date, days) => {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
};

const buildContributionCalendar = (year, contributions) => {
  const dailyMap = new Map(
    contributions.map((entry) => [entry.date, entry])
  );

  const yearStart = getUtcDate(year, 0, 1);
  const yearEnd = getUtcDate(year, 11, 31);
  const gridStart = addUtcDays(yearStart, -yearStart.getUTCDay());
  const gridEnd = addUtcDays(yearEnd, 6 - yearEnd.getUTCDay());

  const days = [];

  for (
    let current = new Date(gridStart);
    current <= gridEnd;
    current = addUtcDays(current, 1)
  ) {
    const isoDate = formatUtcDate(current);
    const contribution = dailyMap.get(isoDate);
    const isCurrentYear = current.getUTCFullYear() === year;

    days.push({
      date: isoDate,
      count: contribution?.count ?? 0,
      level: contribution?.level ?? 0,
      isCurrentYear,
    });
  }

  const weeks = [];

  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7));
  }

  const monthLabels = [];

  for (let month = 0; month < 12; month += 1) {
    const firstOfMonth = getUtcDate(year, month, 1);
    const weekIndex = Math.floor(
      (firstOfMonth.getTime() - gridStart.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );

    monthLabels.push({
      name: firstOfMonth.toLocaleString("en-US", {
        month: "short",
        timeZone: "UTC",
      }),
      weekIndex,
    });
  }

  return { weeks, monthLabels };
};

const CODE_SNIPPETS = {
  proxy: {
    filename: "chaos-proxy.ts",
    lang: "TypeScript",
    lines: [
      { num: 1, text: "// Raw Node.js stream piping with fault injection" },
      { num: 2, text: "export async function forwardWithChaos(req, res) {" },
      { num: 3, text: "  if (metrics.p99 > THRESHOLD) return bypass(req, res);" },
      { num: 4, text: "  await injectLatency(triangleWave(currentLoad));" },
      { num: 5, text: "  req.pipe(targetStream).pipe(res);" },
      { num: 6, text: "}" },
    ],
  },
  rag: {
    filename: "vector_pipeline.py",
    lang: "Python",
    lines: [
      { num: 1, text: "# Semantic document retrieval & synthesis" },
      { num: 2, text: "async def query_kb(prompt: str):" },
      { num: 3, text: "    vec = encoder.encode(prompt)" },
      { num: 4, text: "    context = await faiss.search(vec, k=5)" },
      { num: 5, text: "    return await groq.complete(prompt, context)" },
    ],
  },
};

const Hero = () => {
  const [heroView, setHeroView] = useState("github"); // "github" or "code"
  const [codeTab, setCodeTab] = useState("proxy");
  const [copied, setCopied] = useState(false);
  const calendarScrollRef = useRef(null);

  // GitHub contribution state
  const [contributionData, setContributionData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [loadingContributions, setLoadingContributions] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadContributions = async () => {
      try {
        setLoadingContributions(true);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
        );

        if (!response.ok) throw new Error("Unable to load");
        const data = await response.json();

        if (!isMounted) return;

        const availableYears = Object.keys(data.total ?? {})
          .sort((left, right) => Number(right) - Number(left))
          .slice(0, 3);

        setContributionData(data);

        if (availableYears.length > 0) {
          setSelectedYear((current) =>
            availableYears.includes(current) ? current : availableYears[0]
          );
        }
      } catch (error) {
        // Fallback gracefully
      } finally {
        if (isMounted) setLoadingContributions(false);
      }
    };

    loadContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  const fetchedYears = Object.keys(contributionData?.total ?? {})
    .sort((left, right) => Number(right) - Number(left))
    .slice(0, 3);

  const availableYears =
    fetchedYears.length > 0 ? fetchedYears : FALLBACK_YEARS;

  const selectedYearContributions =
    contributionData?.contributions?.filter((entry) => {
      const entryYear = Number(entry.date.slice(0, 4));
      return entryYear === Number(selectedYear);
    }) ?? [];

  const selectedYearTotal =
    contributionData?.total?.[selectedYear] ??
    selectedYearContributions.reduce(
      (sum, entry) => sum + (entry.count ?? 0),
      0
    );

  const { weeks, monthLabels } = buildContributionCalendar(
    Number(selectedYear),
    selectedYearContributions
  );

  const calendarWidth = weeks.length * (CELL_SIZE + CELL_GAP) - CELL_GAP;

  // Auto-scroll mobile calendar to the right edge (most recent weeks)
  useEffect(() => {
    if (calendarScrollRef.current) {
      calendarScrollRef.current.scrollLeft = calendarScrollRef.current.scrollWidth;
    }
  }, [selectedYear, weeks]);

  const copyEmail = () => {
    navigator.clipboard.writeText("vinaykumar.2k04@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

const ANIMATED_PHRASES = [
  "robust APIs.",
  "realtime systems.",
  "GenAI pipelines.",
  "fault-tolerant proxies.",
];

  const currentSnippet = CODE_SNIPPETS[codeTab];

  // Dynamic Typewriter animation for headline
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = ANIMATED_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % ANIMATED_PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const displayedText = ANIMATED_PHRASES[phraseIndex].slice(0, charIndex);

  return (
    <section id="home" className="relative pt-2 sm:pt-10 pb-12 sm:pb-20 w-full max-w-full min-w-0">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center w-full max-w-full min-w-0">
        {/* Left Column: Authoritative Engineering Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start w-full max-w-full min-w-0"
        >
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 shadow-2xs dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for SDE & Full Stack Roles</span>
          </div>

          {/* Main Headline with Animated Text */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15] min-h-[66px] xs:min-h-[76px] sm:min-h-[115px] lg:min-h-[140px]">
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400">
              {displayedText}
            </span>
            <span className="inline-block w-[3px] sm:w-[4px] h-[0.82em] ml-1 bg-indigo-600 dark:bg-indigo-400 animate-pulse align-baseline rounded-full" />
          </h1>

          {/* Subtitle / Bio */}
          <p className="mt-3.5 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
            I'm <strong className="font-extrabold text-slate-950 dark:text-white">Vinay Kumar</strong>, a full stack developer focused on backend scalability, fault-tolerant network proxies, and production-ready RAG workflows. Currently shipping production APIs and search systems at <strong className="font-extrabold text-slate-950 dark:text-white">Sahii.in</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>Explore Projects</span>
              <span className="text-xs">↓</span>
            </a>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
              <a
                href="/Vinay_Kumar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-300 bg-white px-3 sm:px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-2xs transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/20 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                <FiDownload className="text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm" />
                <span>Resume PDF</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-2xs transition hover:bg-slate-50 dark:border-white/20 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm" />
                    <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiMail className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Proof Links */}
          <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-slate-900 dark:text-slate-100">
            <a
              href="https://github.com/codes4vinay"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/15"
            >
              <FaGithub className="text-sm" />
              <span>@codes4vinay</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vinaykumar2004/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center h-8 w-8 rounded-lg border border-slate-300 bg-white text-slate-900 shadow-2xs transition hover:text-blue-600 hover:bg-slate-100 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/15"
            >
              <FaLinkedin className="text-sm" />
            </a>

            <a
              href="https://leetcode.com/u/vinayislive/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="flex items-center justify-center h-8 w-8 rounded-lg border border-slate-300 bg-white text-slate-900 shadow-2xs transition hover:text-amber-600 hover:bg-slate-100 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/15"
            >
              <SiLeetcode className="text-sm" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive GitHub Heatmap & System Spec Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 w-full max-w-full min-w-0"
        >
          <div className="glass-panel overflow-hidden rounded-2xl border border-slate-200/90 shadow-xl dark:border-white/10 dark:bg-[#11141e] w-full max-w-full min-w-0">
            {/* Card Header & View Switcher */}
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/70 px-3 sm:px-4 py-2.5 dark:border-white/5 dark:bg-slate-900/80">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setHeroView("github")}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    heroView === "github"
                      ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <FaGithub className="text-xs" />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={() => setHeroView("code")}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    heroView === "code"
                      ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <FiCode className="text-xs" />
                  <span>Spec</span>
                </button>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:underline dark:text-indigo-400 font-code"
              >
                <span>@{GITHUB_USERNAME}</span>
              </a>
            </div>

            {/* View 1: GitHub Contribution Heatmap */}
            {heroView === "github" ? (
              <div className="p-3.5 sm:p-5">
                {/* Year Total & Year Selector Pills */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white font-code">
                      {selectedYearTotal}{" "}
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        commits in {selectedYear}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {availableYears.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setSelectedYear(yr)}
                        className={`rounded-lg px-2 py-0.5 text-xs font-bold font-code transition ${
                          selectedYear === yr
                            ? "bg-indigo-600 text-white shadow-xs"
                            : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:text-white"
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contribution Calendar Squares Grid */}
                <div
                  ref={calendarScrollRef}
                  className="w-full max-w-full overflow-x-auto touch-scroll no-scrollbar rounded-xl border border-slate-200/60 bg-slate-50/70 p-3 dark:border-white/5 dark:bg-[#0c0e16]"
                >
                  <div style={{ width: `${calendarWidth + 36}px`, minWidth: `${calendarWidth + 36}px` }}>
                    {/* Month labels */}
                    <div className="mb-2 grid grid-cols-[28px_1fr] gap-1">
                      <div />
                      <div
                        className="relative h-4 text-[10px] font-bold text-slate-700 dark:text-slate-300 font-code select-none"
                        style={{ width: `${calendarWidth}px` }}
                      >
                        {monthLabels.map((month) => (
                          <span
                            key={`${month.name}-${month.weekIndex}`}
                            className="absolute top-0"
                            style={{
                              left: `${month.weekIndex * (CELL_SIZE + CELL_GAP)}px`,
                            }}
                          >
                            {month.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Weekday labels + Week columns */}
                    <div className="grid grid-cols-[28px_1fr] gap-1">
                      <div
                        className="grid text-[9px] font-bold text-slate-700 dark:text-slate-300 font-code select-none"
                        style={{
                          gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                          rowGap: `${CELL_GAP}px`,
                        }}
                      >
                        {WEEKDAY_LABELS.map((lbl) => (
                          <span
                            key={lbl.label}
                            className="flex items-center"
                            style={{ gridRow: lbl.row + 1 }}
                          >
                            {lbl.label}
                          </span>
                        ))}
                      </div>

                      <div className="flex" style={{ columnGap: `${CELL_GAP}px` }}>
                        {weeks.map((week, wIdx) => (
                          <div
                            key={wIdx}
                            className="grid"
                            style={{
                              gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                              rowGap: `${CELL_GAP}px`,
                            }}
                          >
                            {week.map((day) => {
                              const bg = day.isCurrentYear
                                ? CONTRIBUTION_COLORS[day.level] ?? CONTRIBUTION_COLORS[0]
                                : "var(--contribution-empty)";
                              return (
                                <span
                                  key={day.date}
                                  title={`${day.count} contributions on ${day.date}`}
                                  className="rounded-[2px] transition-transform hover:scale-125"
                                  style={{
                                    backgroundColor: bg,
                                    width: `${CELL_SIZE}px`,
                                    height: `${CELL_SIZE}px`,
                                  }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Touch Navigation Hint */}
                <div className="sm:hidden mt-2 flex items-center justify-between text-[11px] text-slate-700 dark:text-slate-300 font-bold font-code">
                  <span>← Swipe for full history</span>
                  <span>Latest activity →</span>
                </div>

                {/* Footer Legend */}
                <div className="mt-2.5 flex items-center justify-between text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 font-semibold font-code">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-bold"
                  >
                    View All Repositories →
                  </a>

                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-700 dark:text-slate-300">Less</span>
                    <div className="flex items-center gap-1">
                      {CONTRIBUTION_COLORS.map((col, idx) => (
                        <span
                          key={idx}
                          className="h-2.5 w-2.5 rounded-[1px] border border-black/10 dark:border-white/10"
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">More</span>
                  </div>
                </div>
              </div>
            ) : (
              /* View 2: Code Spec Terminal */
              <div className="p-3.5 sm:p-4 font-code text-xs leading-relaxed overflow-x-auto w-full max-w-full min-w-0">
                <div className="flex items-center justify-between pb-2 text-xs text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-bold">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setCodeTab("proxy")}
                      className={`px-2.5 py-1 rounded text-xs transition ${
                        codeTab === "proxy" ? "bg-indigo-600 text-white font-bold" : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      chaos-proxy.ts
                    </button>
                    <button
                      onClick={() => setCodeTab("rag")}
                      className={`px-2.5 py-1 rounded text-xs transition ${
                        codeTab === "rag" ? "bg-indigo-600 text-white font-bold" : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      vector_pipeline.py
                    </button>
                  </div>
                  <span className="text-[11px] uppercase text-slate-700 dark:text-slate-300 font-bold">{currentSnippet.lang}</span>
                </div>

                <div className="pt-2.5 space-y-1 text-[11px] sm:text-xs font-semibold">
                  {currentSnippet.lines.map((line) => (
                    <div key={line.num} className="flex gap-2.5">
                      <span className="w-4 shrink-0 select-none text-right text-slate-600 dark:text-slate-400 font-bold">
                        {line.num}
                      </span>
                      <span
                        className={`${
                          line.text.startsWith("//") || line.text.startsWith("#")
                            ? "text-slate-600 dark:text-slate-400 italic"
                            : line.text.includes("export") || line.text.includes("async") || line.text.includes("def")
                            ? "text-indigo-700 dark:text-indigo-300 font-bold"
                            : line.text.includes("if") || line.text.includes("return")
                            ? "text-amber-700 dark:text-amber-300 font-bold"
                            : "text-slate-950 dark:text-slate-100"
                        }`}
                      >
                        {line.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
