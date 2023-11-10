import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import { useParams } from "react-router";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import TopFlavors from "../component/TopFlavors";
import { Link } from "react-router-dom";

export default function NewsDetail() {
  const { title } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const newsRef = collection(db, "news");
      const q = query(newsRef, where("title", "==", title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setNews(doc.data());
      }
    };

    fetchNews();
  }, [title]);

  if (!news) {
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
    <div className="flex flex-col">
      <Navbar />
      <Search />

      <div className="flex flex-col md:flex-row">
        <div className="flex-none w-full md:w-64 h-full"></div>
        <div className="flex-grow h-full">
          <div className="flex flex-col mt-6">
            <div className="text-left text-5xl text-green-900 font-display2 mb-8 ml-6">
              {news.title}
            </div>
            <div className="text-left text-xl text-stone-700 font-display2 mb-8 ml-6">
              {news.header}
            </div>
            <div className="md:ml-6 md:mx-0 mx-10">
              <img className="shadow" src={news.image} />
            </div>
            <div className="mt-8">
              {news.longDescription.map((long, index) => (
                <div
                  key={index}
                  className="text-left font-display2 text-stone-700 text-lg mb-4 ml-6"
                >
                  {long}
                </div>
              ))}
            </div>
            <Link className="text-left ml-6 mt-6 text-blue-500" to={news.video}>{news.video} </Link>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 h-full"></div>
      </div>
      <div className="mx-16 mb-8">
        <TopFlavors />
      </div>
    </div>
  );
}
