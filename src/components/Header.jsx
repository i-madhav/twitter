import React from "react";
import briefCase from "../assets/briefcase-02.svg"
import messages from "../assets/message-square-01.svg"
import payment from "../assets/coins-hand.svg"
import bell from "../assets/bell-02.svg"
import rectangle from "../assets/Rectangle 5.png"
import down from "../assets/chevron-down.svg"
const Header = () =>{
    return(
        <>
        <div className=" h-auto border-b border-[#D1D1D1] flex items-center justify-between p-4">
            <div className=" bg-[#E7E7E7] py-[9px] px-[28px]">
                <p className=" text-[#DC4A2D] text-[20px]">LOGO</p>
            </div>

            <ul className=" flex items-center justify-center gap-16 py-3 px-8 rounded-3xl border border-[#D1D1D1]">
                <li className="straight hover:border-1 rounded-[49px] p-3 text-[#B0B0B0] hover:border-[#FCB4A5] hover:bg-[#DC4A2D] hover:text-white transition duration-300 hover:fill-white">
                    <img src={briefCase} alt="briefCase" className=" mr-2 hover:fill-current"/>
                    <p>Jobs</p>
                </li>
                
                <li className="straight hover:border-1 rounded-[49px] p-3 text-[#B0B0B0] hover:border-[#FCB4A5] hover:bg-[#DC4A2D] hover:text-white transition duration-300 hover:fill-white">
                    <img src={messages} alt="messages" className=" mr-2"/>
                    <p>Messages</p>
                </li>
                
                <li className="group straight hover:border-1 rounded-[49px] p-3 text-[#B0B0B0] hover:stroke-white hover:border-[#FCB4A5] hover:bg-[#DC4A2D] hover:text-white transition duration-300 hover:fill-white">
                    <img src={payment} alt="payments" className=" mr-2"/>
                    <p>Payments</p>
                </li>
            </ul>

            <div className=" flex items-center justify-center gap-3">
                <img src={bell} alt="bell" />
                <img src={rectangle} alt="rectangle" className=" mr-[-.7rem]"/>
                <img src={down} alt="down" />
            </div>
        </div>
        </>
    )
}

export  default Header;