import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Newspaper, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-16">

      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-14 mt-5">
        <motion.h1
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          About Finance Article
        </motion.h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Your trusted source for the latest updates in finance, technology, investments,
          stocks, crypto, and global economic trends.
        </p>
      </div>

      {/* Section Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Card 1 */}
        <motion.div
          whileHover={{scale: 1.03}}
          className="p-7 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-gray-100/40 dark:from-gray-800/40 dark:to-gray-700/30 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
        >
          <BookOpen size={40} className="text-purple-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">What We Do</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We bring curated financial content from trusted sources, formatted beautifully
            and displayed with a smooth user experience. Whether it’s global markets or
            business trends — we cover it all.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{scale: 1.03}}
          className="p-7 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-gray-100/40 dark:from-gray-800/40 dark:to-gray-700/30 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
        >
          <TrendingUp size={40} className="text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To make financial information simple, accessible, and powerful — helping people
            make informed decisions with clear and accurate news.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{scale: 1.03}}
          className="p-7 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-gray-100/40 dark:from-gray-800/40 dark:to-gray-700/30 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
        >
          <Newspaper size={40} className="text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">What You’ll Find Here</h2>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2 mt-2">
            <li>✔ Latest financial & economic news</li>
            <li>✔ Category-based articles (Stocks, Crypto, Banking, etc.)</li>
            <li>✔ Clean & modern UI</li>
            <li>✔ Dark/Light theme support</li>
          </ul>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{scale: 1.03}}
          className="p-7 rounded-2xl shadow-lg bg-gradient-to-br from-white/80 to-gray-100/40 dark:from-gray-800/40 dark:to-gray-700/30 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
        >
          <Shield size={40} className="text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Why Trust Us?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Articles are sourced from reliable APIs and global news outlets. We filter
            high-quality content and present it in a clean, reader-friendly format.
          </p>
        </motion.div>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Finance Article — Empowering financial knowledge.
      </div>

    </div>
  );
}
