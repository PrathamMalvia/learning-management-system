import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const SettingsComponent = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s9in4t1', 'template_458bza9', form.current, '7OgHo9FFTwjnZY2lm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const [enableNotifications, setEnableNotifications] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
    const [selectedTheme, setSelectedTheme] = useState('Light');
    const [showGrades, setShowGrades] = useState(true);
    // const [complaint, setComplaint] = useState('');

    const handleEnableNotificationsChange = (e) => {
        setEnableNotifications(e.target.checked);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleTimeZoneChange = (e) => {
        setSelectedTimeZone(e.target.value);
    };

    const handleThemeChange = (e) => {
        setSelectedTheme(e.target.value);
    };

    const handleShowGradesChange = (e) => {
        setShowGrades(e.target.checked);
    };

    // const handleComplaintChange = (e) => {
    //     setComplaint(e.target.value);
    // };

    const handleSaveSettings = () => {
        // Save the settings here
        console.log('Settings saved!');
    };

    // const handleReportComplaint = () => {
    //     // Report the complaint to the teacher
    //     console.log('Complaint reported:', complaint);
    //     // Reset the complaint field
    //     setComplaint('');
    // };

    return (
        <>
            <h3 className="text-3xl font-semibold mx-2 mt-2 mb-6 text-gray-700">Settings</h3>

            <div className="mx-3 mt-6">
                <div className="mb-4">
                    <label className="flex items-center text-lg font-semibold text-gray-700">
                        <input
                            type="checkbox"
                            checked={enableNotifications}
                            onChange={handleEnableNotificationsChange}
                            className="mr-2"
                        />
                        Enable Notifications
                    </label>
                </div>

                <div className="mb-4">
                    <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="language">
                        Display Language
                    </label>
                    <select
                        id="language"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="timezone">
                        Time Zone
                    </label>
                    <select
                        id="timezone"
                        value={selectedTimeZone}
                        onChange={handleTimeZoneChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        <option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        <option value="PST">PST</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="theme">
                        Theme
                    </label>
                    <select
                        id="theme"
                        value={selectedTheme}
                        onChange={handleThemeChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="flex items-center text-lg font-semibold text-gray-700">
                        <input
                            type="checkbox"
                            checked={showGrades}
                            onChange={handleShowGradesChange}
                            className="mr-2"
                        />
                        Show Grades
                    </label>
                </div>

                <button
                    onClick={handleSaveSettings}
                    className='w-40 bg-purple-500 text-white hover:bg-purple-600 font-semibold rounded-md p-2 '
                >
                    Save Settings
                </button>


                <h3 className="text-3xl font-semibold mt-8 mb-4 text-gray-700">Report a complaint</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type='text'
                            name="user_name"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type='email'
                            name="user_email"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">

                        <label className="text-xl font-semibold text-gray-700 block mb-2" htmlFor="complaint">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            rows={4}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Send Complaint"
                        className='w-40 bg-red-500 text-white hover:bg-red-600 font-semibold rounded-md p-2'
                    />
                </form>

            </div>
        </>
    );
};

export default SettingsComponent;
