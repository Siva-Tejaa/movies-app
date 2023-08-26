import React from 'react'

const Contact = () => {
  {document.title="Contact - iBOMMA"}
  return (
    <div className='bg-[#1D1D1D] text-white h-[100vh]'>
      <div className='mx-5 pb-12 laptop:mx-14 pb-16 desktop:mx-16 pb-[88px]'>
        <h1 className='pt-12 pb-6 text-3xl'>Contact</h1>
        <p className='text-[#919191] text-sm mb-5 mt-4'>NOTE: We do not accept any movie request / support request from INDIA. We’ll ignore such kind of messages most of the times, repeated violators will be banned.</p>
        <div>
          <p className='text-[var(--main-color)]'>FAQ : </p>
          <p className='text-[#919191] text-sm font-medium my-5'>Video is not playing / Downloading:</p>
          <div className='text-[#919191] text-sm my-5'>
            <p>1) Just remove the browser cache and try again</p>
            <p>2) Allow cookies</p>
            <p>3) Disable any plugins which block our resources</p>
          </div>
          <div className='text-[#919191] text-sm my-5'>
            <p>NOTE: We do not accept any movie request / Bug-reports from INDIA at this moment. We’ll ignore such kind of messages most of the times, <span className='font-medium'>repeated violators will be banned from our system</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact