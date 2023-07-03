import React from 'react'
import { useNavigate } from "react-router-dom"
import { CgFileDocument } from "react-icons/cg"
import { HiOutlineClock } from "react-icons/hi"

const QuizCard = (props) => {
    const navigate = useNavigate();

    const navigateToAssessments = () => {
        navigate('/assessments');
    }

    return (
        <>
            <div className='bg-white border border-gray-200 w-72 h-64 rounded-xl'>

                <div className="flex items-center h-28 rounded-t-xl bg-gray-100 bg-opacity-75 relative">
                    <img
                        src={props.bgImage}
                        alt="quiz"
                        className='w-full h-full rounded-t-xl'
                    />
                    <div className='flex items-center gap-3 absolute top-15 left-5 z-10'>
                        <div className='bg-white rounded-full text-4xl p-2'>
                            {props.icon}
                        </div>
                        <h4 className='text-lg font-semibold text-white '>{props.quizName}</h4>
                    </div>

                </div>

                <div className='flex flex-col items-left gap-1'>
                    <p className='text-xs font-semibold text-purple-700 ml-2 p-2'>Taken by {props.noOfStudents} candidates</p>

                    <div className='flex items-center gap-2 mx-4'>
                        <div className='text-xl font-light'>
                            <CgFileDocument />
                        </div>
                        <div className='flex items-center place-content-between gap-4'>
                            <h4 className='text-sm text-gray-500'> No. of questions: </h4>
                            <h4 className='text-sm text-gray-900'> {props.noOfQues}</h4>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mx-4'>
                        <div className='text-xl font-light'>
                            <HiOutlineClock />
                        </div>
                        <div className='flex items-center place-content-between gap-10'>
                            <h4 className='text-sm text-gray-500'> Test duration: </h4>
                            <h4 className='text-sm text-gray-900'> {props.duration} minutes</h4>
                        </div>
                    </div>

                    <div className='mx-4 mt-2'>
                        <button
                            className='w-60 mx-1 bg-purple-500 text-white hover:bg-purple-600 font-semibold rounded-md p-2 '
                            onClick={navigateToAssessments}
                        >
                            Take Now
                        </button>


                    </div>

                </div>

            </div >
        </>

    )
}

export default QuizCard