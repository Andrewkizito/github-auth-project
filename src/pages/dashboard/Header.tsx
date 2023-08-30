// UI Components
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full fixed h-20 shadow-md bg-white flex items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <img src="/vite.svg" alt="" className="h-10" />
        <ul className="flex items-center gap-3">
          <IoLogOutOutline className="text-gray-600 text-2xl" />
          <IoPersonCircleOutline className="text-gray-600 text-2xl" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
