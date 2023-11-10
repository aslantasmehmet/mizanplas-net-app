import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriesData from "../api/categories";
import recipesData from "../api/recipes";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    setCategories(categoriesData);
    setRecipes(recipesData);
    countRecipes();
  }, []);

  const countRecipes = () => {
    const counts = {};

    categoriesData.forEach((category) => {
      const recipeCount = recipesData.filter(
        (recipe) => recipe.categories === category.name
      ).length;
      counts[category.name] = recipeCount;
    });

    setCategoryCounts(counts);
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 categories">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {categories.slice(0, 8).map((category) => (
          <Link to={`/kategori/${category.name}`} key={category.id}>
            <div className="flex flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <img
                className="w-32 sm:w-48 -translate-x-4"
                src={category.img}
                alt={category.name}
              />
              <div className="py-2 text-left -translate-x-12">
                <div className="font-bold text-md font-display2 text-gray-800">
                  {category.name}
                </div>
                <div className="text-xs text-gray-400">
                  {categoryCounts[category.name] || 0} Tarif
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="/kategoriler"
          className="bg-green-900 hover:bg-black text-white font-display2 py-3 px-10 rounded transition duration-500 ease-in-out transform hover:scale-110"
        >
          Daha Fazla
        </a>
      </div>
    </div>
  );
}
