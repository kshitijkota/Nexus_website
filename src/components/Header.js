import React from 'react';
import './Header.css';

function Header() {
    return (
    <header className="header">
        <div className="logo">NEXUS</div>
        <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#events">Events</a>
        </nav>
    </header>
    );
}

export default Header;
