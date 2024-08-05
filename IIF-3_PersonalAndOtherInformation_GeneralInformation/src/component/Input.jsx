import React from "react";
import Lable from "./Lable";
import { InputText } from "primereact/inputtext";

import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from 'primereact/inputtextarea';


const Input = ({ fild, changeFun, val ,opt}) => {
     return (
          <div>
               <Lable name={fild.name} title={fild.title} fild={fild}>
                    {fild.type === "text" ? (
                         <InputText
                              className="w-75 mt-3"
                              value={val?.[fild.name]}
                              onChange={changeFun}
                              placeholder={fild.placeholder}
                              name={fild.name}
                         />
                    ) : (
                         null
                    )}

                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-75 mt-3"
                              value={val?.[fild.name]}
                              onChange={changeFun}
                              name={fild.name}
                              rows={3}
                              cols={30}
                         />
                    ) : null}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-75 mt-3"
                              value={val?.[fild.name]}
                              onChange={changeFun}
                              name={fild.name}
                              options={opt}
                              optionLabel="name"
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "radio" ? (
                         <div className="d-inline-flex mt-3">
                              {fild.radio.map((category) => {
                                   return (
                                        <div
                                             className="d-inline-flex"
                                             style={{ marginLeft: "10px" }}>
                                             <RadioButton
                                                  className="w-75"
                                                  inputId={category.value}
                                                  name={fild.name}
                                                  value={category.value}
                                                  onChange={changeFun}
                                                  checked={
                                                       val?.[fild.name] ===
                                                       category.value
                                                  }
                                             />
                                             <label
                                                  htmlFor={category.value}
                                                  style={{ marginLeft: "5px" }}>
                                                  {category.name}
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
