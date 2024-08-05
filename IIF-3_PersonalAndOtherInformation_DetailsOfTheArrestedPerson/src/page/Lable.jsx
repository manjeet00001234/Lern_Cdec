import React from 'react'

const Lable = ({name,title,children}) => {
  return (
       <div>
            <label
                 style={{ width: "40%"}}
                 className="bg-info p-2 m-1"
                 htmlFor={name}>
                 {title}
            </label>
            {children}
       </div>
  );
}

export default Lable