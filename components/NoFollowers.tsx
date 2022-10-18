import Image from "next/image";
import Button from "./Button";

function NoFollowers() {
  return (
    <div style={{ minHeight: "84vh" }} className="flex justify-center">
      <div className="mt-5">
        <p className="font-semibold">Sugestii pentru tine</p>
        <div
          style={{ width: "450px", minWidth: "200px" }}
          className="bg-white border-1 border-gray mt-3 py-3 px-4 rounded-sm"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/images/avatar.png"
                width="40px"
                height="40px"
                className="rounded-full cursor-pointer"
              />
              <div className="text-sm">
                <p className="font-semibold cursor-pointer">nume</p>
                <p>prenume</p>
              </div>
            </div>
            <Button modifiers="bg-blue text-white font-medium text-sm rounded py-1.5 px-5">
              Urmareste
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoFollowers;
