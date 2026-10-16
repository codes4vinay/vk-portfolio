import React from "react";

const Background = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      {/* Deep dark base container */}
      <div className="absolute inset-0 bg-[#070b14]" style={{ height: "100vh", width: "100%" }} />

      {/* Luminous radial mesh matching target site */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <div className="min-h-screen w-full relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #6366f1 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
