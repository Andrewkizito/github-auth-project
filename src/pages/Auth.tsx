// Hooks
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAuth } from "../utils/useAuth";

// Github TokenS & API
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config/oauth";
import api from "../config/axios";

// UI Components
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";

// Notification Components
import { notificationConfig } from "../utils/reusables";
import { Store } from "react-notifications-component";

const Auth = () => {
  const auth = useAuth();
  const [, setCookie] = useCookies(["github_access_token"]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        api
          .post("/access_token", {
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code,
          })
          .then(({ data }) => {
            const accessToken = data.access_token;

            // Save the access token in a cookie that expires in 7 days
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            setCookie("github_access_token", accessToken, {
              expires: expirationDate,
              path: "/",
            });

            // Saving token in global state
            auth.updateToken(data.access_token);

            // Navigate to a different route
            window.location.href = "/dashboard";
          })
          .catch((error) => {
            Store.addNotification({
              ...notificationConfig,
              title: "Error",
              message: `Error getting access token: ${error}`,
              type: "danger",
            });
          });
      } else {
        Store.addNotification({
          ...notificationConfig,
          title: "Error",
          message: "No Code Found",
          type: "danger",
        });
        auth.updateToken(null);
      }

      setLoading(false);
    }
  }, [setCookie, loading, auth]);

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      <NavLink to={"/"}>
        <div className="p-5 flex items-center gap-4 group cursor-pointer">
          <IoArrowBackCircleOutline className="text-3xl text-slate-800 group-hover:text-primary" />
          <p className="text-lg text-slate-800 font-medium group-hover:text-primary">
            Back To Login
          </p>
        </div>
      </NavLink>
      <div className="absolute top-1/2 left-1/2 w-96 shadow-lg bg-white -translate-x-1/2 -translate-y-1/2 px-5 py-10 flex flex-col items-center justify-center gap-4">
        {loading ? (
          <>
            <h2 className="text-slate-800 text-xl">Creating Auth Token</h2>
            <Loader />
          </>
        ) : (
          <>
            <h2 className="text-xl">An Error Occured</h2>
            <button
              onClick={setLoading.bind(null, true)}
              className="py-2 px-5 bg-gray-700 text-white border-0 cursor-pointer rounded-md"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
