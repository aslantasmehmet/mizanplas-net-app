import React, { useEffect, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router";

export default function ProfilePhoto() {
  const [user, setUser] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);

  const navigate = useNavigate();

 

  
  return (
    <div
      className="border w-56 h-56 rounded-full shadow md:translate-x-[180px] translate-x-16 ml-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {user?.photoURL ? (
        <img
          className="rounded-full w-full h-full"
          src={user.photoURL}
          alt="User Profile"
        />
      ) : (
        <label className="w-full h-full rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500">
          <img
            className="w-full h-full rounded-full hover:bg-gray-200"
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1689938421/Ads%C4%B1z_tasar%C4%B1m_37_ge2pea.png"
            alt="Placeholder"
          />
        </label>
      )}

      {isHovered && (
        <label
          htmlFor="image-upload"
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center cursor-pointer"
          style={{ borderRadius: "inherit" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-xl font-bold mb-2">
              <MdOutlineAddAPhoto size={30} />
            </span>
            <span className="text-white text-xl font-bold">DEĞİŞTİR</span>
          </div>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={(event) => { setImageUpload(event.target.files[0]) }}
          />
        </label>
      )}
    </div>
  );
}


