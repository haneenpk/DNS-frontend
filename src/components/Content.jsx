import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "@fontsource/kelly-slab"; // Defaults to weight 400

function Content() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const [menuData, setMenuData] = useState([{
        name: "",
        description: "",
        price: 0
    }])

    useEffect(() => {

        // Function to handle the async axios call
        const fetchData = async () => {
            try {
                console.log("haloo");
                const response = await axios.get(`http://cozastore.online/loadMenu`);
                console.log(response.data); // Handle the response as needed
                setMenuData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();

        // Function to handle window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='  bg-[#000000ef]'>
            <div className='flex pt-10'>
                {isMobile ? (
                    null
                ) : (
                    <img src='/LaplefIcons.png' alt="" />
                )}

                <div className=' w-full'>
                    <div className={`mt-12 border-2 border-white ${isMobile ? 'mx-5' : ''}`}>
                        {isMobile ? (
                            <div>
                                <img src="/drinks-1.png" className='absolute mt-4 h-16' alt="" />
                                <img src="/drinks-2.png" className='absolute right-1 h-16 mt-4' alt="" />
                            </div>
                        ) : (
                            <div>
                                <img src="/drinks-1.png" className='absolute -mt-20 -ml-24' alt="" />
                                <img src="/drinks-2.png" className='absolute right-24 -mt-14' alt="" />
                            </div>
                        )}
                        {isMobile ? (
                            <div className='flex justify-center space-x-3'>
                                <span className=' w-14 bg-white h-1 mt-14'></span>
                                <div className='flex justify-center mt-7'>
                                    <div style={{ marginLeft: "", marginTop: "3px" }}>
                                        <span className='text-red-800' style={{ fontSize: "40px", fontWeight: "600" }}>DRINKS</span>
                                    </div>
                                    <div style={{ marginLeft: '-114px' }}>
                                        <span className='text-white' style={{ fontSize: "40px", fontWeight: "600" }}>DRINKS</span>
                                    </div>
                                </div>
                                <span className='w-14 bg-white h-1 mt-14'></span>
                            </div>
                        ) : (
                            <div className='flex justify-center space-x-5'>
                                <span className=' w-28 bg-white h-1 mt-20'></span>
                                <div className='flex justify-center mt-7'>
                                    <div style={{ marginLeft: "", marginTop: "4px" }}>
                                        <span className='text-red-800' style={{ fontSize: "70px", fontWeight: "600" }}>DRINKS</span>
                                    </div>
                                    <div style={{ marginLeft: '-200px' }}>
                                        <span className='text-white' style={{ fontSize: "70px", fontWeight: "600" }}>DRINKS</span>
                                    </div>
                                </div>
                                <span className=' w-28 bg-white h-1 mt-20'></span>
                            </div>
                        )}
                        <div className={`pb-9 mx-20 mt-5 grid md:grid-cols-1 gap-7 lg:grid-cols-2 ${isMobile ? 'mx-5' : ''}`}>
                            {menuData.map((menu) => (
                                <div className='h-fit' key={menu.name}>
                                    <div className='flex justify-between text-white' style={{ fontSize: isMobile ? '25px' : '30px' }}>
                                        <span>{menu.name}</span>
                                        <span>${menu.price}</span>
                                    </div>
                                    <span className='' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB", fontSize: isMobile ? '13px' : '18px' }}>{menu.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`mt-12 border-2 border-white ${isMobile ? 'mx-5' : ''}`}>
                        {isMobile ? (
                            <div>
                                <img src="/drinks-3.png" className='absolute  h-28' alt="" />
                                <img src="/drinks-4.png" className='absolute right-5 h-28 ' style={{ marginTop: "470px" }} alt="" />
                            </div>
                        ) : (
                            <div>
                                <img src="/drinks-3.png" className='absolute -mt-40 -ml-14' alt="" />
                                <img src="/drinks-4.png" className='absolute right-40 mt-52' alt="" />
                            </div>
                        )}
                        {isMobile ? (
                            <div className='flex justify-center '>
                                <span className='w-24 bg-white h-1 mt-20 ml-12'></span>
                                <div className='flex justify-center mt-7 text-center'>
                                    <div style={{ marginLeft: "", marginTop: "4px" }}>
                                        <span className='text-red-800' style={{ fontSize: "40px", fontWeight: "600" }}>BRUNCH COCKTAILS</span>
                                    </div>
                                    <div style={{ marginLeft: '-168px' }} >
                                        <span className='text-white' style={{ fontSize: "40px", fontWeight: "600" }}>BRUNCH COCKTAILS</span>
                                    </div>
                                </div>
                                <span className='w-24 bg-white h-1 mt-20 mr-12'></span>
                            </div>
                        ) : (
                            <div className='flex justify-center space-x-5'>
                                <span className=' w-28 bg-white h-1 mt-20'></span>
                                <div className='flex justify-center mt-7'>
                                    <div style={{ marginLeft: "", marginTop: "4px" }}>
                                        <span className='text-red-800' style={{ fontSize: "70px", fontWeight: "600" }}>BRUNCH COCKTAILS</span>
                                    </div>
                                    <div style={{ marginLeft: '-527px' }}>
                                        <span className='text-white' style={{ fontSize: "70px", fontWeight: "600" }}>BRUNCH COCKTAILS</span>
                                    </div>
                                </div>
                                <span className=' w-28 bg-white h-1 mt-20'></span>
                            </div>
                        )}

                        <div className={`pb-14 mx-20 mt-5 grid md:grid-cols-1 gap-7 lg:grid-cols-2 ${isMobile ? 'mx-5' : ''}`}>
                            <div className='h-fit'>
                                <div className='flex justify-between text-white' style={{ fontSize: isMobile ? '25px' : '30px' }}>
                                    <span>CINNAMON TOAST CRUNCH</span>
                                    <span>$16</span>
                                </div>
                                <span className='' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB", fontSize: isMobile ? '13px' : '18px' }}>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</span>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-between text-white' style={{ fontSize: isMobile ? '25px' : '30px' }}>
                                    <span>MOET SPRITZ</span>
                                    <span>$20</span>
                                </div>
                                <span className='' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB", fontSize: isMobile ? '13px' : '18px' }}>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</span>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-between text-white' style={{ fontSize: isMobile ? '25px' : '30px' }}>
                                    <span>BAR 42 MARY</span>
                                    <span>$14</span>
                                </div>
                                <span className='' style={{ fontFamily: "Kelly Slab", color: "#BBBBBB", fontSize: isMobile ? '13px' : '18px' }}>Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded</span>
                            </div>

                        </div>
                    </div>
                    <div className={`mt-12 border-2 border-white ${isMobile ? 'mx-5' : ''}`}>
                        <div className='flex justify-center mt-6'>
                            <img src="/Vector.png" alt="" />
                        </div>
                        {isMobile ? (
                            <div className='flex justify-center space-x-5 mt-3'>
                                <span className=' w-24 bg-white h-1 mt-14'></span>
                                <div className='flex justify-center text-center'>
                                    <div style={{ marginLeft: "", marginTop: "4px" }}>
                                        <span className='text-red-800' style={{ fontSize: "40px", fontWeight: "600" }}>HOOKAH FLAVOURS</span>
                                    </div>
                                    <div style={{ marginLeft: '-198px' }}>
                                        <span className='text-white' style={{ fontSize: "40px", fontWeight: "600" }}>HOOKAH FLAVOURS</span>
                                    </div>
                                </div>
                                <span className='w-24 bg-white h-1 mt-14'></span>
                            </div>
                        ) : (
                            <div className='flex justify-center space-x-5'>
                                <span className=' w-28 bg-white h-1 mt-14'></span>
                                <div className='flex justify-center'>
                                    <div style={{ marginLeft: "", marginTop: "4px" }}>
                                        <span className='text-red-800' style={{ fontSize: "70px", fontWeight: "600" }}>HOOKAH FLAVOURS</span>
                                    </div>
                                    <div style={{ marginLeft: '-510px' }}>
                                        <span className='text-white' style={{ fontSize: "70px", fontWeight: "600" }}>HOOKAH FLAVOURS</span>
                                    </div>
                                </div>
                                <span className=' w-28 bg-white h-1 mt-14'></span>
                            </div>
                        )}

                        <div className={`pb-14 mx-20 mt-5 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6 ${isMobile ? 'gap-2' : 'gap-7'}`}>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>ORANGE MINT</span>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>BLUE MIST</span>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>MIGHTY FREEZE</span>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>LUV 66</span>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>PEACH</span>
                                </div>
                            </div>
                            <div className='h-fit'>
                                <div className='flex justify-center text-white' style={{ fontSize: isMobile ? '25px' : '27px' }}>
                                    <span>WATERMELON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button className='bg-[#128be2] text-white p-3 px-7'>ORDER ONLINE</button>
                    </div>
                    {isMobile ? (
                        <div className='bg-[#c59f59cf] py-2 text-white mt-10 text-center mx-5'>
                            <div className='px-5 flex '>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "14px" }}>Food may not be refunded. If your food was made incorrectly we will remake it for you.</span>
                            </div>
                            <div className='border-y-2 border-dotted h-16 py-2'>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "14px" }}>18% service charge will be added to all checks over $100.</span>
                            </div>
                            <div className='px-5'>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "14px" }}>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</span>
                            </div>
                        </div>
                    ) : (
                        <div className='bg-[#c59f59cf] py-2 flex text-white items-center mt-10'>
                            <div className=' w-1/3 px-5'>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "18px" }}>Food may not be refunded. If your food was made incorrectly we will remake it for you.</span>
                            </div>
                            <div className=' w-1/3 border-x-2 border-dotted h-16 flex items-center px-5'>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "18px" }}>18% service charge will be added to all checks over $100.</span>
                            </div>
                            <div className=' w-1/3 px-5'>
                                <span style={{ fontFamily: "Kelly Slab", fontSize: "18px" }}>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</span>
                            </div>
                        </div>
                    )}


                </div>
                {isMobile ? (
                    null
                ) : (
                    <img src='/LapRigIcons.png' alt="" />
                )}

            </div>
        </div>
    )
}

export default Content
