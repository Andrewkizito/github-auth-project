// UI Components
import { useCookies } from "react-cookie";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "../../utils/useAuth";

const Header = () => {
  const auth = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies();

  function logout() {
    setCookie("github_access_token", null);
    auth.updateToken(null);
  }

  return (
    <div className="w-full fixed top-0 left-0 h-20 shadow-md bg-white flex items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <img src="/vite.svg" alt="" className="h-10" />
        <ul className="flex items-center gap-3">
          <IoLogOutOutline
            className="text-gray-600 text-2xl cursor-pointer hover:text-red"
            onClick={logout}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
