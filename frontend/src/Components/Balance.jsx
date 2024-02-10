import React from 'react'

function Balance({balance}) {
  return (
    <div className='flex'>
        <div className='font-bold text-md'>
            Your Balance
        </div>
        <div className='ml-4 font-semibold text-md'>Rs {balance}</div>
    </div>
  )
}

export default Balance
