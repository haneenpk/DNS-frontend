import React, { useState } from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='lg:h-24 h-16 w-full flex items-end bg-[#121618]'>
                <div className='h-16  mx-16 w-full flex justify-between items-end z-10'>
                    <div className='w-1/2  h-10 flex justify-end lg:justify-start ml-12'>
                        <img src="/Logo.png" alt="" className='h-20' />
                        <div className="hidden lg:flex flex-col  ml-2 -mt-3 ">
                            <span className='font-semibold' style={{ fontSize: '40px', color: '#128be2' }}>
                                DEEP <span className='text-white'>NET</span>
                            </span>
                            <span className='font-semibold -mt-4' style={{ fontSize: '40px', color: '#857878' }}>SOFT</span>
                        </div>
                    </div>
                    <div className='w-1/2  h-12 hidden lg:flex justify-end'>
                        <ul className='flex space-x-6 text-white font-semibold mt-2'>
                            <li>HOME</li>
                            <li style={{color:'#128be2'}}>MENU</li>
                            <li>MAKE A RESERVATION</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    <div className='lg:hidden relative z-50'>
                        <button onClick={toggleMenu} className='absolute bottom-5'>
                            <VscThreeBars color='white' size={25} />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='lg:hidden bg-[#373737] z-20 top-0 fixed h-screen w-full  bg-opacity-80 '>
                    <ul className='flex flex-col items-start space-y-6 p-4 text-white font-semibold'>
                        <button onClick={toggleMenu} className=''>
                            <IoIosCloseCircle color='white' size={35} />
                        </button>
                        {/* Adjust the div here */}
                        <div className='space-y-4'>
                            <li><a href="#" onClick={toggleMenu}>HOME</a></li>
                            <li><a href="#" onClick={toggleMenu}>MENU</a></li>
                            <li><a href="#" onClick={toggleMenu}>MAKE A RESERVATION</a></li>
                            <li><a href="#" onClick={toggleMenu}>CONTACT US</a></li>
                        </div>
                    </ul>
                </div>
            )}
        </div>

    )
}

export default Header
