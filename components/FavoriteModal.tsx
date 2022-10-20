import { useEffect, useRef } from "react";

type FavoriteModalType = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

function FavoriteModal({ setModal, modal }: FavoriteModalType) {
  const favModal = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (favModal.current && !favModal.current.contains(e.target)) {
        setModal(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={favModal}
      className={`${
        modal ? "block" : "hidden"
      } w-[24vw] h-[300px] bg-white absolute top-10 right-[-20px] z-10 rounded shadow before:absolute before:w-[0px] before:h-[0px] before:border-8 before:border-b-white before:border-t-transparent before:border-l-transparent before:border-r-transparent before:content-[''] before:top-[-16px] before:right-[24px]`}
    ></div>
  );
}

export default FavoriteModal;
