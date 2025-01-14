import React, { useState } from 'react'
import figma from "../assets/figma.png"
import adobe from "../assets/adobe.png"
import adobexd from "../assets/adobexd.png"
import Company from './Company'
const JobDetails = () => {
    return (
        <div className=' basis-[70%] '>
            <div className=' border-b border-[#E7E7E7]'>
                <ul className='px-12 py-3 flex items-center space-x-4'>
                    <h1 className=' text-[#3D3D3D] text-[35px] font-bold'>Senior Product Designer</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                        <circle cx="2" cy="2.5" r="2" fill="#D1D1D1" />
                    </svg>
                    <p className=' text-[#888] text-[14px]'>posted 2 days ago</p>

                    <button className=' flex items-center justify-center rounded-3xl bg-[#ECFDF3] py-[1.5] px-2 border border-green-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 5" fill="none">
                            <circle cx="2" cy="2.5" r="2" fill="#067647" />
                        </svg>
                        <p className=' font-bold text-[#067647] ml-2'>Open</p>
                    </button>
                </ul>

                <ul className='px-12 py-3 flex items-center space-x-5'>
                    <li className=' flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' text-[20px] text-[#5D5D5D] font-medium'>Delaware, USA</p>
                    </li>

                    <li className=' flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M13 5.5C13 6.60457 10.5376 7.5 7.5 7.5C4.46243 7.5 2 6.60457 2 5.5M13 5.5C13 4.39543 10.5376 3.5 7.5 3.5C4.46243 3.5 2 4.39543 2 5.5M13 5.5V7M2 5.5V17.5C2 18.6046 4.46243 19.5 7.5 19.5M7.5 11.5C7.33145 11.5 7.16468 11.4972 7 11.4918C4.19675 11.4 2 10.5433 2 9.5M7.5 15.5C4.46243 15.5 2 14.6046 2 13.5M22 12C22 13.1046 19.5376 14 16.5 14C13.4624 14 11 13.1046 11 12M22 12C22 10.8954 19.5376 10 16.5 10C13.4624 10 11 10.8954 11 12M22 12V19.5C22 20.6046 19.5376 21.5 16.5 21.5C13.4624 21.5 11 20.6046 11 19.5V12M22 15.75C22 16.8546 19.5376 17.75 16.5 17.75C13.4624 17.75 11 16.8546 11 15.75" stroke="#5D5D5D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' text-[20px] text-[#5D5D5D] font-medium'>$300k-$400k</p>
                    </li>
                </ul>
            </div>

            <div className='border-b border-[#E7E7E7]'>
                <div className='px-12 py-5 flex space-x-20 mb-5'>
                    <ul className=' space-y-3'>
                        <li>
                            <p className=' text-[14px] font-medium text-[#6E6D6D]'>Skills Required</p>
                        </li>

                        <li className=' flex items-center rounded-lg border border-[#D0D5DD] w-1/2 p-1'>
                            <img src={figma} alt="figma" />
                            <span className=' text-[#344054] font-medium text-[12px]'>Figma</span>
                        </li>

                        <li className=' flex items-center justify-center rounded-lg space-x-1 border border-[#D0D5DD] p-1'>
                            <img src={adobe} alt="adobe" />
                            <span className=' text-[#344054] font-medium text-[12px]'>Adobe Illustrator</span>
                        </li>

                        <li className=' flex items-center justify-center rounded-lg space-x-1 border border-[#D0D5DD] p-1 w-[6vw]'>
                            <img src={adobexd} alt="figma" />
                            <span className=' text-[#344054] font-medium text-[12px]'>Adobe XD</span>
                        </li>
                    </ul>

                    <ul className=' space-y-3'>
                        <li>
                            <p className=' text-[14px] font-medium text-[#6E6D6D]'>Preferred Language</p>
                        </li>

                        <li>
                            <p className=' text-[#3D3D3D] text-[16px] font-semibold'>English</p>
                        </li>
                    </ul>

                    <ul className=' space-y-3'>
                        <li>
                            <p className=' text-[14px] font-medium text-[#6E6D6D]'>Type</p>
                        </li>

                        <li>
                            <p className=' text-[#3D3D3D] text-[16px] font-semibold'>Full time</p>
                        </li>
                    </ul>

                    <ul className=' space-y-3'>
                        <li>
                            <p className=' text-[14px] font-medium text-[#6E6D6D]'>Years of Experience</p>
                        </li>

                        <li>
                            <p className=' text-[#3D3D3D] text-[16px] font-semibold'>3+ Years of Experience</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=' border-b border-[#E7E7E7]'>
                <div className=' px-12 py-5 space-y-3 mb-5'>
                    <p className=' text-[14px] font-medium text-[#6E6D6D]'>About the job</p>
                    <div className=' space-y-2'>
                        <p>1. Handle the UI/UX research design</p>
                        <p>2. Work on researching on latest web applications designs & trends</p>
                        <p>3. Work on conceptualizing and visualizing</p>
                        <p>4. Work on creating graphics content and other graphic related works</p>

                        <div>
                            <p>Benefits:</p>
                            <ul className=' list-disc pl-5'>
                                <li className=' ml-3'>Health insurance</li>
                                <li className=' ml-3'>Provident Fund</li>
                            </ul>
                        </div>

                        <div>
                            <p>Schedule:</p>
                            <ul className=' list-disc pl-5'>
                                <li className=' ml-3'>Day shift</li>
                                <li className=' ml-3'>Provident Fund</li>
                            </ul>
                        </div>
                        <div>
                            <p>Supplemental pay types:</p>
                            <ul className=' list-disc pl-5'>
                                <li className=' ml-3'>Performance bonus</li>
                                <li className=' ml-3'>Yearly bonus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' border-b border-[#E7E7E7]'>
                <div className=' px-12 py-5 space-y-5 mb-3'>
                   <Company/>
                </div>
            </div>
        </div>
    )
}

export default JobDetails