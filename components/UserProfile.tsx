import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./Button";

function UserProfile() {
  return (
    <div className="m-0 md:m-auto w-full md:w-[970px] min-h-[78vh] md:min-h-[83vh]">
      <div className="flex gap-x-8 md:gap-x-[6rem] p-5 md:pt-8 md:pb-[2.8rem] md:px-20 border-b-[1px] border-gray">
        <div className="flex flex-col items-center">
          <div className="cursor-pointer w-[70px] h-[70px] md:w-[150px] md:h-[150px] relative">
            <Image
              src="/images/avatar.png"
              width="100%"
              height="100%"
              layout="responsive"
              className="rounded-full cursor-pointer"
            />
          </div>
          <p className="block md:hidden font-semibold text-sm">user</p>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl md:text-3xl font-light">username</p>
            <Button modifiers="hidden md:block mt-3 text-sm font-semibold border-[1px] border-[#dbdbdb] rounded py-1 px-5">
              Editeaza profilul
            </Button>
            <FontAwesomeIcon
              className="text-xl mt-2 cursor-pointer"
              icon={faGear}
            />
          </div>
          <Button modifiers="block md:hidden mt-3 text-sm font-semibold border-[1px] border-[#dbdbdb] rounded py-1 px-5">
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
          <p className="hidden md:block mt-5 font-semibold">name</p>
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
    </div>
  );
}
export default UserProfile;
