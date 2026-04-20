import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-stone-400">
        <p>Built and designed by Vinay Kumar.</p>
        <p>Copyright {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
