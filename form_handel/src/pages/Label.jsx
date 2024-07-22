import React from "react";

const Label = ({ children, name, title }) => {
     return (
          <div>
               <label className="mt-3 text-primary" htmlFor={name}>{title} :</label>
               {children}
          </div>
     );
};

export default Label;
