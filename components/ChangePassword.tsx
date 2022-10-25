import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { editPassword } from "../store/actions/actions";
import { addNotification } from "../store/reducers/main";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";

type FormType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

function ChangePassword() {
  const { register, watch, reset } = useForm<FormType>();
  const {
    data: { password, email },
  } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  function onSubmit() {
    if (watch().oldPassword !== password) {
      dispatch(
        addNotification(
          "Parola veche a fost introdusă incorect. Te rugăm să o introduci din nou."
        )
      );
      return;
    }
    if (watch().newPassword !== watch().confirmPassword) {
      dispatch(
        addNotification("Te rugăm să te asiguri că parolele corespund.")
      );
      return;
    }
    dispatch(editPassword({ email, password: watch().newPassword }));
  }

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
          type="password"
          className="border-[1px] rounded border-gray outline-0 w-full py-1 px-2"
          {...register("oldPassword")}
        />
      </div>
      <div className="flex flex-col m:flex-row gap-y-1 m:gap-y-0 gap-x-7 mt-5">
        <p className="font-semibold m:text-right m:max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
          Parola noua
        </p>

        <input
          type="password"
          className="border-[1px] rounded border-gray outline-0 w-full py-1 px-2"
          {...register("newPassword")}
        />
      </div>
      <div className="flex gap-x-7 mt-5 flex-col m:flex-row gap-y-1 m:gap-y-0 m:items-center">
        <p className="font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
          Confirma parola noua
        </p>

        <input
          type="password"
          className="border-[1px] rounded border-gray outline-0 w-full py-1 px-2"
          {...register("confirmPassword")}
        />
      </div>
      <div className="m:flex gap-x-[3rem] mt-7">
        <div className="flex-[1_0_123px] max-w-[123px]"></div>
        <div className="flex flex-col gap-y-5 w-[130px]">
          <Button
            onClick={() => onSubmit()}
            modifiers={`${
              !watch().confirmPassword ||
              !watch().oldPassword ||
              !watch().newPassword
                ? "opacity-30"
                : "opacity-1"
            } bg-blue text-white text-sm font-semibold rounded py-1 px-3`}
            disabled={
              !watch().confirmPassword ||
              !watch().oldPassword ||
              !watch().newPassword
            }
          >
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
