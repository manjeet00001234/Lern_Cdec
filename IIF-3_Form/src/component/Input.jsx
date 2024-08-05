import React from "react";
import Lable from "./Lable";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";


const Input = ({ fild, fun, val, option }) => {
     return (
          <div>
               <Lable name={fild.name} title={fild.title} fild={fild}>
                    
                    {fild.type === "text" ? (
                         <InputText
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              name={fild.name}
                              placeholder={fild.placeholder}
                              onChange={fun}
                         />
                    ) : null}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              onChange={fun}
                              options={option}
                              name={fild.name}
                              optionLabel="name"
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-50 m-2"
                              autoResize
                              value={val?.[fild.name]}
                              onChange={fun}
                              name={fild.name}
                              rows={1}
                              cols={30}
                         />
                    ) : null}

                    {fild.type === "date" ? (
                         <Calendar
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              onChange={fun}
                              name={fild.name}
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "radio" ? (
                         <div className="w-50 d-inline-flex p-2">
                              {fild.option.map((category) => {
                                   return (
                                        <div className="m-2">
                                       <RadioButton

                                                  inputId={category.value}
                                                  name={fild.name}
                                                  value={category.value}
                                                  onChange={fun}
                                                  checked={
                                                       val?.[fild.name] ===
                                                       category.value
                                                  }
                                             />
                                             <label
                                                  htmlFor={category.value}
                                                  style={{marginLeft:'10px'}}>
                                                  {category.lable}
                                             </label>
                                        </div>
                                   );
                              })}
                         </div>
                    ) : null}

               </Lable>
          </div>
     );
};

export default Input;
