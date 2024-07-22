import React from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";

const Input = ({ fild, funOnchange, Val,options }) => {
     return (
          <div>
               <Label name={fild.name} title={fild.title}>
                    {/* <div className="w-100 mx-auto"> */}
                         <div className="flex justify-content-center">
                              {["text", "email", "password"].includes(
                                   fild.type
                              ) ? (
                                   <InputText
                                        className="w-100"
                                        value={Val?.[fild.name]}
                                        name={fild.name}
                                        onChange={funOnchange}
                                        placeholder={fild.Placeholder}
                                   />
                              ) : null}

                              {fild.type === "dropdown" ? (
                                   <Dropdown
                                        className="w-100"
                                        value={Val?.[fild.name]}
                                        onChange={funOnchange}
                                        options={options}
                                        optionLabel="name"
                                        name={fild.name}
                                        placeholder={fild.Placeholder}
                                   />
                              ) : null}

                              {fild.type === "textarea" ? (
                                   <InputTextarea
                                        className="w-100"
                                        value={Val?.[fild.name]}
                                        onChange={funOnchange}
                                        name={fild.name}
                                        placeholder={fild.Placeholder}
                                        rows={5}
                                        cols={30}
                                   />
                              ) : null}

                              {fild.type === "date" ? (
                                   <Calendar
                                        className="w-100"
                                        value={Val?.[fild.name]}
                                        name={fild.name}
                                        onChange={funOnchange}
                                        placeholder={fild.Placeholder}
                                   />
                              ) : null}
                         </div>
                    {/* </div> */}
               </Label>
          </div>
     );
};

export default Input;
