import { useEffect } from "react";
import Image from "next/image";
import HomePagePost from "./HomePagePost";
import Suggestions from "./Suggestions";
import { useAppDispatch } from "../store/store/store";
import { getPosts } from "../store/actions/actions";

function HomePagePosts() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="mx-auto mt-7 flex gap-x-10 px-2 mb-10 w-full md:w-850">
      <div style={{ width: "55%", minWidth: "350px" }} className="mx-auto">
        <div className="bg-white border-1 border-gray rounded-lg flex p-5">
          <div className="flex flex-col items-center gap-y-1 cursor-pointer">
            <Image
              src="/images/avatar.png"
              width="50px"
              height="50px"
              className="rounded-full"
            />
            <p className="text-xs text-gray">name</p>
          </div>
        </div>
        <HomePagePost />
      </div>
      <Suggestions />
    </div>
  );
}

export default HomePagePosts;
