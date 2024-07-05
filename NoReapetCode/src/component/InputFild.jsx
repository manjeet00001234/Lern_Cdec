import React from "react";
import Lable from "./Lable";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

const InputFild = ({ fild, funChange, val, options = [] }) => {
     return (
          <>
               <Lable title={fild.title}>
                    {fild.type === "date" ? (
                         <Calendar
                              className="w-50 p-1"
                              value={val?.[fild.name]}
                              onChange={funChange}
                              placeholder={fild.placeholder}
                              name={fild.name}
                         />
                    ) : null}

                    {/* ****************************************************************************** */}
                    {fild.type === "text"
                         ? (
                         <InputText
                              className="w-50 mt-1"
                              value={val?.[fild.name]}
                              onChange={funChange}
                              placeholder={fild.placeholder}
                              name={fild.name}
                         />
                    ) : null}

                    {/* ************************************************************************************** */}

                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-50"
                              value={val?.[fild.name]}
                              onChange={funChange}
                              placeholder={fild.placeholder}
                              name={fild.name}
                         />
                    ) : null}


                    {/* *************************************************************************************************** */}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-50 mt-1"
                              options={options}
                              optionLabel="name"
                              optionValue="name"
                              value={val?.[fild.name]}
                              onChange={funChange}
                              placeholder={fild.placeholder}
                              name={fild.name}
                         />
                    ) : null}

               </Lable>
          </>
     );
};

export default InputFild;
