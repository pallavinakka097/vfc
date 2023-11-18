import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('useremail');
    function logout() {
        localStorage.removeItem('useremail');
        navigate('/login');
    }
    return ( 
        <nav className="navbar">
            <div className="logo">VFC</div>
            <div className="buttons">
                {user ? (
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className='fa fa-user'></i>{user}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Bookings</a>
                            <a className="dropdown-item" href="/login" onClick={logout}>Logout</a>
                        </div>
                    </div>
                ) : (
                    <>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className='fa fa-user'></i>LOGIN
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/login">USER LOGIN</a>
                            <a className="dropdown-item" href="/ownerlogin">OWNER LOGIN</a>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
