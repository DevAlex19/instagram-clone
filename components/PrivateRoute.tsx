import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkUser } from "../store/actions/actions";
import { RootState, useAppDispatch } from "../store/store/store";
import Loading from "./Loading";

type PrivateRouteType = {
  children: JSX.Element;
};

const ROUTES = ["/login", "/register", "/forgotPassword"];

function PrivateRoute({ children }: PrivateRouteType) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { data } = useSelector((state: RootState) => state.user);
  const protectedRoute = ROUTES.indexOf(router.pathname) === -1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenCookie = document.cookie;
    let timeout: ReturnType<typeof setTimeout>;

    if (tokenCookie) {
      if (!data.email) {
        const token = tokenCookie.split("=")[1];
        dispatch(checkUser(token));
        timeout = setTimeout(() => setLoading(false), 100);
      }
    } else {
      if (router.pathname === "/") {
        router.push("/login");
      }
      timeout = setTimeout(() => setLoading(false), 100);
      return;
    }

    if (!data.email && !protectedRoute) {
      router.push("/");
    }
    () => clearTimeout(timeout);
  }, [loading, router.pathname]);

  if (loading) {
    return <Loading />;
  }

  return children;
}

export default PrivateRoute;
