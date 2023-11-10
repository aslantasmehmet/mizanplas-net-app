import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { getUser } from "../firebase";

export default function Search() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(); // Firebase'den kullanıcı bilgilerini alın
      setUser(userData); // Kullanıcı bilgisini state'e kaydedin
    };

    fetchUser();
  }, []);

  // SİDEBAR "ALIŞVERİŞ" VE "HESABIM" DROPDOWN STATE YÖNETİMİ
  const [showShoppingDropdown, setShowShoppingDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const shoppingDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shoppingDropdownRef.current &&
        !shoppingDropdownRef.current.contains(event.target)
      ) {
        setShowShoppingDropdown(false);
      }
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      ) {
        setShowAccountDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shoppingDropdownRef, accountDropdownRef]);

  const handleShoppingDropdownClick = () => {
    setShowShoppingDropdown(!showShoppingDropdown);
  };

  const handleAccountDropdownClick = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };
  // SİDEBAR "ALIŞVERİŞ" VE "HESABIM" DROPDOWN STATE YÖNETİMİ

  // SEARCH VE HAMBURGER BUTTON STATE YÖNETİMİ

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputFocus = (event) => {
    event.target.placeholder = "";
  };

  const handleInputBlur = (event) => {
    event.target.placeholder = "Anahtar Kelime Yazın...";
  };

  return (
    <div>
      <div>
        <img
          className="w-full shadow "
          src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1683011496/Ads%C4%B1z_72_8_in%C3%A7_2_hr42ds.png"
        />
      </div>
      <div className="w-full h-48 mb-6">
        <div className="flex justify-between  container mx-auto  pt-16 ">
          <div>
            <RxHamburgerMenu
              className="cursor-pointer hover:text-gray-200 duration-300 md:translate-x-0 translate-x-3 "
              size={48}
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col">
            <div className=" md:text-6xl  text-3xl font-display3 text-black]">
              Mizanplas.net
            </div>
            <div className="mt-2 md:text-xl text:md font-display text-green-900 -skew-y-6 shadow">
              yemek için, herşey
            </div>
          </div>

          <div>
            <AiOutlineSearch
              className="cursor-pointer hover:text-gray-200 md:-translate-x-0 -translate-x-3 "
              size={48}
              onClick={toggleSearch}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-96 h-full bg-white shadow-lg transition duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row ml-4 mt-16">
          <div className=" font-display3 text-5xl  text-black ">Mizanplas</div>
          <div className="translate-x-32 -translate-y-1 p-4">
            <button onClick={toggleMenu}>
              <AiOutlineClose
                className="hover:text-gray-200 duration-300 md:translate-x-0 -translate-x-4"
                size={35}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col text-left divide-y mx-8 mt-16 font-display">
          <a href="/" className="pb-2 hover:translate-x-2 duration-300">
            ANA SAYFA{" "}
          </a>
          <div className="pt-2 pb-2 hover:translate-x-2 duration-300">
            <a href="/hakkımızda">HAKKIMIZDA </a>
          </div>
          <div className="pt-2 pb-2 hover:translate-x-2 duration-300">
            <a href="/kategoriler">TARİFLER</a>
          </div>
          <a
            href="/market"
            className="pt-2 pb-2 hover:translate-x-2 duration-300 text-green-900 font-semibold text-base"
          >
            MİZANPLAS MARKET
          </a>
          <div
            className="relative flex items-center pr-10 pb-2.5"
            ref={accountDropdownRef}
          >
            <div
              className="cursor-pointer mt-2 flex flex-row"
              onClick={handleAccountDropdownClick}
            >
              HESABIM{" "}
              {showAccountDropdown ? (
                <FiChevronUp
                  className="ml-8 translate-x-48 translate-y-1.5 "
                  size={15}
                />
              ) : (
                <FiChevronDown
                  className="ml-8 translate-x-48 translate-y-1.5 "
                  size={15}
                />
              )}
            </div>
            {showAccountDropdown && (
              <div className="absolute z-40 top-9 left-0 bg-white p-4 shadow border-2 w-80 h-20 duration-300">
                <div className="flex flex-col">
                  {!user ? (
                    <a
                      href="/login"
                      className="font-semibold font-display2 text-green-900 hover:translate-x-2 duration-300 my-3"
                    >
                      GİRİŞ YAP / ÜYE OL
                    </a>
                  ) : (
                    <a
                      href="/hesabım"
                      className=" border mt-2 w-56 bg-green-900 font-normal font-display2 text-white flex flex-row pl-4 py-3 -translate-y-3 rounded hover:text-black duration-300"
                    >
                      <CiUser size={25} className="mr-3" />
                      <p>{user.displayName}</p>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="pt-2 pb-2 hover:translate-x-2 duration-300">
            İLETİŞİM
          </div>
        </div>
        {/* SOSYLA İCON */}
        <div className="flex flex-row mt-32 justify-center ">
          <a href="https://instagram.com/mizanplasnet">
            <AiFillInstagram
              href=""
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={35}
            />
          </a>
          <a href="https://twitter.com/mizanplasnet">
            <AiFillTwitterSquare
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={35}
            />
          </a>
          <a href="https://facebook.com/mizanplasnet">
            <AiFillFacebook
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={35}
            />
          </a>
          <a href="/iletisim">
            <BsFillEnvelopeFill
              className="mr-4 hover:text-green-900 duration-300"
              size={29}
            />
          </a>
        </div>{" "}
      </div>

      {/* Search tab */}
      <div
        className={`fixed top-0 left-0 z-40 w-full h-56 bg-stone-100 text-white transition duration-500 ease-in-out transform ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex flex-row ml-20">
            <AiOutlineSearch className="text-gray-400 mt-1" size={40} />
            <input
              className="bg-stone-100 w-full h-12 p-2 pl-6 text-black font-display2 font-normal text-4xl focus:outline-none placeholder:text-4xl placeholder:text-gray-700"
              placeholder="Anahtar Kelime Yazın..."
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <div>
            <button onClick={toggleSearch}>
              <AiOutlineClose
                className="text-black hover:text-gray-200 duration-300 mr-16"
                size={35}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
