import React from 'react'

const EditJobDetails = () => {
  return (
    <div className='  basis-[30%] bg-[#FCFCFC] border-1 border-[#E7E7E7] shadow-[-10px_0_10px_0_rgba(0,0,0,0.1)]'>
      <div className='px-12 py-5 '>
        <div className=' flex items-center justify-around'>
          <button className=' flex items-center justify-center bg-[#FEF4F2] border border-[#DC4A2D] px-[24px] py-2 rounded-md space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8 2.5H13M3 5H18M16.3333 5L15.7489 13.7661C15.6612 15.0813 15.6174 15.7389 15.3333 16.2375C15.0833 16.6765 14.706 17.0294 14.2514 17.2497C13.735 17.5 13.0759 17.5 11.7578 17.5H9.24221C7.92409 17.5 7.26503 17.5 6.74861 17.2497C6.29396 17.0294 5.91674 16.6765 5.66665 16.2375C5.38259 15.7389 5.33875 15.0813 5.25107 13.7661L4.66667 5M8.83333 8.75V12.9167M12.1667 8.75V12.9167" stroke="#DC4A2D" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className=' text-[16px] font-medium text-[#DC4A2D]'>Delete job</p>
          </button>

          <button className='flex items-center justify-center bg-[#DC4A2D] border border-[#FEF4F2] px-[26px] py-2 rounded-md space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_1_9150)">
                <path d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_9150">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className=' text-[16px] font-medium text-white'>Edit job</p>
          </button>

        </div>
      </div>

      <div className=' px-20 py-5 space-y-6'>
        <div className=' flex items-center justify-between border-b border-[#E7E7E7] pb-4'>
          <div className=' flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.3334 17.5V15.8333C18.3334 14.2801 17.271 12.9751 15.8334 12.605M12.9167 2.7423C14.1383 3.23679 15 4.43443 15 5.83333C15 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.913 14.5577C13.5746 13.741 12.9257 13.092 12.109 12.7537C11.4964 12.5 10.7198 12.5 9.16669 12.5H6.66669C5.11355 12.5 4.33698 12.5 3.72441 12.7537C2.90765 13.092 2.25874 13.741 1.92042 14.5577C1.66669 15.1703 1.66669 15.9469 1.66669 17.5M11.25 5.83333C11.25 7.67428 9.75764 9.16667 7.91669 9.16667C6.07574 9.16667 4.58335 7.67428 4.58335 5.83333C4.58335 3.99238 6.07574 2.5 7.91669 2.5C9.75764 2.5 11.25 3.99238 11.25 5.83333Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className=' text-[16px] font-medium text-[#4F4F4F]'>Applicants</p>
          </div>

          <p className=' text-[16px] font-bold text-[#3D3D3D]'>400</p>
        </div>

        <div className=' flex items-center justify-between border-b border-[#E7E7E7] pb-4'>
          <div className=' flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 12.9167H6.25002C5.08705 12.9167 4.50557 12.9167 4.0324 13.0602C2.96707 13.3834 2.13339 14.217 1.81022 15.2824C1.66669 15.7555 1.66669 16.337 1.66669 17.5M13.3334 15L15 16.6667L18.3334 13.3333M12.0834 6.25C12.0834 8.32107 10.4044 10 8.33335 10C6.26229 10 4.58335 8.32107 4.58335 6.25C4.58335 4.17893 6.26229 2.5 8.33335 2.5C10.4044 2.5 12.0834 4.17893 12.0834 6.25Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className=' text-[16px] font-medium text-[#4F4F4F]'>Matches</p>
          </div>

          <p className=' text-[16px] font-bold text-[#3D3D3D]'>100</p>
        </div>

        <div className=' flex items-center justify-between border-b border-[#E7E7E7] pb-4'>
          <div className=' flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4001 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9001 15 13.5 15H8.06979C7.54975 15 7.28972 15 7.04101 15.051C6.82036 15.0963 6.60683 15.1712 6.40624 15.2737C6.18014 15.3892 5.9771 15.5517 5.57101 15.8765L3.58313 17.4668C3.23639 17.7442 3.06302 17.8829 2.91712 17.8831C2.79022 17.8832 2.67019 17.8255 2.59102 17.7263C2.5 17.6123 2.5 17.3903 2.5 16.9463V6.5Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className=' text-[16px] font-medium text-[#4F4F4F]'>Messages</p>
          </div>

          <p className=' text-[16px] font-bold text-[#3D3D3D]'>147</p>
        </div>

        <div className=' flex items-center justify-between border-b border-[#E7E7E7] pb-4'>
          <div className=' flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81383C1.84654 9.67524 1.90328 9.58539 2.01677 9.40569C2.95461 7.92071 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.92071 17.9839 9.40569C18.0974 9.58539 18.1541 9.67524 18.1859 9.81383C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.50001 10.0003 7.50001C8.61962 7.50001 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className=' text-[16px] font-medium text-[#4F4F4F]'>Views</p>
          </div>

          <p className=' text-[16px] font-bold text-[#3D3D3D]'>800</p>
        </div>
      </div>
    </div>
  )
}

export default EditJobDetails;