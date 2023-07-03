import React, { useEffect, useState } from "react";
import Axios from "axios";
import People from "./People"

const StudentList = () => {

    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const fetchAllTeachers = async () => {
            try {
                const res = await Axios.get('http://localhost:4000/allteachers', {
                    headers: {
                        'Authorization': `${localStorage.getItem('Authorization')}`,
                        'Content-Type': 'application/json'
                    }
                })
                setTeachers(res.data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllTeachers();
    }, [])

    const [students, setStudents] = useState([
        "Student 1  of TE - A",
        "Student 2  of TE - A",
        "Student 3  of TE - A",
        "Student 4  of TE - A",
        "Student 5  of TE - A",
        "Student 6  of TE - A",
        "Student 7  of TE - A",
        "Student 8  of TE - A",
        "Student 9  of TE - A",
        "Student 10 of TE - A",
    ]);
    const [studentList, setStudentList] = useState([
        "Student 1  of TE - B",
        "Student 2  of TE - B",
        "Student 3  of TE - B",
        "Student 4  of TE - B",
        "Student 5  of TE - B",
        "Student 6  of TE - B",
        "Student 7  of TE - B",
        "Student 8  of TE - B",
        "Student 9  of TE - B",
        "Student 10 of TE - B",
    ]);

    const [selectedArray, setSelectedArray] = useState(students);

    const handleCheckboxChange = async (index) => {
        const student = selectedArray[index];
        const timestamp = new Date().toISOString();

        try {
            await Axios.post("http://localhost:4000/api/students", {
                name: student,
                timestamp: timestamp,
            });

            console.log("Successfully inserted into the database");
        } catch (error) {
            console.error("Error inserting into the database:", error);
        }
    };

    const options = [
        {
            label: "TE - A",
            value: students,
        },
        {
            label: "TE - B",
            value: studentList,
        },
    ];

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = options.find((option) => option.label === selectedValue);

        if (selectedOption) {
            setSelectedArray(selectedOption.value);
        }

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };


    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-2 text-gray-700">Teachers</h3>
            <hr />

            {
                teachers.map((teacher, index) => (
                    <People
                        key={index}
                        profile="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png"
                        name={teacher.name}
                    />
                ))
            }

            <br />

            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-2 text-gray-700">Student List</h3>
            <hr className="mb-4" />

            <div>
                <select
                    className="text-xl font-medium ml-1 mt-2 mb-2"
                    onChange={handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {selectedArray.map((student, index) => (
                    <div className="text-lg font-base" key={index}>
                        <input
                            className="text-xl font-medium ml-2 mr-2"
                            type="checkbox"
                            onChange={() => handleCheckboxChange(index)}
                        />
                        {student}
                    </div>
                ))}
            </div>


        </>
    );
};

export default StudentList;





    // {
    //     headers: {
    //         'Authorization': `${localStorage.getItem('Authorization')}`,
    //         'Content-Type': 'application/json'
    //     }
    // }