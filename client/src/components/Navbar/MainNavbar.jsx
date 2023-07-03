import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainNavbar() {

    const [activeTab, setActiveTab] = useState('');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const navigate = useNavigate();

    const navigateToStudent = () => {
        navigate('/student')
    }
    const navigateToTeacher = () => {
        navigate('/teacher')
    }

    const navigateToHod = () => {
        navigate('/hod')
    }

    return (
        <nav className="flex justify-center bg-purple-700 text-white sticky top-0 z-20 shadow">
            <ul className="flex space-x-4">
                <li
                    className={`cursor-pointer py-2 px-4 ${activeTab === 'Student' ? 'bg-purple-600' : ''
                        }`}
                    onClick={() => {
                        handleTabClick('Student');
                        navigateToStudent();
                    }}
                >
                    Student
                </li>
                <li
                    className={`cursor-pointer py-2 px-4 ${activeTab === 'Teacher' ? 'bg-purple-600' : ''
                        }`}
                    onClick={() => {
                        handleTabClick('Teacher');
                        navigateToTeacher();
                    }}
                >
                    Teacher
                </li>
                <li
                    className={`cursor-pointer py-2 px-4 ${activeTab === 'HOD' ? 'bg-purple-600' : ''
                        }`}
                    onClick={() => {
                        handleTabClick('HOD');
                        navigateToHod();
                    }}
                >
                    HOD
                </li>
            </ul>
        </nav>
    );
}

export default MainNavbar;
