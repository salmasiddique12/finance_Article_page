import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "./Articles";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/news`
        );

        const mapped = res.data.articles.map((a) => ({
          title: a.title,
          logo: a.urlToImage,
          content: a.description || a.content || "No content available",
          date: new Date(a.publishedAt).toLocaleDateString(),
          url: a.url,
          source: a.source?.name,
        }));

        setArticles(mapped);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <HeroSection />
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-10 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
          bg-clip-text text-transparent 
          tracking-wide drop-shadow-md">
          ✨ Latest Finance Articles ✨
        </h2>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading articles…
          </p>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <Articles key={i} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No articles found.
          </p>
        )}
      </section>
    </main>
  );
}
