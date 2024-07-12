import React, { useState, useEffect } from 'react';
import "@fontsource/kelly-slab"; // Defaults to weight 400

function Banner() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const backgroundImage = isMobile ? `url('/bannerPhone.png')` : `url('/banner.png')`;

    return (
        <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: "368px" }}>
            <div className='flex justify-center items-center'>
                <div className='h-20 mt-10 sm:mt-20'>
                    <div style={{ marginLeft: "5px", marginTop: "15px" }}>
                        <span className='text-red-800' style={{ fontSize: "90px", fontWeight: "600" }}>MENU</span>
                    </div>
                    <div style={{ marginTop: '-140px' }}>
                        <span className='text-white' style={{ fontSize: "90px", fontWeight: "600" }}>MENU</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-16 text-center'>
                {isMobile ? (
                    <span className=' w-80' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB", fontSize:"20px" }}>
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
                    </span>
                ) : (
                    <span className='w-1/3' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB" }}>
                    Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
                </span>
                )}

            </div>
        </div>
    );
}

export default Banner;