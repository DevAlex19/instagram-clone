import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";
import Input from "./Input";

function ResetPassword() {
  const router = useRouter();

  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto mt-20 mb-40">
      <div className="px-10 pt-5 bg-white border-1 border-gray rounded-sm text-center flex flex-col items-center">
        <div
          style={{ width: "90px", height: "90px" }}
          className="border-black border-2 rounded-full p-2"
        >
          <Image src="/images/lock.png" width="80px" height="80px" />
        </div>
        <p className="font-semibold mt-3">Probleme la conectare?</p>
        <p className="text-gray text-sm mt-3 mb-2">
          Introdu adresa de e-mail, numărul de telefon sau numele de utilizator
          şi îţi vom trimite un link pentru a recăpăta acces la cont.
        </p>
        <Input width="100" labelText="E-mail" />
        <Button
          width="100"
          modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-4 py-1"
        >
          Trimite linkul de conectare
        </Button>
        <Button width="100" modifiers="m-auto text-darkBlue text-xs mt-4 mb-8">
          Nu poti reseta parola?
        </Button>
        <div className="flex items-center gap-x-3 mb-3">
          <div
            style={{ width: "120px", height: "1px" }}
            className="bg-gray"
          ></div>
          <p className="text-gray text-sm font-semibold">SAU</p>
          <div
            style={{ width: "120px", height: "1px" }}
            className="bg-gray"
          ></div>
        </div>
        <Button
          onClick={() => router.push("/register")}
          modifiers="text-sm font-semibold mb-20"
        >
          Creeaza un cont nou
        </Button>
      </div>
      <div>
        <Button
          onClick={() => router.push("/")}
          width="100"
          modifiers="text-sm font-semibold py-3 bg-grayish border-x-1 border-b-1 border-gray rounded-sm"
        >
          Inapoi la conectare
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
