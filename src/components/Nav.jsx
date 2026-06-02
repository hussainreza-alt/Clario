import React, { useEffect, useRef, useState } from "react";

export default function Nav(){
    const [navAtive, setNavActive] = useState(false);
    const hamRef = useRef(null)
    const navRef = useRef(null)
    const toggle = () => {
        setNavActive(prev => !prev);
    }
    useEffect(() => {
        function clickBuddy(e) {   
            if (hamRef.current && !hamRef.current.contains(e.target) && navRef && !navRef.current.contains(e.target)) {
                setNavActive(false);
      }
    }
        window.addEventListener("click", clickBuddy);
        return (() => window.removeEventListener("click", clickBuddy));
    }, [])


    return(
        <>
        <div className=" w-screen grid lg:pl-4 lg:pr-4 fixed z-40 top-3 left-0 backdrop-blur-2xl">
            <div className="flex lg:grid lg:grid-cols-[1fr_2fr_1fr] w-[90%] lg:w-full justify-self-center p-4 rounded-xl shadow-sm items-center justify-between shadow-black/50">
                <div className=" lg:justify-self-start w-fit lg:col-start-1 lg:col-end-2 self-start h-fit flex items-center gap-0">
                    <img src="/logo.png" className=" self-start justify-self-start h-12" alt="" />
                    <span className=" text-[#11827] text-lg font-semibold lg:text-2xl sm:text-xl">Clario</span>
                </div>
                <div className=" items-center justify-self-center lg:col-start-2 lg:col-end-3 self-center text-gray-700/80 hidden lg:flex lg:gap-10">
                    <span onClick={() => {document.getElementById("features").scrollIntoView({behavior:"smooth"})}} className=" hover:text-black cursor-pointer">Features</span>
                    <span onClick={() => {document.getElementById("dashboard").scrollIntoView({behavior:"smooth"})}} className="hover:text-black cursor-pointer ">How It Works</span>
                    <span onClick={() => {document.getElementById("pricing").scrollIntoView({behavior:"smooth"})}} className="hover:text-black cursor-pointer">Pricing</span>
                    <span onClick={() => {document.getElementById("testimonial").scrollIntoView({behavior:"smooth"})}} className="hover:text-black cursor-pointer">Testimonials</span>
                </div>
                <div className=" flex gap-4 lg:gap-6 items-center lg:justify-self-end lg:col-start-3 lg:col-end-4">
                    <span className=" hidden lg:block cursor-pointer text-gray-700/90 hover:text-black">
                        Log In
                    </span>
                    <div ref={hamRef} className=" text-[#7C3AED] text-4xl font-semibold lg:hidden" onClick={toggle}>
                        ☰
                    </div>
                    <div className="btn hidden lg:block bg-[#7C3AED] cursor-pointer p-2 rounded-2xl w-fit transition-transform duration-300 ease-in hover:bg-[#5528a3] hover:shadow-sm hover:shadow-black">
                        <span className=" text-xs md:text-base text-white">Get Started Free</span>
                    </div>
                </div>
            </div>
        </div>
        <div ref={navRef} id="navslider" className={` p-4 rounded-2xl z-50 shadow-md shadow-black transition-[right] grid ease-in duration-500 top-24 gap-4 ${navAtive? "right-4 block fixed" : "fixed -right-42 md:-right-52"} items-center justify-self-center self-center text-gray-700/80 backdrop-blur-2xl`}>
                <span onClick={() => {
                    document.getElementById("features").scrollIntoView({behavior:"smooth"});
                    setNavActive(false);
                    }} className=" hover:text-black">Features</span>
                <span onClick={() => {
                    document.getElementById("dashboard").scrollIntoView({behavior:"smooth"});
                    setNavActive(false);
                    }} className="hover:text-black pt-4 border-t border-t-gray-700/50">How It Works</span>
                <span onClick={() => {
                    document.getElementById("pricing").scrollIntoView({behavior:"smooth"});
                    setNavActive(false);
                    }} className="hover:text-black pt-4 border-t border-t-gray-700/50">Pricing</span>
                <span onClick={() => {
                    document.getElementById("testimonial").scrollIntoView({behavior:"smooth"});
                    setNavActive(false);
                    }} className="hover:text-black pt-4 border-t border-t-gray-700/50">Testimonials</span>
                <span className=" mt-8 w-full text-center block cursor-pointer text-gray-700/90 hover:text-black">
                    Log In
                </span>
                <div className="btn mt-2 block bg-[#7C3AED] cursor-pointer p-2 rounded-2xl w-fit transition-transform duration-300 ease-in hover:bg-[#5528a3] hover:shadow-sm hover:shadow-black">
                    <span className=" text-xs md:text-base text-white">Get Started Free</span>
                </div>
            </div>
        </>
    )
}