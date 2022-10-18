import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./Button";
import { UploadModalType } from "./UploadModal";

function UploadFinalStep({ setPage, image }: UploadModalType) {
  return (
    <>
      <div
        style={{ borderBottom: "1px solid rgb(239, 239, 239)" }}
        className="py-3 px-5 flex justify-between items-center"
      >
        <FontAwesomeIcon
          onClick={() => setPage(0)}
          className="cursor-pointer"
          icon={faArrowLeft}
        />
        <Button modifiers="text-blue text-sm font-semibold">Continuare</Button>
      </div>
      <div className="flex-1 h-full w-full relative">
        <Image src={image.url} width="100%" height="100%" layout="responsive" />
      </div>
    </>
  );
}

export default UploadFinalStep;
