import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "../component/RecipeDetail/Image";
import Title from "../component/RecipeDetail/Title";
import PreparationStages from "../component/RecipeDetail/PreparationStages";
import LongDescription from "../component/RecipeDetail/LongDescription";
import Materials from "../component/RecipeDetail/Materials";
import Preparation from "../component/RecipeDetail/Preparation";
import ShareRecipe from "../component/RecipeDetail/ShareRecipe";
import ResponsiveDesing from "../component/RecipeDetail/ResponsiveDesing";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

export default function RecipeDetail() {
  const { title } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipesRef = collection(db, "recipes");
      const q = query(recipesRef, where("title", "==", title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setRecipe(doc.data());
      }
    };

    fetchRecipe();
  }, [title]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-4 max-w-md bg-white rounded-lg shadow-md">
          <div className="animate-pulse h-16 w-16 rounded-full bg-green-900 mx-auto"></div>
          <p className="text-center mt-4 text-gray-800 font-display">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-6 gap-4 hidden md:block">
        <div>{/* Reklam */}</div>
        <div className="col-start-2 col-span-4 grid justify-items-center">
          <Image recipe={recipe} /> {/* recipe prop'unu ileterek kullanın */}
          <Title recipe={recipe} />
          <PreparationStages recipe={recipe} />
          <LongDescription recipe={recipe} />
          <Materials recipe={recipe} />
          <Preparation recipe={recipe} />
          <ShareRecipe recipe={recipe} />
        </div>
        <div>{/* Reklam */}</div>
      </div>
      <ResponsiveDesing recipe={recipe} />
      <Footer/>
    </div>
  );
}
