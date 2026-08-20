import { useState } from "react";
import RecipeCategories from "./RecipeCategories";
import RecipeCategorie from "./RecipeCategorie";
import PopularRecipes from "./PopularRecipes";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const recipes = [
    {
      image: "https://pinchofyum.com/tachyon/Chicken-Caesar-Smash-Tacos.jpg?resize=840%2C1200&zoom=0.5",
      category: "DINNER",
    },
    {
      image: "https://pinchofyum.com/tachyon/Gochujang-Noodles-3.jpg?resize=840%2C1200&zoom=0.5",
      category: "QUICK AND EASY",
    },
    {
      image: "https://pinchofyum.com/tachyon/Crunch-Roll-Bowls-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "HEALTHY",
    },
    {
      image: "https://pinchofyum.com/tachyon/Walnut-Meatballs-2.jpg?resize=840%2C1200&zoom=0.5",
      category: "TOMATO",
    },
  ];

  return (
    <div className="min-h-screen bg-[#202020] text-white">

      {/* ================= NAVBAR ================= */}
      <header className="bg-[#111111] border-b border-gray-700">

        <div className="max-w-[1400px] mx-auto px-6 md:px-8">

          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}
            <div className="text-4xl md:text-5xl font-serif">
              <span className="text-[#e0a0c7]">pinch</span>
              <span className="text-gray-400">of</span>
              <span className="text-[#e0a0c7]">yum</span>
            </div>


            {/* ================= DESKTOP MENU ================= */}
            <nav className="hidden md:flex items-center gap-10">

              <a
                href="#home"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                HOME
              </a>

              <a
                href="#about"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                ABOUT
              </a>

              <a
                href="#recipes"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                RECIPES
              </a>

              <a
                href="#start"
                className="font-bold hover:text-[#e0a0c7] transition"
              >
                START HERE
              </a>

              <button className="text-[#e0a0c7] text-xl">
                <FaSearch />
              </button>

            </nav>


            {/* ================= HAMBURGER ================= */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#e0a0c7] text-3xl p-2"
              aria-label="Open menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-700">

              <nav className="flex flex-col py-5">

                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7] transition"
                >
                  HOME
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7] transition"
                >
                  ABOUT
                </a>

                <a
                  href="#recipes"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7] transition"
                >
                  RECIPES
                </a>

                <a
                  href="#start"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 font-bold hover:bg-[#222222] hover:text-[#e0a0c7] transition"
                >
                  START HERE
                </a>

                <button
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                    font-bold
                    text-left
                    hover:bg-[#222222]
                    hover:text-[#e0a0c7]
                    transition
                  "
                >
                  <FaSearch />
                  SEARCH
                </button>

              </nav>

            </div>
          )}

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
        className="max-w-[1400px] mx-auto px-6 md:px-8 py-10"
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
              className="group relative overflow-hidden"
            >

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

              {/* DARK GRADIENT */}
              <div className="
                absolute
                inset-x-0
                bottom-0
                h-40
                bg-gradient-to-t
                from-black/70
                to-transparent
              " />

              {/* CATEGORY */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">

                <span className="
                  bg-[#f2b53d]
                  text-white
                  px-8
                  py-4
                  text-sm
                  md:text-base
                  font-bold
                  tracking-[0.2em]
                  text-center
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
        right-5
        bottom-6
        flex
        flex-col
        items-center
        gap-3
      ">

        <span className="text-[#e0a0c7] font-bold text-sm">
          181.7k
        </span>

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
        ">
          <FaHeart />
        </button>

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
        ">
          <FaSearch />
        </button>

      </div>
   <RecipeCategories />

      {/* OTHER SECTIONS */}

   <RecipeCategorie />

   <PopularRecipes />
    
    </div>
     


  );
}

export default App;