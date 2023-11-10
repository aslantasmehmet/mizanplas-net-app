import React, { useEffect, useState } from "react";
import { WiDirectionUp } from "react-icons/wi";
import Categories from "../component/Categories";
import Navbar from "../component/Navbar";
import NewArrivals from "../component/NewArrivals";
import Search from "../component/Search";
import MenuDay from "../component/MenuDay";
import Subscription from "../component/Subscription";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Blog from "../component/Blog";
import Writers from "../component/Writers";


export default function Dashboard() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  return (
    <div>
      <Navbar />
      <Search />
      <NewArrivals />
      <MenuDay />
      <Writers/>
      <Blog />
      <Subscription />
      <Categories />
      <Contact />
      <Footer />
      {showButton && (
        <button
          className="button-top border border-black rounded-full shadow-lg flex justify-end bg-green-900"
          onClick={scrollToTop}
        >
          <WiDirectionUp className="text-white z-40" size={30} />
        </button>
      )}
    </div>
  );
}
