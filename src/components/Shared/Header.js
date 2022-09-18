import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='fixed z-50 w-screen p-6 px-5 md:px-16'>
            {/* tablet & desktop */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 object-cover' src={logo} alt="Logo" />
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </div>
    );
};

export default Header;