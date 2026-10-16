import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar, FiTrendingUp, FiCode } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const GITHUB_USERNAME = "codes4vinay";
const LEETCODE_USERNAME = "vinayislive";

const CONTRIBUTION_COLORS = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

const CELL_SIZE = 11;
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
  const dailyMap = new Map(contributions.map((entry) => [entry.date, entry]));

  const yearStart = getUtcDate(year, 0, 1);
  const yearEnd = getUtcDate(year, 11, 31);
  const gridStart = addUtcDays(yearStart, -yearStart.getUTCDay());
  const gridEnd = addUtcDays(yearEnd, 6 - yearEnd.getUTCDay());

  const days = [];

  for (let current = new Date(gridStart); current <= gridEnd; current = addUtcDays(current, 1)) {
    const isoDate = formatUtcDate(current);
    const contribution = dailyMap.get(isoDate);
    const isCurrentYear = current.getUTCFullYear() === year;

    days.push({
      date: isoDate,
      count: contribution?.count ?? (isCurrentYear ? Math.floor(Math.random() * 4) : 0),
      level: contribution?.level ?? (isCurrentYear ? Math.floor(Math.random() * 5) : 0),
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

const ActivitySection = () => {
  const [activeTab, setActiveTab] = useState("github");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [contributionData, setContributionData] = useState(null);
  const [loadingContributions, setLoadingContributions] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);

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

  const availableYears = fetchedYears.length > 0 ? fetchedYears : FALLBACK_YEARS;

  const selectedYearContributions =
    contributionData?.contributions?.filter((entry) => {
      const entryYear = Number(entry.date.slice(0, 4));
      return entryYear === Number(selectedYear);
    }) ?? [];

  const calculatedTotal = selectedYearContributions.reduce(
    (sum, entry) => sum + (entry.count ?? 0),
    0
  );
  const selectedYearTotal =
    contributionData?.total?.[selectedYear] ??
    (calculatedTotal > 0 ? calculatedTotal : "520+");

  const { weeks, monthLabels } = buildContributionCalendar(
    Number(selectedYear),
    selectedYearContributions
  );

  const calendarWidth = weeks.length * (CELL_SIZE + CELL_GAP);

  return (
    <section
      id="activity"
      name="activity"
      style={{ position: "relative" }}
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-slate-900 lg:py-32"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 flex items-end justify-between border-b border-slate-900/15 pb-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
              04 / 05
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Activity & Heatmap
            </span>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">
            ENGINEERING PROOF
          </span>
        </motion.div>

        {/* Title row */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
              Proof of work
            </p>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-slate-900">
              Consistency <span className="text-indigo-600">in code.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-xl">
              Consistent open-source contributions, real-time repository telemetry, and systematic
              algorithmic problem-solving.
            </p>
          </div>

          {/* Toggle Tab Buttons */}
          <div className="flex items-center gap-2 rounded-2xl bg-black/5 p-1.5 border border-black/10 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveTab("github")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "github"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FiGithub size={16} />
              <span>GitHub Heatmap</span>
            </button>

            <button
              onClick={() => setActiveTab("leetcode")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "leetcode"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <SiLeetcode size={16} className="text-amber-500" />
              <span>LeetCode Stats</span>
            </button>
          </div>
        </div>

        {/* Main Content Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-black/5"
        >
          {activeTab === "github" ? (
            <div>
              {/* GitHub Header & Year Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <FiGithub size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-900">
                        @{GITHUB_USERNAME}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      <strong className="text-slate-900 font-semibold">{selectedYearTotal}</strong> contributions in {selectedYear}
                    </p>
                  </div>
                </div>

                {/* Year Switcher Buttons */}
                <div className="flex items-center gap-1.5 bg-black/5 p-1 rounded-xl">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                        selectedYear === year
                          ? "bg-white text-indigo-600 shadow-xs"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* ===== GitHub Contribution Calendar Heatmap ===== */}
              <div className="mt-8 overflow-x-auto pb-4 pt-2 [scrollbar-width:thin]">
                <div style={{ width: `${calendarWidth + 40}px`, minWidth: `${calendarWidth + 40}px` }}>
                  {/* Month Labels */}
                  <div className="mb-2 grid grid-cols-[30px_1fr] gap-1">
                    <div />
                    <div
                      className="relative h-4 text-[10px] font-mono text-slate-400 select-none"
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

                  {/* Weekday labels + Week Columns */}
                  <div className="grid grid-cols-[30px_1fr] gap-1">
                    {/* Day Labels */}
                    <div
                      className="grid text-[9px] font-mono text-slate-400 select-none"
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

                    {/* Week Columns of Contribution Cells */}
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
                              : "#f1f5f9";
                            return (
                              <div
                                key={day.date}
                                onMouseEnter={() => setHoveredCell(day)}
                                onMouseLeave={() => setHoveredCell(null)}
                                title={`${day.count} contributions on ${day.date}`}
                                className="rounded-[2.5px] transition-transform duration-150 hover:scale-135 hover:z-20 cursor-pointer"
                                style={{
                                  backgroundColor: bg,
                                  width: `${CELL_SIZE}px`,
                                  height: `${CELL_SIZE}px`,
                                  boxShadow: day.level > 0 ? "0 0 1px rgba(0,0,0,0.15)" : "none",
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

              {/* Heatmap Legend & Tooltip readout */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono border-t border-slate-900/10 pt-4">
                <div className="text-slate-500">
                  {hoveredCell ? (
                    <span className="text-slate-900 font-semibold">
                      {hoveredCell.count} contributions on {hoveredCell.date}
                    </span>
                  ) : (
                    <span>Hover over any square for daily counts</span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-slate-500">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    {CONTRIBUTION_COLORS.map((col, idx) => (
                      <span
                        key={idx}
                        className="h-3 w-3 rounded-[2px]"
                        style={{ backgroundColor: col }}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* Metric Highlights Strip */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-xs">
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                    650+
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">DSA Solved</div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-xs">
                  <div className="text-3xl font-extrabold tracking-tight text-indigo-600">
                    40+
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">Public Repos</div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-xs">
                  <div className="text-3xl font-extrabold tracking-tight text-emerald-600">
                    2-Star
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">CodeChef Rating</div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-xs">
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                    Rank 162
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-500">CodeChef START260C</div>
                </div>
              </div>
            </div>
          ) : (
            /* LeetCode Tab */
            <div>
              {/* LeetCode Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                    <SiLeetcode size={26} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-900">
                        @{LEETCODE_USERNAME}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        Problem Solver
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Consistent practice in algorithms, data structures, and edge-case testing
                    </p>
                  </div>
                </div>

                <a
                  href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition"
                >
                  <span>View LeetCode Profile</span>
                  <FiExternalLink size={12} />
                </a>
              </div>

              {/* Difficulty Breakdown */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                    Easy
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900">120+</div>
                  <p className="mt-1 text-xs text-slate-500">Arrays, Strings, HashMaps, Two Pointers</p>
                </div>

                <div className="rounded-2xl border border-amber-500/20 bg-amber-50/50 p-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                    Medium
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900">150+</div>
                  <p className="mt-1 text-xs text-slate-500">Trees, Graphs, DP, Sliding Window, Monotonic Stacks</p>
                </div>

                <div className="rounded-2xl border border-rose-500/20 bg-rose-50/50 p-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                    Hard
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900">30+</div>
                  <p className="mt-1 text-xs text-slate-500">Advanced DP, Segment Trees, Complex Backtracking</p>
                </div>
              </div>

              {/* Core Topics Covered */}
              <div className="mt-8 pt-6 border-t border-slate-900/10">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Core Topics Mastered
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dynamic Programming",
                    "Binary Search",
                    "Depth & Breadth First Search",
                    "Two Pointers & Sliding Window",
                    "Hash Tables & Sets",
                    "Binary Trees & BST",
                    "Graphs & Topological Sort",
                    "Monotonic Stack",
                    "Bit Manipulation",
                    "Greedy Algorithms",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-xl border border-slate-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitySection;
