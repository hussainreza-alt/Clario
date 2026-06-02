import React, { useState } from "react";

export default function FAQ(){
    const [faqOpen, setFaqOpen] = useState({
        credit: true,
        cont: false,
        ai: false,
        cancel: false,
        aut: false,
    });

    const toggleFAQ = (target) => {
        setFaqOpen({
            credit:false,
            cont: false, 
            ai:false,
            cancel:false,
            aut: false,
            [target]: !faqOpen[target]
        });
    }
    return(
        <>
        <div className=" mb-10 mt-10 h-fit w-screen grid">
            <div className=" w-[85%] grid justify-center justify-self-center text-center">
                <div className=" w-fit justify-self-center p-1 items-center pl-2 pr-2 flex gap-2 rounded-xl bg-gray-200">
                    <img src="/question.svg" className=" h-4" alt="" />
                    <span className=" text-sm lg:text-base text-[#7C3AED] tracking-tight font-medium ">FAQ</span>
                </div>
                <h2 className=" leading-tight tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl wrap-break-word text-[#111827] ">
                    Frequently asked <br className=" block sm:hidden" /> <span className=" text-[#7C3AED] ">questions</span>
                </h2>
                <p className=" justify-self-center text-center w-fit wrap-break-word text-base lg:text-lg text-[#6B7280] mt-2 ">Everything you need to need know about Clario.</p>
            </div>
            <br /><br />
            <div className=" justify-self-center w-[90%] pl-4 pr-4 md:w-[80%] grid ">
                
                {/* first question */}
                <div className=" grid w-full pt-4 pb-6 border-t border-b border-t-gray-300/60 border-b-gray-300/60">
                    <div onClick={() => toggleFAQ("credit")} className=" cursor-pointer items-center flex w-full justify-between">
                        <div className=" items-center w-fit flex gap-4">
                            <img src="/card.png" className=" h-6 md:h-8 lg:h-8" alt="" />
                            <p className=" text-[#111827] text-base md:text-lg w-fit font-medium ">Do I need a credit card to start?</p>
                        </div>
                        <p className={`text-[#111827] text-base md:text-lg w-fit font-medium transition-all ease-in duration-300 ${faqOpen.credit? "-rotate-90" : "rotate-90"}`}> &gt;</p>
                    </div>
                    <div className={` ${faqOpen.credit? "grid" : "hidden"} mt-2 p-4 bg-gray-200 rounded-2xl w-full`}>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">No. Start with our free plan and upgrade whenever you're ready.</p>
                    </div>
                </div>

                {/* second queston */}
                <div className=" grid w-full pt-4 pb-6 border-t border-b border-t-gray-300/60 border-b-gray-300/60">
                    <div onClick={() => toggleFAQ("cont")} className=" cursor-pointer items-center flex w-full justify-between">
                        <div className=" items-center w-fit flex gap-4">
                            <img src="/cont.svg" className=" h-5 md:h-6" alt="" />
                            <p className=" text-[#111827] text-base md:text-lg w-fit font-medium ">Can I collaborate with my team?</p>
                        </div>
                        <p className={`text-[#111827] text-base md:text-lg w-fit font-medium transition-all ease-in duration-300 ${faqOpen.cont? "-rotate-90" : "rotate-90"}`}> &gt;</p>
                    </div>
                    <div className={` ${faqOpen.cont? "grid" : "hidden"} mt-2 p-4 bg-gray-200 rounded-2xl w-full`}>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">Yes. Clario supports shared workspaces and team collaboration tools.</p>
                    </div>
                </div>

                {/* third question */}
                <div className=" grid w-full pt-4 pb-6 border-t border-b border-t-gray-300/60 border-b-gray-300/60">
                    <div onClick={() => toggleFAQ("ai")} className=" cursor-pointer items-center flex w-full justify-between">
                        <div className=" items-center w-fit flex gap-4">
                            <img src="/dostar.svg" className=" h-6 md:h-8" alt="" />
                            <p className=" text-[#111827] text-base md:text-lg w-fit font-medium ">How does the AI assistant work?</p>
                        </div>
                        <p className={`text-[#111827] text-base md:text-lg w-fit font-medium transition-all ease-in duration-300 ${faqOpen.ai? "-rotate-90" : "rotate-90"}`}> &gt;</p>
                    </div>
                    <div className={` ${faqOpen.ai? "grid" : "hidden"} mt-2 p-4 bg-gray-200 rounded-2xl w-full`}>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">The AI assistant helps prioritize tasks, summarize meetings and improve workflow efficiency.</p>
                    </div>
                </div>

                {/* fourth question */}
                <div className=" grid w-full pt-4 pb-6 border-t border-b border-t-gray-300/60 border-b-gray-300/60">
                    <div onClick={() => toggleFAQ("cancel")} className=" cursor-pointer items-center flex w-full justify-between">
                        <div className=" items-center w-fit flex gap-4">
                            <img src="/load.svg" className=" h-6 md:h-8" alt="" />
                            <p className=" text-[#111827] text-base md:text-lg w-fit font-medium ">Can I cancel anytime?</p>
                        </div>
                        <p className={`text-[#111827] text-base md:text-lg w-fit font-medium transition-all ease-in duration-300 ${faqOpen.cancel? "-rotate-90" : "rotate-90"}`}> &gt;</p>
                    </div>
                    <div className={` ${faqOpen.cancel? "grid" : "hidden"} mt-2 p-4 bg-gray-200 rounded-2xl w-full`}>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">Absolutely. There are no long-term contracts.</p>
                    </div>
                </div>

                {/* fifth question */}
                <div className=" grid w-full pt-4 pb-6 border-t border-b border-t-gray-300/60 border-b-gray-300/60">
                    <div onClick={() => toggleFAQ('aut')} className=" cursor-pointer items-center flex w-full justify-between">
                        <div  className=" items-center w-fit flex gap-4">
                            <img src="/aut.svg" className=" h-6 md:h-8" alt="" />
                            <p className=" text-[#111827] text-base md:text-lg w-fit font-medium ">Is my data secure?</p>
                        </div>
                        <p className={`text-[#111827] text-base md:text-lg w-fit font-medium transition-all ease-in duration-300 ${faqOpen.aut? "-rotate-90" : "rotate-90"}`}> &gt;</p>
                    </div>
                    <div className={` ${faqOpen.aut? "grid" : "hidden"} mt-2 p-4 bg-gray-200 rounded-2xl w-full`}>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">We use industry-standard security practices to protect your information.</p>
                    </div>
                </div>
            </div>
            <div className=" mt-10 w-[80%] justify-self-center justify-between flex">
                <div className=" w-fit justify-self-auto flex gap-4 items-center">
                    <img src="/head.svg" className=" h-6 md:h-8" alt="" />
                    <div className=" h-fit grid">
                        <p className="text-[#111827] text-base md:text-lg w-fit font-semibold">Still have questions?</p>
                        <p className="text-sm md:text-base text-[#6B7280] w-fit font-medium ">Our support team is hear to help you </p>
                    </div>
                </div>
                <div className=" p-2 pl-4  items-center pr-4 rounded-xl border border-[#7C3AED] flex gap-4 justify-center text-[#7C3AED] text-base md:text-lg w-fit font-medium ">
                    <p className=" w-fit">Contact Support</p>
                    <p className=" w-fit">&gt;</p>
                </div>
            </div>
        </div>
        </>
    )
}