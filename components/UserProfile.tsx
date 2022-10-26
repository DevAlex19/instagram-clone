import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCommentSlash, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../store/actions/actions";
import { setModalId } from "../store/reducers/main";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";
import PostModal from "./PostModal";

function UserProfile() {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    posts,
    profile: { name, username, profile },
    user: { data },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProfile(router.query.profile as string));
  }, []);

  return (
    <div className="m-0 md:m-auto w-full md:w-[51%] md:min-w-[750px] min-h-[78vh] md:min-h-[83vh]">
      <div className="flex gap-x-8 md:gap-x-[6rem] p-5 md:pt-8 md:pb-[2.8rem] md:px-20 border-b-[1px] border-gray">
        <div className="flex flex-col items-center">
          <div className="cursor-pointer w-[70px] h-[70px] md:w-[150px] md:h-[150px] relative">
            <Image
              src={profile ? profile : "/images/avatar.png"}
              width="100%"
              height="100%"
              layout="responsive"
              className="rounded-full cursor-pointer"
              objectFit="cover"
            />
          </div>
          <p className="block md:hidden font-semibold text-sm">{name}</p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl md:text-3xl font-light">{username}</p>
            <Button
              onClick={() => router.push("/settings")}
              modifiers="hidden md:block mt-3 text-sm font-semibold border-[1px] border-[#dbdbdb] rounded py-1 px-5"
            >
              Editeaza profilul
            </Button>
            <FontAwesomeIcon
              className="text-xl mt-2 cursor-pointer"
              icon={faGear}
            />
          </div>
          <Button
            onClick={() => router.push("/settings")}
            modifiers="block md:hidden mt-3 text-sm font-semibold border-[1px] border-[#dbdbdb] rounded py-1 px-5"
          >
            Editeaza profilul
          </Button>
          <div className="hidden md:flex mt-6 gap-x-8">
            <div className="flex gap-x-2 items-center text-sm">
              <p className="font-semibold text-base">0</p>
              <p className="text-base">postari</p>
            </div>
            <div className="flex gap-x-2 items-center text-sm cursor-pointer">
              <p className="font-semibold text-base">0</p>
              <p className="text-base">de urmaritori</p>
            </div>
            <div className="flex gap-x-2 items-center text-sm cursor-pointer">
              <p className="font-semibold text-base">0</p>
              <p className="text-base">urmarire</p>
            </div>
          </div>
          <p className="hidden md:block mt-5 font-semibold">{name}</p>
        </div>
      </div>
      <div className="flex md:hidden justify-around border-b-[1px] border-gray py-3">
        <div className="flex flex-col items-center text-sm">
          <p className="font-semibold">0</p>
          <p className="text-gray">postari</p>
        </div>
        <div className="flex flex-col items-center text-sm cursor-pointer">
          <p className="font-semibold">0</p>
          <p className="text-gray">de urmaritori</p>
        </div>
        <div className="flex flex-col items-center text-sm cursor-pointer">
          <p className="font-semibold">0</p>
          <p className="text-gray">urmarire</p>
        </div>
      </div>

      {posts[0]?.image ? (
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr)" }}
          className="max-w-[970px] justify-between gap-7 grid mt-7"
        >
          {posts.map((post, index) => {
            const comments =
              post.comments.reduce((res, acc: any) => {
                return res + acc.subcomments.length;
              }, 0) + post.comments.length;

            return (
              <>
                <div
                  key={index}
                  className="relative h-[300px] cursor-pointer group"
                  onClick={() => {
                    dispatch(setModalId(post._id));
                    setModal(true);
                  }}
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
                      <p>{post.likes}</p>
                    </div>
                    <div className="flex items-center gap-x-2 font-semibold">
                      <FontAwesomeIcon icon={faComment} className="text-xl" />
                      <p>{comments}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <PostModal modal={modal} setModal={setModal} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-[4rem]">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <Image
              src="/images/camera.webp"
              width="40px"
              height="40px"
              className="rounded-full cursor-pointer"
            />
          </div>
          <p className="text-2xl font-light mt-5">Distribuie fotografii</p>
          <p className="mt-3 text-sm">
            Cand distribui fotografii, acestea apar in profilul tau.
          </p>
          <Button modifiers="text-blue text-sm font-semibold mt-5">
            Distribuie prima fotografie
          </Button>
        </div>
      )}
    </div>
  );
}
export default UserProfile;
