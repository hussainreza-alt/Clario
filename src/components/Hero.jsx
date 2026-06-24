import React from "react";
export default function Hero (){
    return(
        <>
        <div className=" mt-10 lg:mt-14 pt-10 w-screen h-fit grid lg:grid-cols-[6fr_7fr] lg:h-fit">
            <div className=" text-left p-10 md:p-20 lg:p-2 lg:pt-8 lg:pl-10 w-full grid justify-self-center h-fit items-center lg:col-start-1 lg:col-end-2">
                <span className=" flex gap-2 text-[#A78BFA] font-semibold text-base p-1 rounded-2xl bg-gray-400/30 pl-3 pr-3 w-fit items-center "> <img src="/star.svg" className=" h-5" alt="" /> AI-Powered Productivity</span>
                <h1 className=" mt-2 leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word">
                    <span className=" text-[#111827]">Organise work <br className=" hidden lg:block" /> with</span> <br className=" block lg:hidden" /> <span className=" text-[#A78BFA] ">AI-Powered</span> <br className=" hidden lg:block" /> <span className=" font-extrabold text-[#7C3AED] ">Clario</span>
                </h1>
                <span className =" text-[#6B7280] md:mt-2 text-base md:text-lg font-normal ">Clario helps you streamline tasks, summarize meetings and stay focused on what matters the most</span>
                <br />
                <div className=" w-full mt-6 md:mt-0.5 flex gap-4 md:gap-6 justify-start justify-self-center items-center">
                    <div className="btn mt-2 block bg-[#7C3AED] cursor-pointer p-4 rounded-2xl w-fit transition-transform duration-300 ease-in hover:bg-[#5528a3] hover:shadow-sm hover:shadow-black">
                        <span className=" text-lg md:text-xl text-white">Get Started Free &gt;</span>
                    </div>
                    <div className=" py-4.5 px-8 border border-[#7C3AED] rounded-2xl overflow-hidden mt-2 block cursor-pointer text-[#111827] justify-center items-center w-fit transition-transform duration-300 ease-in hover:text-black">
                        <div className=" rounded-2xl bg-white h-full w-full">Tutorial</div>
                    </div>
                </div>
                <div className=" flex gap-4 mt-8">
                    <div className=" w-fit flex gap-0 p-0">
                        <img src="/4.png" className=" h-10 md:h-12 lg:h-14 rounded-full relative z-0" alt="" />
                        <img src="/3.png" className=" h-10 md:h-12 lg:h-14 rounded-full border-3 border-white relative z-10 -ml-4" alt="" />
                        <img src="/2.png" className=" hidden md:block h-10 md:h-12 lg:h-14 rounded-full border-3 border-white relative z-20 -ml-4" alt="" />
                        {/* <img src=" /1.png" className=" hidden md:block h-10 md:h-12 lg:h-14 rounded-full border-3 border-white relative z-30 -ml-4" alt="" /> */}
                    </div>
                    <div className=" grid text-xs md:text-base">
                        <span className=" text-[#6B7280]">
                            Join 12,000+ productive teams
                        </span>
                        <div className=" flex wrap-break-word gap-2">
                            <div className=" text-[#6B7280] flex gap-0.5">
                                <img src="/rate.svg" className=" h-4 md:h-6" alt="" />
                                <img src="/rate.svg" className=" h-4 md:h-6" alt="" />
                                <img src="/rate.svg" className=" h-4 md:h-6" alt="" />
                                <img src="/rate.svg" className=" h-4 md:h-6" alt="" />
                            </div>
                            <span className=" p-1 wrap-break-word text-black">4.9/5</span><span className="text-[#6B7280]">From 12,000+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/mo.png" loading="eager" fetchPriority="true" className=" w-[90%] hidden rounded-3xl shadow-md shadow-black lg:block justify-self-center lg:col-start-2 lg:col-end-3" alt="" />
            <div className=" rounded-lg overflow-hidden h-[50vh] shadow-md shadow-black grid w-[85%] justify-self-center lg:hidden">
                <img src="/mob.png" loading="eager" fetchPriority="true" className=" w-full rounded-lg block justify-self-center lg:hidden" alt="" />
            </div>
            <div className=" grid lg:col-start-1 lg:col-end-3 justify-center w-full text-[#6B7280] mt-10 ">
                <span className=" w-full justify-self-center justify-center text-center text-base font-medium lg:text-lg">
                    Trusted by teams at
                </span>
                <div className=" h-auto flex-wrap justify-center mt-2 flex text-base lg:text-lg font-medium gap-6 w-full md:gap-10 lg:gap-12 p-4">
                    {/* 1st obj */}
                    <div className=" flex items-center gap-2">
                        <img src="/linear1.svg" className=" filter h-5" alt="" />
                        <span>Linear</span>
                    </div>

                    {/* 2nd obj */}
                    <div className=" flex items-center gap-2">
                        <img src="/notion.svg" className=" filter h-5" alt="" />
                        <span>Notion</span>
                    </div>

                    {/* 3rd obj */}
                    <div className=" flex items-center gap-2">
                        <img src="/discord.svg" className=" filter h-5" alt="" />
                        <span className=" font-semibold">Discord</span>
                    </div>
                    {/* 4rth one */}
                    <div className=" flex items-center gap-2">
                        <img src="/loom.svg" className=" filter h-5" alt="" />
                        <span>Loom</span>
                    </div>

                    {/* 5th one */}
                    <div className=" flex items-center gap-2">
                        <img src="/framewor.svg" className=" filter h-5" alt="" />
                        <span>Framer</span>
                    </div>

                    {/* 6th one */}
                    <div className=" flex items-center gap-2">
                        <img src="/raycast.svg" className=" filter h-5" alt="" />
                        <span>Raycast</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}