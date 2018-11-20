import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">Music Db
            </Link>
            <span></span>
        </header>

    )
}
export default Header;