import React from 'react'

const Loader = () => {
  return (
    <div className='fixed w-full h-full top-0 left-0 bg-black/70 flex justify-center items-center z-20'>
      <div className='rounded-full border-4 w-[50px] h-[50px] border-t border-t-[#673ab7] animate-spin'>
      </div>
    </div>
  )
}
export default Loader