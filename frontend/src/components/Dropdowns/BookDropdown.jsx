import React from 'react'
import { Link } from 'react-router-dom'

const BookDropdown = () => {
    return (
        <>
            {/* Books Dropdown */}
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="book-comp">Computer Engineering</Link></li>
                {/* <li><Link className="dropdown-item" to="#">Civil Engineering</Link></li>
                <li><Link className="dropdown-item" to="#">Mechanical Engineering</Link></li>
                <li><Link className="dropdown-item" to="#">Electrical Engineering</Link></li> */}
            </ul>
        </>
    )
}

export default BookDropdown