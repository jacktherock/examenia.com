import React from 'react'
import { Link } from 'react-router-dom'
import AcademicsDropdown from './Dropdowns/AcademicsDropdown'
import BookDropdown from './Dropdowns/BookDropdown';
import Logo1 from '../img/logo_icon.png'
import Logo2 from '../img/logo_name.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo1} alt="" width="35" height="32" className="d-inline-block align-text-top" />
                        <img src={Logo2} alt="" width="250" height="30" className="d-inline-block align-text-top" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item">
                                <Link className="nav-link" to="guide">Guidance</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Books
                                </Link>
                                <BookDropdown />
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academics
                                </Link>
                                <AcademicsDropdown />
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="placements">Placements</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>

                            <li className="nav-item nav-right">
                                <Link className="nav-link" to="query">Ask a Query?</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar