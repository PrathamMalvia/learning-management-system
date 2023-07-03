import React, { useState } from 'react'
import { CgFileDocument } from "react-icons/cg"
import { HiOutlineClock } from "react-icons/hi"

const Instructions = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <>
            <nav className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-gray-700'>Back End Developer - Java</h1>
                <div className='flex items-center gap-10 mr-24'>
                    <div className='flex'>
                        <span className='text-3xl text-purple-700'><CgFileDocument /></span>
                        <div>
                            <h6 className='text-sm font-normal'>Total Questions</h6>
                            <h4 className='text-sm font-semibold'>17</h4>
                        </div>

                    </div>

                    <div className='flex'>
                        <span className='text-3xl text-purple-700'><HiOutlineClock /></span>
                        <div>
                            <h6 className='text-sm font-normal'>Test Time</h6>
                            <h4 className='text-sm font-semibold'>01H:15M:00S</h4>
                        </div>

                    </div>
                </div>

            </nav>

            <hr className='mt-2 mb-2' />

            <h3 className='text-xl font-semibold mt-4 mb-2'>Important Instructions :  Please read them carefully before you start the assessment.</h3>
            <ul className="marker:text-purple-800 list-disc pl-5 space-y-3 text-gray-700">
                <li>This is a proctored assessment with 17 questions and needs to be completed in 75 mins.</li>
                <li>For multiple choice questions you will have four options each having only one correct answer.</li>
                <li>For coding problems is present you can use any programming language of your choice</li>
                <li>For project assessment you need to share your screen and upload the project before the submission</li>
                <li>For machine interview you need to share your screen and answer the questions you can also write the appropriate answer with respect to each question</li>
                <li>Post 75 minutes the assessment will be auto submitted</li>
            </ul>

            <h3 className='text-xl font-semibold mt-4 mb-2'>During the assessment upon doing any of the following activities you will not be able to continue with your assessment and it will be auto submitted</h3>
            <ul className="marker:text-purple-800 list-disc pl-5 space-y-3 text-gray-700">
                <li>Refresh the page</li>
                <li>Enter a new url</li>
                <li>Exit full screen</li>
                <li>Click escape key</li>
                <li>Click any of the function keys from F1 to F-12</li>
            </ul>

            <h3 className='text-xl font-semibold mt-4 mb-2'>For the following functionalities will be disabled during the assessment</h3>
            <ul className="marker:text-purple-800 list-disc pl-5 space-y-3 text-gray-700">
                <li>Right click</li>
                <li>Ctrl Key / Command Key</li>
                <li>Alt Key</li>
                <li>Changing the browser tab</li>
                <li>Windows Key</li>
            </ul>

            <p className='mt-3 mb-3'>For further queries feel free to write us at support@academy.com</p>

            <div className='flex items-center gap-3'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <p>I have read and understood the instructions. I agree that in case of not adhering to the exam instructions I will be disqualified from giving the assessment.</p>

            </div>

            <button
                disabled={!isChecked}
                className={`px-4 py-2 mt-4 mb-4 rounded ${isChecked ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
                Start Now
            </button >
        </>
    )
}

export default Instructions