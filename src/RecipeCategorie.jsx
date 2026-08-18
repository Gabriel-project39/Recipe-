import { FaSearch, FaHeart } from "react-icons/fa";

function RecipeCategories() {
  const recipes = [
    {
      image: "/images/latest1.jpg",
      date: "JULY 22, 2026",
      title: "Crispy Parmesan Chicken with Creamy Lemon Pasta",
      description:
        "Crispy golden parmesan chicken atop creamy, luscious, lemony pasta! This combo is everything!",
    },

    {
      image: "/images/latest3.jpg",
      date: "JULY 13, 2026",
      title: "Smashed Olives with Burrata",
      description:
        "Fried bread, torn creamy burrata, and smashed castelvetrano olives make this an easy favorite.",
    },

    {
      image: "/images/latest4.jpg",
      date: "JULY 8, 2026",
      title: "Creamy Chicken Pasta",
      description:
        "An easy and delicious dinner that's perfect for busy weeknights.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white">

      {/* ===================================================== */}
      {/* AS SEEN IN */}
      {/* ===================================================== */}

      <div className="max-w-[1152px] mx-auto px-6">

        <div className="pt-7">

          {/* TITLE */}

          <div className="text-center">

            <p className="
              text-[#f2b53d]
              text-[13px]
              font-bold
              tracking-[0.22em]
            ">
              AS SEEN IN
            </p>

          </div>


          {/* PUBLICATIONS */}

          <div className="
            mt-7
            grid
            grid-cols-2
            md:grid-cols-6
            items-center
            gap-8
          ">

            {/* BUZZFEED */}

            <div className="
              text-center
              text-gray-400
              font-bold
              text-[24px]
              tracking-[-1px]
            ">
              BuzzFeed
            </div>


            {/* PUREWOW */}

            <div className="
              text-center
              text-gray-400
              font-serif
              italic
              text-[34px]
            ">
              PureWow.
            </div>


            {/* BRIT + CO */}

            <div className="
              text-center
              text-gray-400
              font-bold
              text-[20px]
              tracking-[0.18em]
            ">
              BRIT+CO
            </div>


            {/* POPSUGAR */}

            <div className="
              text-center
              text-gray-500
              font-bold
              text-[15px]
              tracking-[0.25em]
            ">
              POPSUGAR.
            </div>


            {/* THE EVERYGIRL */}

            <div className="
              text-center
              text-gray-500
              text-[11px]
              tracking-[0.2em]
              whitespace-nowrap
            ">
              ◉ THE EVERYGIRL
            </div>


            {/* KITCHN */}

            <div className="
              text-center
              text-gray-400
              font-bold
              text-[25px]
            ">
              ◎ kitchn
            </div>

          </div>


          {/* HORIZONTAL LINE */}

          <div className="
            border-b
            border-gray-700
            mt-10
          " />

        </div>


        {/* ===================================================== */}
        {/* LATEST & GREATEST */}
        {/* ===================================================== */}

        <div className="pt-14 pb-20">

          {/* TITLE */}

          <h2 className="
            text-[#e0a0c7]
            font-serif
            text-[16px]
            md:text-[17px]
            tracking-[0.12em]
            mb-8
          ">
            THE LATEST &amp; GREATEST
          </h2>


          {/* ================================================= */}
          {/* ARTICLES + RIGHT AD */}
          {/* ================================================= */}

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-[746px_342px]
            gap-16
            items-start
          ">


            {/* ================================================= */}
            {/* LEFT ARTICLE LIST */}
            {/* ================================================= */}

            <div>

              {recipes.map((recipe, index) => (

                <article
                  key={index}
                  className="
                    pb-6
                    mb-8
                    border-b
                    border-gray-700
                  "
                >

                  <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-[238px_1fr]
                    gap-4
                  ">

                    {/* IMAGE */}

                    <div className="
                      w-full
                      h-[238px]
                      overflow-hidden
                    ">

                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />

                    </div>


                    {/* ARTICLE INFORMATION */}

                    <div className="pt-1">

                      {/* DATE */}

                      <p className="
                        text-gray-500
                        text-[11px]
                        tracking-[0.27em]
                        mb-5
                      ">
                        {recipe.date}
                      </p>


                      {/* TITLE */}

                      <h3 className="
                        font-serif
                        font-bold
                        text-[27px]
                        md:text-[30px]
                        leading-[1.12]
                        text-white
                        hover:text-[#e0a0c7]
                        transition-colors
                      ">
                        {recipe.title}
                      </h3>


                      {/* DESCRIPTION */}

                      <p className="
                        mt-6
                        text-gray-300
                        font-serif
                        text-[16px]
                        leading-[1.45]
                        max-w-[500px]
                      ">
                        {recipe.description}
                      </p>


                      {/* CONTINUE READING */}

                      <button className="
                        mt-5
                        text-[#f2b53d]
                        font-bold
                        text-[16px]
                        tracking-[0.05em]
                        hover:text-[#e0a0c7]
                        transition-colors
                      ">
                        CONTINUE READING
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - FREEZER MEALS */}
            {/* ================================================= */}

            <aside className="
              hidden
              lg:block
              w-[342px]
            ">

              <img
                src="/images/freezer-meals.jpg"
                alt="20 Healthy Freezer Meals"
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />

            </aside>

          </div>

        </div>

      </div>


      {/* ===================================================== */}
      {/* FLOATING SOCIAL BUTTONS */}
      {/* ===================================================== */}

      <div className="
        fixed
        right-5
        bottom-24
        z-50
        flex
        flex-col
        items-center
        gap-4
      ">

        {/* FOLLOWER COUNT */}

        <span className="
          text-[#e0a0c7]
          text-[13px]
          font-bold
        ">
          181.7k
        </span>


        {/* HEART BUTTON */}

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
          hover:scale-110
          transition-transform
        ">

          <FaHeart />

        </button>


        {/* SEARCH BUTTON */}

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
          hover:scale-110
          transition-transform
        ">

          <FaSearch />

        </button>

      </div>

    </section>
  );
}

export default RecipeCategories;