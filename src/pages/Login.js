import React, { useState } from "react";
import Footer from "../component/Footer";
import Subscription from "../component/Subscription";
import Register from "../component/Register";
import LoginUser from "../component/LoginUser";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true); // Giriş yap bileşenini görüntüleme durumu
  const [showRegister, setShowRegister] = useState(false); // Üye ol bileşenini görüntüleme durumu

  const handleLoginClick = () => {
    setShowLogin(true); // Giriş yap bileşenini görüntüle
    setShowRegister(false); // Üye ol bileşenini gizle
  };

  const handleRegisterClick = () => {
    setShowLogin(false); // Giriş yap bileşenini gizle
    setShowRegister(true); // Üye ol bileşenini görüntüle
  };

  return (
    <div>
      <div
        style={{ backgroundSize: "md:cover" }}
        className=" bg-[url('https://res.cloudinary.com/dd4d48hwn/image/upload/v1686897474/Ads%C4%B1z_tasar%C4%B1m_12_g84h5u.jpg')] flex md:justify-end justify-center "
      >
        <div className="border bg-stone-100 border-zinc-300  md:w-[430px] w-[340px] custom-height my-16 md:mr-20 mx-auto rounded shadow-lg flex flex-col ">
          <div className="font-display2 text-5xl  text-green-900 translate-y- mt-10 font-bold ">
            <a href="/">Mizanplas</a>
          </div>
          <div className="flex flex-row mt-6 flex justify-center">
            <button
              className={`font-display2 text-2xl text-orange-600 mr-6 font-semibold ${
                showLogin ? "border-b  border-orange-200 text-orange-300" : ""
              }`}
              onClick={handleLoginClick}
            >
              Giriş Yap
            </button>
            <div className="font-display2 text-3xl text-black mr-6">|</div>
            <button
              className={`font-display2 text-2xl text-orange-600 font-semibold ${
                showRegister ? "border-b border-orange-200 text-orange-300" : ""
              }`}
              onClick={handleRegisterClick}
            >
              Üye Ol
            </button>
          </div>

          {showLogin && <LoginUser />}
          {showRegister && <Register />}
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}
