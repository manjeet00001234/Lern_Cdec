import React from 'react'

const RadioCheckLable = ({children,name,title}) => {
  return (
    <div><label className='text-primary h6' htmlFor={name}>{title}</label>{children}</div>
  )
}

export default RadioCheckLable