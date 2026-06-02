import React from "react";

export default function Testimonial(){
    return(
        <>
        <div id="testimonial" className=" pt-20 py-20 w-screen grid">
            <div className=" grid justify-center w-[85%] justify-self-center">
                <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/comment.png" className=" h-4" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">TRUSTED RESULTS</span>
                </div>
                <h2 className=" leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                    Lover by <span className=" text-[#7C3AED] ">Professionals</span> worldwid.
                </h2>
                <p className=" justify-self-center text-center w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">See how teams use Clario to stay focused and organized</p>
            </div>
            <div className=" w-[90%] justify-self-center lg:w-[85%] pl-4 pr-4 grid lg:grid-cols-2 mt-10">

                {/* first card */}
                <div className=" self-center p-4 lg:p-6 bg-gray-100 rounded-2xl shadow-md shadow-black/20 w-xs md:w-xl lg:w-[85%] justify-self-center ld:justify-self-end grid">
                    <div className=" w-full flex justify-between">
                        <img src="/dobleq.svg" className="h-4" alt="" />
                        <div className=" flex gap-1">
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                        </div>
                    </div>
                    <br />
                    <p className=" text-left w-[90%] text-base text-[#111827] justify-self-start pl-2 ">"Clario helped our team reduce planning time dramatically. the AI summaries alone saves us hours every week"</p>
                    <br />
                    <hr className=" text-gray-300/30" />
                    <br />
                    <div className=" flex items-center gap-4">
                        <img src="/1.png" className=" rounded-full h-12 md:h-14 lg:h-16" alt="" />
                        <div className=" grid">
                            <p className=" text-left text-base text-[#111827] font-medium ">Sarah Chen</p>
                            <p className=" text-left text-base text-[#6B7280] ">Product manager at Linear</p>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className=" self-center p-4 mt-5 lg:h-full lg:mt-0 lg:p-6 bg-gray-100 rounded-2xl shadow-md shadow-black/20 w-xs md:w-xl lg:w-[85%] justify-self-center ld:justify-self-start grid">
                    <div className=" w-full flex justify-between">
                        <img src="/dobleq.svg" className="h-4" alt="" />
                        <div className=" flex gap-1">
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                        </div>
                    </div>
                    <br />
                    <p className=" text-left w-[90%] text-base text-[#111827] justify-self-start pl-2 ">"The smart prioritization feature is a game changer. We focus on what matters and ship faster than ever"</p>
                    <br />
                    <hr className=" text-gray-300/30" />
                    <br />
                    <div className=" flex items-center gap-4">
                        <img src="/4.png" className=" rounded-full h-12 md:h-14 lg:h-16" alt="" />
                        <div className=" grid">
                            <p className=" text-left text-base text-[#111827] font-medium ">James Wilson</p>
                            <p className=" text-left text-base text-[#6B7280] ">Marketing lead at Superlist</p>
                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className=" self-center lg:h-full p-4 mt-8 lg:p-6 bg-gray-100 rounded-2xl shadow-md shadow-black/20 w-xs md:w-xl lg:w-[85%] justify-self-center ld:justify-self-end grid">
                    <div className=" w-full flex justify-between">
                        <img src="/dobleq.svg" className="h-4" alt="" />
                        <div className=" flex gap-1">
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                        </div>
                    </div>
                    <br />
                    <p className=" text-left w-[90%] text-base text-[#111827] justify-self-start pl-2 ">"Clario brings clearity to chaos. As a startup founder, it keeps me and my team aligned without the busy work"</p>
                    <br />
                    <hr className=" text-gray-300/30" />
                    <br />
                    <div className=" flex items-center gap-4">
                        <img src="/2.png" className=" rounded-full h-12 md:h-14 lg:h-16" alt="" />
                        <div className=" grid">
                            <p className=" text-left text-base text-[#111827] font-medium ">Daniel Roberts</p>
                            <p className=" text-left text-base text-[#6B7280] ">Founder at flow base</p>
                        </div>
                    </div>
                </div>

                {/* fourth card */}
                <div className=" self-center h-full p-4 mt-8 lg:p-6 bg-gray-100 rounded-2xl shadow-md shadow-black/20 w-xs md:w-xl lg:w-[85%] justify-self-center ld:justify-self-start grid">
                    <div className=" w-full flex justify-between">
                        <img src="/dobleq.svg" className="h-4" alt="" />
                        <div className=" flex gap-1">
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                            <img src="/purplestar.svg" className=" h-4" alt="" />
                        </div>
                    </div>
                    <br />
                    <p className=" text-left w-[90%] text-base text-[#111827] justify-self-start pl-2 ">"The analytics dashboard gives us real insights into team productivety. It's become an essential part of our daily workflow"</p>
                    <br />
                    <hr className=" text-gray-300/30" />
                    <br />
                    <div className=" flex items-center gap-4">
                        <img src="/3.png" className=" rounded-full h-12 md:h-14 lg:h-16" alt="" />
                        <div className=" grid">
                            <p className=" text-left text-base text-[#111827] font-medium ">Emily Jonhson</p>
                            <p className=" text-left text-base text-[#6B7280] ">Marketing lead at Superlist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" justify-self-center w-[90%] wrap-break-word text-center">
                <p className=" justify-self-center text-center w-fit font-medium mt-10 wrap-break-word text-base lg:text-lg text-[#6B7280] ">Join <span className=" text-[#7C3AED] ">12,000+ teams</span> already using Clario to get more work done.</p>
            </div>
        </div>
        </>
    )
}