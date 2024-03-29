import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import pic from "../../images/1660149889759865_page-0001-removebg-preview.png"
import { Link } from "react-scroll";
import {NavLink, useNavigate} from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import useFetchUser from '../../hooks/useFetchUser';
import URL from '../../Constants/ConstantUrl';

function NavBar(){
    const { user, loading } = useFetchUser();
    const navigate = useNavigate();
    
    const handleLogout = async (e) => {
        e.preventDefault();

        const response = await fetch(`${URL}logout`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorMessage = errorResponse.errorMessages[0];
            alert(errorMessage);
            console.log(errorMessage);
            return;
        }

        if(response.ok){
            alert("User logged out");
            navigate("/");
        }
        setTimeout(() => {

        }, 1000);
    };
    
    return(
        <header id="home">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={pic}
                            alt="Logo"
                        />
                    </a>
                    {user && 
                        <>
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <div>
                                    <p className="name text-center">
                                        Hello {user.name}
                                    </p>
                                </div>
                            </div>
                        </>
                        }
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-items">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    className="nav-link"
                                >
                                    <p className="nav-title">Home</p>
                                </Link>
                            </li>
                            <li className="nav-items">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    className="nav-link"
                                >
                                    <p className="nav-title">About</p>
                                </Link>
                            </li>
                            <li className="nav-items">
                                <Link
                                    activeClass="active"
                                    to="appointment"
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    className="nav-link"
                                >
                                    <p className="nav-title">Appointment</p>
                                </Link>
                            </li>
                            <li className="nav-items">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    smooth={true}
                                    offset={-70}
                                    duration={200}
                                    className="nav-link"
                                >
                                    <p className="nav-title">Contact</p>
                                    
                                </Link>
                            </li>
                            {!user &&
                                <>
                                    <li className="nav-items">
                                        <NavLink
                                            to="/login"
                                            offset={-70}
                                            duration={200}
                                            className="nav-link"
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li className="nav-items">
                                        <NavLink
                                            to="/register"
                                            offset={-70}
                                            duration={200}
                                            className="nav-link"
                                        >
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </>
                            }


                            {user && user.role === "Admin" &&
                                <li className="nav-items d-flex flex-row align-items-center">
                                    <NavLink
                                        to="/adminsPage"
                                        offset={-70}
                                        duration={200}
                                        className="nav-link align-self-start"
                                    >
                                        Admin page
                                    </NavLink>
                                </li>
                            }

                            {user &&
                                <li className="nav-items d-flex flex-row align-items-center">
                                    <NavLink
                                        to="/profile"
                                        offset={-70}
                                        duration={200}
                                        className="nav-link align-self-start"
                                    >
                                        Profile
                                    </NavLink>
                                    <button className="logout" onClick={handleLogout}>
                                        <FiLogOut />
                                    </button>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;