import React from 'react'
import { Link } from 'react-router-dom';

function BottomWarning({label,to,buttonText}) {
  return (
    <div className = "py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className=" pointer underline cursor-pointer pl-1" to = {to}>
        {buttonText}
      </Link>
    </div>
  )
}

export default BottomWarning
