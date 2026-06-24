import React from "react";

export default function Cta (){
    return(
        <>
        <div className=" w-screen grid mt-20 p-10 lg:p-5 lg:grid-cols-[1fr_2fr_1fr] ">

            <div className="  lg:col-start-1 lg:col-end-2 self-center pl-10 w-full hidden lg:grid ">

                {/* first card */}
                <div className=" w-full p-6 md:w-[90%] lg:w-[80%] justify-self-start rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full items-center justify-start mb-5">
                        <img src="/dostar.svg" className=" h-4" alt="" />
                        <p className=" text-sm text-[#111827] font-semibold ">AI assistance</p>
                    </div>
                    <p className=" text-base text-[#111827] font-semibold w-[90%] wrap-break-word mb-5 ">Create a weekly plan for product launch</p>
                    <div className=" p-2 rounded-xl bg-gray-300 justify-self-end w-fit h-fit">
                        <img src="/dostar.svg" className=" h-5" alt="" />
                    </div>
                </div>
                <br /><br />
                {/* second card */}
                <div className=" h-fit w-full relative p-6 md:w-[90%] lg:w-[80%] justify-self-end rounded-xl shadow-xl shadow-black/20">
                    <div className=" h-[60%] self-end w-fit right-4 bottom-0 absolute z-0">
                        <img src="/growth.svg" className=" h-full " alt="" />
                    </div>
                    <div className=" w-full relative z-10 grid">
                        <p className=" text-sm text-[#111827] font-semibold w-[90%] wrap-break-word mb-1 ">Team productivity</p>
                        <p className=" text-xl w-fit h-fit font-semibold justify-start text-[#7C3AED] ">98%</p>
                        <span className=" mb-5 flex gap-1 text-xs font-semibold p-0.5 rounded-lg my-1 bg-green-300/70 w-fit h-fit px-1 justify-start text-green-950"><p className=" rotate-180">↓</p><p>24%</p></span>
                    </div>
                </div>
            </div>

            <div className=" w-full p-4 pt-0 lg:col-start-2 lg:col-end-3 self-start justify-self-center">
                <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/rocket.svg" className=" h-5" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">START TODAY</span>
                </div>
                <br />
                <h2 className=" justify-self-center text-center leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                    Ready to bring clarity to <span className=" text-[#7C3AED] "> your workflow?</span>
                </h2>
                <p className=" justify-self-center text-center w-fit wrap-break-word text-sm md:text-base lg:text-lg text-[#6B7280] mt-2 ">Join thousands of professionals who use Clario <br className=" hidden lg:block" /> to stay organized, focus and ahead of their time</p>

                
                <div className=" my-5 justify-center grid md:flex p-4 md:gap-4 lg:gap-8">
                    {/* first button */}
                    <div className=" items-center cursor-pointer hover:shadow-none shadow-xl shadow-black/20 w-full h-fit md:w-[40%] justify-self-center justify-center px-4 py-4 flex gap-4 text-base text-white font-semibold rounded-xl bg-[#7C3AED] ">
                        <p className=" w-fit text-center">Get Started Free</p><p className=" w-fit">&gt;</p>
                    </div>
                    {/* second button */}
                    <div className=" cursor-pointer hover:drop-shadow-xl hover:drop-shadow-black/20 w-full mt-5 md:mt-0 h-fit items-center md:w-[40%] justify-self-center justify-center px-4 py-4 flex gap-4 text-base text-[#111827] font-semibold rounded-xl bg-gray-200 ">
                        <img src="/calendar.svg" className=" h-5" alt="" /> <p className=" w-fit">Book a Demo</p>
                    </div>
                </div>

                <div className=" grid justify-center justify-self-center w-full md:flex flex-wrap gap-8 px-4">

                    {/* first link */}
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border w-fit p-1 h-fit border-[#7C3AED] ">
                            <img src="/tick.svg" className=" h-3" alt="" />
                        </div>
                        <p className=" text-sm text-[#6B7280] w-fit">No credit card required</p>
                    </div>
                    {/* second link */}
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border w-fit p-1 h-fit border-[#7C3AED] ">
                            <img src="/tick.svg" className=" h-3" alt="" />
                        </div>
                        <p className=" text-sm text-[#6B7280] w-fit">Free forever plan</p>
                    </div>
                    {/* third link */}
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border w-fit p-1 h-fit border-[#7C3AED] ">
                            <img src="/tick.svg" className=" h-3" alt="" />
                        </div>
                        <p className=" text-sm text-[#6B7280] w-fit">Cancel anytime</p>
                    </div>
                </div>
                <div className=" w-full my-5 items-center justify-center p-2 flex gap-4">
                    <div className=" w-fit flex gap-0 p-0">
                        <img src="/4.png" className=" h-6 md:h-8 lg:h-10 rounded-full relative z-0" alt="" />
                        <img src="/3.png" className=" h-6 md:h-8 lg:h-10 rounded-full border-3 border-white relative z-10 -ml-4" alt="" />
                        <img src="/2.png" className=" hidden md:block h-6 md:h-8 lg:h-10 rounded-full border-3 border-white relative z-20 -ml-4" alt="" />
                        <img src=" /1.png" className=" hidden md:block h-6 md:h-8 lg:h-10 rounded-full border-3 border-white relative z-30 -ml-4" alt="" />
                    </div>
                    <div className=" grid text-xs md:text-sm">
                        <span className=" text-[#6B7280]">
                            Join 12,000+ productive teams
                        </span>
                        <div className=" items-center grid md:flex wrap-break-word gap-2">
                            <div className=" text-[#6B7280] items-center flex gap-0.5">
                                <img src="/rate.svg" className=" h-2 md:h-4" alt="" />
                                <img src="/rate.svg" className=" h-2 md:h-4" alt="" />
                                <img src="/rate.svg" className=" h-2 md:h-4" alt="" />
                                <img src="/rate.svg" className=" h-2 md:h-4" alt="" />
                                <span className=" ml-2 p-1 wrap-break-word text-black">4.9/5</span>
                            </div>
                            <span className=" h-fit w-fit grid items-center text-[#6B7280]">From 12,000+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" hidden lg:grid lg:col-start-3 lg:col-end-4 self-center p-5 lg:pr-10 w-full justify-self-center ">

                {/* first card */}
                <div className=" p-6 grid w-[90%] lg:w-[80%] justify-self-end rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full h-fit items-center justify-start mb-5">
                        <p className=" text-sm text-[#111827] font-semibold ">AI assistance</p>
                    </div>
                    <div className=" flex justify-self-end w-full h-[90%] self-end">
                        <div className=" mx-w-[50%] justify-self-start self-end mx-h-fit ">
                            <p className=" text-base lg:text-xl text-[#111827] font-bold wrap-break-word ">1,247</p>
                            <p className=" text-xs text-[#6B7280] font-medium wrap-break-word mb-5 ">This week</p>

                        </div>
                        <div className=" justify-self-end justify-end self-end w-[50%] flex gap-1 h-full ">
                            <div className=" h-[20%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[40%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[30%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[15%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[50%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[60%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                {/* second card */}
                <div className=" p-6 w-[90%] lg:w-[80%] justify-self-start rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full items-center justify-start mb-5">
                        <p className=" text-sm text-[#111827] font-semibold ">Project timeline</p>
                    </div>
                    <div className=" px-4 grid w-full self-end justify-self-end h-fit">
                        <p className=" text-sm justify-self-center text-center text-[#6B7280] font-medium w-[90%] wrap-break-word">Website Redesign</p>
                        <div className=" w-full flex justify-between items-center">
                            <div className=" w-[70%] bg-gray-300 h-fit rounded-xl ">
                                <div className=" w-[80%] justify-self-start rounded-xl h-1.5 bg-linear-to-r from-[#7C3AED] to-[#A78BFA] "></div>
                            </div>
                            <p className=" h-fit w-fit text-sm font-medium text-[#6B7280] ">70%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" grid h-fit md:gap-5 md:grid-rows-2 md:grid-cols-2 self-center p-5 lg:pr-10 w-full justify-self-center lg:hidden ">

                {/* first card */}
                <div className=" h-full md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 w-[90%] lg:hidden p-6 md:w-[90%] lg:w-[80%] justify-self-center mb-5 rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full items-center justify-start mb-5">
                        <img src="/dostar.svg" className=" h-4" alt="" />
                        <p className=" text-sm text-[#111827] font-semibold ">AI assistance</p>
                    </div>
                    <div className=" flex justify-between items-end  justify-self-end w-fit h-fit">
                        <p className=" text-base text-[#111827] font-semibold w-[80%] wrap-break-word mb-5 ">Create a weekly plan for prodct launch</p>
                        <div className=" rounded-xl bg-gray-300 w-fit h-fit p-2 ">
                            <img src="/dostar.svg" className=" h-5" alt="" />
                        </div>
                    </div>
                </div>
                <br className="block md:hidden" />

                {/* second card */}
                <div className=" h-full md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 w-[90%] lg:hidden relative p-6 md:w-[90%] lg:w-[80%] justify-self-center mb-5 rounded-xl shadow-xl shadow-black/20">
                    <div className=" h-[60%] self-end w-fit right-4 bottom-0 absolute z-0">
                        <img src="/growth.svg" className=" h-full " alt="" />
                    </div>
                    <div className=" w-full relative z-10 grid">
                        <p className=" text-sm text-[#111827] font-semibold w-[90%] wrap-break-word mb-1 ">Team productivity</p>
                        <p className=" text-xl w-fit h-fit font-semibold justify-start text-[#7C3AED] ">98%</p>
                        <span className=" mb-5 flex gap-1 text-xs font-semibold p-0.5 rounded-lg my-1 bg-green-300/70 w-fit h-fit px-1 justify-start text-green-950"><p className=" rotate-180">↓</p><p>24%</p></span>
                    </div>
                </div>
                <br className=" block md:hidden"/>

                {/* third card */}
                <div className=" h-full md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 p-6 grid w-[90%] mb-5 lg:w-[80%] justify-self-center lg:justify-self-end rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full h-fit items-center justify-start mb-5">
                        <p className=" text-sm text-[#111827] font-semibold ">AI assistance</p>
                    </div>
                    <div className=" flex justify-self-end w-full h-[90%] self-end">
                        <div className=" mx-w-[50%] justify-self-start self-end mx-h-fit ">
                            <p className=" text-base lg:text-xl text-[#111827] font-bold wrap-break-word ">1,247</p>
                            <p className=" text-xs text-[#6B7280] font-medium wrap-break-word mb-5 ">This week</p>

                        </div>
                        <div className=" justify-self-end justify-end self-end w-[50%] flex gap-1 h-full ">
                            <div className=" h-[20%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[40%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[30%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[15%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[50%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                            <div className=" h-[60%] self-end w-1.5 rounded-xl bg-linear-to-t from-[#7C3AED] to-[#A78BFA] text-[#7C3AED] ">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br className=" block md:hidden lg:block" /><br className=" hidden lg:block" />
                {/* fourth card */}
                <div className=" h-full md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 p-6 w-[90%] lg:w-[80%] justify-self-center lg:justify-self-start rounded-xl shadow-xl shadow-black/20">
                    <div className=" flex gap-2 w-full items-center justify-start mb-5">
                        <p className=" text-sm text-[#111827] font-semibold ">Project timeline</p>
                    </div>
                    <div className=" px-4 grid w-full self-end justify-self-end h-fit">
                        <p className=" text-sm justify-self-center text-center text-[#6B7280] font-medium w-[90%] wrap-break-word">Website Redesign</p>
                        <div className=" w-full flex justify-between items-center">
                            <div className=" w-[70%] bg-gray-300 h-fit rounded-xl ">
                                <div className=" w-[80%] justify-self-start rounded-xl h-1.5 bg-linear-to-r from-[#7C3AED] to-[#A78BFA] "></div>
                            </div>
                            <p className=" h-fit w-fit text-sm font-medium text-[#6B7280] ">70%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}