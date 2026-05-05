import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

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
        message: "Message sent successfully. I will get back to you soon.",
      });
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 pb-24 pt-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something"
          subtitle="Have a project in mind or want to collaborate? Send a message and I’ll reply soon."
        />

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="group relative mx-auto max-w-3xl space-y-5 overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-2xl shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_55%)]" />
          </div>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="relative w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 outline-none transition focus:border-black/20 focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:bg-black/20 dark:text-stone-100 dark:focus:border-white/20 dark:focus:ring-white/15"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="relative w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 outline-none transition focus:border-black/20 focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:bg-black/20 dark:text-stone-100 dark:focus:border-white/20 dark:focus:ring-white/15"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="relative w-full resize-none rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 outline-none transition focus:border-black/20 focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:bg-black/20 dark:text-stone-100 dark:focus:border-white/20 dark:focus:ring-white/15"
          />

          <motion.button
            type="submit"
            whileHover={isSubmitting ? undefined : { scale: 1.01 }}
            whileTap={isSubmitting ? undefined : { scale: 0.99 }}
            disabled={isSubmitting}
            className="relative inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {status.message && (
            <p
              className={`relative text-sm ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
