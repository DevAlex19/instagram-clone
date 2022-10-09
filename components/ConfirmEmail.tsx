import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { RegisterType } from "../pages/register";
import Button from "./Button";
import Input from "./Input";

function ConfirmEmail({ setPage }: RegisterType) {
  return (
    <div
      style={{ maxWidth: "350px", height: "90vh" }}
      className="mx-auto text-center flex flex-col justify-center"
    >
      <div className="xs:bg-white xs:border-1 xs:border-gray pt-4 pb-7 px-9">
        <FontAwesomeIcon className="text-6xl" icon={faEnvelope} />
        <p className="font-semibold mt-3">Enter Confirmation Code</p>
        <p className="leading-5 mt-4 mb-8">
          Enter the confirmation code we sent to test@gmail.com.{" "}
          <span>Resend code.</span>
        </p>
        <Input width="100" labelText="Confirmation Code" />
        <Button
          width="100"
          modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-6 py-1"
        >
          Inainte
        </Button>
        <Button width="100" modifiers="text-blue font-semibold mt-3">
          Inapoi
        </Button>
      </div>

      <div
        style={{ fontSize: "0.9rem", width: "100%" }}
        className=" text-center py-5 xs:bg-white xs:border-1 xs:border-gray xs:mt-3"
      >
        <p>
          Ai un cont?
          <span
            // onClick={() => router.push("/")}
            className="text-blue font-medium cursor-pointer ml-1"
          >
            Conecteaza-te
          </span>
        </p>
      </div>
      <p className="text-center mt-5" style={{ fontSize: "0.9rem" }}>
        Instaleaza aplicatia.
      </p>
      <div
        className="flex justify-center gap-x-2 mt-5"
        style={{ marginBottom: "5rem" }}
      >
        <Image
          src="/images/appStore.png"
          width="120px"
          height="50px"
          objectFit="contain"
        />
        <Image
          src="/images/googlePlay.png"
          width="120px"
          height="50px"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default ConfirmEmail;
