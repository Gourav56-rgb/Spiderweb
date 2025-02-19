import { useRef, useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { FaChevronUp, FaEye } from "react-icons/fa";

const EventRequests = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const scrollContainer = useRef(null);

    const events = Array(30).fill({
        name: "Wedding",
        start: "Jan 12, 2024",
        end: "Jan 14, 2024",
        client: "Muhammad Asad",
        contact: "+1234 566 7890",
        venue: "Bengaluru",
        city: "Bangalore",
        state: "Karnataka",
        zip: "560001",
    });

    const totalPages = Math.ceil(events.length / itemsPerPage);
    const paginatedEvents = events.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex">
            <div className="ml-66 -mt-[51.45rem] w-full p-6 -my-10">
                <div className="flex justify-between items-center bg-gradient-to-r from-black to-gray-900 p-4 rounded-t-lg border-2 border-pink-300">
                    <h1 className="text-white text-2xl font-bold">Event Requests</h1>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="bg-gray-800 text-white px-4 py-2 rounded-md pl-10 focus:outline-none border border-gray-600"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <AiOutlineSearch className="absolute left-3 top-3 text-white" />
                        </div>
                        <button className="bg-gradient-to-r from-pink-300 to-purple-600 text-white p-3 cursor-pointer rounded-md">
                            <AiOutlinePlus size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden h-[76vh] border border-pink-300 rounded-b-lg flex flex-col">
                    <div ref={scrollContainer} className="overflow-x-auto flex-1">
                        <table className="w-full text-white text-sm h-full min-w-[1200px]">
                            <thead className="bg-pink-300 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        <div className="flex items-center gap-1">
                                            Event Name <FaChevronUp className="border rounded-full bg-white text-pink-300 w-4 h-4 p-0.5" />
                                        </div>
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Event Start
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        <div className="flex items-center gap-1">
                                            Event End <FaChevronUp className="border rounded-full bg-white text-pink-300 w-4 h-4 p-0.5" />
                                        </div>
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        <div className="flex items-center gap-1">
                                            Client Name <FaChevronUp className="border rounded-full bg-white text-pink-300 w-4 h-4 p-0.5" />
                                        </div>
                                    </th>
                                    <th className="py-3 px-4 text-left">Contact Info</th>
                                    <th className="py-3 px-4 text-left">Venue</th>
                                    <th className="py-3 px-4 text-left hidden md:table-cell">City</th>
                                    <th className="py-3 px-4 text-left hidden md:table-cell">State</th>
                                    <th className="py-3 px-4 text-left hidden md:table-cell">Zip Code</th>
                                </tr>


                            </thead>
                            <tbody className="divide-y divide-pink-300 h-full">
                                {paginatedEvents.map((event, index) => (
                                    <tr key={index} className="border-t border-pink-300">
                                        <td className="py-3 px-4 flex items-center gap-2">
                                            <FaEye className="text-white" /> {event.name}
                                        </td>
                                        <td className="py-3 px-4">{event.start}</td>
                                        <td className="py-3 px-4">{event.end}</td>
                                        <td className="py-3 px-4">{event.client}</td>
                                        <td className="py-3 px-4">{event.contact}</td>
                                        <td className="py-3 px-4">{event.venue}</td>
                                        <td className="py-3 px-4 hidden md:table-cell">{event.city}</td>
                                        <td className="py-3 px-4 hidden md:table-cell">{event.state}</td>
                                        <td className="py-3 px-4 hidden md:table-cell">{event.zip}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="max-w-7xl -mx-60 ml-32">
                        <div className="flex overflow-x-auto">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="min-w-[200px] bg-pink-300 h-1"></div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center bg-black p-3 rounded-b-lg">
                        <button
                            className={`px-3 py-1 text-xl cursor-pointer text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                            ←
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`mx-1 px-3 py-1 cursor-pointer ${currentPage === i + 1 ? "text-pink-300" : "text-white"}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className={`px-3 py-1 text-xl cursor-pointer text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventRequests;
