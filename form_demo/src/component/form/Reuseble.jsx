import React from 'react'

const Reuseble = ({ children, name, title }) => {
     return (
          <div>
               <label style={{ width: "200px" }} htmlFor={name}>
                    {title}:
               </label>

               {children}
          </div>
     );
};

export default Reuseble;