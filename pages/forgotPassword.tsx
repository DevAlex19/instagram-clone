import { useState } from "react";
import PasswordSent from "../components/PasswordSent";
import ResetPassword from "../components/ResetPassword";

type PageType = {
  number: number;
  value: string;
};

export type ForgotPasswordType = {
  setPage: (page: PageType) => void;
  page: PageType;
};

function ForgotPassword() {
  const [page, setPage] = useState({ number: 0, value: "" });

  function getPage() {
    switch (page.number) {
      case 0:
        return <ResetPassword setPage={setPage} page={page} />;
      case 1:
        return <PasswordSent setPage={setPage} page={page} />;
    }
  }

  return <>{getPage()}</>;
}

export default ForgotPassword;
