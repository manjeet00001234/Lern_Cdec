import React from "react";
import Labelgroup from "./Labelgroup";
import { Calendar } from "primereact/calendar";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from "primereact/checkbox";




const Inputgroup = ({ fild, funHandel, valu, cities=[] }) => {
     return (
          <div>
               <Labelgroup name={fild.name} title={fild.title}>
                    {fild.required ? (
                         <span className="text-danger lh-1">*</span>
                    ) : null}

                    {["text", "password"].includes(fild.type) ? (
                         <InputText
                              className="w-100 mt-1"
                              value={valu[fild.name]}
                              name={fild.name}
                              onChange={funHandel}
                              placeholder={fild.Placeholder}
                         />
                    ) : null}

                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-100 mt-1"
                              value={valu[fild.name]}
                              onChange={funHandel}
                              name={fild.name}
                              rows={5}
                              cols={30}
                         />
                    ) : null}

                    {fild.type === "date" ? (
                         <Calendar
                              className="w-100 mt-1"
                              value={valu[fild.name]}
                              name={fild.name}
                              onChange={funHandel}
                              placeholder={fild.Placeholder}
                         />
                    ) : null}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-100 mt-1"
                              value={valu[fild.name]}
                              onChange={funHandel}
                              options={cities}
                              name={fild.name}
                              optionLabel="name"
                              placeholder={fild.Placeholder}
                         />
                    ) : null}

                    {fild.type === "radio" ? (
                         <div>
                              {fild.options.map((option) => (
                                   <div className="d-inline">
                                        <RadioButton
                                             className="m-2"
                                             inputId={option.value}
                                             name={fild.name}
                                             value={option.value}
                                             onChange={funHandel}
                                             checked={
                                                  valu[fild.name] ===
                                                  option.value
                                             }
                                        />
                                        <label
                                             className="m-2"
                                             htmlFor={option.value}>
                                             {option.label}
                                        </label>
                                   </div>
                              ))}
                         </div>
                    ) : null}

                    {fild.type === "check" ? (
                         <div>
                              {fild.options.map((option) => (
                                   <div key={option.value} className="d-inline">
                                        <Checkbox
                                             className="m-2"
                                             inputId={option.key}
                                             name={fild.name}
                                             value={option.value}
                                             onChange={funHandel}
                                             checked={valu?.[fild.name]?.some(
                                                  (item) => item === option.name
                                             )}
                                        />
                                        <label
                                             className="m-2"
                                             htmlFor={option.value}>
                                             {option.label}
                                        </label>
                                   </div>
                              ))}
                         </div>
                    ) : null}
               </Labelgroup>
          </div>
     );
};

export default Inputgroup;
