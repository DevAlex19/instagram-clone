import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { createUserType, RegisterType } from "../pages/register";
import Button from "./Button";

const MONTHS = [
  "ianuarie",
  "februarie",
  "martie",
  "aprilie",
  "mai",
  "iunie",
  "iulie",
  "august",
  "septembrie",
  "octombrie",
  "noiembrie",
  "decembrie",
];

function ChooseDate({ setPage, setCreateUser, createUser }: RegisterType) {
  const router = useRouter();
  const dateRef = useRef<any>(null);

  function getYears() {
    const date = new Date().getFullYear();
    const years = [];
    for (let i = date; i >= date - 50; i--) {
      years.push(i);
    }
    return years;
  }

  return (
    <div
      style={{ maxWidth: "370px", height: "90vh" }}
      className="mx-auto text-center flex flex-col justify-center"
    >
      <div className="xs:bg-white xs:border-1 xs:border-gray pt-4 pb-7 px-9">
        <div>
          <Image
            src="/images/birthdayCake.png"
            width="120px"
            height="80px"
            objectFit="cover"
          />
        </div>
        <p className="font-semibold mt-2">Adaugă ziua de naştere</p>
        <p className="text-sm mt-3">
          Nu va face parte din profilul tău public.
        </p>
        <p className="text-sm text-blue mb-3">
          De ce trebuie sa precizez data nasterii?
        </p>
        <div ref={dateRef} className="flex gap-x-2 justify-center">
          <select className="focus:border-0 outline-0 border-1 border-grayish rounded px-1 py-2 text-gray text-sm">
            {MONTHS.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
          <select className="focus:border-0 outline-0 border-1 border-grayish rounded px-1 py-2 text-gray text-sm">
            {Array(30)
              .fill(0)
              .map((item, index) => (
                <option key={index}>{index + 1}</option>
              ))}
          </select>
          <select className="focus:border-0 outline-0 border-1 border-grayish rounded px-1 py-2 text-gray text-sm">
            {getYears().map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
        <p className="text-gray text-xs mt-6">
          Foloseşte data ta de naştere, chiar dacă acest cont este pentru o
          afacere, un animal sau altceva
        </p>
        <Button
          width="100"
          modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-4 py-1"
          onClick={() => {
            const getDate = [...dateRef.current.querySelectorAll("select")]
              .map((elem) => elem.value)
              .join(" ");
            console.log(new Date("january 1 2022"));
            setCreateUser({
              ...createUser,
              date: new Date(getDate).getTime().toString(),
            });

            setPage(2);
          }}
        >
          Inainte
        </Button>
        <Button
          onClick={() => setPage(0)}
          width="100"
          modifiers="mt-3 text-blue font-semibold"
        >
          Inapoi
        </Button>
      </div>
      <div
        style={{ fontSize: "0.9rem", width: "100%" }}
        className="mt-2 text-center py-5 xs:bg-white xs:border-1 xs:border-gray"
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

export default ChooseDate;
