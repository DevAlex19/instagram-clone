import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ForgotPasswordType } from "../pages/forgotPassword";
import { checkEmail, sendResetPasswordEmail } from "../store/actions/actions";
import { useAppDispatch } from "../store/store/store";
import Button from "./Button";
import Input from "./Input";

function ResetPassword({ setPage, page }: ForgotPasswordType) {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  function onSubmit() {
    dispatch(checkEmail(watch().email)).then((res) => {
      if (res.payload) {
        dispatch(sendResetPasswordEmail(watch().email));
        setPage({ ...page, number: 1, value: watch().email });
      } else {
        setError("email", { type: "custom", message: "" });
      }
    });
  }
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
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            width="100"
            labelText="E-mail"
            value={register("email")}
            icon={
              watch().email && errors.email
                ? faCircleXmark
                : watch().email && !errors.email
                ? faCircleCheck
                : null
            }
          />
          <Button
            width="100"
            modifiers={`bg-blue m-auto text-white font-medium text-s rounded mt-4 py-1 ${
              !watch().email || errors.email ? `opacity-30` : `opacity-100`
            }`}
            disabled={errors.email || !watch().email ? true : false}
          >
            Trimite linkul de conectare
          </Button>
        </form>

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
