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
                    {fild.type === "text" ? (
                         <div className="w-50 border m-2 p-2">
                              <div className="d-flex align-items-start gap-1">
                                   <h5 className="text-primary">
                                        {fild.title}
                                   </h5>
                                   {fild.required ? (
                                        <span className="text-danger lh-1">
                                             *
                                        </span>
                                   ) : null}
                              </div>
                              <InputText
                                   className="w-50 mt-1"
                                   value={val?.[fild.name]}
                                   onChange={funChange}
                                   placeholder={fild.placeholder}
                                   name={fild.name}
                              />
                         </div>
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
                         <div className="w-50 border m-2 p-2">
                              <div className="d-flex align-items-start gap-1">
                                   <h5 className="text-primary">
                                        {fild.title}
                                   </h5>
                                   {fild.required ? (
                                        <span className="text-danger lh-1">
                                             *
                                        </span>
                                   ) : null}
                              </div>
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
                         </div>
                    ) : null}
               </Lable>
          </>
     );
};

export default InputFild;
