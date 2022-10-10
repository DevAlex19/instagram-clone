import { useState } from "react";
import ChooseDate from "../components/ChooseDate";
import ConfirmEmail from "../components/ConfirmEmail";
import SignUp, { FormType } from "../components/SignUp";

export type createUserType = {
  email: string;
  password: string;
  name: string;
  username: string;
  date?: string;
};

export type RegisterType = {
  setPage: (page: number) => void;
  page?: number;
  setCreateUser: (createUser: createUserType) => void;
  createUser?: any;
};

function Register() {
  const [page, setPage] = useState(0);
  const [createUser, setCreateUser] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  function getPage() {
    switch (page) {
      case 0:
        return <SignUp setPage={setPage} setCreateUser={setCreateUser} />;
      case 1:
        return (
          <ChooseDate
            setPage={setPage}
            setCreateUser={setCreateUser}
            createUser={createUser}
          />
        );
      case 2:
        return <ConfirmEmail setPage={setPage} setCreateUser={setCreateUser} />;
    }
  }

  return <div>{getPage()}</div>;
}

export default Register;
