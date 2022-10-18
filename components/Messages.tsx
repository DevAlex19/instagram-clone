import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./Button";

function Messages() {
  return (
    <div
      style={{ minHeight: "85vh" }}
      className="xs:max-w-sm m:max-w-[950px] mx-auto bg-white mx-auto rounded-md flex xs:border-1 xs:border-gray mb-10 xs:mt-5"
    >
      <div className="w-full xs:max-w-sm">
        <div
          style={{ borderBottom: "1px solid #dbdbdb" }}
          className="relative py-2.5 font-semibold"
        >
          <p className="flex justify-center">name</p>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="absolute top-2/4 right-3 text-2xl cursor-pointer"
            style={{ transform: "translateY(-50%)" }}
          />
        </div>
        <div className="p-3">
          <div className="flex text-sm gap-x-2.5 mb-4">
            <Image
              src="/images/avatar.png"
              width="45px"
              height="45px"
              className="rounded-full cursor-pointer"
            />
            <div>
              <p className="font-semibold cursor-pointer">nume</p>
              <p>dsdgdgdgd</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden m:flex items-center flex-col justify-center w-full"
        style={{ borderLeft: "1px solid #dbdbdb" }}
      >
        <div
          style={{ width: "90px", height: "90px" }}
          className="relative border-2 border-black rounded-full flex items-center justify-center"
        >
          <Image
            src="/images/plane.png"
            width="40px"
            height="40px"
            objectFit="cover"
          />
        </div>
        <p className="text-2xl font-light mt-4">Mesajele tale</p>
        <p className="text-sm text-gray mt-2">
          Trimite fotografii şi mesaje private către un prieten sau grup.
        </p>
        <Button modifiers="bg-blue text-white font-medium text-sm rounded mt-6 py-1 px-3">
          Trimite mesaj
        </Button>
      </div>
    </div>
  );
}

export default Messages;
