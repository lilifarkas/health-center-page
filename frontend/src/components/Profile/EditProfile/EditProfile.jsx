import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import useFetchUser from "../../../hooks/useFetchUser";
import {FiArrowLeft} from "react-icons/fi";
import bgImg from "../../../images/Névtelen terv (28).png";
import URL from '../../../Constants/ConstantUrl';

function EditProfile() {
    const { user: fetchUser } = useFetchUser();
    const [user, setUser] = useState("");
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [editUserForm, setEditUserForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        setUser(fetchUser);
    }, [fetchUser]);


    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${URL}users/update/${user.id}`, {
            method: "PUT",
            body: JSON.stringify(editUserForm),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            // const errorMessage = errorResponse.errorMessages[0];
            alert(errorResponse);
            console.log(errorResponse);
            return;
        }
        setProfileUpdated(true);
    };

    const formFilled =  (
        editUserForm.name &&
        editUserForm.email &&
        editUserForm.phone 
    );
        
    return (
        <div className="main1" id="contact">
                <div className="main2">
                    <img src={bgImg} alt="doctor" />
                    <div className="hero-overlay"></div>
                    <div className="hero-text">
                        <NavLink
                            to="/profile"
                            className="back"
                        >
                            <button className="logout">
                                <FiArrowLeft />
                            </button>
                        </NavLink>
                        <h1>Edit Profile</h1>
                        {profileUpdated ? (
                            <div className="text-white fs-4">Profile updated!</div>
                        ) : (
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="titles mt-2">
                                        Username:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        // value={user.name}
                                        onChange={(e) => setEditUserForm({ ...editUserForm, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="titles mt-2">
                                        Email:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        // value={user.email}
                                        onChange={(e) =>  setEditUserForm({ ...editUserForm, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="titles mt-2">
                                        Phone Number:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        // value={user.phone}
                                        onChange={(e) =>
                                            setEditUserForm({ ...editUserForm, phone: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={!formFilled}>
                                    Save
                                </button>
                            </form>
                        )}
                        
                    </div>
                </div>
        </div>
    
    );
}

export default EditProfile;