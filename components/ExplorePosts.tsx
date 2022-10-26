import { useEffect } from "react";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { getPosts } from "../store/actions/actions";
import { RootState, useAppDispatch } from "../store/store/store";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function ExplorePosts() {
  const [modal, setModal] = useState(false);
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr)" }}
      className="mx-auto max-w-[1000px] mt-7 justify-between gap-7 grid min-h-[85vh] content-start"
    >
      {posts.map((post, index) => {
        const comments =
          post.comments.reduce((res, acc: any) => {
            return res + acc.subcomments.length;
          }, 0) + post.comments.length;

        return (
          <div
            key={index}
            className="relative h-[300px] cursor-pointer group"
            onClick={() => setModal(true)}
          >
            <Image
              src={post.image}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
            />
            <div
              className="bg-[rgba(0,0,0,0.4)] w-full h-full absolute hidden group-hover:flex top-2/4 left-2/4 text-white flex gap-x-8 items-center justify-center"
              style={{ transform: "translate(-50%,-50%)" }}
            >
              <div className="flex items-center gap-x-2 font-semibold">
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
                <p>{post.likes.length}</p>
              </div>
              <div className="flex items-center gap-x-2 font-semibold">
                <FontAwesomeIcon icon={faComment} className="text-xl" />
                <p>{comments}</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* <PostModal modal={modal} setModal={setModal} /> */}
    </div>
  );
}

export default ExplorePosts;
