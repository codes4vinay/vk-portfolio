import React, { useState, useEffect } from "react";

const Footer = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "coded by Vinay Kumar!";

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < fullText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 120);
    } else if (!isDeleting && text.length === fullText.length) {
      // Pause at full text, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text.length > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, 80);
    } else if (isDeleting && text.length === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return (
    <div className="w-full flex justify-center items-center py-6 bg-black">
      <p className="text-green-500 font-mono text-lg border-r-2 border-green-500 animate-pulse pr-1">
        {text}
      </p>
    </div>
  );
};

export default Footer;
