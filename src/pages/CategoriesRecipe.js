import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "../api/recipes";
import { FaStar } from "react-icons/fa";
import Navbar from "../component/Navbar";

export default function CategoriesRecipe() {
  const { categoryName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the recipes by category and search query
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.categories === categoryName &&
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="flex flex-row container mx-auto py-6 pl-4">
        <a className="font-display ml-2 text-2xl text-green-900 border-b border-transparent hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1" href="/">
          Ana Sayfa
        </a>
        <div className="ml-2 text-3xl text-green-900 -translate-y-1">/</div>
        <a className="font-display ml-2 text-2xl text-green-900 border-b border-transparent hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1" href="/kategoriler">
          Kategoriler
        </a>
        <div className="ml-2 text-3xl text-green-900 -translate-y-1">/</div>
        <div className="font-display ml-2 text-2xl text-green-900 ">{categoryName}</div>
      </div>
      <div className="bg-green-900 w-full h-16">
        <h2 className="font-semibold text-3xl mb-4 font-display2 text-white pt-3 text-left container mx-auto pl-4">
          {categoryName} Tarifleri
        </h2>
        <h2>{categoryName.introductoryText}</h2>
      </div>
      <div className="container mx-auto pb-10 pt-2 px-4 sm:px-6 lg:px-8">
        <div className="bg-[url('https://res.cloudinary.com/dd4d48hwn/image/upload/v1684010691/Ads%C4%B1z_tasar%C4%B1m_7_nmqvkb.png')] w-full h-64">
          <div className="flex justify-center my-4 ">
            <input
              className="py-3 px-4 md:w-[650px] w-[300px] h-12 md:ml-0 ml-16 w-auto border text-gray-800 border-green-900 bg-white mt-28 shadow-lg rounded-full focus:outline-none"
              placeholder="Tarif Ara"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-4 bg-green-900 text-white font-normal border-blue-700  rounded-full font-display2 mt-28 shadow -translate-x-16">
              Filtrele
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
              <div className="flex flex-col h-full transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110">
                <img
                  className="mw-full rounded shadow object-cover object-center"
                  src={recipe.img}
                  alt={recipe.title}
                />
                <div className="flex flex-col  my-4">
                  <Link to={`/tarif/${recipe.title}`}>
                    {" "}
                    <div className="font-bold text-2xl text-left font-display2 text-green-900 mt-4 mb-">
                      {recipe.title}
                    </div>
                    <div className="text-stone-500 text-md text-left font-display2 mb-2">
                      {recipe.explanation}
                    </div>
                  </Link>
                  <div className="flex">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <FaStar
                          key={ratingValue}
                          className="cursor-pointer text-yellow-500"
                          size={20}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
