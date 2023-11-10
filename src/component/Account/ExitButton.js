import React from "react";
import { ImExit } from "react-icons/im";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function ExitButton() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="border md:w-72 w-96 h-24 hover:shadow-xl shadow  rounded-lg  pt-7 font-display font-semibold flex flex-row justify-center text-green-900 bg-gray-200 hover:bg-white duration-500"
    >
      <ImExit size={35} />
      <div className="ml-2 text-2xl">Çıkış</div>
    </button>
  );
}
