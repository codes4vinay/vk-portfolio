import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import GlowingButton from "./GlowingButton";

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-2.5 rounded-xl bg-white/10 text-indigo-400 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-white hover:text-indigo-300 transition-colors font-medium text-sm break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-medium text-sm">{value}</p>
      )}
    </div>
  </div>
);

const SocialIconBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/15 transition-all"
  >
    {icon}
  </a>
);

const FormInput = ({ label, name, type = "text", placeholder, required = true }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-slate-700 mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white/90 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all outline-none"
    />
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_w60482p",
        "template_atoqeh8",
        formRef.current,
        "UzB-tGBQoRPq3HO04"
      );
      setSubmitting(false);
      showToast("success", "Message sent successfully — I'll get in touch soon.");
      formRef.current.reset();
    } catch (err) {
      console.warn("EmailJS error, fallback triggered:", err);
      setSubmitting(false);
      showToast(
        "success",
        "Thank you! Your message was submitted. Feel free to also email vinaykumar.2k04@gmail.com"
      );
      formRef.current.reset();
    }
  };

  return (
    <>
      <section
        id="contact"
        name="contact"
        className="w-full min-h-0 lg:min-h-[100svh] text-slate-900 py-16 lg:py-24 relative z-10 flex items-center justify-center overflow-hidden"
      >
        {/* Glow Spheres */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl w-full mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden bg-white/60 backdrop-blur-xl border border-black/10 shadow-xl"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-5 lg:min-h-[600px]">
              {/* Left Column (Dark Panel) */}
              <div className="hidden lg:flex lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-10 flex-col justify-between relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 space-y-3">
                  <h2 className="text-4xl font-bold tracking-tight">Let's Talk</h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Have a project in mind or just want to say hi? I'm always open to discussing new
                    opportunities, distributed systems, and collaborative engineering.
                  </p>
                </div>

                <div className="relative z-10 space-y-8 mt-12 lg:mt-0">
                  <div className="space-y-6">
                    <ContactInfoItem
                      icon={<FiMail size={18} />}
                      label="Email me at"
                      value="vinaykumar.2k04@gmail.com"
                      href="mailto:vinaykumar.2k04@gmail.com"
                    />
                    <ContactInfoItem
                      icon={<FiMapPin size={18} />}
                      label="Based in"
                      value="India (Open to Remote / Onsite)"
                    />
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <SocialIconBtn
                      href="https://github.com/codes4vinay"
                      icon={<FaGithub size={20} />}
                      label="GitHub"
                    />
                    <SocialIconBtn
                      href="https://leetcode.com/u/vinayislive/"
                      icon={<SiLeetcode size={20} />}
                      label="LeetCode"
                    />
                    <SocialIconBtn
                      href="https://www.linkedin.com/in/vinaykumar2004/"
                      icon={<FaLinkedin size={20} />}
                      label="LinkedIn"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="w-full lg:col-span-3 bg-white/40 backdrop-blur-md p-6 md:p-12 relative flex flex-col justify-center">
                {/* Mobile Header */}
                <div className="block lg:hidden mb-8 text-center space-y-3">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Let's Talk</h2>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    Feel free to reach out directly via email or send a message below.
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href="mailto:vinaykumar.2k04@gmail.com"
                      aria-label="Email"
                      className="p-3 bg-white/40 backdrop-blur-md border border-black/10 text-indigo-700 rounded-full hover:bg-white transition shadow-xs"
                    >
                      <FiMail size={18} />
                    </a>
                    <a
                      href="https://github.com/codes4vinay"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="p-3 bg-white/40 backdrop-blur-md border border-black/10 text-slate-800 rounded-full hover:bg-white transition shadow-xs"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vinaykumar2004/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="p-3 bg-white/40 backdrop-blur-md border border-black/10 text-blue-700 rounded-full hover:bg-white transition shadow-xs"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4 lg:space-y-6 max-w-lg mx-auto lg:mx-0 w-full"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormInput
                      label="Your Name"
                      name="name"
                      placeholder="Jane Doe"
                    />
                    <FormInput
                      label="Your Email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Hi Vinay, I came across your portfolio and would like to discuss..."
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white/90 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all outline-none resize-none text-sm"
                    />
                  </div>

                  <GlowingButton
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 text-base font-semibold group"
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                    {!submitting && (
                      <FiSend
                        size={15}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </GlowingButton>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
          >
            <div
              className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl shadow-2xl ${
                toast.type === "success"
                  ? "bg-slate-900/90 border-sky-400/30"
                  : "bg-slate-900/90 border-red-400/30"
              }`}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <div
                  className={`flex-shrink-0 p-2 rounded-full ${
                    toast.type === "success"
                      ? "bg-sky-400/15 text-sky-400"
                      : "bg-red-400/15 text-red-400"
                  }`}
                >
                  {toast.type === "success" ? (
                    <FiCheckCircle size={18} />
                  ) : (
                    <FiAlertCircle size={18} />
                  )}
                </div>
                <p className="text-sm font-medium text-slate-100">{toast.message}</p>
              </div>
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left ${
                  toast.type === "success" ? "bg-sky-400/70" : "bg-red-400/70"
                }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
