import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const CourseCard = (props) => {

    const redirectToVideo = () => {
        const newWindow = window.open('', '_blank');
        newWindow.location.href = props.videoUrl;
    };

    return (
        <div
            className='bg-purple-300 w-52 h-72 rounded-xl cursor-pointer'
            onClick={redirectToVideo}
        >
            <div className='w-52 h-40 p-3'>
                <img
                    src={props.cardImage}
                    alt="course"
                    className='w-full h-full rounded-xl'
                />
            </div>

            <div className='flex flex-col items-left gap-10'>

                <div className='mx-4'>
                    <h4 className='font-normal'>{props.subject}</h4>
                    <h6 className='text-sm font-light'>{props.lesson}</h6>
                </div>

                <div className='flex place-content-evenly gap-20 '>
                    <div className='w-8 h-8'>
                        <img
                            src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181658.png"
                            alt="contribution"
                            className='w-full h-full rounded-full border border-gray-400'
                        />
                    </div>
                    <div className='text-xl font-normal p-2 bg-slate-100 rounded-lg cursor-pointer'>
                        <MdOutlineArrowForwardIos />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CourseCard