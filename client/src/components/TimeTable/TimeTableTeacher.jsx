import React, { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import Axios from 'axios';

const TimeTable = () => {

    const [timetable, setTimetable] = useState([]);
    const [newEntry, setNewEntry] = useState({
        day: "",
        time: "",
        faculty: "",
        subject: "",
    });

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const timings = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
    ];

    useEffect(() => {
        fetchTimetable();
    }, []);

    const fetchTimetable = async () => {
        try {
            const response = await Axios.get("http://localhost:4000/api/timetable");
            setTimetable(response.data);
        } catch (error) {
            console.error("Error fetching timetable:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry((prevEntry) => ({
            ...prevEntry,
            [name]: value,
        }));
    };

    const handleAddEntry = async () => {
        if (newEntry.day && newEntry.time && newEntry.faculty && newEntry.subject) {
            try {
                await Axios.post("http://localhost:4000/api/timetable", newEntry);
                fetchTimetable();
                setNewEntry({ day: "", time: "", faculty: "", subject: "" });
            } catch (error) {
                console.error("Error adding entry:", error);
            }
        }
    };

    const handleDeleteEntry = async (day, time) => {
        try {
            await Axios.delete(`http://localhost:4000/api/timetable/${day}/${time}`);
            fetchTimetable();
        } catch (error) {
            console.error("Error deleting entry:", error);
        }
    };

    const handleEditEntry = (day, time) => {
        const selectedEntry = timetable.find(
            (entry) => entry.day === day && entry.time === time
        );
        if (selectedEntry) {
            setNewEntry({ ...selectedEntry });
            handleDeleteEntry(day, time)
                .then(() => {
                    // Call the API endpoint for editing the entry
                    Axios.put(`/api/timetable/${day}/${time}`, newEntry)
                        .then(() => {
                            // Entry successfully edited
                            // Perform any necessary actions or updates after editing the entry
                        })
                        .catch((error) => {
                            // Error occurred while editing the entry
                            console.error("Error editing entry:", error);
                        });
                })
                .catch((error) => {
                    // Error occurred while deleting the entry
                    console.error("Error deleting entry:", error);
                });
        }
    };


    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 text-gray-700">College Time Table</h3>
            <hr className='m-2' />
            <div className="container ml-2 mr-60">
                <div className="container flex flex-column gap-5">
                    <div className="w-4/5">
                        <div className="formdesign flex flex-col">
                            <div className="container flex place-items-center gap-5">
                                <label className="text-gray-700 text-xl font-semibold">Day:</label>
                                <select
                                    name="day"
                                    value={newEntry.day}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Select a day</option>
                                    {daysOfWeek.map((day) => (
                                        <option key={day} value={day} disabled={day === "Sunday"}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="container flex   place-items-center gap-5">
                                <label className="text-gray-700 text-xl font-semibold">Time:</label>
                                <select
                                    name="time"
                                    value={newEntry.time}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Select a time</option>
                                    {timings.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="container flex  place-items-center gap-5">
                                <label className="text-gray-700 text-xl font-semibold">Faculty:</label>
                                <input
                                    type="text"
                                    name="faculty"
                                    value={newEntry.faculty}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="container flex items-center gap-5">
                                <label className="text-gray-700 text-xl font-semibold">Subject:</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={newEntry.subject}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button
                                    onClick={handleAddEntry}
                                    className="w-24 bg-purple-600 text-sm text-white hover:bg-purple-600 font-semibold rounded-md p-2"
                                >
                                    Add Entry
                                </button>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                                <thead className="border-b font-medium dark:border-neutral-500">
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <th
                                                            scope="col"
                                                            className="border-r px-6 py-4 dark:border-neutral-500"
                                                        >
                                                            Time
                                                        </th>
                                                        {daysOfWeek.map((day) => (
                                                            <th
                                                                key={day}
                                                                scope="col"
                                                                className="border-r px-6 py-4 dark:border-neutral-500"
                                                            >
                                                                {day}
                                                            </th>
                                                        ))}
                                                        {/* <th>Actions</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {timings.map((time) => (
                                                        <tr
                                                            key={time}
                                                            className="border-b dark:border-neutral-500"
                                                        >
                                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                                {time}
                                                            </td>
                                                            {daysOfWeek.map((day) => (
                                                                <td
                                                                    key={day}
                                                                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
                                                                >
                                                                    {day === "Sunday" ? (
                                                                        <div>Holiday</div>
                                                                    ) : (
                                                                        <div>
                                                                            {timetable.map((entry) => {
                                                                                if (
                                                                                    entry.day === day &&
                                                                                    entry.time === time
                                                                                ) {
                                                                                    return (
                                                                                        <div key={`${day}-${time}`}>
                                                                                            {entry.faculty}: {entry.subject}
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                                return null;
                                                                            })}
                                                                            {timetable.find(
                                                                                (entry) =>
                                                                                    entry.day === day && entry.time === time
                                                                            ) ? (
                                                                                <div className="flex gap-1">
                                                                                    <button
                                                                                        className="inline-block rounded-full bg-purple-200 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-small uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                                                                        onClick={() =>
                                                                                            handleEditEntry(day, time)
                                                                                        }
                                                                                    >
                                                                                        Edit
                                                                                    </button>
                                                                                    <button
                                                                                        className="inline-block rounded-full bg-purple-200 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-small uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                                                                                        onClick={() =>
                                                                                            handleDeleteEntry(day, time)
                                                                                        }
                                                                                    >
                                                                                        Delete
                                                                                    </button>
                                                                                </div>
                                                                            ) : null}
                                                                        </div>
                                                                    )}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className="text-3xl font-semibold mx-2 mt-8 text-gray-700">Upload Time Table Image</h3>
            <hr className='m-2' />

            <div className='ml-1 p-3'>
                <ImageUpload />
            </div>
        </>
    );
};

export default TimeTable;


// useEffect(() => {
//     Axios.get('http://localhost:4000/addEvent', {
//         headers: {
//             'Authorization': `${localStorage.getItem('Authorization')}`,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             console.log('Events ', response.data.data);
//             setScheduleData({ dataSource: response.data.data });
//             // Perform any additional actions after the event is added
//         })
//         .catch(error => {
//             console.error('Event fetching error:', error);
//             // Handle the error
//         });
// }, [])
