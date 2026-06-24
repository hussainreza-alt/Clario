import React from "react";

export default function Dashboard (){
    return(
        <>
        <div id="dashboard" className=" items-start grid w-screen h-fit lg:gap-6 p-16 lg:grid-cols-[2fr_3fr]">
            <div className=" lg:pl-4 lg:pt-4 lg:col-start-1 lg:col-end-2 grid justify-self-center w-full ">
                <div className=" h-fit justify-self-start w-fit p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/singlestar.svg" className=" h-4" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">Product Overview</span>
                </div>
                <h3 className=" font-semibold text-3xl md:text-4xl lg:text-5xl text-[#111827] ">
                    Your entire workflow in one <span className=" text-[#7C3AED] ">place</span>.
                </h3>
                <p className=" w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">Track tasks, monitor progress, collaborate with your team and let AI handle repetitive planning - all from a single dashboard.</p>

                {/* 1st card */}
                <br />         
                <br className=" block lg:hidden" />       
                <div className=" justify-self-center justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/tstar.svg" className=" h-10 md:h-12 lg:h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-base md:text-lg lg:text-xl text-[#111827] font-semibold ">AI-generated task summaries</h3>
                        <p className=" text-sm md:text-base text-[#6B7280] w-fit wrap-break-word ">Clario summarizes tasks and meetings so you can focus on what matters</p>
                    </div>
                </div>
                
                {/* 2nd card */}
                <br />
                <div className=" justify-self-center justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/graph.svg" className=" h-12 md:h-12 lg:h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-base md:text-lg lg:text-xl text-[#111827] font-semibold ">Real-time productivety tracking</h3>
                        <p className=" text-sm md:text-base text-[#6B7280] w-fit wrap-break-word ">Monitor your progress with live data and actionable insights</p>
                    </div>
                </div>

                {/* 3rd card */}
                <br />
                <div className=" justify-self-center justify-between w-[95%] lg:w-full flex gap-6 lg:gap-8">
                    <img src="/calendar.png" className=" h-10 md:h-12 lg:h-14 p-2 rounded-2xl bg-gray-200" alt="" />
                    <div className=" w-full grid">
                        <h3 className="text-base md:text-lg lg:text-xl text-[#111827] font-semibold ">Smart scheduling recommendations</h3>
                        <p className=" text-sm md:text-base text-[#6B7280] w-fit wrap-break-word ">Let AI plan your day for maximum focus and impact</p>
                    </div>
                </div>
                <div className=" w-[65%] md:w-[40%] lg:w-[65%] flex justify-between items-center text-white mt-5 text-sm md:text-base p-2 pl-4 pr-4 lg:p-4 rounded-xl bg-[#7C3AED] ">
                    <p className=" w-fit">Explore Dashboard</p>
                    <p className=" w-fit text-lg md:text-xl">➔</p>
                </div>
            </div>
            <br className=" block lg:hidden" />
            <div className=" rounded-3xl h-[50vh] overflow-hidden items-start shadow-md shadow-black/50 w-full">
                <img src="/mo.png" className=" hidden md:block w-full" alt="" />
                <img src="/mob.png" className=" w-full block lg:hidden" alt="" />
            </div>
        </div>
        </>
    )
}