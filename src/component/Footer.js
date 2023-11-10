import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full mb-3">
      <div className="divide-y w-full h-0.5 bg-gray-300 translate-y-6 " />

      {/* Navbar Logo*/}
      <div className="flex flex-col md:flex-row md:justify-between mt-16">
        <div className="flex flex-row justify-center items-center md:ml-16 mt-4 md:mt-0">
          <div className="mr-16 font-display2 text-2xl hidden md:block hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1"><a href="/hakkımızda">Hakkımıda</a></div>
          <div className="font-display2 text-2xl hidden md:block hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1"><a href="/iletisim">İletişim</a></div>
        </div>
        <div className="flex flex-col justify-center items-center md:translate-x-12">
          <div className="text-6xl font-display3 text-black">
            Mizanplas.net
          </div>
          <div className="mt-2 text-xl font-display text-green-900 -skew-y-6 shadow hidden md:block">
            yemek için, herşey
          </div>
        </div>
        <div className="flex flex-row justify-center items-center md:mr-16 mt-4 md:mt-0">
          <div className="mr-16 font-display2 text-2xl hidden md:block hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1"><a href="/aydınlatma-metni">Aydınlatma Metni</a></div>
          <div className="font-display2 text-2xl hidden md:block hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1"><a href="/gizlilik">Gizlilik</a></div>
        </div>
      </div>

      {/* Navbar Logo */}

      {/* Social icon || app and playStore*/}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16 mb-16">
        <div className="flex flex-col justify-center items-center md:translate-x-32">
          <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1681510808/AppStore_wuhbhn.png" />
          <img
            className="mt-3 mb-6"
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1681510809/GooglePlay_yddwkf.png"
          />
        </div>
        <div className="text-xl font-display2 mt-12 md:mt-0 md:mx-16">
          © 2023 mizanplas.net. Tüm hakları saklıdır.
        </div>
        <div className="flex flex-row justify-center items-center md:-translate-x-32 mt-4">
          <a href="https://instagram.com/mizanplasnet">
            <AiFillInstagram
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={45}
            />
          </a>
          <a href="https://twitter.com/mizanplasnet">
            <AiFillTwitterSquare
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={45}
            />
          </a>
          <a href="https://facebook.com/mizanplasnet">
            <AiFillFacebook
              className="mr-4 pb-1 hover:text-green-900 duration-300"
              size={45}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
