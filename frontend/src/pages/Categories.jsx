// src/pages/Categories.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Banknote,
  BarChart2,
  PiggyBank,
  Landmark,
  CreditCard,
} from "lucide-react";

const categories = [
  { name: "Finance", query: "finance", icon: <Banknote size={18} /> },
  { name: "Stocks", query: "stocks", icon: <BarChart2 size={18} /> },
  { name: "Investment", query: "investment", icon: <PiggyBank size={18} /> },
  { name: "Banking", query: "banking", icon: <Landmark size={18} /> },
  { name: "Crypto", query: "crypto", icon: <CreditCard size={18} /> },
];

export default function Categories() {
  const [active, setActive] = useState("Finance");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch API
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=${
            categories.find((c) => c.name === active).query
          }&apiKey=b42c9b1474d44029b704f3ca31871631`
        );
        setArticles(res.data.articles || []);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [active]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10">
      
      {/* Header */}
      <div className="text-center mb-10 pt-12">
        <h1 className="text-4xl font-bold mb-2">
          Explore Finance Articles
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Browse categories like stocks, banking, crypto & more
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300
              ${
                active === cat.name
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md border-none"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700"
              }
            `}
          >
            {cat.icon}
            {cat.name}
          </motion.button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading articles...
        </p>
      )}

      {/* Articles */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            className="border rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/400x250"}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                {article.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-400 dark:text-gray-500">
                <span>📅 {new Date(article.publishedAt).toDateString()}</span>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 dark:text-indigo-400 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
