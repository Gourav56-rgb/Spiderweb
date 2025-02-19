import { FaStar } from "react-icons/fa"

const EventPage = () => {
    return (
        <div className="text-white p-6">
        <div className="w-6/7 ml-66 h-[50rem] -mt-[51.54rem] border-2 border-pink-300 rounded-xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-2">
                Event Name <span className="font-light">(Venue Details)</span>
            </h1>
    
            <div className="flex space-x-2 mb-6 border border-pink-300 rounded-md w-1/2">
                {['Event Details', 'Assign Coordinator/Coordinator', 'Session Management', 'Generate SOW'].map((tab, index, arr) => (
                    <button
                        key={index}
                        className={`px-4 py-2 ${index > 0 && index !== arr.length - 1 ? 'border-r border-pink-300' : ''} ${index === 1 ? 'bg-pink-300 text-white' : ''} text-pink-300`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
    
            <div className="flex justify-between items-start mb-6">
                <div className="w-1/2">
                    <label className="block text-gray-300 text-xl font-semibold">Assign Coordinator</label>
                    <select className="w-full p-2 rounded border mt-2">
                        <option value="">Search Coordinator</option>
                    </select>
                    <button className="text-pink-300 mt-2 block w-full text-left">Add New Coordinator</button>
                </div>
    
                <div className="w-1/2 text-right">
                    <h2 className="text-xl font-semibold text-white text-left ml-10">Event Name <span className="font-light">(Venue Here)</span></h2>
                    <div className="flex flex-col items-start ml-10 mt-2">
                        <div className="flex border border-pink-300 rounded w-full">
                            <div className="p-2 text-left">Start: <span className="font-bold">12-12-2023</span></div>
                            <div className="p-2 text-center ml-52">Ends: <span className="font-bold">15-12-2023</span></div>
                        </div>
                        <p className="mt-2 border border-pink-300 p-2 w-full text-left rounded">
                            Venue Address: <span className="text-white font-bold">Some Location 12, Name Here, City, State.</span>
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="grid grid-cols-2 gap-6">
                <div className="-mt-7.5">
                    <h2 className="text-xl font-bold mb-4">Assign Contractor</h2>
                    <div className="space-y-2 border-2 w-1/2 border-pink-300 rounded-xl p-4 bg-black">
                        {[1, 2, 3, 4, 5].map(room => (
                            <div
                                key={room}
                                className={`p-4 border-pink-300 border rounded-xl ${room === 1 ? 'bg-pink-300 text-white' : ''}`}
                            >
                                <h3 className="text-lg font-semibold flex items-center">
                                    Meeting Room {room}
                                    <span className={`ml-3 ${room === 1 ? 'text-white' : 'text-pink-300'}`}>
                                        <FaStar />
                                    </span>
                                    <span className={`ml-3 ${room === 1 ? 'text-black' : 'text-pink-300'}`}>
                                        12 Positions
                                    </span>
                                </h3>
                                <p className="text-sm">Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                            </div>
                        ))}
                    </div>
                </div>
    
                <div className="w-[150%] -ml-96 -mt-16">
                    <h2 className="text-xl font-bold mb-4">Positions</h2>
                    <div className="border-2 border-pink-300 rounded-lg bg-black">
                        <div className="grid grid-cols-5 text-white p-2 font-bold border-b border-pink-300">
                            <span>Position</span>
                            <span>Time</span>
                            <span>Info</span>
                            <span>Quantity</span>
                        </div>
                        {[...Array(7)].map((_, index) => (
                            <div key={index} className="grid grid-cols-5 p-2 border-b border-pink-300">
                                <span>Camera {index + 1} (Video)</span>
                                <span>9 am - 7 pm</span>
                                <span className="font-bold">LP default</span>
                                <span>20</span>
                                <select className="text-gray-400 border border-pink-300 p-2 rounded w-[150%] -ml-28">
                                    <option>Select Contractor</option>
                                </select>
                            </div>
                        ))}
                        <div className="flex items-center justify-center mt-2 space-x-4">
                            <button className="text-white text-2xl -mt-1.5 cursor-pointer">←</button>
                            <div className="flex space-x-2">
                                <span className="w-4 h-4 bg-pink-300 rounded-full cursor-pointer"></span>
                                <span className="w-3 h-3 border mt-0.5 rounded-full cursor-pointer"></span>
                            </div>
                            <button className="text-white text-2xl -mt-1.5 cursor-pointer">→</button>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* Save Edits now stays inside the container */}
            <div className="flex justify-center -mt-10 p-4">
                <button className="bg-pink-300 cursor-pointer text-white py-2 px-6 rounded-lg">Save Edits</button>
            </div>
        </div>
    </div>
    
    );
};

export default EventPage;
