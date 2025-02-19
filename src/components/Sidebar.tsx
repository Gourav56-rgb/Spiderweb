import { useState } from "react";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        Events: true,
        Users: false,
    });

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="text-white w-64 h-[50rem] p-4 border-2 border-pink-300 rounded-xl ml-5 mt-10">
            <nav>
                <div>
                    <button
                        className="flex items-center justify-between w-full cursor-pointer px-4 py-2 text-lg font-semibold hover:text-pink-300 hover:border-2 hover:border-pink-300 rounded-md"
                        onClick={() => toggleSection("Events")}
                    >
                        Events <FaChevronDown className={`transition-transform ${openSections["Events"] ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {openSections["Events"] && (
                        <ul className="ml-6 mt-1 space-y-2 text-sm border-l-2 pl-4">
                            <li className="relative border-2 border-pink-300 rounded-md before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-pink-300 text-pink-300 px-2 py-1">
                                <Link to={"/event"}>New Requests</Link>
                            </li>
                            <li className="relative before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white px-2.5 transition-all duration-800 hover:bg-gray-700 rounded-md">
                                Estimate
                            </li>
                            <li className="relative flex justify-between before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white px-2.5 transition-all duration-800 hover:bg-gray-700 rounded-md">
                                <Link to={"/"}>Events</Link>
                                <span className="bg-white text-pink-300 px-2 py-1 text-xs rounded-full">9</span>
                            </li>
                            <li className="relative before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white px-2.5 transition-all duration-800 hover:bg-gray-700 rounded-md">
                                Partial Requests
                            </li>
                        </ul>
                    )}
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold px-4 p-2 rounded-md">Positions</h2>
                    <h2 className="text-lg font-semibold mt-7 px-4 p-2 rounded-md">Contractors</h2>
                </div>

                <div className="mt-7">
                    <button
                        className="flex items-center justify-between w-full px-4 py-2 hover:text-pink-300 cursor-pointer text-lg font-semibold text-white hover:border-2 hover:border-pink-300 rounded-md"
                        onClick={() => toggleSection("Users")}
                    >
                        Users <FaChevronDown className={`transition-transform ${openSections["Users"] ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {openSections["Users"] && (
                        <ul className="ml-6 mt-2 space-y-2 text-sm border-l-2 border-white pl-4">
                            <li className="relative before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white transition-all duration-800 hover:bg-gray-700 p-2 rounded-md">
                                Admins
                            </li>
                            <li className="relative before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white transition-all duration-800 hover:bg-gray-700 p-2 rounded-md">
                                Clients
                            </li>
                            <li className="relative before:absolute before:left-[-16px] before:top-1/2 before:w-4 before:h-[1px] before:bg-white transition-all duration-800 hover:bg-gray-700 p-2 rounded-md">
                                Coordinators
                            </li>
                        </ul>
                    )}
                </div>

                <div className="mt-7">
                    <h2 className="text-lg font-semibold px-4 p-2 rounded-md">Profile</h2>
                </div>
            </nav>

            <button className="flex items-center justify-center cursor-pointer w-full mt-32 bg-black border border-black px-4 py-2 rounded-md">
                <FaSignOutAlt className="mr-2" /> Logout
            </button>
        </aside>

    );
};

export default Sidebar;
