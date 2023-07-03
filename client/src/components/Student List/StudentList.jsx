import React, { useEffect, useState } from 'react'
import People from './People'
import Axios from 'axios';

const StudentList = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await Axios.get('http://localhost:4000/allusers', {
                    headers: {
                        'Authorization': `${localStorage.getItem('Authorization')}`,
                        'Content-Type': 'application/json'
                    }
                })
                setUser(res.data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllUsers();
    }, [])


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

    return (
        <>
            <div className='flex flex-col mx-auto'>
                <div className='flex items-center place-content-between'>
                    <h3 className="text-3xl font-semibold mx-2 mt-2 mb-2 text-gray-700">Teachers</h3>
                    <h3 className='text-md font-semibold text-gray-700 p-2'>.</h3>
                </div>
                <hr
                    style={{
                        background: 'purple',
                        color: 'purple',
                        borderColor: 'purple',
                    }}
                />

                {
                    teachers.map((teacher) => (
                        <People
                            profile="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png"
                            name={teacher.name}
                            key={teacher.id}
                        />
                    ))
                }

                < div className='p-6' />

                <div className='flex items-end place-content-between'>
                    <h3 className="text-3xl font-semibold mx-2 mb-2 text-gray-700">Classmates</h3>
                    <h3 className='text-md font-semibold text-gray-700 p-2'>10 students</h3>
                </div>

                <hr
                    style={{
                        background: 'purple',
                        color: 'purple',
                        borderColor: 'purple',
                    }}
                />

                {
                    users.map((user) => (
                        <People
                            profile="https://img.freepik.com/premium-psd/user-3d-icon_642950-57.jpg"
                            name={user.name}
                            key={user.id}
                        />
                    ))
                }

            </div >
        </>
    )
}

export default StudentList