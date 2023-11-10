import React, { useEffect, useState } from "react";
import RecipeAdd from "../component/Admin/add/RecipeAdd";
import MenuDay from "../component/Admin/add/MenuDay";
import NewsAdd from "../component/Admin/add/NewsAdd";
import BlogAdd from "../component/Admin/add/BlogAdd";
import { getUser } from "../firebase";
import { useNavigate } from "react-router";
import { logout } from "../firebase";

export default function Admin() {
  const [isTarifEkleClicked, setTarifEkleClicked] = useState(false);
  const [isMenuEkleClicked, setMenuEkleClicked] = useState(false);
  const [isHaberEkleClicked, setHaberEkleClicked] = useState(false);
  const [isBlogEkleClicked, setBlogEkleClicked] = useState(false);

  const handleTarifEkleClick = () => {
    setTarifEkleClicked(true);
    setMenuEkleClicked(false);
    setHaberEkleClicked(false);
    setBlogEkleClicked(false);
  };

  const handleMenuEkleClick = () => {
    setTarifEkleClicked(false);
    setMenuEkleClicked(true);
    setHaberEkleClicked(false);
    setBlogEkleClicked(false);
  };

  const handleHaberEkleClick = () => {
    setTarifEkleClicked(false);
    setMenuEkleClicked(false);
    setHaberEkleClicked(true);
    setBlogEkleClicked(false);
  };

  const handleBlogEkleClick = () => {
    setTarifEkleClicked(false);
    setMenuEkleClicked(false);
    setHaberEkleClicked(false);
    setBlogEkleClicked(true);
  };

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);

      if (!currentUser) {
        navigate("/admin");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border w-full h-96 mt-10 shadow-xl">
        <button
          type="submit"
          onClick={handleTarifEkleClick}
          className={`w-72 rounded-md bg-black px-3 py-4 text-white  focus:outline-none hover:bg-stone-100 hover:text-black duration-300 mt-2 ${
            isTarifEkleClicked ? "bg-green-900" : ""
          }`}
        >
          Tarif Ekle
        </button>
        <button
          type="submit"
          onClick={handleMenuEkleClick}
          className={`w-72 rounded-md bg-black px-3 py-4 text-white  focus:outline-none hover:bg-stone-100 hover:text-black duration-300 my-2 ${
            isMenuEkleClicked ? "bg-green-900" : ""
          }`}
        >
          Günün Menüsü Ekle
        </button>
        <button
          type="submit"
          onClick={handleHaberEkleClick}
          className={`w-72 rounded-md bg-black px-3 py-4 text-white  focus:outline-none hover:bg-stone-100 hover:text-black duration-300 my-2 ${
            isHaberEkleClicked ? "bg-green-900" : ""
          }`}
        >
          Haber Ekle
        </button>
        <button
          type="submit"
          onClick={handleBlogEkleClick}
          className={`w-72 rounded-md bg-black px-3 py-4 text-white  focus:outline-none hover:bg-stone-100 hover:text-black duration-300 my-2 ${
            isBlogEkleClicked ? "bg-green-900" : ""
          }`}
        >
          Blog Ekle
        </button>
        <button
          type="submit"
          onClick={handleLogout}
          className={`w-72 rounded-md bg-black px-3 py-4 text-white  focus:outline-none hover:bg-stone-100 hover:text-black duration-300 my-2 ${
            isHaberEkleClicked ? "bg-green-900" : ""
          }`}
        >
          Çıkış
        </button>
      </div>
      <div className="col-span-2 ">
        {isTarifEkleClicked && (
          <div>
            <RecipeAdd />
          </div>
        )}
        {isMenuEkleClicked && (
          <div>
            {" "}
            <MenuDay />{" "}
          </div>
        )}
        {isHaberEkleClicked && (
          <div>
            <NewsAdd />
          </div>
        )}
         {isBlogEkleClicked && (
          <div>
            <BlogAdd/>
          </div>
        )}
      </div>
    </div>
  );
}
