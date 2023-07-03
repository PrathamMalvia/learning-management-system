import React from "react";
import "./Modal.css";
import { useNavigate } from 'react-router-dom';

function Modal({ setOpenModal }) {
    const navigate = useNavigate();

    const navigateToHome = () => {
        // navigate to '/'
        navigate('/');
    };

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => setOpenModal(false)}>X</button>
                </div>
                <div className="body">
                    <p>
                        Are you sure you want to Log Out!
                    </p>
                </div>
                <div className="footer">
                    <button
                        className="w-20 bg-red-500 text-white hover:bg-red-600 font-semibold rounded-md p-2 ml-2"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button
                        className="w-28 bg-purple-500 text-white hover:bg-purple-600 font-semibold rounded-md p-2"
                        onClick={() => {
                            setOpenModal(false);
                            localStorage.removeItem('Authorization');
                            localStorage.removeItem('userType');
                            navigateToHome();
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
