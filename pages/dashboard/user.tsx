import React from "react";

function user() {
  const handleLogOut = async () => {
    const user = await fetch("/api/auth/logout");
    const hamham = await user.json();

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

export default user;
