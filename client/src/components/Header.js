import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Emaily</Link>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/auth/google">Login with Google</a></li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;