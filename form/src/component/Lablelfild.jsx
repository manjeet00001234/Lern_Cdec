import React from 'react'

const Lablelfild = ({ children, name, title, required }) => {
     return (
          <div>
               <label className="w-25 text-primary h6" htmlFor={name}>
                    {title}
                    {required ? (
                         <span className="text-danger float-left">*</span>
                    ) : null}
               </label>
               {children}
          </div>
     );
};

export default Lablelfild