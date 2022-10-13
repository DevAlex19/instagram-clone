import Image from "next/image";

function Loading() {
  return (
    <div style={{ minHeight: "83vh" }} className="relative mb-10">
      <div
        style={{ transform: "translate(-50%,-50%)" }}
        className="absolute top-2/4 left-2/4"
      >
        <Image src="/images/logo2.png" width="70px" height="60px" />
      </div>

      <div
        style={{ transform: "translateX(-50%)" }}
        className="absolute bottom-0 left-2/4"
      >
        <p
          style={{ width: "100px" }}
          className="text-gray font-semibold flex items-center justify-center text-sm"
        >
          from
        </p>
        <Image src="/images/meta.png" width="100px" height="40px" />
      </div>
    </div>
  );
}

export default Loading;
