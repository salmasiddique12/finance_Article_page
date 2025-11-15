import React from "react";

export default function HeroSection() {
  return (
    <section className="relative rounded-b-3xl shadow-lg overflow-hidden mb-16 
                        bg-gradient-to-r from-white via-purple-50 to-purple-100 
                        dark:from-gray-900 dark:via-gray-800 dark:to-black 
                        transition-colors duration-500">
      
      {/* Magical Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-70 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 py-28 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 
                       text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-500 
                       animate-pulse drop-shadow-lg">
          Articles related to <span className="animate-shimmer bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-[length:200%_auto] bg-clip-text text-transparent">finance, investments, and expenditure</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed 
                      text-gray-700 dark:text-gray-300 drop-shadow">
          Discover the <span className="font-semibold text-purple-700">latest finance & expenditure news</span>.  
          Stay ahead with insights and updates that shape the economy.
        </p>

        {/* Overlapping Fantasy Cards */}
        <div className="mt-20 flex justify-center gap-6 relative">
          <div className="w-56 md:w-72 transform rotate-[-6deg] transition duration-1000 
                          hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,200,0.5)] 
                          cursor-pointer shadow-2xl animate-floating">
            <img
              src="https://images.livemint.com/img/2023/02/28/1600x900/Global_market_news_1677551630092_1677551630274_1677551630274.jpg"
              alt="Stock Market"
              className="rounded-2xl object-cover h-80 w-full"
            />
          </div>

          <div className="w-56 md:w-72 z-10 transform transition duration-1000 
                          hover:scale-115 hover:shadow-[0_0_35px_rgba(0,200,255,0.6)] 
                          cursor-pointer shadow-2xl animate-floating-delayed">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600"
              alt="Financial Planning"
              className="rounded-2xl object-cover h-80 w-full"
            />
          </div>

          <div className="w-56 md:w-72 transform rotate-[6deg] transition duration-700
                          hover:scale-105 hover:shadow-[0_0_25px_rgba(150,0,255,0.5)] 
                          cursor-pointer shadow-2xl hidden md:block animate-floating-slow">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.1oe03pUKppTKq0U_1JvP9wHaE8?pid=Api&P=0&h=180"
              alt="Currency & Savings"
              className="rounded-2xl object-cover h-80 w-full"
            />
          </div>
        </div>

        CTA Buttons
        <div className="mt-16 flex justify-center gap-5">
          <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg 
                             hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(150,0,255,0.6)] 
                             transition dark:bg-indigo-500 dark:hover:bg-indigo-600">
            ✨ Explore Articles
          </button>
          <button className="px-8 py-3 bg-white/40 text-gray-800 border border-gray-300 rounded-xl shadow-lg 
                             hover:bg-white/60 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] 
                             transition dark:bg-gray-700 dark:border-gray-600 
                             dark:hover:bg-gray-600 dark:text-white">
            🌌 Learn More
          </button>
        </div>
      </div>

      {/* Extra Fantasy Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        .animate-floating-delayed {
          animation: floating 7s ease-in-out infinite 1s;
        }
        .animate-floating-slow {
          animation: floating 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}
