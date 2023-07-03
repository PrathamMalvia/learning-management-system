import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Sidebar from '../../components/Sidebar/Sidebar.hod'
import ChatComponent from '../../components/Chat/ChatComponent'

const ChatPage = () => {
    return (
        <>
            <DashboardNavbar />

            <div className='flex flex-row'>

                <div className='w-2/12'>
                    <Sidebar />

                </div>

                <div className='w-10/12'>
                    <ChatComponent />
                </div>

            </div >

        </>
    )
}

export default ChatPage