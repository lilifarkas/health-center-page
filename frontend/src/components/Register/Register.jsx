import React, {useEffect, useState} from 'react';
import './Register.css';
import bgImg from "../../images/register.png";
import {NavLink, useNavigate} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import URL from '../../Constants/ConstantUrl';

function Register() {
    const navigate = useNavigate();
    const[registerForm, setRegisterForm] = useState({
        "name": "",
        "email": "",
        "phoneNumber": "",
        "password": "",
        "confirmPassword": ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${URL}register`,{
            method: 'POST',
            headers: {
                // 'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerForm)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            // const errorMessage = errorResponse.errorMessages[0];
            alert(errorResponse)
            console.log(errorResponse);
            return
        }

        setRegisterForm({
            "name": '',
            "email": '',
            "phoneNumber": '',
            "password": '',
            "confirmPassword": ''
        });

        if(response.ok) {
            alert("User Successfully Registered")
            navigate('/login');
        }
        setTimeout(() => {

        }, 1000);
    };

    return (
        <div className="main1" id="contact">
            <div className="main2">
                <img src={bgImg} alt="doctor" />
                <div className="hero-text mt-5">
                    <NavLink
                        to="/"
                        className="back mt-4"
                    >
                        <button className="logout">
                            <FiArrowLeft />
                        </button>
                    </NavLink>
                    <div className="hero-overlay"></div>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nameInput">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                style={{textAlign: 'center'}}
                                value={registerForm.name}
                                onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                style={{textAlign: 'center'}}
                                value={registerForm.email}
                                onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                style={{textAlign: 'center'}}
                                value={registerForm.phoneNumber}
                                onChange={(e) => setRegisterForm({...registerForm, phoneNumber: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Enter the password"
                                style={{textAlign: 'center'}}
                                value={registerForm.password}
                                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Password again</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Enter the password again"
                                style={{textAlign: 'center'}}
                                value={registerForm.confirmPassword}
                                onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!registerForm.confirmPassword}>
                            Register
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register;