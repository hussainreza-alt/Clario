import React, { useState } from "react";

export default function Footer1 (){

    const [visible, setVisible] = useState({
        company: false,
        rescourse:false,
    });

    const handleClickVisiblity = (target) => {
        setVisible({
            company:false,
            rescourse:false,
            [target] : !visible[target]
        });
    }
    return(
        <>
        <div className=" mt-10 py-5 grid w-screen bg-gray-200 border-t border-gray-700/20">
            <div className=" p-2 w-[90%] justify-self-center grid md:grid-cols-2 lg:grid-cols-3 ">
                <div className=" md:pl-2 lg:pl-4 justify-self-center grid w-[90%] justify-start">
                    <div className=" items-center mb-2 justify-self-start flex gap-1 text-lg md:text-xl lg:text-2xl font-bold text-[#111827] ">
                        <img src="/logo.png" className=" h-7 md:h-8 lg:h-9" alt="" />
                        <p className=" w-fit">Clario</p>
                    </div>
                    <p className=" text-sm md:text-base text-[#6B7280] w-[90%] md:w-[95%] ">The AI-powered workspace that helps you and your team stay organized, productive and focus on what matters most.</p>
                    <div className="flex justify-self-center my-4 md:justify-self-start justify-between w-[65%] items-center">
                        <img src="/twitter.svg" className=" h-4 lg:h-6" alt="" />
                        <img src="/linkedin.svg" className=" h-4 lg:h-6" alt="" />
                        <img src="/github.svg" className=" h-4 lg:h-6" alt="" />
                        <img src="/instag.svg" className=" h-4 lg:h-6" alt="" />
                    </div>
                </div>
                <div className=" w-[90%] grid-cols-2 hidden gap-10 md:gap-4 my-5 lg:col-start-2 justify-self-center lg:col-end-3 lg:grid">
                    <div className=" grid col-start-1 col-end-2 text-right md:text-left justify-self-end md:justify-self-center w-full">
                        <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Company</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">About us</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Careers</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Blog</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Contacts</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Partners</p>
                    </div>
                    <div className=" grid col-start-2 col-end-3 text-left justify-self-start md:justify-self-center w-full">
                        <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Resources</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Help center</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Documentation</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Templates</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">Webinars</p>
                        <p className=" text-sm md:text-base text-[#6B7280] ">status</p>
                    </div>
                </div>

                {/* mobile and tablet onlyl */}
                <div className=" w-[85%] px-4 grid md:hidden my-5 justify-self-center">
                    <div onClick={() => {handleClickVisiblity("company")}} className=" py-2 grid border-t border-b border-t-gray-700/30 border-b-gray-700/20 ">
                        <div className=" flex w-full justify-between px-2">
                            <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Company</p>
                            <p className={`mb-2 text-sm md:text-base font-semibold transition-transform ease-in duration-300 text-[#111827] ${visible.company? "-rotate-90" : " rotate-90"}`}>&gt;</p>
                        </div>
                        <div className={` py-2 transition-all duration-300 ease-in mt-3 w-[85%] justify-self-start justify-start px-4 rounded-lg bg-gray-300 ${visible.company? "grid" : "hidden"}`}>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">About us</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Careers</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Blog</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Contacts</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Partners</p>
                        </div>
                    </div>

                    <div onClick={() => {handleClickVisiblity("rescourse")}} className=" py-2 grid border-b border-b-gray-700/20 ">
                        <div className=" flex w-full justify-between px-2">
                            <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Resources</p>
                            <p className={`mb-2 text-sm md:text-base font-semibold transition-transform ease-in duration-300 text-[#111827] ${visible.rescourse? "-rotate-90" : " rotate-90"}`}>&gt;</p>
                        </div>
                        <div className={` py-2 transition-all duration-300 ease-in mt-3 w-[85%] justify-self-start justify-start px-4 rounded-lg bg-gray-300 ${visible.rescourse? "grid" : "hidden"}`}>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Help center</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Documentation</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Templates</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Webinars</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">status</p>
                        </div>
                    </div>


                </div>

                {/* stay in loop */}
                <div className="grid w-[85%] md:w-auto mt-4 md:mt-2 my-2 md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 justify-self-center">
                    <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Stay in the loop</p>
                    <p className=" text-sm md:text-base text-[#6B7280] ">Get productivity tips and product updates straight into your inbox </p>
                    <div className=" my-2 justify-self-center rounded-xl relative w-[90%] h-fit md:justify-self-start">
                        <div className=" rounded-r-sm absolute z-10 right-0 h-full w-6 p-1 bg-[#7C3AED] grid place-items-center">
                            <img src="/send.svg" className=" h-full w-full" alt="" />
                        </div>
                        <input type="email" disabled className=" text-base p-2 rounded-sm relative z-0 w-full border border-[#6B7280]/50 text-[#6B7280] pl-2 pr-6 " />
                    </div>
                </div>
            </div>
            <div className=" w-[85%] px-4 md:grid lg:hidden hidden my-5 justify-self-center">
                    <div onClick={() => {handleClickVisiblity("company")}} className=" py-2 grid border-t border-b border-t-gray-700/30 border-b-gray-700/20 ">
                        <div className=" flex w-full justify-between px-2">
                            <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Company</p>
                            <p className={`mb-2 text-sm md:text-base font-semibold transition-transform ease-in duration-300 text-[#111827] ${visible.company? "-rotate-90" : " rotate-90"}`}>&gt;</p>
                        </div>
                        <div className={` py-2 transition-all duration-300 ease-in mt-3 w-[85%] justify-self-start justify-start px-4 rounded-lg bg-gray-300 ${visible.company? "grid" : "hidden"}`}>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">About us</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Careers</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Blog</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Contacts</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Partners</p>
                        </div>
                    </div>

                    <div onClick={() => {handleClickVisiblity("rescourse")}} className=" py-2 grid border-b border-b-gray-700/20 ">
                        <div className=" flex w-full justify-between px-2">
                            <p className=" mb-2 text-sm md:text-base font-semibold text-[#111827] ">Resources</p>
                            <p className={`mb-2 text-sm md:text-base font-semibold transition-transform ease-in duration-300 text-[#111827] ${visible.rescourse? "-rotate-90" : " rotate-90"}`}>&gt;</p>
                        </div>
                        <div className={` py-2 transition-all duration-300 ease-in mt-3 w-[85%] justify-self-start justify-start px-4 rounded-lg bg-gray-300 ${visible.rescourse? "grid" : "hidden"}`}>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Help center</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Documentation</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Templates</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Webinars</p>
                            <p className=" my-2 text-sm md:text-base text-[#6B7280] ">Status</p>
                        </div>
                    </div>


                </div>
            <div className=" items-center w-[85%] mr-5 py-4 wrap-break-word justify-self-center grid md:flex gap-4 md:gap-5 lg:gap-6 ">
                <p className=" justify-self-center md:justify-self-start text-sm md:text-base text-[#6B7280] "> © 2026 Clario. All rights reserved</p>
                <div className=" text-center w-fit flex gap-4 justify-center flex-wrap md:gap-6 lg:gap-8 justify-self-center md:justify-self-center md:ml-18">
                    <p className=" w-fit cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 ease-in text-sm text-[#6B7280] "> Privacy Policy</p>
                    <p className=" w-fit cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 ease-in text-sm text-[#6B7280] "> Terms of Service</p>
                    <p className=" w-fit cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 ease-in text-sm text-[#6B7280] "> Security</p>
                    <p className=" w-fit cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 ease-in text-sm text-[#6B7280] "> Cookies</p>
                </div>
            </div>
        </div>
        </>
    )
}