import React from "react";
import Lable from "./Lable";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";

const Input = ({ fild, func, val, option }) => {
     return (
          <div>
               <Lable name={fild.name} title={fild.title} fild={fild}>
                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-50 m-2"
                              value={val[fild.name]}
                              onChange={func}
                              options={option}
                              name={fild.name}
                              optionLabel="name"
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "check" ? (
                         <div className="d-inline-flex w-50 mt-2">
                              {fild.checkValue.map((category) => (
                                   <div className="m-2" key={category.key}>
                                        <Checkbox
                                             inputId={category.key}
                                             name={fild.name}
                                             value={category.value}
                                             onChange={func}
                                             checked={
                                                  Array.isArray(
                                                       val?.[fild.name]
                                                  ) &&
                                                  val?.[fild.name]?.some(
                                                       (item) =>
                                                            item ===
                                                            category.value
                                                  )
                                             }
                                        />
                                        <label
                                             htmlFor={category.key}
                                             style={{marginLeft:"5px"}}>
                                             {category.value}
                                        </label>
                                   </div>
                              ))}
                         </div>
                    ) : null}
               </Lable>
          </div>
     );
};

export default Input;
