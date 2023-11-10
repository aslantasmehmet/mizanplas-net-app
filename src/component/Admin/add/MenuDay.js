import React, { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RecipeForm() {
  const [menuDay, setMenuDay] = useState({
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
    const newIngredients = [...menuDay.ingredients];
    newIngredients[index] = e.target.value;
    setMenuDay({ ...menuDay, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setMenuDay({ ...menuDay, ingredients: [...menuDay.ingredients, ""] });
  };

  const handleInstructionChange = (e, index) => {
    const newInstructions = [...menuDay.instructions];
    newInstructions[index] = e.target.value;
    setMenuDay({ ...menuDay, instructions: newInstructions });
  };

  const handleAddInstruction = () => {
    setMenuDay({ ...menuDay, instructions: [...menuDay.instructions, ""] });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuDay({ ...menuDay, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuDay({ ...menuDay, pp: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setMenuDay({ ...menuDay, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      // Check if all required fields are filled
      menuDay.title !== "" &&
      menuDay.category !== "" &&
      menuDay.explanation !== "" &&
      menuDay.longDescription !== "" &&
      menuDay.manyPerson !== "" &&
      menuDay.preparaTiontime !== "" &&
      menuDay.cookingTime !== "" &&
      menuDay.ingredients.length > 0 &&
      menuDay.instructions.length > 0 &&
      // Check if user information is provided
      menuDay.adSoyad !== "" &&
      menuDay.email !== "" &&
      menuDay.role !== ""
    ) {
      await addDoc(collection(db, "menuDay"), {
        title: menuDay.title,
        category: menuDay.category,
        explanation: menuDay.explanation,
        longDescription: menuDay.longDescription,
        manyPerson: menuDay.manyPerson,
        preparaTiontime: menuDay.preparaTiontime,
        cookingTime: menuDay.cookingTime,
        ingredients: menuDay.ingredients,
        instructions: menuDay.instructions,
        image: menuDay.image,
        // Include user information in the Firestore document
        adSoyad: menuDay.adSoyad,
        email: menuDay.email,
        role: menuDay.role,
        pp: menuDay.pp, // Profile picture URL
      });
      setMenuDay({
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
          Günün Menüsü
         </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Recipe Title"
            value={menuDay.title}
            onChange={(e) => setMenuDay({ ...menuDay, title: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl"
          />
          <input
            type="text"
            placeholder="Category"
            value={menuDay.category}
            onChange={(e) => setMenuDay({ ...menuDay, category: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="explanation"
            value={menuDay.explanation}
            onChange={(e) =>
            setMenuDay({ ...menuDay, explanation: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="longDescription"
            value={menuDay.longDescription}
            onChange={(e) =>
                setMenuDay({ ...menuDay, longDescription: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="manyPerson"
            value={menuDay.manyPerson}
            onChange={(e) =>
                setMenuDay({ ...menuDay, manyPerson: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="preparaTiontime"
            value={menuDay.preparaTiontime}
            onChange={(e) =>
                setMenuDay({ ...menuDay, preparaTiontime: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="cookingTime"
            value={menuDay.cookingTime}
            onChange={(e) =>
                setMenuDay({ ...menuDay, cookingTime: e.target.value })
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
              value={menuDay.adSoyad}
              onChange={handleUserInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={menuDay.email}
              onChange={handleUserInputChange}
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
            />
            <input
              type="text"
              placeholder="Role"
              name="role"
              value={menuDay.role}
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
            {menuDay.ingredients.map((ingredient, index) => (
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
            {menuDay.instructions.map((instruction, index) => (
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
            value={menuDay.instructions}
            onChange={(e) =>
                setMenuDay({ ...menuDay, instructions: e.target.value })
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
