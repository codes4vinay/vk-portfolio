import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaFileDownload, FaExternalLinkAlt, FaRocket, FaGithub, FaTerminal } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

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

const Hero = () => {
  const [contributionData, setContributionData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [loadingContributions, setLoadingContributions] = useState(true);
  const [contributionError, setContributionError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadContributions = async () => {
      try {
        setLoadingContributions(true);
        setContributionError("");

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Unable to load contribution data.");
        }

        const data = await response.json();

        if (!isMounted) {
          return;
        }

        const availableYears = Object.keys(data.total ?? {})
          .sort((left, right) => Number(right) - Number(left))
          .slice(0, 3);

        setContributionData(data);

        if (availableYears.length > 0) {
          setSelectedYear((currentYear) =>
            availableYears.includes(currentYear)
              ? currentYear
              : availableYears[0]
          );
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setContributionError("Contribution calendar is unavailable right now.");
      } finally {
        if (isMounted) {
          setLoadingContributions(false);
        }
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
    contributionData?.contributions?.filter(
      (entry) => new Date(entry.date).getUTCFullYear() === Number(selectedYear)
    ) ?? [];

  const { weeks, monthLabels } = buildContributionCalendar(
    Number(selectedYear),
    selectedYearContributions
  );

  const selectedYearTotal =
    contributionData?.total?.[selectedYear] ??
    selectedYearContributions.reduce((sum, entry) => sum + entry.count, 0);

  const calendarWidth = weeks.length * CELL_SIZE + (weeks.length - 1) * CELL_GAP;

  return (
    <section id="home" className="relative mt-8 scroll-mt-28 pb-16 lg:pb-28">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col items-start text-left px-2 sm:px-4"
        >
          {/* Status Badge */}
          <motion.div variants={childVariants} className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <HiSparkles className="text-amber-400" />
              <span>Full Stack & GenAI Engineer</span>
            </div>
          </motion.div>

          {/* NAME */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-violet-700 to-indigo-600 bg-clip-text text-transparent dark:from-white dark:via-violet-200 dark:to-cyan-300">
              Vinay Kumar
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.div
            variants={childVariants}
            className="mt-3 flex flex-wrap items-center justify-start gap-2 text-sm sm:text-lg font-semibold text-slate-700 dark:text-slate-300"
          >
            <span className="rounded-lg bg-violet-500/10 px-2.5 py-1 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
              Full Stack
            </span>
            <span className="text-slate-400">•</span>
            <span className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              DevOps
            </span>
            <span className="text-slate-400">•</span>
            <span className="rounded-lg bg-fuchsia-500/10 px-2.5 py-1 text-fuchsia-600 dark:bg-fuchsia-400/10 dark:text-fuchsia-300">
              GenAI / RAG
            </span>
          </motion.div>


          {/* DESCRIPTION */}
          <motion.p
            variants={childVariants}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Download Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              download
              className="
                group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto
                rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 px-7 py-3.5
                text-sm font-bold text-white shadow-xl shadow-violet-600/30
                transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-600/50
              "
            >
              <FaFileDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>

            {/* Preview Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2 w-full sm:w-auto
                rounded-2xl border border-slate-900/15 bg-white/70 px-7 py-3.5
                text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300
                hover:border-violet-500/50 hover:bg-white hover:shadow-lg dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-violet-400/50 dark:hover:bg-slate-900
              "
            >
              <FaExternalLinkAlt className="text-xs text-violet-500" />
              <span>Preview Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT - GITHUB CONTRIBUTIONS DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center px-2 sm:px-4"
        >
          <div className="relative w-full max-w-[780px]">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-600/30 via-cyan-500/20 to-fuchsia-600/30 blur-2xl dark:opacity-70 opacity-30" />

            {/* GITHUB TERMINAL CARD */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 sm:p-6">
              {/* Terminal Title Bar */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-900/10 pb-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 font-code">
                    <FaTerminal className="text-violet-500" />
                    github-contributions.sh
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaGithub className="text-lg text-slate-800 dark:text-slate-200" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    @{GITHUB_USERNAME}
                  </span>
                </div>
              </div>

              {/* Summary Header */}
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-code">
                    {selectedYearTotal}{" "}
                    <span className="text-violet-600 dark:text-cyan-400 text-sm font-normal">
                      contributions in {selectedYear}
                    </span>
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Verified GitHub commits & activity
                  </p>
                </div>

                {/* Year Selectors */}
                <div className="flex items-center gap-1.5">
                  {availableYears.map((year) => {
                    const isActive = selectedYear === year;

                    return (
                      <button
                        key={year}
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          setSelectedYear(year);
                        }}
                        className={`rounded-xl border px-3 py-1 text-xs font-bold font-code transition-all ${
                          isActive
                            ? "border-violet-500 bg-violet-600 text-white shadow-md shadow-violet-600/30 dark:border-cyan-400 dark:bg-cyan-500/20 dark:text-cyan-300"
                            : "border-slate-300 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                        }`}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid Box */}
              <div className="rounded-2xl border border-slate-900/10 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-900/80">
                <div className="overflow-x-auto">
                  <div className="min-w-[620px]">
                    {/* Months row */}
                    <div className="mb-2.5 grid grid-cols-[36px_1fr] gap-2">
                      <div />
                      <div
                        className="relative h-4 text-[11px] font-medium text-slate-500 dark:text-slate-400 font-code"
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

                    {/* Days & Tiles */}
                    <div className="grid grid-cols-[36px_1fr] gap-2">
                      <div
                        className="grid text-[10px] font-semibold text-slate-500 dark:text-slate-400 font-code"
                        style={{
                          gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                          rowGap: `${CELL_GAP}px`,
                        }}
                      >
                        {Array.from({ length: 7 }).map((_, rowIndex) => {
                          const label = WEEKDAY_LABELS.find(
                            (day) => day.row === rowIndex
                          );

                          return (
                            <span
                              key={`weekday-${rowIndex}`}
                              className="flex items-center"
                              style={{ height: `${CELL_SIZE}px` }}
                            >
                              {label?.label ?? ""}
                            </span>
                          );
                        })}
                      </div>

                      <div
                        className="flex"
                        style={{ columnGap: `${CELL_GAP}px` }}
                      >
                        {weeks.map((week, weekIndex) => (
                          <div
                            key={`week-${weekIndex}`}
                            className="grid"
                            style={{
                              gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                              rowGap: `${CELL_GAP}px`,
                            }}
                          >
                            {week.map((day) => {
                              const backgroundColor = day.isCurrentYear
                                ? CONTRIBUTION_COLORS[day.level] ??
                                  CONTRIBUTION_COLORS[0]
                                : "var(--contribution-empty)";

                              return (
                                <span
                                  key={day.date}
                                  title={`${day.count} contributions on ${day.date}`}
                                  className="rounded-[3px] transition-transform hover:scale-125"
                                  style={{
                                    backgroundColor,
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

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-code">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-violet-600 dark:hover:text-cyan-400 transition"
                  >
                    <span>view profile</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">Less</span>
                    <div className="flex items-center gap-1">
                      {CONTRIBUTION_COLORS.map((color) => (
                        <span
                          key={color}
                          className="h-3 w-3 rounded-xs"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px]">More</span>
                  </div>
                </div>

                {loadingContributions && (
                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-code animate-pulse">
                    &gt; Fetching GitHub activity telemetry...
                  </p>
                )}

                {contributionError && (
                  <p className="mt-3 text-xs text-rose-500 font-code">
                    ! {contributionError}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

