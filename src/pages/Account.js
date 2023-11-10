import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { getUser } from "../firebase";
import { useNavigate } from "react-router-dom";
import SendRecipeButton from "../component/Account/SendRecipeButton";
import MyRecipesButton from "../component/Account/MyRecipesButton";
import ProfileButton from "../component/Account/ProfileButton";
import ExitButton from "../component/Account/ExitButton";
import ProfilePhoto from "../component/Account/ProfilePhoto";
import Email from "../component/Account/Email";
import NameSurname from "../component/Account/NameSurname";

export default function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);

      if (!currentUser) {
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row translate-y-8 md:pl-8 pl-4 md:mb-0 mb-16">
        <div className=" font-display md:text-xl text-md mr-4 border-b border-transparent hover:border-b hover:border-green-900 transition duration-300 transform hover:translate-x-1">
          <a href="/">Ana Sayfa</a>
        </div>
        <div className=" font-display md:text-xl text-md mr-4">/</div>
        <div className="text-green-900  font-display md:text-xl text-md font-semibold border-b border-green-900">
          Mizanplas Üyelik
        </div>
      </div>

      <div className="flex ">
        <div className="flex-none w-14 h-14"></div>
        <div className="grow h-14 grid justify-center pt-5 -translate-y-6 md:mb-0 mb-10">
          <div className="flex flex-col">
            <div>
              <ProfilePhoto />
            </div>
            <div>
              <div className="text-green-900  font-bold font-display text-2xl py-4">
                <NameSurname />
              </div>
            </div>
            <div className="-translate-y-3">
              <div className="text-green-900 font-bold font-display text-lg ">
                <Email />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-6 -translate-y-6">
              <div>
                <a href="/hesabım/tarif-ekle">
                  <SendRecipeButton />
                </a>
              </div>
              <div>
                <a href="/hesabım/tariflerim">
                  <MyRecipesButton />
                </a>
              </div>
              <div>
                <a
                  href={`/hesabım/${
                    user ? user.displayName.replace(/\s+/g, "-") : "userName"
                  }`}
                >
                  <ProfileButton />
                </a>
              </div>
              <div>
                <ExitButton />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none w-14 h-14"></div>
      </div>
    </div>
  );
}
