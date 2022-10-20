import Image from "next/image";
import Button from "./Button";

function ChangePassword() {
  return (
    <div className="p-5 m:p-8 bg-white">
      <div className="flex items-center gap-x-8 ml-0 m:ml-[100px]">
        <div className="w-[40px] h-[40px] relative">
          <Image
            src="/images/avatar.png"
            width="40px"
            height="40px"
            className="rounded-full cursor-pointer"
          />
        </div>
        <p className="text-xl">name</p>
      </div>
      <div className="flex flex-col gap-y-1 m:gap-y-0 m:flex-row gap-x-7 mt-7">
        <p className="font-semibold m:text-right max-w-none m:max-w-[143px] m:flex-[1_0_143px]">
          Parola veche
        </p>
        <input
          type="text"
          className="border-[1px] rounded border-gray outline-0 w-full py-1"
        />
      </div>
      <div className="flex flex-col m:flex-row gap-y-1 m:gap-y-0 gap-x-7 mt-5">
        <p className="font-semibold m:text-right m:max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
          Parola noua
        </p>

        <input
          type="text"
          className="border-[1px] rounded border-gray outline-0 w-full py-1"
        />
      </div>
      <div className="flex gap-x-7 mt-5 flex-col m:flex-row gap-y-1 m:gap-y-0 m:items-center">
        <p className="font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
          Confirma parola noua
        </p>

        <input
          type="text"
          className="border-[1px] rounded border-gray outline-0 w-full py-1"
        />
      </div>
      <div className="m:flex gap-x-[3rem] mt-7">
        <div className="flex-[1_0_123px] max-w-[123px]"></div>
        <div className="flex flex-col gap-y-5 w-[130px]">
          <Button modifiers="bg-blue text-white text-sm font-semibold rounded py-1 px-3">
            Schimba parola
          </Button>
          <Button modifiers="text-sm text-blue font-semibold">
            Ai uitat parola?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
