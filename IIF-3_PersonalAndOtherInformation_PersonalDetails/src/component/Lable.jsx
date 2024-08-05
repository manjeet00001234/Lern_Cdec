import React from "react";

const Lable = ({ children, name, title }) => {
     return (
          <div className="w-25">
               <label htmlFor={name}>
                    {title}
               </label>
               {children}
          </div>
     );
};

export default Lable;
