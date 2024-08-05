import React from "react";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import Lable from "./Lable";

const Input = ({ fild, onFunction, fildValue }) => {
     return (
          <div>

               <Lable name={fild.name} title={fild.title}>
                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-50 m-2"
                              autoResize
                              name={fild.name}
                              value={fildValue?.[fild.name]}
                              onChange={onFunction}
                              rows={1}
                              cols={30}
                         />
                    ) : null}

                    {fild.type === "radio" ? (

                         <div className="d-inline-flex w-50 m-2">
                              {fild.radio.map((category) => {
                                   return (
                                        <div>
                                             <RadioButton
                                                  style={{ marginLeft: "10px" }}
                                                  inputId={category.value}
                                                  name={fild.name}
                                                  value={category.value}
                                                  onChange={onFunction}
                                                  checked={
                                                       fildValue?.[
                                                            fild.name
                                                       ] === category.value
                                                  }
                                             />
                                             <label
                                                  htmlFor={category.value}
                                                  style={{ marginLeft: "5px" }}>
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
