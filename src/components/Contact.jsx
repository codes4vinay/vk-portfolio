import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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
    <section id="contact" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-10 text-4xl font-bold text-white">Contact Me</h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <motion.button
            type="submit"
            whileHover={
              isSubmitting ? undefined : { scale: 1.02, backgroundColor: "#f5f5f4" }
            }
            whileTap={isSubmitting ? undefined : { scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full rounded-lg border border-white/10 bg-white py-3 font-semibold text-black transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
