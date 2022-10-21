import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { UploadModalType } from "./UploadModal";

function SelectUpload({ setPage, image, setImage }: UploadModalType) {
  const uploadBtn = useRef<any>();

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      const url = reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImage({ ...image, url: reader.result, data: file });
        setPage(1);
      };
    }
  }

  return (
    <>
      <p
        style={{ borderBottom: "1px solid rgb(239, 239, 239)" }}
        className="text-center font-semibold py-3"
      >
        Creeaza o postare noua
      </p>
      <div className="text-center py-10 flex flex-col items-center justify-center h-full">
        <FontAwesomeIcon icon={faPhotoFilm} className="text-6xl mb-5" />
        <p className="text-xl font-light">
          Gliseaza aici fotografii si clipuri video
        </p>
        <div className="mt-5">
          <label
            onClick={() => uploadBtn.current.click()}
            className="bg-blue rounded text-white font-medium text-sm py-1 px-3 cursor-pointer"
          >
            Selecteaza din computer
          </label>
          <input
            ref={uploadBtn}
            type="file"
            id="upload"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>
    </>
  );
}

export default SelectUpload;
