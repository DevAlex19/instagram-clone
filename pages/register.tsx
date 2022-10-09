import { useState } from "react";
import ChooseDate from "../components/ChooseDate";
import ConfirmEmail from "../components/ConfirmEmail";
import SignUp from "../components/SignUp";

export type RegisterType = {
  setPage: (page: number) => void;
  page?: number;
};

function Register() {
  const [page, setPage] = useState(0);

  function getPage() {
    switch (page) {
      case 0:
        return <SignUp setPage={setPage} />;
      case 1:
        return <ChooseDate setPage={setPage} />;
      case 2:
        return <ConfirmEmail setPage={setPage} />;
    }
  }

  return <div>{getPage()}</div>;
}

export default Register;
