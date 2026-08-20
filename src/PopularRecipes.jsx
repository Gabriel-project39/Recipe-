import { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";

function RecipeCategories() {
  const [activeTab, setActiveTab] = useState("VEGETARIAN");

  const tabs = [
    "VEGETARIAN",
    "QUICK + EASY",
    "POPULAR ON PINTEREST",
  ];

  const recipes = [
    {
      image: "/",
      category: "QUICK AND EASY",
      title: "Bang Bang Tofu",
    },
    {
      image: "/images/vegetarian-dinners.jpg",
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

  return (
    <section className="bg-[#202020] text-white min-h-screen">

      {/* TABS */}
      <div className="pt-10">

        <div className="flex justify-center items-center">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative
                px-5
                py-3
                font-bold
                text-sm
                md:text-base
                transition
                ${
                  activeTab === tab
                    ? "bg-[#81406f]"
                    : "bg-[#292929] hover:bg-[#363636]"
                }
              `}
            >
              {tab}

              {activeTab === tab && (
                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-2
                    -translate-x-1/2
                    w-0
                    h-0
                    border-l-[10px]
                    border-l-transparent
                    border-r-[10px]
                    border-r-transparent
                    border-t-[8px]
                    border-t-[#81406f]
                  "
                />
              )}
            </button>
          ))}

        </div>

      </div>


      {/* RECIPES */}

      <div className="max-w-[1140px] mx-auto px-6 pt-10 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="group text-center"
            >

              {/* IMAGE */}

              <div className="relative h-[275px]">

                <div className="w-full h-full overflow-hidden">

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


                {/* CATEGORY */}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-4
                    bg-[#f0b84b]
                    px-6
                    py-2
                    z-10
                    whitespace-nowrap
                  "
                >
                  <span className="
                    text-white
                    text-xs
                    font-bold
                    tracking-[0.2em]
                  ">
                    {recipe.category}
                  </span>
                </div>

              </div>


              {/* TITLE */}

              <div className="pt-9 px-2">

                <h3 className="
                  font-serif
                  font-bold
                  text-xl
                  md:text-[22px]
                  leading-tight
                  group-hover:text-[#e0a0c7]
                  transition
                ">
                  {recipe.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* NEXT SECTION */}

      <div className="bg-[#555555] py-10">

        <div className="max-w-[900px] mx-auto px-6">

          <img
            src="/images/next-section.jpg"
            alt=""
            className="
              w-full
              h-[150px]
              object-cover
            "
          />

        </div>

      </div>


      {/* FLOATING BUTTONS */}

      <div className="
        fixed
        right-5
        bottom-24
        z-50
        flex
        flex-col
        items-center
        gap-3
      ">

        <span className="
          text-[#e0a0c7]
          text-sm
          font-bold
        ">
          181.8k
        </span>

        <button className="
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
        ">
          <FaHeart />
        </button>

        <button className="
          w-11
          h-11
          rounded-full
          bg-[#81406f]
          flex
          items-center
          justify-center
          text-white
          text-lg
        ">
          <FaSearch />
        </button>

      </div>

    </section>
  );
}

export default RecipeCategories;