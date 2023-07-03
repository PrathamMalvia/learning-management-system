import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { BiHomeAlt2 } from "react-icons/bi"
import { IoBagHandleOutline } from "react-icons/io5"
import { BiCabinet } from "react-icons/bi"
import { BsChatSquareText } from "react-icons/bs"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { GrSchedules } from "react-icons/gr"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"

import Modal from "../Logout/Modal.jsx"

const Sidebar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();

    const navigateToDashboard = () => {
        // 👇️ navigate to /
        navigate('/hod/dashboard');
    };

    const navigateToTimeTable = () => {
        // 👇️ navigate to /timetable
        navigate('/hod/timetable');
    };

    const navigateToResources = () => {
        // 👇️ navigate to /resources
        navigate('/hod/resources');
    };



    const navigateToStudentList = () => {
        // 👇️ navigate to /resources
        navigate('/hod/studentlist');
    };

    const navigateToSettings = () => {
        // 👇️ navigate to /resources
        navigate('/hod/settings');
    };

    const navigateToChat = () => {
        // 👇️ navigate to /resources
        navigate('/hod/chat');
    };


    return (
        <>

            <div className='space-y-2 px-[25px]'>

                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToDashboard}
                >
                    <div
                        className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <BiHomeAlt2 color='black' />
                        <p className='text-base leading-[20px]'>Dashboard</p>
                    </div>
                </div>


                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToResources}
                >
                    <div
                        className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <BiCabinet color='black' />
                        <p className='text-base leading-[20px]'>Resources</p>
                    </div>
                </div>


                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToStudentList}
                >
                    <div
                        className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <AiOutlineUnorderedList color='black' />
                        <p className='text-base leading-[20px]'>Student List</p>
                    </div>
                </div>

                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToTimeTable}
                >
                    <div
                        className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <GrSchedules color='black' />
                        <p className='text-base leading-[20px]'>Schedules</p>
                    </div>
                </div>

                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToChat}
                >
                    <div
                        className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <BsChatSquareText color='black' />
                        <p className='text-base leading-[20px]'>Chats</p>
                    </div>
                </div>


                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={navigateToSettings}
                >
                    <div className='flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <IoSettingsOutline color='black' />
                        <p className='text-base leading-[20px]'>Settings</p>
                    </div>
                </div>


                <div
                    className='flex items-center justify-between-gap-[10px] py-[15px] rounded-lg cursor-pointer bg-purple-100 hover:bg-purple-300'
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    <div
                        className='openModalBtn flex items-center gap-[10px] ml-3 font-semibold text-gray-800'>
                        <BiLogOut color='black' />
                        <p className='text-base leading-[20px]'>Logout</p>
                    </div>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>

            </div>


            <div className='flex items-center bg-purple-200 rounded-2xl w-64 h-72 overflow-hidden'>
                <img
                    src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?w=740&t=st=1686292661~exp=1686293261~hmac=6a4df4b955255ce680eb13c0c5b06920bd178d8a3a725fb44545326065a34fd7"
                    alt="premium"
                    className='w-full h-full rounded-2xl ' />
            </div>

            <div className='flex flex-col items-center place-items-end gap-1 text-gray-600 bg-purple-200 rounded-lg mx-8 h-36'>
                <p className='text-base font-bold mt-4'>Premium Subcription</p>
                <div className='flex flex-col items-center'>
                    <p className='text-xs font-base'>Buy Premium and get access</p>
                    <p className='text-xs font-base'>to new courses</p>
                </div>

                <button
                    className='w-40 bg-purple-500 text-white hover:bg-purple-600 font-semibold rounded-md mt-1 p-2 '>
                    More Detailed
                </button>
            </div>


        </>

    )
}
export default Sidebar;