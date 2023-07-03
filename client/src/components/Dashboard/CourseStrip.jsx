import React from 'react'

const CourseStrip = (props) => {
    return (
        <>
            <div className='flex items-center gap-3 mx-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-xl'>
                    <img
                        src={props.stripImage}
                        alt="web"
                        className='w-full h-full rounded-xl'
                    />
                </div>

                <div className='flex flex-col items-left text-xs font-light w-52 cursor-pointer'>
                    <h6>{props.courseName}</h6>
                    <h6>{props.numOfLessons}</h6>
                </div>

                <div className='flex items-left gap-32 place-content-right'>
                    <span>{props.start}</span>
                    <span>{props.rate}</span>
                    <span>{props.level}</span>
                </div>

            </div>
        </>
    )
}

export default CourseStrip