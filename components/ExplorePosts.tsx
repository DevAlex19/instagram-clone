import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import PostModal from "./PostModal";

function ExplorePosts() {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex justify-center mx-auto max-w-[1000px] flex-wrap gap-6 mt-7">
      {Array(10)
        .fill(0)
        .map((item, index) => {
          return (
            <div
              key={index}
              style={{ width: "calc(33.33% - 1.5rem)" }}
              className="relative h-[300px] min-w-[250px] cursor-pointer group"
              onClick={() => setModal(true)}
            >
              <Image
                src="https://img.freepik.com/free-vector/best-scene-nature-landscape-mountain-river-forest-with-sunset-evening-warm-tone-illustration_1150-39403.jpg?w=2000"
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
                  <p>454k</p>
                </div>
                <div className="flex items-center gap-x-2 font-semibold">
                  <FontAwesomeIcon icon={faComment} className="text-xl" />
                  <p>3243</p>
                </div>
              </div>
            </div>
          );
        })}
      <PostModal modal={modal} setModal={setModal} />
    </div>
  );
}

export default ExplorePosts;
