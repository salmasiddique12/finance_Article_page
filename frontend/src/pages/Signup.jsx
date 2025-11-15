import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-16">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-xl
        bg-gradient-to-br from-white/80 to-gray-100/40 
        dark:from-gray-800/40 dark:to-gray-700/30
        backdrop-blur-xl border border-gray-200 dark:border-gray-700"
      >

        {/* Toggle Buttons */}
        <div className="flex mb-8 bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setMode("login")}
            className={`w-1/2 py-2 rounded-xl font-semibold transition 
              ${mode === "login" 
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow" 
                : "text-gray-600 dark:text-gray-300"
              }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`w-1/2 py-2 rounded-xl font-semibold transition 
              ${mode === "signup" 
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow" 
                : "text-gray-600 dark:text-gray-300"
              }`}
          >
            Sign Up
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          {mode === "login"
            ? "Login to access your personalized dashboard"
            : "Join us and explore premium financial articles"}
        </p>

        <form className="space-y-6">

          {/* NAME field only in signup mode */}
          {mode === "signup" && (
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
              <div className="flex items-center px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <User className="text-gray-500 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
                  required
                />
              </div>
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-1">Email Address</label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <Mail className="text-gray-500 dark:text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 mb-1">Password</label>
            <div className="flex items-center px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <Lock className="text-gray-500 dark:text-gray-400 mr-3" />
              <input
                type="password"
                placeholder={mode === "login" ? "Enter your password" : "Create a strong password"}
                className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:opacity-90 transition"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* SWITCH TEXT */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          {mode === "login" ? (
            <>
              Don’t have an account?
              <button
                onClick={() => setMode("signup")}
                className="text-purple-500 ml-1 hover:underline"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button
                onClick={() => setMode("login")}
                className="text-purple-500 ml-1 hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </p>

      </motion.div>
    </div>
  );
}
