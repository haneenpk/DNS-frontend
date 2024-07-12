import React, { useEffect, useState } from 'react'

function Category() {
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

    const backgroundImage = isMobile ? `url('/categoryPhone.png')` : `url('/categoryLap.png')`;

    return (
        <div>

            {isMobile ? (
                <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: "95px" }}>
                    <div className='flex justify-center items-center text-white' style={{ fontSize: "12px" }}>
                        <div className='mt-6 space-x-4'>
                            <button className='bg-black w-20 py-2 border-[#128be2] border-2'>FOOD</button>
                            <button className='bg-[#128be2] w-20 py-2 border-[#128be2] border-2'>DRINKS</button>
                            <button className='bg-black w-20 py-2 border-[#128be2] border-2'>BRUNCH</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: "110px" }}>
                    <div className='flex justify-center items-center text-white' style={{ fontSize: "27px" }}>
                        <div className='mt-6 space-x-6'>
                            <button className='bg-black w-40 py-2 border-[#128be2] border-2'>FOOD</button>
                            <button className='bg-[#128be2] w-40 py-2 border-[#128be2] border-2'>DRINKS</button>
                            <button className='bg-black w-40 py-2 border-[#128be2] border-2'>BRUNCH</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Category
