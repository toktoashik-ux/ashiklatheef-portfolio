import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      alert("Thank you. I will get back to you soon.");
      setIsLoading(false);
      event.target.reset();
    }, 800);
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                disabled={isLoading}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              className="textarea"
              disabled={isLoading}
              required
            />

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[180px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
