import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SelectUpload from "./SelectUpload";
import UploadFinalStep from "./UploadFinalStep";

export type UploadModalType = {
  page?: number;
  setPage: (page: number) => void;
  setModal: (modal: boolean) => void;
  image?: any;
  setImage: (image: any) => void;
};

type ModalType = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

function UploadModal({ modal, setModal }: ModalType) {
  const [page, setPage] = useState(0);
  const [image, setImage] = useState({ url: "" });

  function getPage() {
    switch (page) {
      case 0:
        return (
          <SelectUpload
            setPage={setPage}
            setModal={setModal}
            image={image}
            setImage={setImage}
          />
        );

      case 1:
        return (
          <UploadFinalStep
            setPage={setPage}
            setModal={setModal}
            image={image}
            setImage={setImage}
          />
        );
    }
  }

  return (
    <div
      style={{ background: "rgba(0,0,0,0.6)", zIndex: "1" }}
      className={`${
        modal ? "flex" : "hidden"
      } fixed w-full h-full top-0 left-0 flex items-center justify-center`}
      onClick={() => {
        setModal(false);
        setPage(0);
      }}
    >
      <div
        className="bg-white rounded-lg w-[50%] min-w-[300px] max-w-[700px] md:h-[700px]"
        onClick={(e) => e.stopPropagation()}
      >
        {getPage()}
      </div>
      <FontAwesomeIcon
        icon={faClose}
        className="absolute top-5 right-6 text-white text-2xl cursor-pointer"
        onClick={() => {
          setModal(false);
          setPage(0);
        }}
      />
    </div>
  );
}

export default UploadModal;
