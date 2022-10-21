import { faClose, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store/store";
import FavoriteModal from "./FavoriteModal";
import MenuDropdown from "./MenuDropdown";
import UploadModal from "./UploadModal";

function Navbar() {
  const router = useRouter();
  const { data } = useSelector((state: RootState) => state.user);
  const [uploadModal, setUploadModal] = useState(false);
  const [favoriteModal, setFavoriteModal] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);

  return (
    <div
      style={{ borderBottom: "1px solid #dbdbdb" }}
      className="flex bg-white"
    >
      {router.pathname !== "/login" && router.pathname !== "/register" ? (
        <div
          style={{ width: "980px" }}
          className="flex items-center bg-white mx-auto pt-4 pb-2 px-3"
        >
          <div
            style={{ flex: "1", minWidth: "100px", minHeight: "30px" }}
            className="flex gap-x-2"
          >
            <Image
              onClick={() => router.push("/")}
              src="/images/logo.png"
              width="100px"
              height="30px"
              className="cursor-pointer"
            />
            {router.pathname === "/" ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-xs mt-1 cursor-pointer"
              />
            ) : null}
          </div>
          {data.email ? (
            <div
              style={{ maxWidth: "270px", flex: "1 0 auto" }}
              className=" mx-4 relative hidden sm:block"
            >
              <input
                type="text"
                placeholder="Cauta"
                className="outline-0 rounded-lg"
                style={{
                  background: "#efefef",
                  padding: "0.4rem 1rem",
                  width: "100%",
                }}
              />
              <div
                style={{
                  transform: "translateY(-50%)",
                  background: "#dbdbdb",
                  width: "15px",
                  height: "15px",
                }}
                className="rounded-full absolute top-2/4 right-2.5 flex items-center justify-center cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faClose}
                  style={{ color: "#efefef" }}
                  className="text-xs"
                />
              </div>
            </div>
          ) : null}
          {data.email ? (
            <div className="flex gap-x-5 justify-end" style={{ flex: "1" }}>
              <UploadModal modal={uploadModal} setModal={setUploadModal} />
              <div
                style={{ minWidth: "25px", minHeight: "25px" }}
                className="cursor-pointer relative"
                onClick={() => router.push("/")}
              >
                <Image
                  src={
                    router.pathname === "/" &&
                      !uploadModal &&
                      !favoriteModal &&
                      !menuDropdown
                      ? "/images/home-solid.png"
                      : "/images/home.png"
                  }
                  width="25px"
                  height="25px"
                />
              </div>
              <div
                style={{ minWidth: "25px", minHeight: "25px" }}
                className="cursor-pointer"
                onClick={() => router.push("/inbox")}
              >
                <Image
                  src={
                    router.pathname === "/inbox" &&
                      !uploadModal &&
                      !favoriteModal &&
                      !menuDropdown
                      ? "/images/plane-solid.png"
                      : "/images/plane.png"
                  }
                  width="25px"
                  height="25px"
                />
              </div>
              <div
                style={{ minWidth: "25px", minHeight: "25px" }}
                className="cursor-pointer"
                onClick={() => setUploadModal(true)}
              >
                <Image
                  src={
                    uploadModal ? "/images/plus-solid.png" : "/images/plus.png"
                  }
                  width="25px"
                  height="25px"
                />
              </div>
              <div
                style={{ minWidth: "25px", minHeight: "25px" }}
                className="cursor-pointer"
                onClick={() => router.push("/explore")}
              >
                <Image
                  src={
                    router.pathname === "/explore" &&
                      !uploadModal &&
                      !favoriteModal &&
                      !menuDropdown
                      ? "/images/compass-solid.png"
                      : "/images/compass.png"
                  }
                  width="25px"
                  height="25px"
                />
              </div>
              <div
                style={{ minWidth: "25px", minHeight: "25px" }}
                className="relative"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuDropdown(false);
                  setFavoriteModal((prev) => !prev);
                }}
              >
                <Image
                  className="cursor-pointer "
                  src={
                    favoriteModal
                      ? "/images/heart-solid.png"
                      : "/images/heart.png"
                  }
                  width="25px"
                  height="25px"
                />
                <FavoriteModal
                  modal={favoriteModal}
                  setModal={setFavoriteModal}
                />
              </div>
              <div
                style={{
                  border: menuDropdown ? "1px solid black" : "",
                  width: "28px",
                  height: "28px",
                  minWidth: "28px",
                  minHeight: "28px",
                }}
                className="rounded-full relative"
              >
                <Image
                  src={data.profile ? data.profile : "/images/avatar.png"}
                  width="28px"
                  height="28px"
                  className="cursor-pointer rounded-full"
                  objectFit="cover"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavoriteModal(false);
                    setMenuDropdown((prev) => !prev);
                  }}
                />
                <MenuDropdown modal={menuDropdown} setModal={setMenuDropdown} />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
