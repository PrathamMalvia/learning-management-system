import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const HomeworkCard = (props) => {
    const percentage = 60;

    return (
        <>
            <div className='flex items-center gap-2 hover:text-white hover:bg-purple-500 bg-purple-100 ml-20 w-72 p-4 rounded-xl place-content-evenly cursor-pointer'>
                <div className='w-10 h-10'>
                    <CircularProgressbar
                        className='text-white'
                        value={percentage}
                        text={`${percentage}%`}
                    />
                </div>
                <div className='flex flex-col'>
                    <p className='text-sm'>{props.title}</p>
                    <p className='text-xs'>{props.tasks}</p>
                </div>
                <div className='flex items-center ml-10'>
                    <MdOutlineArrowForwardIos />
                </div>

            </div>

        </>
    )
}

export default HomeworkCard