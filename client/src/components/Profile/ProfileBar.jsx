import React from 'react'
import Avatar from './Avatar'
import CalendarComponent from './CalendarComponent'
import HomeworkProgress from './HomeworkProgress'

const Profile = () => {
    return (
        <div className='container flex flex-col'>
            <Avatar />
            <CalendarComponent />
            <HomeworkProgress />
        </div>
    )
}

export default Profile