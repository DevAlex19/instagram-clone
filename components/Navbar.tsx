import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/login" && router.pathname !== "/register" ? (
        <div className="flex justify-center bg-white items-center py-4 px-3">
          <div style={{ width: "920px" }} className="flex items-center">
            <Image
              onClick={() => router.push("/")}
              src="/images/logo.png"
              width="100px"
              height="30px"
              className="cursor-pointer"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
