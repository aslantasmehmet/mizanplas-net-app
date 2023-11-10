import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function MenuDay() {
  const [menuDay, setMenuDay] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu

  useEffect(() => {
    const fetchManuDay = async () => {
      try {
         // Veriler yüklenirken spinner'ı görünür yap
         setLoading(true);
        const querySnapshot = await getDocs(collection(db, "menuDay"));
        const menuDayData = [];
        querySnapshot.forEach((doc) => {
          menuDayData.push(doc.data());
        });
        setMenuDay(menuDayData);
        setLoading(false); // Veriler yüklendikten sonra spinner'ı gizle
      } catch (error) {
        console.error("Error fetching menuDay:", error);
      }
    };
    fetchManuDay();
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
    responsive: [
      {
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
    <div>
      <div className="container mx-auto  md:mb-8 md:mt-0  menu-day md:-translate-y-0 -translate-y-10">
        <div className="text-green-900 text-semibold text-4xl font-display2 mb-6">
          Günün Menüsü
        </div>
        <div>
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
          <Slider {...settings}>
            {menuDay.map((menuDays) => (
              <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="border w-full h-full rounded shadow-lg">
                  <img src={menuDays.image} alt={menuDays.title} />
                </div>
                <div className="grid grid-rows-4 grid-flow-col">
                  <div className="text-center mt-4 font-display2 font-semibold text-2xl">
                    {menuDays.title}
                  </div>
                  <div className="text-center font-display2 font-semibold">
                    {menuDays.explanation}
                  </div>
                  <div>
                    <a href={`/gunun-menusu/${menuDays.title}`} target="_blank" rel="noopener noreferrer">
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
      </div>
    </div>
  );
}
