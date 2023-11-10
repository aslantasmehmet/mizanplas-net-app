import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "../component/MenuDayDetail/Image";
import Title from "../component/MenuDayDetail/Title";
import PreparationStages from "../component/MenuDayDetail/PreparationStages";
import LongDescription from "../component/MenuDayDetail/LongDescription";
import Materials from "../component/MenuDayDetail/Materials";
import Preparation from "../component/MenuDayDetail/Preparation";
import ShareRecipe from "../component/MenuDayDetail/ShareRecipe";
import ResponsiveDesing from "../component/MenuDayDetail/ResponsiveDesing";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

export default function RecipeDetail() {
  const { title } = useParams();
  const [menuDay, setMenuDay] = useState(null);

  useEffect(() => {
    const fetchMenuDay = async () => {
      const menuDayRef = collection(db, "menuDay");
      const q = query(menuDayRef, where("title", "==", title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setMenuDay(doc.data());
      }
    };

    fetchMenuDay();
  }, [title]);

  if (!menuDay) {
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
          <Image menuDay={menuDay} /> {/* recipe prop'unu ileterek kullanın */}
          <Title menuDay={menuDay} />
          <PreparationStages menuDay={menuDay} />
          <LongDescription menuDay={menuDay} />
          <Materials menuDay={menuDay} />
          <Preparation menuDay={menuDay} />
          <ShareRecipe menuDay={menuDay} />
        </div>
        <div>{/* Reklam */}</div>
      </div>
      <ResponsiveDesing menuDay={menuDay} />
      <Footer/>
    </div>
  );
}
