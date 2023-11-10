import React, { useState } from "react";
import { login } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export default function LoginUser() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      toast.success(
        "Sistem giriş başarı ile gerçekleşti! Lütfen Bekleyiniz..."
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(
        "Giriş işlemi sırasında bir hata oluştu! Bilgilerinizi kontrol ederek tekrar deneyiniz."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" mt-3 ml-8">
          <div className="md:w-[400px]  h-96 flex flex-col">
            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ">
                Kullanıcı Adı veya E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border  shadow rounded-full focus:none md:w-96 w-72 h-12 mx-auto -translate-x-4 outline-none"
            />

            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold  text-green-900 ">
                Parola
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border  shadow rounded-full focus:none md:w-96 w-72  h-12 mx-auto -translate-x-4 outline-none"
              type="password"
            />

            <button
              type="submit"
              className="mt-8 md:ml-6 ml-2 border md:w-80 w-64 h-16 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded-full font-display2   duration-500 "
            >
              Giriş Yap
            </button>

            <a href="/sifre-sıfırlama" className=" text-gray-600 font-display2 text-center mt-6 mr-10">
              Parolanızı mı unuttunuz?
            </a>
          </div>
        </div>
      </form> 
      <Toaster />
    </div>
  );
}
