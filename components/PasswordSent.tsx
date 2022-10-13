import { useRouter } from "next/router";
import { ForgotPasswordType } from "../pages/forgotPassword";
import Button from "./Button";

function PasswordSent({ setPage, page }: ForgotPasswordType) {
  const router = useRouter();

  return (
    <div
      style={{ minHeight: "83vh" }}
      className="flex flex-col items-center justify-center bg-grayish"
    >
      <div
        style={{ maxWidth: "350px" }}
        className="bg-white text-center border-1 border-gray rounded-sm p-8"
      >
        <p className="font-semibold mb-2">E-mail trimis</p>
        <p className="text-sm text-gray mb-5">
          Am trimis un e-mail la {page.value} cu un link de reconectare la cont.
        </p>
        <Button
          onClick={() => {
            router.push("/login");
            setPage({ ...page, number: 0 });
          }}
          modifiers="text-sm text-blue"
        >
          OK
        </Button>
      </div>
    </div>
  );
}

export default PasswordSent;
