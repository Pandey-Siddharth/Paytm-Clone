import React from 'react'

function InputBox({label,onChange,placeholder}) {
  return (
    <div>
      <div className = "text-sm font-bold py-1 text-left">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className = "w-full border text-sm rounded border-slate-200 py-1 px-2"/>
    </div>
  )
}

export default InputBox
