import Image from "next/image";
import Button from "./Button";

function Suggestions() {
  return (
    <div style={{ width: "40%" }} className="mt-8 hidden lg:block">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-4 text-sm items-center">
          <Image
            src="/images/avatar.png"
            width="55px"
            height="55px"
            className="rounded-full cursor-pointer"
          />
          <div>
            <p className="font-semibold cursor-pointer">name</p>
            <p>userbane</p>
          </div>
        </div>
        <Button modifiers="text-blue font-medium text-xs rounded">
          Schimba
        </Button>
      </div>
      <div className="flex justify-between text-sm mt-4">
        <p className="font-semibold text-gray">Sugestii pentru tine</p>
        <Button modifiers="text-xs font-semibold">Vezi tot</Button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between mb-5">
          <div className="flex text-sm gap-x-3">
            <Image
              src="/images/avatar.png"
              width="35px"
              height="35px"
              className="rounded-full cursor-pointer"
            />
            <div>
              <p className="font-semibold cursor-pointer">name</p>
            </div>
          </div>
          <Button modifiers="text-blue font-medium text-xs rounded">
            Urmareste
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
