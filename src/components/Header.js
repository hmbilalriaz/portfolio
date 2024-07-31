// src/components/Header.js
import React from 'react';
import profileImage from '../assets/profile.jpg';

const Header = () => {
    return (
        <header>
            <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <h1>Hafiz Muhammad Bilal</h1>
            <p>FullStack | RubyOnRails | AWS</p>
        </header>
    );
};

export default Header;