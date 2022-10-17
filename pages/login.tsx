import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const mainDivStyle = {
    padding: "1em",
  };

  const formStyle: any = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credentials: any = { username, password };

    try {
      let user = await fetch("/api/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (user.status === 200) {
        router.push("/dashboard/user");
      } else {
        console.log("Some error occured");
      }

      const hamham = await user.json();

      console.log(hamham);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetUser = async () => {
    const user = await fetch("/api/myuser");
    const hamham = await user.json();

    console.log(hamham);
  };

  const handleLogOut = async () => {
    const user = await fetch("/api/auth/logout");
    const hamham = await user.json();

    console.log(hamham);
  };

  return (
    <div style={mainDivStyle}>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password"> Username </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> Log in </button>
      </form>

      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
}
