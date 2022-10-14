import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = ({ mydata }: any) => {
  console.log(mydata);

  return (
    <div>
      <Card data={mydata} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/user");
  const mydata = await response.json();

  return { props: { mydata } };
};
