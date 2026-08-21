import { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";

function RecipeCategories() {
  const [activeTab, setActiveTab] = useState("VEGETARIAN");

  // ============================
  // VEGETARIAN
  // ============================

  const vegetarianRecipes = [
    {
      image: "https://pinchofyum.com/tachyon/Bang-Bang-Tofu_LowRes-016.jpg?resize=800%2C800&zoom=0.5",
      category: "QUICK AND EASY",
      title: "Bang Bang Tofu",
    },
    {
      image: "https://pinchofyum.com/tachyon/Vegetarian-Dinners-2-02.jpg?resize=800%2C800&zoom=0.5",
      category: "VEGETARIAN",
      title: "45 Actually Delicious Vegetarian Dinner Recipes",
    },
    {
      image: "/images/breakfast-burritos.jpg",
      category: "BREAKFAST",
      title: "Sheet Pan Breakfast Burritos with Creamy Chipotle Sauce",
    },
    {
      image: "/images/teriyaki-tofu.jpg",
      category: "VEGETARIAN",
      title: "Teriyaki Tofu Bowls with Kimchi Mayo",
    },
  ];

  // ============================
  // QUICK + EASY
  // ============================

  const quickEasyRecipes = [
    {
      image: "/images/chicken-caesar-smash-tacos.jpg",
      category: "TACOS",
      title: "Chicken Caesar Smash Tacos",
    },
    {
      image: "/images/pizza-burgers.jpg",
      category: "QUICK AND EASY",
      title: "Pizza Burgers",
    },
    {
      image: "/images/easy-dinner-recipes.jpg",
      category: "QUICK AND EASY",
      title: "38 Easy Dinner Recipes For Real Life",
    },
    {
      image: "/images/sheet-pan-dinners.jpg",
      category: "SHEET PAN",
      title: "20 Sheet Pan Dinners for Easy Weeknights",
    },
  ];

  // ============================
  // POPULAR ON PINTEREST
  // ============================

  const pinterestRecipes = [
    {
      image: "/images/popular-1.jpg",
      category: "POPULAR",
      title: "Popular Recipe One",
    },
    {
      image: "/images/popular-2.jpg",
      category: "POPULAR",
      title: "Popular Recipe Two",
    },
    {
      image: "/images/popular-3.jpg",
      category: "DINNER",
      title: "Popular Recipe Three",
    },
    {
      image: "/images/popular-4.jpg",
      category: "FAVORITE",
      title: "Popular Recipe Four",
    },
  ];

  // ============================
  // SELECT RECIPES
  // ============================

  const recipeGroups = {
    VEGETARIAN: vegetarianRecipes,
    "QUICK + EASY": quickEasyRecipes,
    "POPULAR ON PINTEREST": pinterestRecipes,
  };

  const recipes = recipeGroups[activeTab] || vegetarianRecipes;

  // ============================
  // TABS
  // ============================

  const tabs = [
    "VEGETARIAN",
    "QUICK + EASY",
    "POPULAR ON PINTEREST",
  ];

  return (
    <section className="bg-[#202020] text-white min-h-screen">

      {/* ================================= */}
      {/* CATEGORY TABS */}
      {/* ================================= */}

      <div className="pt-10">

        <div className="flex justify-center">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative
                px-5
                md:px-6
                py-3
                font-bold
                text-sm
                md:text-base
                tracking-wide
                transition-colors
                duration-200

                ${
                  activeTab === tab
                    ? "bg-[#81406f] text-white"
                    : "bg-[#292929] text-white hover:bg-[#353535]"
                }
              `}
            >
              {tab}

              {/* Triangle under active tab */}

              {activeTab === tab && (
                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-[7px]
                    -translate-x-1/2

                    w-0
                    h-0

                    border-l-[10px]
                    border-l-transparent

                    border-r-[10px]
                    border-r-transparent

                    border-t-[7px]
                    border-t-[#81406f]
                  "
                />
              )}
            </button>
          ))}

        </div>
      </div>

      {/* ================================= */}
      {/* RECIPE GRID */}
      {/* ================================= */}

      <div
        className="
          max-w-[1135px]
          mx-auto
          px-6
          pt-10
          pb-16
        "
      >

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-2
          "
        >

          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="group text-center"
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  w-full
                  h-[275px]
                "
              >

                <div
                  className="
                    w-full
                    h-full
                    overflow-hidden
                  "
                >

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="
                      w-full
                      h-full
                      object-cover

                      group-hover:scale-105

                      transition-transform
                      duration-500
                    "
                  />

                </div>

                {/* CATEGORY LABEL */}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-[18px]

                    bg-[#f0b84b]

                    px-6
                    py-2

                    min-w-[140px]

                    text-center

                    z-10
                  "
                >

                  <span
                    className="
                      text-white
                      text-[11px]
                      md:text-xs

                      font-bold

                      tracking-[0.2em]

                      whitespace-nowrap
                    "
                  >
                    {recipe.category}
                  </span>

                </div>
              </div>

              {/* TITLE */}

              <div className="pt-9 px-2">

                <h3
                  className="
                    font-serif
                    font-bold

                    text-xl
                    md:text-[22px]

                    leading-[1.15]

                    text-white

                    group-hover:text-[#e0a0c7]

                    transition-colors
                    duration-200
                  "
                >
                  {recipe.title}
                </h3>

              </div>

            </article>
          ))}

        </div>
      </div>

      {/* ================================= */}
      {/* FLOATING BUTTONS */}
      {/* ================================= */}

      <div
        className="
          fixed
          right-5
          bottom-24

          z-50

          flex
          flex-col
          items-center
          gap-3
        "
      >

        {/* COUNT */}

        <span
          className="
            text-[#e0a0c7]
            text-[13px]
            font-bold
          "
        >
          181.8k
        </span>

        {/* HEART */}

        <button
          type="button"
          className="
            w-11
            h-11

            rounded-full

            bg-[#111111]

            border
            border-gray-700

            flex
            items-center
            justify-center

            text-[#e0a0c7]

            text-lg

            hover:scale-110

            transition-transform
          "
        >
          <FaHeart />
        </button>

        {/* SEARCH */}

        <button
          type="button"
          className="
            w-11
            h-11

            rounded-full

            bg-[#81406f]

            flex
            items-center
            justify-center

            text-white

            text-lg

            hover:scale-110

            transition-transform
          "
        >
          <FaSearch />
        </button>

      </div>

    </section>
  );
}

export default RecipeCategories;