import React from 'react'
import { useNavigate } from 'react-router-dom';

import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { TfiPencil } from 'react-icons/tfi'


const DashboardNavbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    const navigateToProfile = () => {
        // 👇️ navigate to /contacts
        navigate('/student/profile');
    };

    // const navigateToNotice = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/student/notice');
    // };

    return (
        <>

            <div className='h-20 mb-4 flex space-between px-4 py-8 sticky top-0 bg-white border border-b-gray-100 z-20 shadow'>

                <div className='flex items-center gap-1 w-2/12 '>
                    <div className='w-20 h-16 cursor-pointer '>
                        <img
                            src="https://img.freepik.com/premium-vector/3d-graduation-cap-icon_165488-4494.jpg?"
                            alt="logo"
                            className='w-full h-full'
                            onClick={navigateToHome}
                        />
                    </div>
                    <span className='text-base font-semibold cursor-pointer' onClick={navigateToHome}>Academy</span>
                </div>

                <div className='flex items-center place-content-between gap-36 w-5/12 '>
                    <h1 className='items-left text-3xl font-bold text-gray-700'>Categories</h1>
                    <div className='flex items-center place-content-between gap-6'>
                        <div
                            className='flex items-center gap-2 w-full p-2 text-xl font-normal bg-purple-100 rounded-lg border-none'>
                            <div className='p-1'>
                                <BiSearch />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-72 focus:outline-none bg-purple-100 rounded-lg border-none"
                            />
                        </div>
                        {/* <div
                            className='text-xl font-normal p-3 bg-purple-100 rounded-lg cursor-pointer'
                            onClick={navigateToNotice}>
                            <IoMdNotificationsOutline />
                        </div> */}
                    </div>
                </div>

                <div className='flex items-center place-content-evenly w-5/12'>
                    <h2 className='text-2xl font-bold ml-24 text-gray-700'>Profile</h2>
                    <div
                        className='text-xl font-normal bg-purple-100 rounded-lg p-3 ml-44 cursor-pointer'
                        onClick={navigateToProfile}>
                        <TfiPencil />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardNavbar;