import React from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import Footer from "../component/Footer";

import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export default function About() {
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row"> {/* Eklediğimiz responsive düzen */}
        <div className="ml-10 mr-10 p-4 ">
          <img
            
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1696068451/Hakk%C4%B1m%C4%B1zda_rzxtdv.png"
          />
        </div>
        <div className="font-display md:text-left container mx-auto text-xl text-green-900 mr-10 pl-6 pr-6 text-center pt-4 md:translate-y-24">
        Mizanplas kelimesi, yemek yapma sürecindeki önemli bir adım olan
          malzemelerin hazırlanması ve düzenlenmesi anlamına gelir. Bu Fransızca
          "mise en place" ifadesinden türetilmiştir. Mizanplas.net web sitesi,
          yemek yapma sürecindeki bu adıma vurgu yaparak, yemek tarifleri,
          alışveriş, bloglar ve kullanıcıların tarif paylaşabileceği bir
          platform sunar. <br /> <br />  Bu
          platform, yemek yapma sürecini daha kolay ve keyifli hale getirmek
          için tasarlanmıştır. Mizanplas.net'i ziyaret eden herkes, yemek yapma
          sürecindeki ihtiyaç duydukları bilgileri bulabilecekleri gibi
          kullanıcıların da tariflerini paylaşarak topluluk içinde birbirimizle
          bilgi ve deneyimlerimizi paylaşmamıza olanak sağlanmaktadır.Siz de bu
          tutkuya ortak olabilir ve deneyimlerinizi paylaşarak topluluk içinde
          aktif rol alabilirsiniz. Mizanplas.net, yemek yapma tutkunlarını
          aileleri gibi karşılayarak, sıcak bir ortamda buluşmalarına imkan
          sağlar.
          <br /> <br /> Gelin siz de bu sıcak ortama katılın ve Mizanplas.net'in
          sunduğu imkanlardan faydalanarak yemek yapma sürecinde keyifli bir
          deneyim yaşayın.
          <br /> <br />
          Ailemize hoş geldiniz, İyi ki varsınız :)
          <br />
          mizanplas.net
          <br /> <br />
          <div className="flex flex-row justify-center">
            <a href="https://instagram.com/mizanplasnet">
              <AiFillInstagram
                href=""
                className="mr-4 pb-1 hover:text-green-900 text-black duration-300"
                size={45}
              />
            </a>
            <a href="https://twitter.com/mizanplasnet">
              <AiFillTwitterSquare
                className="mr-4 pb-1 hover:text-green-900 text-black duration-300"
                size={45}
              />
            </a>
            <a href="https://facebook.com/mizanplasnet">
              <AiFillFacebook
                className="mr-4 pb-1 hover:text-green-900 text-black duration-300"
                size={45}
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}