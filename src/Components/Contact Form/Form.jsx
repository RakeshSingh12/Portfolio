import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const headingVariant = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };

  const ImgBoxVariant = {
    initial: { y: +100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    try {
      await fetch("https://formspree.io/f/xknddqdp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Clear form fields upon successful submission
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } catch (error) {
      alert("There was an error sending your message.");
    }
  };

  return (
    <div
      className="main-container p-10 bg-black min-h-screen flex flex-col justify-center items-center"
      id="ContactMe"
    >
      <motion.div
        variants={headingVariant}
        initial="initial"
        whileInView="whileInView"
        transition={springTransition}
        viewport={{ once: true, amount: 0.8 }}
        className="heading flex flex-col gap-4 mb-10 text-center"
      >
        <h1 className="text-4xl text-sky-500 font-bold font-Poppins">
          CONTACT ME
        </h1>
        <h2 className="text-xl font-medium text-neutral-300 font-Poppins">
          Feel free to contact me 👇
        </h2>
      </motion.div>
      <motion.div
        variants={ImgBoxVariant}
        initial="initial"
        whileInView="whileInView"
        transition={springTransition}
        viewport={{ once: true, amount: 0.5 }}
        className="formContainer bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-gray-300 font-medium mb-2">Your email:</span>
            <input
              type="email"
              name="email"
              className="border border-gray-600 rounded-lg p-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-300 font-medium mb-2">
              Your message:
            </span>
            <textarea
              name="message"
              className="border border-gray-600 rounded-lg p-2 bg-gray-900 text-white h-32 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-sky-500 text-white font-Poppins font-bold p-3 rounded-lg hover:bg-sky-600  transition duration-300"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
