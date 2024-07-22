import React from 'react'

const FormLable = ({children,name,title}) => {
  return (
      <div>
          <label htmlFor={name}>{title}</label>
          {children}
    </div>
  )
}

export default FormLable