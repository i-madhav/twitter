import React from 'react'
import Rectangle43 from "../assets/Rectangle 43.png"
const Company = () => {
    return (
        <>
            <div className=' flex items-center space-x-3'>
                <img src={Rectangle43} alt="comapny" />
                <p className=' text-[#4F4F4F] font-medium text-[20px]'>Atlassian</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col space-y-4">
                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Company size</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">1k - 2k Employees</p>
                    </div>

                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Sector</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">Information Technology, Infrastructure</p>
                    </div>

                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Founded In</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">2019</p>
                    </div>
                </div>

                <div class="flex flex-col space-y-4">
                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Type</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">Private</p>
                    </div>

                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Funding</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">Bootstrapped</p>
                    </div>

                    <div>
                        <p class="font-medium text-[#6E6D6D] text-[14px]">Founded By</p>
                        <p class="font-semibold text-[#3D3D3D] text-[16px]">Scott Farquhar, Mike Cannon-Brookes</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company