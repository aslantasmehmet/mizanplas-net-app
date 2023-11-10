import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function NewArrivals() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true); // Yükleme durumu

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Veriler yüklenirken spinner'ı görünür yap
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "recipes"));
                const recipeData = [];
                querySnapshot.forEach((doc) => {
                    recipeData.push(doc.data());
                });
                setRecipes(recipeData);
                setLoading(false); // Veriler yüklendikten sonra spinner'ı gizle
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: (
            <button className="slick-prev">
        <GrPrevious className="mr-2 -translate-y-20" color="black" size={20} />
      </button>
        ),
        nextArrow: (
            <button className="slick-next">
        <GrNext className="-translate-y-20" color="#000" size={20} />
      </button>
        ),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full h-full md:container md:mx-auto md:new-arrivals  new-arrivals md:mb-0 mb-10">
      <div className="text-green-900 text-semibold text-4xl font-display2 mb-6">En Yeni Tarifler</div>
      {loading ? ( // Yükleme durumuna göre spinner'ı görüntüle veya gizle
          <div className="flex justify-center">
          <div className="p-4 max-w-md">
            <div className="animate-pulse h-16 w-16 rounded-full bg-green-900 mx-auto"></div>
            <p className="text-center mt-4 text-gray-800 font-display" >
              Yükleniyor...
            </p>
          </div>
          </div>
        ) : (
      <Slider {...settings}  className="slick-slider">
        {recipes.map((recipe,index) => (
          <div key={recipe.id || index} className="slick-slide">
            <div className="border w-full h-full rounded shadow-lg">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="grid grid-rows-4 grid-flow-col">
              <div className="text-center mt-4 font-display2 font-semibold text-2xl">
                {recipe.title}
              </div>
              <div className="text-center font-display2 font-semibold">
                {recipe.explanation}
              </div>
              <div>
              <a href={`/tarif/${recipe.title}`}  target="_blank" rel="noopener noreferrer">
                  <button className="border w-32 h-10 bg-green-900 hover:bg-black text-white px-3 py-2 md:mb-4 mt-4 shadow rounded font-display2 duration-500">
                    Detaylı Tarif
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      )}
    </div>

    );
}