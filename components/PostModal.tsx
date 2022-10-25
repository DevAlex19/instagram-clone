import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faClose,
  faEllipsis,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store/store";
import Button from "./Button";

export type ModalType = {
  modal?: boolean;
  setModal: (modal: boolean) => void;
};

function PostModal({ setModal, modal }: ModalType) {
  const postId = useSelector((state: RootState) => state.postModal);
  const posts = useSelector((state: RootState) => state.posts).find(
    (post) => post._id === postId
  );
  console.log(posts);

  return (
    <div
      style={{ background: "rgba(0,0,0,0.5)", zIndex: "1" }}
      className={`${
        modal ? "flex" : "hidden"
      } fixed w-full h-full top-0 left-0 flex lg:items-center justify-center pt-10 lg:p-0`}
      onClick={() => setModal(false)}
    >
      <div
        className="h-[400px] lg:h-[90vh] bg-white lg:flex lg:w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full min-w-[300px]">
          {posts ? (
            <Image
              src={posts.image}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
            />
          ) : null}
        </div>
        <div className="w-full flex flex-col min-w-[300px] bg-white">
          <div
            className="flex items-center justify-between p-4"
            style={{ borderBottom: "1px solid rgb(239, 239, 239)" }}
          >
            <div className="flex gap-x-3">
              <Image
                src="/images/avatar.png"
                width="35px"
                height="35px"
                className="rounded-full cursor-pointer"
              />
              <p className="font-semibold text-sm cursor-pointer">name</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
          </div>
          <div
            className="p-4 flex-1"
            style={{
              borderBottom: "1px solid rgb(239, 239, 239)",
            }}
          >
            {posts?.comments.map((comment, index) => {
              return (
                <div key={index} className="flex gap-x-3 mb-5">
                  <Image
                    src="/images/avatar.png"
                    width="35px"
                    height="35px"
                    className="rounded-full cursor-pointer"
                  />
                  <p className="text-sm">
                    <span className="font-semibold">{comment.user} </span>
                    {comment.comment}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex text-2xl gap-x-4 p-4">
            <FontAwesomeIcon className="cursor-pointer" icon={faHeart} />
            <FontAwesomeIcon className="cursor-pointer" icon={faComment} />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faLocationArrow}
            />
          </div>
          <p className="px-4 font-semibold text-sm mb-4">
            {posts?.likes.length || 0} aprecieri
          </p>
          <div
            style={{ borderTop: "1px solid rgb(239, 239, 239)" }}
            className="p-4 flex justify-between"
          >
            <input
              className="text-sm outline-0"
              type="text"
              placeholder="Adauga un comentariu..."
              style={{ width: "85%" }}
            />
            <Button modifiers="text-blue text-sm font-semibold">
              Posteaza
            </Button>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faClose}
        className="absolute top-5 right-6 text-white text-2xl cursor-pointer"
        onClick={() => setModal(false)}
      />
    </div>
  );
}

export default PostModal;
