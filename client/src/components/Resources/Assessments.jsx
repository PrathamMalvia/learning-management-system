import React from 'react'
import QuizCard from './QuizCard'
import { DiJava } from "react-icons/di"
import { LuBrainCircuit } from "react-icons/lu"
import { FcTreeStructure } from "react-icons/fc"
import { FaReact } from "react-icons/fa"

const Assessments = () => {
    return (
        <>
            <h3 className='text-2xl font-semibold mx-3 mt-6 mb-2 text-gray-800'>Assessments</h3>
            <hr className='mb-4' />

            <div className='ml-4 flex items-center gap-6'>
                <QuizCard
                    icon={<DiJava />}
                    bgImage="https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1327586475.jpg?w=730&crop=1"
                    quizName='Back End Developer - Java'
                    noOfStudents="2325"
                    noOfQues="17"
                    duration="75"
                />
                <QuizCard
                    icon={<LuBrainCircuit />}
                    bgImage="https://img.freepik.com/free-vector/technology-artifical-intelligence-background-with-face_1017-18298.jpg"
                    quizName='Logical Reasoning'
                    noOfStudents="2369"
                    noOfQues="40"
                    duration="30"
                />
                <QuizCard
                    icon={<FcTreeStructure />}
                    bgImage="https://media.istockphoto.com/id/1371766825/photo/big-data-network-abstract-concept.webp?b=1&s=170667a&w=0&k=20&c=0C8TyRQTYkX-q_jm0pzc-MjZ7of_CcCisqPF4VMX_ug="
                    quizName='Data Structures and Algorithms'
                    noOfStudents="1056"
                    noOfQues="2"
                    duration="75"
                />
                <QuizCard
                    icon={<FaReact />}
                    bgImage="https://media.istockphoto.com/id/1324545024/photo/artificial-intelligence-technology-machine-learning-business-concept.jpg?s=170667a&w=0&k=20&c=xOmes5GcPKnJXevy5OmNS0f0pPWXrBhkrCp23Bqkj1s="
                    quizName='Front End Developer - React JS'
                    noOfStudents="4215"
                    noOfQues="36"
                    duration="75"
                />
            </div>


        </>
    )
}

export default Assessments