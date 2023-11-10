import React, { useEffect,useState } from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import TopFlavors from "../component/TopFlavors";
import { useParams } from "react-router";


export default function BlogDetail() {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogRef = collection(db, "blog");
      const q = query(blogRef, where("title", "==", title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setBlog(doc.data());
      }
    };

    fetchBlog();
  }, [title]);

  if (!blog) {
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
      <div className="flex flex-col lg:flex-row">
        <div className="flex-none lg:w-64 h-full"></div>
        <div className="flex-grow h-full lg:w-1/2 xl:w-2/3">
          <div className="flex flex-col mt-6 ">
            <div className="text-left text-5xl text-green-900 font-display2 mb-8 ml-6">
              {blog.title}
            </div>
            <div className="text-left text-xl text-stone-700 font-display2 mb-8 ml-6">
              {blog.header}
            </div>
            <div className="md:ml-6 md:mx-0 mx-10">
              <img className="shadow " src={blog.image} alt={blog.title} />
            </div>
            <div className="mt-8">
              {blog.longDescription.map((long, index) => (
                <div
                  key={index}
                  className="text-left font-display2 text-stone-700 text-lg mb-4 ml-6"
                >
                  {long}
                </div>
              ))}
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex-none lg:w-72 h-full"></div>
      </div>
      <div className=" mb-8 mx-16">
        <TopFlavors />
      </div>
    </div>
  );
}
