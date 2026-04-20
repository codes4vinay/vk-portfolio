import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const GITHUB_USERNAME = "codes4vinay";
const CONTRIBUTION_COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
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
    <section id="about" className="mt-12 scroll-mt-28 pb-12 lg:pb-32">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4"
        >
          {/* NAME */}
          <motion.h1
            variants={childVariants}
            className="
              bg-gradient-to-r from-stone-100 via-stone-300 to-stone-500
              bg-clip-text text-transparent
              text-4xl sm:text-5xl lg:text-7xl
              font-bold tracking-tight
            "
          >
            Vinay Kumar
          </motion.h1>

          {/* ROLE */}
          <motion.span
            variants={childVariants}
            className="
  mt-3 inline-block
  bg-gradient-to-r from-stone-400 via-stone-400 to-stone-400
  bg-clip-text text-transparent
  text-lg sm:text-xl lg:text-2xl
  tracking-wide
"
          >
            MERN Stack Developer | GenAI
          </motion.span>

          {/* ACCENT LINE */}
          <motion.div
            variants={childVariants}
            className="
              mt-4 h-px w-24
              bg-gradient-to-r from-stone-300 to-transparent
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            variants={childVariants}
            className="
              mt-6 max-w-xl
              text-base sm:text-lg lg:text-xl
              leading-relaxed
              text-stone-300
            "
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* Preview Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
      rounded-full border border-stone-300
      px-6 py-3 text-sm font-medium
      text-stone-200
      hover:bg-stone-800 transition
    "
            >
              Preview Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Vinay_Kumar_resume.pdf"
              download
              className="
      rounded-full bg-stone-100
      px-6 py-3 text-sm font-medium
      text-stone-900
      shadow hover:bg-stone-200 transition
    "
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center px-4"
        >
          <div className="relative w-full">
            {/* BACKDROP */}
            <div
              className="
                absolute -inset-4 rounded-xl
                bg-gradient-to-r from-stone-800/40 to-stone-700/20
                blur-xl
              "
            />

            {/* GITHUB CONTRIBUTIONS GRAPH */}
            <div className="relative mx-auto w-full max-w-[780px] overflow-hidden rounded-3xl border border-[#30363d] bg-[#0d1117] p-5 shadow-2xl shadow-black/40 sm:p-6">
              <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <h2 className="text-lg font-medium text-[#f0f6fc] sm:text-xl">
                    {selectedYearTotal} contributions in {selectedYear}
                  </h2>
                  <p className="mt-1 text-sm text-[#8b949e]">
                    GitHub contributions for @{GITHUB_USERNAME}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {availableYears.map((year) => {
                    const isActive = selectedYear === year;

                    return (
                      <button
                        key={year}
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          setSelectedYear(year);
                        }}
                        className={`rounded-md border px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                          isActive
                            ? "border-[#2ea043] bg-[#1f6feb]/10 text-[#f0f6fc]"
                            : "border-[#30363d] bg-[#161b22] text-[#8b949e] hover:border-[#3d444d] hover:text-[#c9d1d9]"
                        }`}
                        aria-pressed={isActive}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-[#30363d] bg-[#0d1117] p-4 sm:p-6">
                <div className="mb-3 flex items-center justify-between text-xs text-[#8b949e]">
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#c9d1d9]"
                  >
                    View profile
                  </a>
                  <span>Contribution settings</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#21262d] bg-[#0b0f14] p-4 sm:p-5">
                  <div className="min-w-[680px] sm:min-w-[720px]">
                    <div className="mb-3 grid grid-cols-[40px_1fr] gap-3">
                      <div />
                      <div
                        className="relative h-5 text-xs text-[#8b949e]"
                        style={{
                          width: `${calendarWidth}px`,
                        }}
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

                    <div className="grid grid-cols-[40px_1fr] gap-3">
                      <div
                        className="grid pt-[1px] text-[10px] text-[#8b949e]"
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
                                : "#0d1117";

                              return (
                                <span
                                  key={day.date}
                                  title={`${day.count} contributions on ${day.date}`}
                                  className="rounded-[2px] border border-black/10"
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

                <div className="mt-5 flex flex-col gap-3 text-xs text-[#8b949e] sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#c9d1d9]"
                  >
                  </a>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span>Less</span>
                    <div className="flex items-center gap-1">
                      {CONTRIBUTION_COLORS.map((color) => (
                        <span
                          key={color}
                          className="h-3.5 w-3.5 rounded-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span>More</span>
                  </div>
                </div>

                {loadingContributions && (
                  <p className="mt-4 text-xs text-[#8b949e]">
                    Loading contribution activity...
                  </p>
                )}

                {contributionError && (
                  <p className="mt-4 text-xs text-rose-400">
                    {contributionError}
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
