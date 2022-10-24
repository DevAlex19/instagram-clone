import { useRouter } from "next/router";
import { createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { removeNotification } from "../store/reducers/main";
import { RootState, useAppDispatch } from "../store/store/store";

function ToastNotification() {
  const NotificationContext = createContext(null);
  const { notification } = useSelector((state: RootState) => state);
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeout: any;
    if (notification[0]) {
      timeout = setTimeout(() => {
        dispatch(removeNotification());
      }, 4900);
    }

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (notification[0]) {
      dispatch(removeNotification());
    }
  }, [pathname]);

  return (
    <NotificationContext.Provider value={null}>
      {notification[0] ? (
        <div className="bg-[#262626] text-white text-sm p-3 fixed bottom-0 left-0 w-full animate-message">
          {notification[0]}
        </div>
      ) : null}
    </NotificationContext.Provider>
  );
}

export default ToastNotification;
