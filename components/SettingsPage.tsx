import { useState } from "react";
import Button from "./Button";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";

const LINKS = [
  "Editeaza profilul",
  "Schimba parola",
  "Aplicatii si site-uri web",
  "Notificari prin email",
  "Notificari push",
  "Administreaza contactele",
  "Confidentialitate si securitate",
  "Reclame",
  "Supraveghere",
  "Activitati de conectare",
  "E-mailuri de la Instagram",
  "Ajutor",
];

function SettingsPage() {
  const [page, setPage] = useState(0);

  function getPage() {
    switch (page) {
      case 0:
        return <EditProfile />;
      case 1:
        return <ChangePassword />;
    }
  }

  return (
    <div className="flex border-[1px] border-gray mt-8 max-w-[950px] mx-auto rounded mb-10 bg-white">
      <div className="hidden m:block max-w-[240px]">
        {LINKS.map((link, index) => {
          return (
            <p
              className={`${page === index ? "font-semibold" : "font-base"} ${
                page === index ? "border-l-2" : "border-l-2 border-transparent"
              } cursor-pointer px-7 py-3 hover:bg-gray2 hover:border-l-2 hover:border-l-grayish`}
              key={index}
              onClick={() => {
                if (index === 0) {
                  setPage(0);
                  return;
                }
                if (index === 1) {
                  setPage(1);
                  return;
                }
              }}
            >
              {link}
            </p>
          );
        })}
        <Button modifiers="text-blue text-sm font-semibold px-7 mt-3 mb-8">
          Treci la un cont profesional
        </Button>
        <div className="border-t-[1px] border-gray p-7">
          <Button modifiers="font-semibold text-blue">
            Administrare conturi
          </Button>
          <p className="text-xs mt-3 text-gray">
            Stabileşte setările experienţelor interconectate pe Instagram, în
            aplicaţia Facebook şi pe Messenger, inclusiv distribuirea poveştilor
            şi a postărilor şi conectarea.
          </p>
        </div>
      </div>
      <div className="border-l-[1px] border-gray w-full">{getPage()}</div>
    </div>
  );
}

export default SettingsPage;
