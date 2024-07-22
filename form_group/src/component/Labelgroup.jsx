import React from 'react'

const Labelgroup = ({children,name,title}) => {
  return (
      <div>
          <label className='mt-3 text-primary h6' htmlFor={name}>
              {title}
          </label>
          {children}
    </div>
  )
}

export default Labelgroup