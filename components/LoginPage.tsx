import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";
import HomePageCarousel from "./HomePageCarousel";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store/store";
import { getUserLogin } from "../store/actions/actions";

type SubmitType = {
  email: string;
  password: string;
};

function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<SubmitType>();

  function onSubmit({ email, password }: SubmitType) {
    dispatch(getUserLogin({ email, password })).then((res) => {
      if (res.payload.user) {
        const { token } = res.payload.user;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        document.cookie = `token=${token}; expires=${date.toUTCString()}`;
        router.push("/");
      } else {
        setError("email", {
          type: "custom",
          message:
            "Numele de utilizator pe care l-ai introdus nu aparţine unui cont. Te rugăm să verifici numele de utilizator şi să încerci din nou.",
        });
      }
    });
  }

  return (
    <div
      style={{ height: "90vh" }}
      className="w-full lg:flex lg:justify-center"
    >
      <div className="flex justify-center lg:items-center lg:gap-x-10">
        <HomePageCarousel />
        <div style={{ width: "80%", maxWidth: "350px" }}>
          <div className="flex flex-col pt-12 xs:bg-white xs:border-1 xs:border-gray mt-20 lg:m-0">
            <div className="mx-auto mb-5">
              <Image
                src="/images/logo.png"
                width="200px"
                height="50px"
                objectFit="contain"
              />
            </div>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                width="80"
                labelText="Telefon, e-mail sau nume de utilizator"
                value={register("email", {
                  required: { value: true, message: "" },
                })}
              />
              <Input
                width="80"
                labelText="Parola"
                value={register("password", {
                  required: { value: true, message: "" },
                })}
                type="password"
              />
              <Button
                width="80"
                modifiers={`bg-blue text-white font-medium text-s rounded mt-4 py-1 ${
                  !watch().email ||
                  !watch().password ||
                  errors.email ||
                  errors.password
                    ? `opacity-30`
                    : `opacity-100`
                }`}
                disabled={
                  errors.email ||
                  errors.password ||
                  !watch().email ||
                  !watch().password
                    ? true
                    : false
                }
              >
                Conectare
              </Button>
            </form>
            <p
              style={{ maxWidth: "270px" }}
              className="text-sm text-center mx-auto mt-5 text-red-600"
            >
              {errors.email?.message as string}
            </p>
            <Button
              width="80"
              modifiers="m-auto text-darkBlue text-xs mt-6 mb-5"
              onClick={() => router.push("/forgotPassword")}
            >
              Ai uitat parola?
            </Button>
          </div>
          <div
            style={{ fontSize: "0.9rem" }}
            className="mt-4 text-center py-5 xs:bg-white xs:border-1 xs:border-gray"
          >
            <p>
              Nu ai un cont?
              <span
                onClick={() => router.push("/register")}
                className="text-blue font-medium cursor-pointer ml-1"
              >
                Inscrie-te
              </span>
            </p>
          </div>
          <p className="text-center mt-5" style={{ fontSize: "0.9rem" }}>
            Instaleaza aplicatia.
          </p>
          <div className="flex justify-center gap-x-2 mt-5">
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
      </div>
    </div>
  );
}
export default HomePage;
