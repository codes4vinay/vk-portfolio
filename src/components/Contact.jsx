import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        message: "Message sent successfully! I will respond within 24 hours.",
      });
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Unable to send message automatically. Please email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-28 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Build Something Exceptional"
          subtitle="Have an opportunity, project collaboration, or question? Send a message and let's connect."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Quick Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-surface lg:col-span-5 flex flex-col justify-between rounded-3xl p-7 border border-slate-900/10 dark:border-white/10"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Feel free to reach out via form or through social channels. I'm open to full-time roles & high-impact projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 rounded-2xl border border-slate-900/5 bg-slate-900/5 p-3.5 dark:border-white/10 dark:bg-slate-900/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-cyan-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-code">EMAIL</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-code">
                      vinaykumar.2k04@gmail.com
                    </p>

                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-slate-900/5 bg-slate-900/5 p-3.5 dark:border-white/10 dark:bg-slate-900/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-code">LOCATION</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-code">
                      India • Open for Remote Work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900/10 dark:border-white/10">
              <p className="text-[11px] font-bold font-code text-slate-500 dark:text-slate-400">
                ⚡ RESPONSE TIME: WITHIN 24 HOURS
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-surface lg:col-span-7 space-y-4 rounded-3xl p-7 border border-slate-900/10 dark:border-white/10"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 font-code mb-1.5">
                YOUR NAME
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-xs font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-400 font-code"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 font-code mb-1.5">
                YOUR EMAIL
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-xs font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-400 font-code"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 font-code mb-1.5">
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project or inquiry..."
                required
                className="w-full resize-none rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-xs font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:focus:border-cyan-400 font-code"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={isSubmitting ? undefined : { scale: 1.01 }}
              whileTap={isSubmitting ? undefined : { scale: 0.99 }}
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 px-6 py-3.5 text-xs font-bold font-code text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-600/50 disabled:opacity-70 cursor-pointer"
            >
              <FaPaperPlane className="text-xs" />
              <span>{isSubmitting ? "Transmitting message..." : "Send Message"}</span>
            </motion.button>

            {status.message && (
              <div
                className={`flex items-center gap-2 rounded-2xl p-3.5 text-xs font-bold font-code ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:text-emerald-400"
                    : "bg-rose-500/10 text-rose-600 border border-rose-500/20 dark:text-rose-400"
                }`}
              >
                {status.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
                <span>{status.message}</span>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

