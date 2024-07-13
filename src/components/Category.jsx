import React, { useEffect, useState } from 'react';

function Category() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const [selectedCategory, setSelectedCategory] = useState('DRINKS');

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

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
    };

    const getClassName = (category) => {
        return selectedCategory === category
            ? 'bg-[#128be2] w-40 py-2 border-[#128be2] border-2'
            : 'bg-black w-40 py-2 border-[#128be2] border-2';
    };

    const backgroundImage = isMobile ? `url('/categoryPhone.png')` : `url('/categoryLap.png')`;

    return (
        <div>
            {isMobile ? (
                <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: "95px" }}>
                    <div className='flex justify-center items-center text-white' style={{ fontSize: "12px" }}>
                        <div className='mt-6 space-x-4'>
                            <button
                                className={selectedCategory === 'FOOD' ? 'bg-[#128be2] w-20 py-2 border-[#128be2] border-2' : 'bg-black w-20 py-2 border-[#128be2] border-2'}
                                onClick={() => handleButtonClick('FOOD')}
                            >
                                FOOD
                            </button>
                            <button
                                className={selectedCategory === 'DRINKS' ? 'bg-[#128be2] w-20 py-2 border-[#128be2] border-2' : 'bg-black w-20 py-2 border-[#128be2] border-2'}
                                onClick={() => handleButtonClick('DRINKS')}
                            >
                                DRINKS
                            </button>
                            <button
                                className={selectedCategory === 'BRUNCH' ? 'bg-[#128be2] w-20 py-2 border-[#128be2] border-2' : 'bg-black w-20 py-2 border-[#128be2] border-2'}
                                onClick={() => handleButtonClick('BRUNCH')}
                            >
                                BRUNCH
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: "110px" }}>
                    <div className='flex justify-center items-center text-white' style={{ fontSize: "27px" }}>
                        <div className='mt-6 space-x-6'>
                            <button
                                className={getClassName('FOOD')}
                                onClick={() => handleButtonClick('FOOD')}
                            >
                                FOOD
                            </button>
                            <button
                                className={getClassName('DRINKS')}
                                onClick={() => handleButtonClick('DRINKS')}
                            >
                                DRINKS
                            </button>
                            <button
                                className={getClassName('BRUNCH')}
                                onClick={() => handleButtonClick('BRUNCH')}
                            >
                                BRUNCH
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Category;
