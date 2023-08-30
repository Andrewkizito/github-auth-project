// Hooks
import { useEffect } from "react";

// Router
import { redirect } from "react-router-dom";

// UI Components
import { IoLogoGithub } from "react-icons/io5";
import { GITHUB_CLIENT_ID } from "../config/oauth";
import { useAuth } from "../utils/useAuth";

const Login = () => {
  const auth = useAuth();

  function handleAuth() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
  }

  useEffect(() => {
    // Redirecting user if their auth token still exists
    if (auth.token) {
      redirect("/dashboard");
    }
  }, [auth]);

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      <div className="absolute top-1/2 left-1/2 w-96 shadow-lg bg-white -translate-x-1/2 -translate-y-1/2 px-5 py-10 flex flex-col items-center justify-center gap-4">
        <img src="/vite.svg" alt="" className="h-12" />
        <h2 className="text-slate-800 text-xl">Log Into Your Account</h2>
        <div
          onClick={handleAuth}
          className="border-gray-200 border py-3 w-full flex justify-center items-center gap-2 rounded-lg duration-300 cursor-pointer group hover:bg-slate-900"
        >
          <IoLogoGithub className="text-gray-700 text-3xl group-hover:text-white duration-300" />
          <p className="text-base font-medium text-slate-700 group-hover:text-white duration-300">
            Continue With Github
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
