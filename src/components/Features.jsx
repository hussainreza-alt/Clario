import React from "react";

export default function Features(){
    return(
        <>
        <div id="features" className=" mt-5 grid w-screen p-10">
            <div className=" w-[75%] justify-self-center h-0.5 bg-[#7C3AED]/20 "></div>
        </div>
        <div  className=" w-screen grid h-fit lg:h-fit">
            <div className=" w-[90%] lg:w-[50%] justify-self-center text-center justify-center grid h-fit">
                <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/singlestar.svg" className=" h-4" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">FEATURES</span>
                </div>
                <h2 className=" leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                    Everything you need to stay <span className=" text-[#7C3AED] ">productive</span>
                </h2>
                <p className=" w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">Clario combines task management, AI assistance and workflow analytics into one focused workspace</p>
            </div>
            <br className=" block lg:hidden" /><br className=" block lg:hidden" />
            <div className=" lg:mt-20 grid justify-center gap-10 lg:gap-20 justify-self-center self-start items-start w-[80%] lg:grid-cols-2">

                {/* 1st one */}
                <div className=" justify-self-center justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/dostar.svg" className=" h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-lg md:text-xl lg:text-2xl text-[#111827] font-semibold ">Smart Prioritization</h3>
                        <p className=" text-base md:text-lg text-[#6B7280] w-fit wrap-break-word ">Automatically organize tasks based on urgency, deadlines and workload.</p>
                        <br />
                        <div className=" gap-4 text-base text-[#7C3AED] flex lg:text-lg">
                            <p>Learn more</p>
                            <p className=" text-lg lg:text-xl">➔</p>
                        </div>
                    </div>
                </div>

                {/* 2nd one */}
                <div className=" justify-self-center lg:h-full lg:col-start-2 lg:col-end-3 justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/doc.png" className=" h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-lg md:text-xl lg:text-2xl text-[#111827] font-semibold ">AI Summarize</h3>
                        <p className=" text-base md:text-lg text-[#6B7280] w-fit wrap-break-word ">Turn lengthy meeting notes into actionable tasks in seconds.</p>
                        <br />
                        <div className=" gap-4 text-base text-[#7C3AED] flex lg:text-lg">
                            <p>Learn more</p>
                            <p className=" text-lg lg:text-xl">➔</p>
                        </div>
                    </div>
                </div>

                {/* 3rd one */}
                <div className=" justify-self-center lg:h-full lg:col-start-1 lg:col-end-2 justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/calendar.png" className=" h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-lg md:text-xl lg:text-2xl text-[#111827] font-semibold ">Smart Scheduling</h3>
                        <p className=" text-base md:text-lg text-[#6B7280] w-fit wrap-break-word ">Plan your day intelligently and never miss important deadlines.</p>
                        <br />
                        <div className=" gap-4 text-base text-[#7C3AED] flex lg:text-lg">
                            <p>Learn more</p>
                            <p className=" text-lg lg:text-xl">➔</p>
                        </div>
                    </div>
                </div>

                {/* 4rth one */}
                <div className=" justify-self-center lg:h-full lg:col-start-2 lg:col-end-3 justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/chart.png" className=" h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-lg md:text-xl lg:text-2xl text-[#111827] font-semibold ">Performance Insights</h3>
                        <p className=" text-base md:text-lg text-[#6B7280] w-fit wrap-break-word ">Track progress with clear metrics and productivity trends.</p>
                        <br />
                        <div className=" gap-4 items-center text-base text-[#7C3AED] flex lg:text-lg">
                            <p>Learn more</p>
                            <p className=" text-lg lg:text-xl">➔</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}