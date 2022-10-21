import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changeAvatar } from "../store/actions/actions";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";

function EditProfile() {
  const dispatch = useAppDispatch();
  const { data: { email, profile } } = useSelector((state: RootState) => state.user);

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();
      data.append('file', e.target.files[0])
      data.append('upload_preset', 'upload_posts')
      data.append('cloud_name', process.env.NEXT_PUBLIC_CLOUD_NAME as string)
      dispatch(changeAvatar({ data, email }))
    }

  }


  return (
    <div className="p-5 m:p-8 bg-white">
      <div className="flex items-center gap-x-8 ml-0 m:ml-[100px]">
        <div className="w-[40px] h-[40px] relative">
          <Image
            src={profile ? profile : "/images/avatar.png"}
            width="40px"
            height="40px"
            className="rounded-full cursor-pointer"
            objectFit="cover"
          />
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0"
            onChange={uploadAvatar}
          />
        </div>
        <div>
          <p className="text-xl">name</p>
          <div className="w-[190px] h-[20px] relative">
            <input
              type="file"
              className="absolute left-0 top-0 w-full h-full opacity-0"
              onChange={uploadAvatar}
            />
            <p className="text-blue text-sm font-semibold">
              Schimba fotografia de profil
            </p>
          </div>
        </div>
      </div>
      <form><div className="flex flex-col gap-y-1 m:gap-y-0 m:flex-row gap-x-7 mt-5">
        <p className="font-semibold m:text-right max-w-none m:max-w-[143px] m:flex-[1_0_143px]">
          Nume
        </p>
        <div className="max-w-[370px]">
          <input
            type="text"
            className="border-[1px] rounded border-gray outline-0 w-full py-1"
          />
          <p className="text-xs text-gray mt-4">
            Ajută-i pe alţii să descopere contul tău folosind acelaşi nume după
            care eşti cunoscut: numele complet, porecla sau numele afacerii.
          </p>
          <p className="text-xs text-gray mt-4">
            Poţi schimba numele doar de două ori în decurs de 14 zile.
          </p>
        </div>
      </div>
        <div className="flex flex-col m:flex-row gap-y-1 m:gap-y-0 gap-x-7 mt-5">
          <p className="font-semibold m:text-right m:max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
            Nume de utilizator
          </p>
          <div className="max-w-[370px]">
            <input
              type="text"
              className="border-[1px] rounded border-gray outline-0 w-full py-1"
            />
            <p className="text-xs text-gray mt-4">
              În majoritatea cazurilor, vei mai avea la dispoziţie încă 14 zile
              pentru a reveni la numele de utilizator gunghbdg.{" "}
              <span className="text-blue">Află mai multe</span>
            </p>
          </div>
        </div>
        <div className="flex gap-x-7 mt-5 flex-col m:flex-row gap-y-1 m:gap-y-0 ">
          <p className="font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
            Site web
          </p>
          <div className="max-w-[370px]">
            <input
              type="text"
              className="border-[1px] rounded border-gray outline-0 w-full py-1"
            />
            <p className="text-xs text-gray mt-4">
              Editarea linkurilor este posibilă doar pe mobil. Accesează aplicaţia
              Instagram şi editează profilul pentru a schimba site-urile web din
              biografie.
            </p>
          </div>
        </div>
        <div className="flex gap-x-7 mt-5 flex-col m:flex-row gap-y-1 m:gap-y-0">
          <p className="font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
            Biografie
          </p>
          <div className="w-[370px] flex flex-col">
            <textarea className="border-[1px] rounded border-gray outline-0 max-h-[70px] py-1 w-full"></textarea>
            <p className="text-xs text-gray mt-4">0/150</p>
          </div>
        </div>
        <div className="flex m:items-end gap-x-7 mt-8 flex-col m:flex-row gap-y-1 m:gap-y-0">
          <p className="hidden m:block font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
            E-mail
          </p>
          <div className="max-w-[370px] flex flex-col-reverse">
            <input
              type="text"
              className="m:mt-4 border-[1px] rounded border-gray outline-0 w-full py-1"
            />
            <p className="block m:hidden font-semibold mt-3 mb-1">E-mail</p>
            <p className="text-xs text-gray mt-1">
              Completează informaţiile personale chiar dacă acest cont este
              folosit pentru o afacere, un animal de companie sau altceva.
              Informaţiile nu vor apărea în profilul tău public.
            </p>
            <p className="font-semibold text-gray text-sm">
              Informatii personale
            </p>
          </div>
        </div>
        <div className="flex m:items-end gap-x-7 mt-4 flex-col m:flex-row gap-y-1 m:gap-y-0">
          <p className="font-semibold m:text-right m:flex-[1_0_143px] max-w-[143px]">
            Numar de telefon
          </p>
          <input
            type="text"
            className="max-w-[370px] border-[1px] rounded border-gray outline-0 w-full py-1"
          />
        </div>
        <div className="flex m:items-end gap-x-7 mt-4 flex-col m:flex-row gap-y-1 m:gap-y-0">
          <p className="font-semibold m:text-right max-w-[123px] m:ml-5 m:flex-[1_0_123px]">
            Gen
          </p>
          <input
            type="text"
            className="max-w-[370px] border-[1px] rounded border-gray outline-0 w-full py-1"
          />
        </div>
        <div className="flex justify-center gap-x-[5rem] md:ml-[10rem] mt-10">
          <Button modifiers="py-1 px-3 bg-blue text-white rounded text-sm font-semibold">
            Trimite
          </Button>
          <Button modifiers="text-blue text-sm font-semibold">
            Dezactiveaza-mi contul temporar
          </Button>
        </div></form>

    </div>
  );
}

export default EditProfile;
