import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RegisterType } from "../pages/register";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { updateAccountStatus } from "../store/actions/actions";
import { useRouter } from "next/router";

function ConfirmEmail({ setPage }: RegisterType) {
  const { code, email, token } = useSelector(
    (state: RootState) => state.user.data
  );
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();

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
        <Input
          width="100"
          labelText="Confirmation Code"
          value={register("code")}
        />
        <Button
          width="100"
          modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-6 py-1"
          onClick={() => {
            if (code.toLowerCase() === watch().code.toLowerCase()) {
              dispatch(updateAccountStatus(email)).then((res) => {
                if (res.payload) {
                  const date = new Date();
                  date.setDate(date.getDate() + 30);
                  document.cookie = `token=${token}; expires=${date.toUTCString()}`;
                  router.push("/");
                  setPage(0);
                }
              });
            }
          }}
        >
          Inainte
        </Button>
        <Button
          onClick={() => setPage(1)}
          width="100"
          modifiers="text-blue font-semibold mt-3"
        >
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
