import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3002/subscribers");
      const result = await res.json();
      console.log(result);
    }
    getData();
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
