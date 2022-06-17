import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.svg';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
                <div className='container'>
                    <a className='navbar-brand' href='#'>
                        <img src={logo} alt='' width={100} />
                    </a>
                    <div className='d-flex'>
                        <button className='try btn btn-outline-secondary shadow-sm'>Try It Free</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;