import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import PostModal from "./PostModal";

function HomePagePost() {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white rounded-lg border-1 border-gray mt-4 relative">
      <div className="flex justify-between items-center p-3">
        <div className="flex gap-x-3">
          <Image
            src="/images/avatar.png"
            width="35px"
            height="35px"
            className="rounded-full cursor-pointer"
          />
          <p className="font-semibold text-sm">name</p>
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
          src="https://img.freepik.com/free-vector/best-scene-nature-landscape-mountain-river-forest-with-sunset-evening-warm-tone-illustration_1150-39403.jpg?w=2000"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex text-2xl gap-x-4 p-3">
        <FontAwesomeIcon className="cursor-pointer" icon={faHeart} />
        <FontAwesomeIcon className="cursor-pointer" icon={faComment} />
        <FontAwesomeIcon className="cursor-pointer" icon={faLocationArrow} />
      </div>
      <p className="px-3 font-semibold text-sm">51 aprecieri</p>
      <p className="px-3 text-sm mt-1">
        <span className="font-semibold">name </span>dsfdsgdgddg
      </p>
      <p
        onClick={() => setModal(true)}
        className="px-3 font-semibold text-sm mt-1.5 mb-3 cursor-pointer text-gray"
      >
        Vezi toate cele 343 de comentarii
      </p>
      <div
        style={{ borderTop: "1px solid rgb(239, 239, 239)" }}
        className="p-3 flex justify-between"
      >
        <input
          className="text-sm outline-0"
          type="text"
          placeholder="Adauga un comentariu..."
          style={{ width: "85%" }}
        />
        <Button modifiers="text-blue text-sm font-semibold">Posteaza</Button>
      </div>
      <PostModal setModal={setModal} modal={modal} />
    </div>
  );
}

export default HomePagePost;
