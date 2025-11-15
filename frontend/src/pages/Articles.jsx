import React from "react";

export default function Articles({ article }) {
  return (
    <div className="relative group rounded-xl overflow-hidden h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition duration-500"></div>

      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col h-full">
        {/* Article Image */}
        <img
          src={article.logo || "https://via.placeholder.com/400"}
          alt={article.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />

        {/* Article Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-indigo-500 transition">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">
            {article.content}
          </p>

          {/* Footer Info */}
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center">
            <span>{article.source || "Unknown"}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>

          {/* Link */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
