import React from 'react'

function Appbar() {
  return (
    <div className='flex justify-between shadow h-14'>
      <div className='flex flex-col justify-center ml-4 h-full font-semibold'>
        PayTM App
      </div>
      <div className='flex'>
        <div className='flex flex-col justify-center h-full mr-4 font-semibold'>
            Hello
        </div>
        <div className=' flex flex-col justify-center rounded-full h-14 w-14 bg-gray-200  pointer-cursor'>
            <div className='text-xl flex justify-center'> S </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar
