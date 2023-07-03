import React, { useEffect, useRef, useState } from 'react';
import {
    ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,
    ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import Axios from 'axios';

const TimeTable = () => {

    const [timetable, setTimetable] = useState([]);


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



    const [scheduleData, setScheduleData] = useState({ dataSource: undefined })
    useEffect(() => {
        Axios.get('http://localhost:4000/addEvent', {
            headers: {
                'Authorization': `${localStorage.getItem('Authorization')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Events ', response.data.data);
                setScheduleData({ dataSource: response.data.data });
                // Perform any additional actions after the event is added
            })
            .catch(error => {
                console.error('Event fetching error:', error);
                // Handle the error
            });
    }, [])


    const scheduleObj = useRef(null);
    // const buttonObj = useRef(null);

    const onActionBegin = (args) => {
        if (args.requestType === 'eventCreate') {
            const newEvent = args.data[0];
            Axios.post('http://localhost:4000/addEvent', newEvent)
                .then(response => {
                    console.log('Event added:', response.data);
                    // Perform any additional actions after the event is added
                })
                .catch(error => {
                    console.error('Error adding event:', error);
                    // Handle the error
                });
        }
    };

    // console.log(Object.getPrototypeOf(scheduleObj.current.activeCellsData.startTime))
    return (

        <>
            {/* College Time Table */}
            <h3 className="text-3xl font-semibold mx-2 mt-2 text-gray-700">College Time Table</h3>
            <hr className='m-2' />
            <div className="container ml-2 mr-60">
                <div className="container flex flex-column gap-5">
                    <div className="w-4/5">
                        <div className="formdesign flex flex-col">

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
                                                                                    >
                                                                                        Edit
                                                                                    </button>
                                                                                    <button
                                                                                        className="inline-block rounded-full bg-purple-200 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-small uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
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


            {/* Personal Time Table */}
            <h3 className="text-3xl font-semibold mx-2 mt-2 text-gray-700">My Time Table</h3>
            <hr className='m-2' />

            <div className='mt-8 ml-2 mr-6'>
                <ScheduleComponent
                    ref={scheduleObj}
                    currentView='Week'
                    height='750px'
                    selectedDate={new Date(2023, 5, 26)}
                    eventSettings={scheduleData}
                    actionBegin={onActionBegin}
                >

                    <ViewsDirective>
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' dateFormat='dd-MMM-yyyy' />
                        <ViewDirective option='WorkWeek' />
                        <ViewDirective option='Month' showWeekend={false} readonly={true} />
                    </ViewsDirective>

                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>

            {/* <h3 className="text-3xl font-semibold mx-2 mt-4 mb-2 text-gray-700">Upload Time Table</h3>
            <hr className='mt-2 mb-4' /> */}

            {/* <div className='ml-1 p-3'>
                <ImageUpload />
            </div> */}
        </>
    );
};

export default TimeTable;
