import React from "react";

export default function Testimonials (){
    return(
        <>
        <div className=" w-screen lg:pt-20 lg:pb-20 h-fit grid place-items-center">
            <div className=" grid w-[80%] h-fit ">
                <div className="grid w-fit justify-self-center">
                    <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                        <img src="/chart2.png" className=" h-8" alt="" />
                        <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">TRUSTED RESULTS</span>
                    </div>
                    <h2 className=" leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                        Real results from real teams <span className=" text-[#7C3AED] ">real teams</span>
                    </h2>
                    <p className=" text-center w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">Clario combines task management, AI assistance and workflow analytics into one focused workspace</p>
                </div>
                <br /><br />
                <div className=" mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* first card */}
                    <div className=" bg-gray-200 rounded-xl p-4 col-start-1 col-end-2 justify-self-center justify-center text-center h-full w-full grid place-items-center">
                        <img src="/thunder.svg" className=" h-14 lg:h-20" alt="" />
                        <br />
                        <h4 className=" text-2xl md:text-3xl lg:text-4xl text-[#7C3AED] font-bold ">40%</h4>
                        <p className=" text-base md:text-lg lg:text-xl text-[#6B7280] ">Faster task <br /> completion</p>
                    </div>
                    {/* second card */}
                    <div className=" bg-gray-200 rounded-xl p-4 col-start-2 col-end-3 justify-self-center justify-center text-center h-full w-full grid place-items-center">
                        <img src="/cont.svg" className=" h-12 lg:h-18" alt="" />
                        <br />
                        <h4 className=" text-2xl md:text-3xl lg:text-4xl text-[#7C3AED] font-bold ">12K+</h4>
                        <p className=" text-base md:text-lg lg:text-xl text-[#6B7280] ">Active <br /> Professionals</p>
                    </div>
                    {/* third card */}
                    <div className=" bg-gray-200 h-full rounded-xl p-4 col-start-1 col-end-2 lg:col-start-3 lg:col-end-4 justify-self-center justify-center text-center w-full grid place-items-center">
                        <img src="/smile.svg" className="h-12 lg:h-18" alt="" />
                        <br />
                        <h4 className=" text-2xl md:text-3xl lg:text-4xl text-[#7C3AED] font-bold ">98%</h4>
                        <p className=" text-base md:text-lg lg:text-xl text-[#6B7280] ">Customer<br /> satisfaction</p>
                    </div>
                    {/* fourth card */}
                    <div className=" bg-gray-200 min-h-full max-h-fit rounded-xl p-4 col-start-2 col-end-3 lg:col-start-4 lg:col-end-5 justify-self-center justify-center text-center h-fit w-full grid place-items-center">
                        <img src="/clock.svg" className=" h-12 lg:h-18" alt="" />
                        <br />
                        <h4 className=" text-2xl md:text-3xl lg:text-4xl text-[#7C3AED] font-bold ">24h</h4>
                        <p className=" text-base md:text-lg lg:text-xl text-[#6B7280] ">Average time saved<br className="hidden lg:block" /> monthly</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}