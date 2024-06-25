import React from "react";

const Job = () => {
    return (
        <>
            <div className=" pt-5 px-4 space-x-12 border-b border-[#D1D1D1] pl-14">
                <button className="relative pb-2 group hover:text-[#DC4A2D]">
                    <span className=" text-[20px] pb-3 font-semibold">Job preview</span>
                    <span className="absolute bottom-0 left-1/2 w-3/5 h-0.5 bg-[#DC4A2D] transform -translate-x-1/2 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </button>

                <button className="relative pb-2 group hover:text-[#DC4A2D]">
                    <span className=" text-[20px] font-semibold">Applicants</span>
                    <span className="absolute bottom-0 left-1/2 w-3/5 h-0.5 bg-[#DC4A2D] transform -translate-x-1/2 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </button>

                <button className="relative pb-2 group hover:text-[#DC4A2D]">
                    <span className=" text-[20px] font-semibold">Match</span>
                    <span className="absolute bottom-0 left-1/2 w-3/5 h-0.5 bg-[#DC4A2D] transform -translate-x-1/2 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </button>

                <button className="relative pb-2 group hover:text-[#DC4A2D]">
                    <span className=" text-[20px] font-semibold">Messages</span>
                    <span className="absolute bottom-0 left-1/2 w-3/5 h-0.5 bg-[#DC4A2D] transform -translate-x-1/2 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </button>
            </div>
        </>
    )
}

export default Job;