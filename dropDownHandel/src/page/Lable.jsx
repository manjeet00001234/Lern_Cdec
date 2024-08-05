import React from 'react'

const Lable = ({ children, name, title ,fild}) => {
     return (
          <div>
               <label className="w-25 m-1" htmlFor={name}>

                    {title}
                     {fild.requird ?(<span className="text-danger">*</span>):null}
               </label>
               {children}
          </div>
     );
};

export default Lable