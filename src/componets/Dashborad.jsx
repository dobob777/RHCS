import React from 'react'
import logo from '../img/logo.png';

const Dashborad = () => {
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light navbarColor">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <a className="navbar-brand" href="#">
                            <div className="navBarLogo">
                                <img src={ logo } alt="no-logo" />
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navMenuList" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Solutions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <button>Sign up</button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Dashborad