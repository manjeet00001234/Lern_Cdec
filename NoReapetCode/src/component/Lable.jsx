import React from 'react'

const Lable = ({children,title,name}) => {
  return (
       <div>
            <label className="w-50" htmlFor={name}>
                 {title}
            </label>
            {children}
       </div>
  );
}

export default Lable