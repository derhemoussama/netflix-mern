import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate("/")} // Use navigate to go to the ProfileScreen
                    className='nav__logo'
                    src="https://imgs.search.brave.com/vq4rM2jnG_LzMeZHGVj-BEoZt4Dh_sgI32r0Q2xK5bw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
                    alt="Logo"
                />

                <img
                    onClick={() => navigate("/profile")} // Use navigate to go to the ProfileScreen
                    className="nav__avatar"
                    src="https://imgs.search.brave.com/Y3VYcZExZtR89T9vI3dKXCRRVZ5bJNbt7ZMXEaa2jJo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn"
                    alt="Avatar"
                />
            </div>
        </div>
    );
}

export default Nav;
