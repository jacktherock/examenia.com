import React from 'react'
import { Link } from 'react-router-dom'
import AcademicsDropdown from './Dropdowns/AcademicsDropdown'
import BookDropdown from './Dropdowns/BookDropdown';

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Examenia.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item">
                                <Link className="nav-link" to="guide">Guidance</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="book-dropdown" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Books</Link>

                                <BookDropdown />

                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="academy-dropdown" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Academics</Link>

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
                {AddLibrary('../js/bootstrap-dropdown.js')}

            </nav>
        </>
    )
}

export default Navbar