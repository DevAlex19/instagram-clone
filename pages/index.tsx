import type { NextPage } from "next";
import { useEffect } from "react";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  // useEffect(() => {
  //   async function getData() {
  //     // const res = await fetch("https://backedn.onrender.com/subscribers");
  //     // const result = await res.json();
  //     // console.log(result);
  //   }
  //   getData();
  // }, []);
  return <HomePage />;
};

export default Home;
