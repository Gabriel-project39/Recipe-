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

      {/* ================= NAVBAR ================= */}
      <header className="bg-[#111111] border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="h-28 flex items-center justify-between">

            {/* LOGO */}
            <div className="text-5xl font-serif">
              <span className="text-[#e0a0c7]">
                pinch
              </span>

              <span className="text-gray-400">
                of
              </span>

              <span className="text-[#e0a0c7]">
                yum
              </span>
            </div>


            {/* NAVIGATION */}
            <nav className="hidden md:flex items-center gap-12">

              <a
                href="#home"
                className="font-bold text-lg hover:text-[#e0a0c7] transition"
              >
                HOME
              </a>

              <a
                href="#about"
                className="font-bold text-lg hover:text-[#e0a0c7] transition"
              >
                ABOUT
              </a>

              <a
                href="#recipes"
                className="font-bold text-lg hover:text-[#e0a0c7] transition"
              >
                RECIPES
              </a>

              <a
                href="#start"
                className="font-bold text-lg hover:text-[#e0a0c7] transition"
              >
                START HERE
              </a>

              <button className="text-[#e0a0c7] text-2xl hover:scale-110 transition">
                <FaSearch />
              </button>

            </nav>



          </div>
        </div>
      </header>


      {/* ================= HERO ================= */}
      
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
        className="max-w-[1400px] mx-auto px-8 py-10"
      >

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          {recipes.map((recipe, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-sm
              "
            >

              {/* IMAGE */}
              <img
                src={recipe.image}
                alt={recipe.category}
                className="
                  w-full
                  h-[500px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />


              {/* DARK GRADIENT AT BOTTOM */}
              <div className="
                absolute
                inset-x-0
                bottom-0
                h-40
                bg-gradient-to-t
                from-black/70
                to-transparent
                pointer-events-none
              " />


              {/* CATEGORY LABEL */}
              <div className="
                absolute
                bottom-0
                left-0
                right-0
                flex
                justify-center
              ">

                <span className="
                  bg-[#f2b53d]
                  text-white
                  px-8
                  py-4
                  min-w-[150px]
                  text-center
                  text-sm
                  md:text-base
                  font-bold
                  tracking-[0.2em]
                  shadow-lg
                ">
                  {recipe.category}
                </span>

              </div>

            </div>

          ))}

        </div>

      </main>


      {/* ================= FLOATING BUTTONS ================= */}

      <div className="
        fixed
        right-6
        bottom-8
        flex
        flex-col
        items-center
        gap-3
      ">

        {/* NUMBER */}
        <span className="
          text-[#e0a0c7]
          font-bold
          text-sm
        ">
          181.7k
        </span>


        {/* HEART */}
        <button className="
          w-14
          h-14
          rounded-full
          bg-[#111111]
          border
          border-gray-600
          flex
          items-center
          justify-center
          text-[#e0a0c7]
          text-xl
          hover:scale-110
          transition
        ">
          <FaHeart />
        </button>


        {/* SEARCH */}
        <button className="
          w-14
          h-14
          rounded-full
          bg-[#9b4c86]
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