import React from "react";

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25" />

      {/* Subtle Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[800px] max-w-full rounded-full bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent blur-3xl dark:from-indigo-600/10 dark:via-indigo-500/5" />
    </div>
  );
};

export default Background;
