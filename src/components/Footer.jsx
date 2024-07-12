import React, { useEffect, useState } from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import "@fontsource/lato"; // Defaults to weight 400

function Footer() {
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


  return (
    <div className='bg-black pt-24 w-full'>

      {isMobile ? (
        <div className=' mx-5 grid md:grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='border rounded-2xl pb-4'>
            <div className='flex justify-center -mt-8 '>
              <img src="/Logo.png" alt="" className='h-16' />
            </div>
            <div className='text-center mt-1'>
              <span style={{ fontSize: '35px', color: '#128be2' }}>DEEP </span><span style={{ fontSize: '35px', color: '#fff' }}>NET </span><span style={{ fontSize: '35px', color: '#857878' }}>SOFT</span>
            </div>
            <div className='flex justify-center space-x-4'>
              <FiFacebook color='gray' />
              <RxTwitterLogo color='gray' />
              <RiYoutubeLine color='gray' />
              <FaInstagram color='gray' />
            </div>
          </div>
          <div className='border rounded-2xl text-center space-y-2 pt-5 pb-4'>
            <span className='' style={{ color: "#128be2" }}>CONNECT WITH US</span>
            <span className='text-gray-400 flex justify-center space-x-4'><GiRotaryPhone color='white' size={22} /> <span>+1 470-788-8255</span></span>
            <span className='text-gray-400 flex justify-center space-x-4'><MdOutlineEmail color='white' size={22} /> <span>email@42barandgrill.com</span></span>
          </div>

          <div className='border rounded-2xl text-center space-y-2 pt-5 pb-4'>
            <span className='' style={{ color: "#128be2" }}>FIND US</span>
            <span className='text-gray-400 flex justify-center space-x-4'><IoLocationOutline color='white' size={22} /> <span className='w-1/2'>327 Memorial Dr SE, Atlanta,
              GA 30312, USA</span></span>
          </div>
        </div>
      ) : (
        <div className=' mx-36 grid md:grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='border rounded-2xl text-center space-y-2 pt-5'>
            <span className='' style={{ color: "#128be2" }}>CONNECT WITH US</span>
            <span className='text-gray-400 flex justify-center space-x-4'><GiRotaryPhone color='white' size={22} /> <span>+1 470-788-8255</span></span>
            <span className='text-gray-400 flex justify-center space-x-4'><MdOutlineEmail color='white' size={22} /> <span>email@42barandgrill.com</span></span>
          </div >
          <div className='border rounded-2xl pb-2'>
            <div className='flex justify-center -mt-10 '>
              <img src="/Logo.png" alt="" className='h-20' />
            </div>
            <div className='text-center mt-1'>
              <span style={{ fontSize: '40px', color: '#128be2' }}>DEEP </span><span style={{ fontSize: '40px', color: '#fff' }}>NET </span><span style={{ fontSize: '40px', color: '#857878' }}>SOFT</span>
            </div>
            <div className='flex justify-center space-x-4'>
              <FiFacebook color='gray' />
              <RxTwitterLogo color='gray' />
              <RiYoutubeLine color='gray' />
              <FaInstagram color='gray' />
            </div>
          </div>
          <div className='border rounded-2xl text-center space-y-2 pt-5'>
            <span className='' style={{ color: "#128be2" }}>FIND US</span>
            <span className='text-gray-400 flex justify-center space-x-4'><IoLocationOutline color='white' size={22} /> <span className='w-1/2'>327 Memorial Dr SE, Atlanta,
              GA 30312, USA</span></span>
          </div>
        </div >
      )}

      {
        isMobile ? (
          <div className='bg-[#191919] mt-10 py-2 text-gray-400 text-center' style={{ fontFamily: "Lato", fontSize: '11px' }}>
            <div>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</div>
            <span>Terms & Conditions  Privacy Policy</span>
          </div>
        ) : (
          <div className='bg-[#191919] mt-10 px-36 py-2 text-gray-400 items-center grid md:grid-cols-1 lg:grid-cols-2 gap-5' style={{ fontFamily: "Lato" }}>
            <span>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</span>
            <div className='flex justify-end'>
              <ul className='flex gap-6'>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>

            </div>
          </div>
        )
      }


    </div >
  )
}

export default Footer
