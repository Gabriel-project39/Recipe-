import { useState } from "react";

function RecipeCategories() {
    const [search, setSearch] = useState("");
  const categories = [
    {
      name: "QUICK AND EASY",
      image: "https://pinchofyum.com/tachyon/Gochujang-Noodles-3.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "DINNER",
      image: "https://pinchofyum.com/tachyon/Chicken-Caesar-Smash-Tacos.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "VEGETARIAN",
      image: "https://pinchofyum.com/tachyon/Cauliflower-Black-Bean-Tostadas-4.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "HEALTHY",
      image: "https://pinchofyum.com/tachyon/Crunch-Roll-Bowls-2.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "INSTANT POT",
      image: "https://pinchofyum.com/tachyon/Chicken-Tinga-Tacos-5.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "VEGAN",
      image: "https://pinchofyum.com/tachyon/Meal-Prep-Pasta-with-Cauliflower.jpg?resize=183%2C183&zoom=1",
    },
    {
      name: "MEAL PREP",
      image: "/images/meal-prep.jpg",
    },
    {
      name: "SOUPS",
      image: "/images/soups.jpg",
    },
    {
      name: "SALADS",
      image: "/images/salads.jpg",
    },
  ];

  return (
    <section className="bg-[#202020] py-10">
      <div className="max-w-[1250px] mx-auto px-6">

        {/* CATEGORIES */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center cursor-pointer group"
            >

              {/* CIRCLE IMAGE */}
              <div className="
                mx-auto
                w-20 h-20
                md:w-24 md:h-24
                rounded-full
                overflow-hidden
              ">
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-300
                  "
                />
              </div>

              {/* CATEGORY NAME */}
              <p className="
                mt-3
                text-xs
                md:text-sm
                font-bold
                text-white
                leading-tight
                group-hover:text-[#e0a0c7]
              ">
                {category.name}
              </p>

            </div>
          ))}

        </div>


        {/* SEARCH + BUTTON */}
        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-4
          mt-10
        ">

          {/* SEARCH */}
          <div className="
            flex
            items-center
            border
            border-gray-500
            w-full
            md:w-[500px]
            h-14
            px-4
          ">

            <span className="text-[#e0a0c7] text-xl mr-3">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search our recipes"
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder-gray-300
              "
            />

          </div>


          {/* OR */}
          <span className="
            text-gray-400
            italic
            font-serif
            text-xl
          ">
            or
          </span>


          {/* VIEW ALL */}
          <button className="
            bg-[#8d467c]
            px-7
            h-14
            text-white
            font-bold
            tracking-wide
            hover:bg-[#a65491]
            transition
          ">
            + VIEW ALL RECIPES
          </button>

        </div>



      </div>
    </section>



  );
}

export default RecipeCategories;