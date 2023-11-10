import React, { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function NewsForm() {
  const [news, setNews] = useState({
    title: "",
    category: "",
    explanation: "",
    longDescription: [],
    header: "",
    image: "",
    // Add new fields for user information
    adSoyad: "",
    email: "",
    role: "",
    pp: "", // Profile picture URL
  });

  const handleLongDescriptionChange = (e, index) => {
    const newlongDescription = [...news.longDescription];
    newlongDescription[index] = e.target.value;
    setNews({ ...news, longDescription: newlongDescription });
  };

  const handleAddLongDescription = () => {
    setNews({ ...news, longDescription: [...news.longDescription, ""] });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNews({ ...news, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNews({ ...news, pp: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      // Check if all required fields are filled
      news.title !== "" &&
      news.category !== "" &&
      news.explanation !== "" &&
      news.longDescription.length > 0 &&
      news.header !== "" &&
      // Check if user information is provided
      news.adSoyad !== "" &&
      news.email !== "" &&
      news.role !== ""
    ) {
      await addDoc(collection(db, "news"), {
        title: news.title,
        category: news.category,
        explanation: news.explanation,
        longDescription: news.longDescription,
        image: news.image,
        header: news.header,
        // Include user information in the Firestore document
        adSoyad: news.adSoyad,
        email: news.email,
        role: news.role,
        pp: news.pp, // Profile picture URL
      });
      setNews({
        title: "",
        category: "",
        explanation: "",
        longDescription: [],
        header: "",
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
        Yeni Haber
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="news"
            value={news.title}
            onChange={(e) => setNews({ ...news, title: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl"
          />
          <input
            type="text"
            placeholder="Category"
            value={news.category}
            onChange={(e) => setNews({ ...news, category: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="explanation"
            value={news.explanation}
            onChange={(e) => setNews({ ...news, explanation: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <div className="longDescription-container mt-4">
            {news.longDescription.map((longDescription, index) => (
              <input
                key={index}
                type="text"
                placeholder="longDescription"
                value={longDescription}
                onChange={(e) => handleLongDescriptionChange(e, index)}
                className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 mb-2 md:max-w-2xl"
              />
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddLongDescription}
                className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                + Add longDescription
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="header"
            value={news.header}
            onChange={(e) => setNews({ ...news, header: e.target.value })}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <div className=" mt-4 font-display font-bold"> Haber Paylaşan</div>
          <input
            type="text"
            placeholder="Ad Soyad"
            name="adSoyad"
            value={news.adSoyad}
            onChange={handleUserInputChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={news.email}
            onChange={handleUserInputChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="text"
            placeholder="Role"
            name="role"
            value={news.role}
            onChange={handleUserInputChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
            className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1.5 md:max-w-2xl mt-4"
          />
        </div>
        <div className="btn-container mt-4">
          <button className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add News
          </button>
        </div>
      </form>
    </div>
  );
}
