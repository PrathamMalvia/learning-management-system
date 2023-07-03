import React, { useEffect, useState } from "react";
import Axios from "axios";

const Notice = () => {

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });
    const [fileName, setFileName] = useState("");
    const [hodName, setHodName] = useState("");
    const [isSuccess, setSuccess] = useState(null);

    const handleInputChange = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    };

    const handleFileNameChange = (event) => {
        setFileName(event.target.value);
    };

    const handleHodNameChange = (event) => {
        setHodName(event.target.value);
    };

    const uploadFile = async () => {
        const formdata = new FormData();
        formdata.append("file_name", fileName);
        formdata.append("pdf", userInfo.file);
        formdata.append("hod_name", hodName);

        try {
            const response = await Axios.post(
                "http://localhost:4000/pdfupload",
                formdata,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.warn(response.data);
            if (response.data.success === 1) {
                setSuccess("Uploaded successfully");
            }
        } catch (error) {
            console.error(error);
        }
    };


    const [notices, setNotices] = useState([]);
    useEffect(() => {
        const fetchAllNotices = async () => {
            try {
                const res = await Axios.get("http://localhost:4000/notices")
                setNotices(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllNotices()
    }, []);


    const openFile = () => {
        if (notices) {
            // Create a Blob object from the file data
            const blob = new Blob([notices]);

            // Create a Blob URL
            const blobUrl = URL.createObjectURL(blob);

            // Open the file in a new window or tab
            window.open(blobUrl);
        }
    };




    return (
        <>
            <h3 className="text-3xl font-semibold  mt-2 mb-6 text-gray-700">Important Notices</h3>

            <div className="text-xl font-medium text-gray-600">
                <ul>
                    <i>
                        {notices.map((notice) => (
                            <li
                                onClick={openFile}
                                key={notice.id}>
                                {notice.fileName}
                            </li>
                        ))}
                    </i>
                </ul>
            </div>


            <h3 className="text-3xl font-semibold  mt-10 mb-6 text-gray-700">Upload Notice</h3>

            <div className="container mx-auto mr-60">
                <div className="container flex flex-row gap-5">
                    <div className="w-1/2">
                        <div className="formdesign flex flex-col">

                            <label>
                                <h3 className="text-gray-700 text-xl font-semibold">File Name:</h3>
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                name="file_name"
                                value={fileName}
                                onChange={handleFileNameChange}
                            />
                            <br />

                            <label className="text-gray-700 text-xl font-semibold">Select File:</label>
                            <input
                                type="file"
                                className="mt-4 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                name="upload_file"
                                onChange={handleInputChange}
                            />
                            <br />
                            <br />
                            <label>
                                <h3 className="text-gray-700 text-xl font-semibold">Hod's Name:</h3>
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                name="hod_name"
                                value={hodName}
                                onChange={handleHodNameChange}
                            />
                            <br />
                            <div className="flex flex-col">
                                <button
                                    type="submit"
                                    className="w-20 bg-purple-600 text-white hover:bg-purple-600 font-semibold rounded-md p-2"
                                    onClick={uploadFile}
                                >
                                    Save
                                </button>
                                <br />
                                <br />
                                {isSuccess !== null ? <h4>{isSuccess}</h4> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Notice