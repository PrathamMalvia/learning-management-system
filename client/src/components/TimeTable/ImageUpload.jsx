import React, { useState } from "react";
import Axios from "axios";
import "../../App.css"

const ImageUpload = () => {

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });
    const [teacherName, setTeacherName] = useState("");
    const [isSuccess, setSuccess] = useState(null);

    const handleInputChange = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    };

    const handleTeacherNameChange = (event) => {
        setTeacherName(event.target.value);
    };

    const uploadImage = async () => {
        const formdata = new FormData();
        formdata.append("avatar", userInfo.file);
        formdata.append("teacher_name", teacherName);

        try {
            const response = await Axios.post(
                "http://localhost:4000/imageupload",
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


    return (
        <div className="container mx-auto mr-60">
            <div className="container">
                <div className="flex flex-row gap-5">
                    <div className="w-1/2">
                        <div className="formdesign">
                            <div className="flex flex-col">
                                <label className="text-gray-700 text-xl font-semibold">Select Image:</label>
                                <input
                                    type="file"
                                    className="mt-4 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    name="upload_file"
                                    onChange={handleInputChange}
                                />
                                <br />
                                <br />
                                <label>
                                    <h3 className="text-gray-700 text-xl font-semibold">Teacher's Name:</h3>
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    name="teacher_name"
                                    value={teacherName}
                                    onChange={handleTeacherNameChange}
                                />
                            </div>
                            <br />
                            <div className="flex flex-col">
                                <button
                                    type="submit"
                                    className="w-20 bg-purple-600 text-white hover:bg-purple-600 font-semibold rounded-md p-2"
                                    onClick={uploadImage}
                                >
                                    Save
                                </button>
                                <br />
                                <br />
                                {isSuccess !== null ? <h4>{isSuccess}</h4> : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-gray-700 text-xl font-semibold">Preview:</h3>
                        {userInfo.filepreview !== null ? (
                            <img
                                className="previewimg"
                                src={userInfo.filepreview}
                                alt="UploadImage"
                                style={{
                                    width: "500px",
                                    border: "1px solid #333",
                                    height: "500px",
                                }}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImageUpload
