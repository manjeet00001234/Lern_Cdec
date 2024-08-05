import React from "react";
import Lable from "./Lable";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";

const Input = ({ fild, fun, val, optn }) => {
     return (
          <div>
               <Lable name={fild.name} title={fild.title} fild={fild}>
                    {["text", "password", "email"].includes(fild.type) ? (
                         <InputText
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              onChange={fun}
                              name={fild.name}
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              onChange={fun}
                              options={optn}
                              name={fild.name}
                              optionLabel="name"
                              optionValue="name"
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "radio" ? (
                         <div className="d-inline-flex m-2">
                              {fild.radio.map((category) => {
                                   return (
                                        <div>
                                             <RadioButton
                                                  style={{ marginLeft: "5px" }}
                                                  inputId={category.name}
                                                  name={fild.name}
                                                  value={category.name}
                                                  onChange={fun}
                                                  checked={
                                                       val?.[fild.name] ===
                                                       category.name
                                                  }
                                             />
                                             <label
                                                  htmlFor={category.name}
                                                  style={{ marginLeft: "5px" }}>
                                                  {category.lable}
                                             </label>
                                        </div>
                                   );
                              })}
                         </div>
                    ) : null}

                    {fild.type === "date" ? (
                         <Calendar
                              className="w-50 m-2"
                              value={val?.[fild.name]}
                              name={fild.name}
                              onChange={fun}
                              placeholder={fild.placeholder}
                         />
                    ) : null}
               </Lable>
          </div>
     );
};

export default Input;
