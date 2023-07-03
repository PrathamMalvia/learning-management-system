import React, { useEffect, useState } from 'react'
import CourseCard from '../Dashboard/CourseCard'
import Axios from 'axios';


const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchAllCourses = async () => {
            try {
                const res = await Axios.get('http://localhost:4000/courses', {
                    headers: {
                        'Authorization': `${localStorage.getItem('Authorization')}`,
                        'Content-Type': 'application/json'
                    }
                })
                setCourses(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllCourses();
    }, [])


    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-6 text-gray-700">
                A broad selection of courses
            </h3>

            <div className="grid grid-cols-3 gap-10">
                {courses.map((course) => (
                    <CourseCard
                        subject={course.name}
                        lesson={course.lessons}
                        cardImage={course.image}
                        key={course.id}
                        videoUrl={course.videolink}
                    />
                ))}
            </div>
        </>
    )
}

export default Courses