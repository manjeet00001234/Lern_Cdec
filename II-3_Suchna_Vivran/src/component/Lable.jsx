import React from 'react'

const Lable = ({children,name,title,fild}) => {
  return (
       <div>
            <label className="w-25" htmlFor={name}>
                 {title}
                 {fild.required ? (
                      <span className="text-danger h5">*</span>
                 ) : null}
            </label>
            {children}
       </div>
  );
}

export default Lable