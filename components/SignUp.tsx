import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { RegisterType } from "../pages/register";
import Button from "./Button";
import Input from "./Input";

export type FormType = {
  email: string;
  password: string;
  name: string;
  username: string;
};

function SignUp({ setPage, setCreateUser }: RegisterType) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<FormType>();
  async function onSubmit({ email, password, name, username }: FormType) {
    const getUser = await fetch("http://localhost:3002/getUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
      }),
    });

    const result = await getUser.json();

    if (result.getEmail?.email) {
      setError("email", { type: "custom", message: "" });
      return;
    }
    if (result.getUsername?.username) {
      setError("username", { type: "custom", message: "" });
      return;
    }

    setCreateUser({ email, password, name, username });
    setPage(1);
  }

  return (
    <div className="mx-1 flex flex-col items-center text-center mt-10">
      <div
        style={{ maxWidth: "350px" }}
        className="xs:bg-white xs:border-1 xs:border-gray p-10"
      >
        <Image src="/images/logo.png" width="170px" height="50px" />
        <p
          style={{ maxWidth: "230px" }}
          className="text-gray font-semibold mx-auto mt-2 mb-7 text-lg leading-5"
        >
          Înscrie-te pentru a vedea fotografiile şi clipurile video publicate de
          prietenii tăi.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            value={register("email", {
              validate: (value) => {
                const regex =
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regex.test(value)) {
                  return false;
                }
                return true;
              },
            })}
            labelText="Adresa de e-mail"
            icon={
              watch().email && errors.email
                ? faCircleXmark
                : watch().email && !errors.email
                ? faCircleCheck
                : null
            }
          />
          <Input
            value={register("name", { required: { message: "", value: true } })}
            labelText="Nume complet"
            icon={
              watch().name && errors.name
                ? faCircleXmark
                : watch().name && !errors.name
                ? faCircleCheck
                : null
            }
          />
          <Input
            value={register("username", {
              required: { message: "", value: true },
            })}
            icon={
              watch().username && errors.username
                ? faCircleXmark
                : watch().username && !errors.username
                ? faCircleCheck
                : null
            }
            labelText="Nume de utilizator"
          />
          <Input
            value={register("password", {
              validate: (value) => {
                if (value.length < 6) {
                  return false;
                }
                return true;
              },
            })}
            labelText="Parola"
            icon={
              watch().password && errors.password
                ? faCircleXmark
                : watch().password && !errors.password
                ? faCircleCheck
                : null
            }
            type="password"
          />
          <p className="text-gray text-xs mt-5">
            Este posibil ca persoanele care folosesc serviciul nostru să fi
            încărcat datele tale de contact pe Instagram.{" "}
            <span className="font-bold">Află mai multe</span>
          </p>
          <p className="text-gray text-xs mt-5">
            Dacă te înscrii, îţi exprimi acordul cu{" "}
            <span className="font-bold">Condiţiile de utilizare</span>. Din{" "}
            <span className="font-bold">Politica de confidenţialitate</span>
            poţi afla cum colectăm, folosim şi distribuim datele tale, iar din
            <span className="font-bold">
              Politica de utilizare a modulelor cookie
            </span>{" "}
            poţi afla cum utilizăm modulele cookie şi tehnologii similare.
          </p>
          <Button
            width="100"
            modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-6 py-1"
          >
            Inainte
          </Button>
        </form>
      </div>
      <div
        style={{ fontSize: "0.9rem", width: "100%", maxWidth: "350px" }}
        className=" text-center py-5 xs:bg-white xs:border-1 xs:border-gray xs:mt-3"
      >
        <p>
          Ai un cont?
          <span
            onClick={() => router.push("/")}
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

export default SignUp;
