import { useState } from 'react'

import {
  FaSearch,
  FaHeart,
  FaBars,
} from "react-icons/fa";

function App() {
  const recipes = [
    {
      image: "https://pinchofyum.com/tachyon/Chicken-Caesar-Smash-Tacos.jpg?resize=840%2C1200&zoom=0.5",
      category: "DINNER",
      title: "Creamy Chicken",
    },
    {
      image: "https://pinchofyum.com/tachyon/Gochujang-Noodles-3.jpg?resize=840%2C1200&zoom=0.5",
      category: "QUICK AND EASY",
      title: "Spicy Noodles",
    },
    {
      image: "https://pinchofyum.com/tachyon/Crunch-Roll-Bowls-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "HEALTHY",
      title: "Fresh Green Bowl",
    },
    {
      image: "https://pinchofyum.com/tachyon/Walnut-Meatballs-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "TOMATO",
      title: "Meatballs & Vegetables",
    },
  ];

  return (
    <div className="min-h-screen bg-[#202020] text-white">

      {/* ================= HEADER ================= */}
      <header className="bg-[#111111] border-b border-gray-700">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}
            <div className="text-4xl md:text-5xl font-serif tracking-tight">
              <span className="text-[#d9a5c8]">
                pinch
              </span>

              <span className="text-gray-400">
                of
              </span>

              <span className="text-[#d9a5c8]">
                yum
              </span>
            </div>


            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-10">

              <a
                href="#home"
                className="font-bold text-white hover:text-[#d9a5c8] transition"
              >
                HOME
              </a>

              <a
                href="#about"
                className="font-bold text-white hover:text-[#d9a5c8] transition"
              >
                ABOUT
              </a>

              <a
                href="#recipes"
                className="font-bold text-white hover:text-[#d9a5c8] transition"
              >
                RECIPES
              </a>

              <a
                href="#start"
                className="font-bold text-white hover:text-[#d9a5c8] transition"
              >
                START HERE
              </a>

              <button className="text-[#d9a5c8] text-xl hover:scale-110 transition">
                <FaSearch />
              </button>

            </nav>


            {/* MOBILE MENU */}
            <button className="md:hidden text-xl text-white">
              <FaBars />
            </button>

          </div>

        </div>

      </header>


      {/* ================= TAGLINE ================= */}

      <section className="bg-[#111111] py-7 border-b border-gray-800">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-sm md:text-base font-semibold">

            Simple recipes made for{" "}

            <span className="normal-case tracking-normal text-2xl md:text-3xl italic text-[#d9a5c8] font-serif">
              real, actual, everyday life.
            </span>

          </p>

        </div>

      </section>


      {/* ================= RECIPES ================= */}

      <main
        id="recipes"
        className="max-w-7xl mx-auto px-6 md:px-10 py-8"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {recipes.map((recipe, index) => (

            <article
              key={index}
              className="group relative"
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="
                    w-full
                    h-[430px]
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* CATEGORY */}

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">

                  <span className="
                    bg-[#f0b94f]
                    text-white
                    px-7
                    py-3
                    text-xs
                    md:text-sm
                    font-bold
                    tracking-[0.2em]
                    whitespace-nowrap
                  ">
                    {recipe.category}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </main>


      {/* ================= FLOATING BUTTONS ================= */}

      <div className="
        fixed
        right-5
        bottom-8
        flex
        flex-col
        items-center
        gap-3
      ">

        {/* LIKE COUNT */}

        <span className="text-sm text-[#d9a5c8] font-semibold">
          181.7k
        </span>


        {/* HEART */}

        <button className="
          w-12
          h-12
          rounded-full
          bg-[#111111]
          border
          border-gray-800
          flex
          items-center
          justify-center
          text-[#d9a5c8]
          text-xl
          hover:scale-110
          transition
        ">
          <FaHeart />
        </button>


        {/* SEARCH */}

        <button className="
          w-12
          h-12
          rounded-full
          bg-[#8d467c]
          flex
          items-center
          justify-center
          text-white
          text-xl
          hover:scale-110
          transition
        ">
          <FaSearch />
        </button>

      </div>

    </div>
  );
}

export default App;