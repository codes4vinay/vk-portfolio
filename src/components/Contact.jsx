import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  FiMail,
  FiSend,
  FiCheck,
  FiCopy,
  FiMapPin,
  FiClock,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vinaykumar.2k04@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_w60482p",
        "template_atoqeh8",
        form.current,
        "UzB-tGBQoRPq3HO04"
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully! I will respond within 24 hours.",
      });
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Could not send automated message. Please email me directly at vinaykumar.2k04@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 pb-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Build Something Great"
          subtitle="Interested in hiring, collaborating on distributed systems, or discussing an opportunity? Drop a message."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Channels & Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass-panel flex flex-col justify-between rounded-2xl p-4.5 sm:p-8 lg:col-span-5"
          >
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Direct Contact
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                I am actively seeking SDE and Full Stack roles. Feel free to reach out directly via email or social channels.
              </p>

              {/* Email One-Click Copy Card */}
              <div className="mt-6 rounded-xl border border-slate-300 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="text-xs font-extrabold text-slate-950 dark:text-white">Email Address</div>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <span className="truncate text-xs sm:text-sm font-bold text-slate-950 dark:text-white font-code">
                    vinaykumar.2k04@gmail.com
                  </span>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-900 shadow-2xs hover:bg-slate-50 dark:border-white/15 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="text-emerald-600 dark:text-emerald-400 text-xs" />
                        <span className="text-[11px] text-emerald-700 dark:text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="text-xs text-slate-700 dark:text-slate-300" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Key Details */}
              <div className="mt-6 space-y-3 text-xs text-slate-900 dark:text-slate-100 font-semibold">
                <div className="flex items-center gap-2.5">
                  <FiMapPin className="text-indigo-600 dark:text-indigo-400 text-sm" />
                  <span>India • Open to Relocation & Remote Roles</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiClock className="text-emerald-600 dark:text-emerald-400 text-sm" />
                  <span>Fast Response Time (&lt; 24 Hours)</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-3">
              <a
                href="https://github.com/codes4vinay"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 hover:text-indigo-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vinaykumar2004/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/vinayislive/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 hover:text-amber-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-panel rounded-2xl p-4.5 sm:p-8 lg:col-span-7"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-500 font-medium outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-500 font-medium outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Opportunity / Project Collaboration"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-500 font-medium outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi Vinay, I came across your portfolio and would like to discuss..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-500 font-medium outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-indigo-400"
                />
              </div>

              {/* Status Notice */}
              {status.message && (
                <div
                  className={`flex items-center gap-2 rounded-xl p-3 text-xs font-medium ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <FiCheck className="shrink-0 text-emerald-500" />
                  ) : (
                    <FiAlertCircle className="shrink-0 text-rose-500" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800 disabled:opacity-50 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <FiSend className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
