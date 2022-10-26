import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addComment } from "../store/actions/actions";
import { setModalId } from "../store/reducers/main";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";
import PostModal from "./PostModal";

function HomePagePost() {
  const [modal, setModal] = useState(false);
  const posts = useSelector((state: RootState) => state.posts);
  const {
    data: { username, profile },
  } = useSelector((state: RootState) => state.user);
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();

  return (
    <>
      {posts.map((post, index) => {
        const comments =
          post.comments.reduce((res, acc: any) => {
            return res + acc.subcomments.length;
          }, 0) + post.comments.length;

        return (
          <div
            key={index}
            className="bg-white rounded-lg border-1 border-gray mt-4 relative"
          >
            <div className="flex justify-between items-center p-3">
              <div className="flex gap-x-3">
                <Image
                  src={post.profile ? post.profile : "/images/avatar.png"}
                  width="35px"
                  height="35px"
                  className="rounded-full cursor-pointer"
                />
                <p className="font-semibold text-sm">{post.username}</p>
              </div>
              <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
            </div>
            <div
              style={{
                width: "100%",
                height: "550px",
              }}
              className="relative"
            >
              <Image
                src={post.image}
                width="100%"
                height="100%"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex text-2xl gap-x-4 p-3">
              <FontAwesomeIcon className="cursor-pointer" icon={faHeart} />
              <FontAwesomeIcon className="cursor-pointer" icon={faComment} />
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faLocationArrow}
              />
            </div>
            <p className="px-3 font-semibold text-sm">
              {post.likes.length} aprecieri
            </p>
            <p className="px-3 text-sm mt-1">
              <span className="font-semibold">{post.comments[0]?.user} </span>
              {post.comments[0]?.comment}
            </p>
            {comments > 1 ? (
              <p
                onClick={() => {
                  dispatch(setModalId(post._id));
                  setModal(true);
                }}
                className="px-3 font-semibold text-sm mt-1.5 mb-3 cursor-pointer text-gray"
              >
                Vezi toate cele {comments} de comentarii
              </p>
            ) : (
              <p className="px-3 font-semibold text-sm mt-1.5 mb-3 cursor-pointer text-gray"></p>
            )}
            <div
              style={{ borderTop: "1px solid rgb(239, 239, 239)" }}
              className="p-3 flex justify-between"
            >
              {post._id ? (
                <input
                  className="text-sm outline-0"
                  type="text"
                  placeholder="Adauga un comentariu..."
                  style={{ width: "85%" }}
                  {...register(`${post._id}`)}
                />
              ) : null}
              <Button
                modifiers="text-blue text-sm font-semibold"
                onClick={() => {
                  dispatch(
                    addComment({
                      id: post._id,
                      data: {
                        comment: watch()[post._id],
                        user: username,
                        img: profile,
                        subcomments: [],
                      },
                    })
                  );
                }}
              >
                Posteaza
              </Button>
            </div>
            <PostModal setModal={setModal} modal={modal} />
          </div>
        );
      })}
    </>
  );
}

export default HomePagePost;
