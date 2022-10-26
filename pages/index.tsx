import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = (): JSX.Element => {
  const [user, userData] = useState<any>({});

  const handleGetUser = async () => {
    const user = await fetch("/api/userinfo");
    const hamham = await user.json();

    userData(hamham.data);
  };

  useEffect(() => {
    handleGetUser();
  }, [userData]);

  console.log(user);

  return (
    <div>
      {user === "Invalid token!" ? (
        <div>
          <h1>Please Login</h1>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="content">{user.username}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
