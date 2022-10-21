import {
  faBookmark,
  faCircleQuestion,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faGear, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store/store";
import Button from "./Button";

type MenuDropdownType = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

function MenuDropdown({ modal, setModal }: MenuDropdownType) {
  const dropdown = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const { data: { username } } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setModal(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <div
      ref={dropdown}
      className={`${modal ? "block" : "hidden"
        } absolute bg-white rounded-lg top-10 right-[-10px] w-[230px] shadow z-10`}
    >
      <div
        className="flex items-center gap-x-2.5 px-4 py-2.5 cursor-pointer hover:bg-grayish"
        onClick={() => router.push(`/${username}`)}
      >
        <FontAwesomeIcon icon={faCircleUser} />
        <p className="text-sm">Profil</p>
      </div>
      <div className="flex items-center gap-x-2.5 px-4 py-2.5 cursor-pointer hover:bg-grayish">
        <FontAwesomeIcon icon={faBookmark} />
        <p className="text-sm">Salvate</p>
      </div>
      <div
        className="flex items-center gap-x-2.5 px-4 py-2.5 cursor-pointer hover:bg-grayish"
        onClick={() => router.push("/settings")}
      >
        <FontAwesomeIcon icon={faGear} />
        <p className="text-sm">Setari</p>
      </div>
      <div className="flex items-center gap-x-2.5 px-4 py-2.5 cursor-pointer hover:bg-grayish">
        <FontAwesomeIcon icon={faCircleQuestion} />
        <p className="text-sm">Raporteaza o problema</p>
      </div>
      <div className="flex items-center gap-x-2.5 px-4 py-2.5 cursor-pointer hover:bg-grayish">
        <FontAwesomeIcon icon={faRotate} />
        <p className="text-sm">Schimba contul</p>
      </div>
      <div
        style={{ borderTop: "1px solid rgb(239, 239, 239)" }}
        className="hover:bg-grayish px-4 py-2"
        onClick={() => {
          document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          router.push("/login");
        }}
      >
        <Button width="100" modifiers="text-left text-sm">
          Deconectare
        </Button>
      </div>
    </div>
  );
}

export default MenuDropdown;
