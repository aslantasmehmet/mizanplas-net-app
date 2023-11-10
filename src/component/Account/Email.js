import React, { useEffect, useState } from "react";
import { getUser } from "../../firebase";

export default function Email() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
    };

    fetchUser();
  });
  return (
    <div className="text-green-900 font-bold font-display text-lg ">
      {user ? user.email : "aslantas-mehmet58@hotmail.com"}
    </div>
  );
}
