import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import useWindowSize from '../../util/useWindowSize.js';


function Header() {
    const windowSize = useWindowSize();
    const logoWidth = windowSize.width >= 1440 ? 201 : 98;
    const logoHeight = windowSize.width >= 1440 ? 31 : 16;
    const logoViewBox = windowSize.width >= 1440 ? "108 0 40 40" : "100 0 40 40";

    return (
        <header>
            <nav className="navbar">
                <a className='logo navbar-brand' href='#'>
                    <Logo
                        width={logoWidth}
                        height={logoHeight}
                        viewBox={logoViewBox}
                    />
                </a>
                <div className='d-flex'>
                    <button className='try btn btn-outline-secondary shadow-sm'>Try It Free</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;