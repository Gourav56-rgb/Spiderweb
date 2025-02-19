import { AiOutlineInfoCircle, AiOutlineBell } from "react-icons/ai";
import asad from "../assets/muhammad-asad-picture.jpeg";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-6 py-4">
      <div className="flex items-center gap-4 relative">
        <button className="text-white p-2 cursor-pointer relative">
          <AiOutlineInfoCircle size={25} />
        </button>
        <button className="text-white p-2 cursor-pointer relative">
          <AiOutlineBell size={25} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-pink-300 rounded-full"></span>
        </button>
      </div>
      <div className="flex items-center gap-4 text-white mx-6">
        <div className="flex flex-col text-right">
          <span className="">Hi, <span className="text-green-300">Muhammad Asad</span></span>
          <span className="text-left">welcome back!</span>
        </div>
        <img
          src={asad} 
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-pink-300 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
