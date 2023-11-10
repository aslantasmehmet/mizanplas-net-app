import React, { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    explanation: "",
    longDescription: "",
    manyPerson: "",
    preparaTiontime: "",
    cookingTime: "",
    ingredients: [],
    instructions: [],
    image: "",
    // Add new fields for user information
    adSoyad: "",
    email: "",
    role: "",
    pp: "", // Profile picture URL
  });

  const handleIngredientChange = (e, index) => { 
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleInstructionChange = (e, index) => {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = e.target.value;
    setRecipe({ ...recipe, instructions: newInstructions });
  };

  const handleAddInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe({ ...recipe, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe({ ...recipe, pp: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      // Check if all required fields are filled
      recipe.title !== "" &&
      recipe.category !== "" &&
      recipe.explanation !== "" &&
      recipe.longDescription !== "" &&
      recipe.manyPerson !== "" &&
      recipe.preparaTiontime !== "" &&
      recipe.cookingTime !== "" &&
      recipe.ingredients.length > 0 &&
      recipe.instructions.length > 0 &&
      // Check if user information is provided
      recipe.adSoyad !== "" &&
      recipe.email !== "" &&
      recipe.role !== ""
    ) {
      await addDoc(collection(db, "recipes"), {
        title: recipe.title,
        category: recipe.category,
        explanation: recipe.explanation,
        longDescription: recipe.longDescription,
        manyPerson: recipe.manyPerson,
        preparaTiontime: recipe.preparaTiontime,
        cookingTime: recipe.cookingTime,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image,
        // Include user information in the Firestore document
        adSoyad: recipe.adSoyad,
        email: recipe.email,
        role: recipe.role,
        pp: recipe.pp, // Profile picture URL
      });
      setRecipe({
        title: "",
        category: "",
        explanation: "",
        longDescription: "",
        manyPerson: "",
        preparaTiontime: "",
        cookingTime: "",
        ingredients: [],
        instructions: [],
        image: "",
        adSoyad: "",
        email: "",
        role: "",
        pp: "", // Clear the profile picture URL after submission
      });
    }
  };

  return (
    <div className="border  py-3 w-full h-full shadow-xl container mx-auto mt-10 mb-10">
      <div className="mt-6 mb-6 font-bold font-display2 text-green-900 text-lg">
           En Yeni Tarifler
         </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Recipe Title"
            value={recipe.title}
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl"
          />
          <input
            type="text"
            placeholder="Category"
            value={recipe.category}
            onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="explanation"
            value={recipe.explanation}
            onChange={(e) =>
              setRecipe({ ...recipe, explanation: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="longDescription"
            value={recipe.longDescription}
            onChange={(e) =>
              setRecipe({ ...recipe, longDescription: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="manyPerson"
            value={recipe.manyPerson}
            onChange={(e) =>
              setRecipe({ ...recipe, manyPerson: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="preparaTiontime"
            value={recipe.preparaTiontime}
            onChange={(e) =>
              setRecipe({ ...recipe, preparaTiontime: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="cookingTime"
            value={recipe.cookingTime}
            onChange={(e) =>
              setRecipe({ ...recipe, cookingTime: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <div className=" mt-4 font-display font-bold"> Tarif Paylaşan</div>
            <input
              type="text"
              placeholder="Ad Soyad"
              name="adSoyad"
              value={recipe.adSoyad}
              onChange={handleUserInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={recipe.email}
              onChange={handleUserInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
            <input
              type="text"
              placeholder="Role"
              name="role"
              value={recipe.role}
              onChange={handleUserInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureUpload}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
         
          <div className="ingredients-container mt-4">
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                placeholder="Ingredient"
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
                className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 mb-2 md:max-w-2xl"
              />
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddIngredient}
                className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                + Add Ingredient
              </button>
            </div>
          </div>
          <div className="instructions-container mt-4">
            {recipe.instructions.map((instruction, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Step ${index + 1}`}
                value={instruction}
                onChange={(e) => handleInstructionChange(e, index)}
                className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 mb-2 md:max-w-2xl"
              />
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddInstruction}
                className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                + Add Step
              </button>
            </div>
          </div>
          <textarea
            placeholder="Instructions"
            value={recipe.instructions}
            onChange={(e) =>
              setRecipe({ ...recipe, instructions: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 mt-4 md:max-w-2xl"
          />
        </div>
        <div className="btn-container mt-4">
          <button className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
