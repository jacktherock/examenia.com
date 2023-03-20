import React from 'react'
import { Link } from 'react-router-dom'

const AcademicsDropdown = () => {
    return (
        <>
            {/* Academics Dropdown */}
            <div className="dropdown-menu dropstart dropdown-menu-lg-end" aria-labelledby="book-dropdown">
                {/* Academics Dropdown */}
                {/* <div className="dropdown dropend"> */}
                {/* <Link className="dropdown-item dropdown-toggle" to="#" id="academy-dropdown-layouts01"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Engineering</Link> */}

                {/* <div className="dropdown-menu" aria-labelledby="academy-dropdown-layouts01"> */}
                {/* Computer Dropdown */}
                <div className="dropdown dropend">
                    <Link className="dropdown-item dropdown-toggle" to="#" id="academy-dropdown-layouts02"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Computer Engineering</Link>

                    <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="academy-dropdown-layouts02">
                        <Link className="dropdown-item" to="#">Second Year</Link>
                        <Link className="dropdown-item" to="#">Third Year</Link>
                        <Link className="dropdown-item" to="#">Final Year</Link>
                    </div>
                </div>

                {/* Civil Dropdown */}
                <div className="dropdown dropend">
                    <Link className="dropdown-item dropdown-toggle" to="#" id="academy-dropdown-layouts02"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Civil Engineering</Link>
                    <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="academy-dropdown-layouts02">
                        <Link className="dropdown-item" to="#">Second Year</Link>
                        <Link className="dropdown-item" to="#">Third Year</Link>
                        <Link className="dropdown-item" to="#">Final Year</Link>
                    </div>
                </div>

                {/* Mechanical Dropdown */}
                <div className="dropdown dropend">
                    <Link className="dropdown-item dropdown-toggle" to="#" id="academy-dropdown-layouts03"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mechanical Engineering</Link>
                    <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="academy-dropdown-layouts03">
                        <Link className="dropdown-item" to="#">Second Year</Link>
                        <Link className="dropdown-item" to="#">Third Year</Link>
                        <Link className="dropdown-item" to="#">Final Year</Link>
                    </div>
                </div>

                {/* Electrical Dropdown */}
                <div className="dropdown dropend">
                    <Link className="dropdown-item dropdown-toggle" to="#" id="academy-dropdown-layouts04"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electrical Engineering</Link>
                    <div className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="academy-dropdown-layouts04">
                        <Link className="dropdown-item" to="#">Second Year</Link>
                        <Link className="dropdown-item" to="#">Third Year</Link>
                        <Link className="dropdown-item" to="#">Final Year</Link>
                    </div>
                </div>

                {/* </div> */}

                {/* </div> */}

                {/* Medical */}
                {/* <div className="dropdown dropend">
                    <Link className="dropdown-item dropdown-toggle" to="#" id="dropdown-layouts"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Medical</Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown-layouts">
                        <Link className="dropdown-item" to="#">Medical 1</Link>
                        <Link className="dropdown-item" to="#">Medical 2</Link>
                        <Link className="dropdown-item" to="#">Medical 3</Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default AcademicsDropdown