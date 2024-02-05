import React from 'react'

function BottomWarning({label,to,buttonText}) {
  return (
    <div className = "py-2 text-sm flex flex justify-center">
      <div>
        {label}
      </div>
      <link className=" pointer underline cursor-pointer " to = {to}>
        {buttonText}
      </link>
    </div>
  )
}

export default BottomWarning
