import React from "react";

export default function Pricing (){
    return(
        <>
        <div id="pricing" className=" py-20 w-screen grid mt-10">
            <div className=" grid text-center">
                <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/tag.png" className=" h-5" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">PRICING</span>
                </div>
                <h2 className=" justify-self-center text-center leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                    Simple pricing for <span className=" text-[#7C3AED] "> <br className="block md:hidden" /> every team</span>
                </h2>
                <p className=" justify-self-center text-center w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">Choose the plan that fits your workflow</p>
            </div>
            <br />
            <div className=" grid w-[90%] justify-self-center md:w-[80%] lg:w-[90%] lg:grid-cols-3 lg:gap-10 mt-5">

                {/* first card */}
                <div className=" self-end w-[80%] lg:w-full grid justify-self-center p-8 bg-gray-100 shadow-sm shadow-black/40 rounded-xl">
                    <div className="grid justify-start">
                        <h6 className=" text-xl md:text-2xl lg:text-3xl text-[#111827] font-bold ">Starter</h6>
                        <p className=" text-sm md:text-base lg:text-base text-[#6B7280] ">Perfect for individuals</p>
                    </div>
                    <br />
                    <div className=" grid justify-self-center w-full">
                        <div className=" w-full justify-self-center flex gap-0 justify-start">
                            <span className="text-sm md:text-base lg:text-lg text-[#111827]">$</span>
                            <p className="text-4xl md:text-5xl lg:text-6xl text-[#111827] font-bold">0</p>
                        </div>
                        <br />
                        <p className="text-sm md:text-base lg:text-base text-[#7C3AED] font-medium">Free forever</p>
                        <br /><br />

                        {/* list */}
                        <div className=" items-center w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Task management</p>
                        </div>
                        <div className=" items-center w-full mt-4 flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">AI summaries (limited)</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Basic analytics</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">1 workspace</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Community support</p>
                        </div>
                        <br />
                        <div className=" place-items-center font-medium justify-center w-full flex rounded-xl gap-4 border border-[#7C3AED] p-4">
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED] ">Get started</p>
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED]">➔</p>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className=" mt-5 w-[80%] lg:w-full grid justify-self-center p-8 pt-4 bg-[#7C3AED] shadow-sm shadow-black/40 rounded-xl">
                    <div className=" rounded-2xl bg-gray-200/30 p-2 mb-2 justify-self-center self-start w-fit">
                        <span className=" text-sm lg:text-base text-gray-200  tracking-tight">MOST POPULAR</span>
                    </div>
                    <div className="grid justify-start">
                        <h6 className=" text-xl md:text-2xl lg:text-3xl text-gray-200 font-bold ">Pro</h6>
                        <p className=" text-sm md:text-base lg:text-base text-gray-200 ">For Professionals & growing teams</p>
                    </div>
                    <br />
                    <div className=" grid justify-self-center w-full">
                        <div className=" w-full justify-self-center flex gap-0 justify-start">
                            <span className="text-sm md:text-base lg:text-lg text-gray-200">$</span>
                            <p className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-bold">19</p>
                            <span className=" self-end text-base md:text-lg lg:text-lg text-gray-200" >/month</span>
                        </div>
                        <br />
                        <p className="text-sm md:text-base lg:text-base text-gray-200 font-medium">Billed Monthly</p>
                        <br />
                        <hr className=" text-gray-200/30" />
                        <br />

                        {/* list */}
                        <div className=" items-center w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-gray-200 ">Unlimited tasks</p>
                        </div>
                        <div className=" items-center w-full mt-4 flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-gray-200 ">Advance AI tools</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-gray-200">Team collaboration</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-gray-200 ">Analytics dashboards</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-gray-200 ">Priority support</p>
                        </div>
                        <br />
                        <div className=" place-items-center justify-center font-medium w-full bg-gray-200 flex rounded-xl gap-4 border border-[#7C3AED] p-4">
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED] ">Start Free Trail</p>
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED]">➔</p>
                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className=" mt-5 self-end w-[80%] lg:w-full grid justify-self-center p-8 bg-gray-100 shadow-sm shadow-black/40 rounded-xl">
                    <div className="grid justify-start">
                        <h6 className=" text-xl md:text-2xl lg:text-3xl text-[#111827] font-bold ">Enterprise</h6>
                        <p className=" text-sm md:text-base lg:text-base text-[#6B7280] ">For large teams and organizations</p>
                    </div>
                    <br />
                    <div className=" grid justify-self-center w-full">
                        <div className=" w-full justify-self-center flex gap-0 justify-start">
                            <p className="text-3xl md:text-4xl lg:text-5xl text-[#111827] font-bold">Custom</p>
                        </div>
                        <br />
                        <p className="text-sm md:text-base lg:text-base text-[#7C3AED] font-medium">Tailored to your needs</p>
                        <br /><br />

                        {/* list */}
                        <div className=" items-center w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Everything in Pro</p>
                        </div>
                        <div className=" items-center w-full mt-4 flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Dedicated support</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">custom integrations</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">Advance security</p>
                        </div>
                        <div className=" items-center mt-4 w-full flex gap-4 justify-start">
                            <div className=" p-1 bg-gray-200 rounded-lg">
                                <img src="/tick.svg" className=" h-4 bg-gray-200 rounded-xl" alt="" />
                            </div>
                            <p className=" text-sm md:text-base lg:text-base text-[#111827] ">SLA & compliance</p>
                        </div>
                        <br />
                        <div className=" place-items-center font-medium justify-center w-full flex rounded-xl gap-4 border border-[#7C3AED] p-4">
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED] ">Get started</p>
                            <p className=" w-fit text-sm md:text-base lg:text-base text-[#7C3AED]">➔</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className=" flex-wrap items-center justify-center gap-4 flex w-fit justify-self-center">
                <img src="/aut.svg" className=" h-6 " alt="" />
                <div className=" grid">
                    <p className=" justify-self-center text-center w-fit wrap-break-word text-base text-[#6B7280] mt-2 font-medium ">All plans include <span className=" text-[#7C3AED] ">14-day free trails. <br className="block md:hidden" /> </span>No credit card required.</p>
                </div>
            </div>
        </div>
        </>
    )
}