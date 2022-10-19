import { useRouter } from "next/router";
import React, { useState } from "react";

function User() {
  const [logout, setLogout] = useState(false);

  const router = useRouter();

  const handleLogOut = async () => {
    const user = await fetch("/api/auth/logout");
    const hamham = await user.json();
    setLogout(true);

    if (user.status === 200) {
      router.push("/login");
    } else {
      console.log("errorlar oldu");
    }

    console.log(hamham);
  };

  const handleGetUser = async () => {
    const user = await fetch("/api/userinfo");
    const hamham = await user.json();

    console.log(hamham.data);
  };

  return (
    <div>
      Sensitive Data
      <div className="">
        <button onClick={() => handleLogOut()}> Logout </button>
        <button onClick={() => handleGetUser()}> User </button>
      </div>
    </div>
  );
}

export default User;
