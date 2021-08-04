import React from 'react'
import Logo from '../../components/Logo/Logo'

const Header = () => {
    return (
        <>
            <div className="lifestyle">
                <div className="header">
                    <div className="col-xs-10 col-sm-5">
                        <Logo className="logo" />
                    </div>
                    <div className="col-xs-2 col-sm-7">
                        <nav className="navigation">
                            <ul className="menu">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Hot articles</a>
                                </li>
                                <li>
                                    <a href="">People</a>
                                </li>
                                <li>
                                    <a href="">Places</a>
                                </li>
                                <li>
                                    <a href="">Stories</a>
                                </li>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                                <li>
                                    <a href="">Buy now</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="nav-mobile-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="slogan_lifestyle">
                    <img
                        src="images/home_lifestyle_slogan.png"
                        alt="home_lifestyle_slogan"
                    />
                </div>
            </div>
        </>
    )
}

export default Header
