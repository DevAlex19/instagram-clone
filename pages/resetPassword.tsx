import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { resetPassword } from "../store/actions/actions";
import { useAppDispatch } from "../store/store/store";

type FormType = {
  password: string;
  confirmPassword: string;
};

function Reset() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<FormType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!router.query.token) {
      router.push("/login");
    }
  }, []);

  function onSubmit({ password, confirmPassword }: FormType) {
    if (password !== confirmPassword) {
      setError("password", { type: "custom", message: "" });
      return;
    }

    dispatch(
      resetPassword({ token: router.query.token as string, password })
    ).then((res) => {
      router.push("/login");
    });
  }

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center"
    >
      <div
        className="xs:bg-white xs:border-1 xs:border-gray text-center px-8 py-10"
        style={{ maxWidth: "350px" }}
      >
        <p className="font-semibold mb-3">Creeaza o parola complexa</p>
        <p className="text-gray text-sm mb-8">
          Parola trebuie sa contina cel putin sase caractere si sa includa o
          combinatie de cifre, litere si caractere speciale (!$@%).
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelText="Parola noua"
            value={register("password", { required: true })}
            type="password"
          />
          <Input
            labelText="Parola noua, din nou"
            value={register("confirmPassword", { required: true })}
            type="password"
          />
          <Button modifiers="bg-blue text-white font-medium text-s rounded mt-10 py-1 px-4">
            Reseteaza parola
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
