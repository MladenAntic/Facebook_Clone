import React from 'react'

const IconTitle = ({text}) => {
  return (
    <span className="icon-title absolute bg-gray-800 text-white rounded-md p-[0.3125rem] text-sm bottom-[-3.125rem] left-[50%] translate-x-[-50%] hidden">
    {text}
  </span>
  )
}

export default IconTitle
