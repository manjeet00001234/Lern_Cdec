import React from "react";
import Lablelfild from "./Lablelfild";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/RadioButton";
import { Checkbox } from "primereact/checkbox";
// import { useState } from "react";

const Inputfild = ({ fild, handelFun, val, cities }) => {
     // const [select, setSelect] = useState([]);


     // const selectItemChange = (e) => {
     //      let selectItem = [...select];
     //      if (e.checked) {
     //           selectItem.push(e.value);
     //      } else {
     //           selectItem = selectItem.filter(
     //                (category) => category.key !== e.value.key
     //           );
     //      }
     //      setSelect(selectItem);
     // };

     return (
          <div>
               <Lablelfild
                    name={fild.name}
                    title={fild.title}
                    required={fild.required}>
                    {["text", "password", "email"].includes(fild.type) ? (
                         <InputText
                              className="w-75 mt-2"
                              value={val[fild.name]}
                              onChange={handelFun}
                              name={fild.name}
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "textarea" ? (
                         <InputTextarea
                              className="w-75 mt-2"
                              value={val[fild.name]}
                              onChange={handelFun}
                              name={fild.name}
                              placeholder={fild.placeholder}
                              rows={4}
                              cols={30}
                         />
                    ) : null}

                    {fild.type === "date" ? (
                         <Calendar
                              className="w-75 mt-2"
                              value={val[fild.name]}
                              name={fild.name}
                              onChange={handelFun}
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "dropdown" ? (
                         <Dropdown
                              className="w-75 mt-2"
                              value={val[fild.name]}
                              onChange={handelFun}
                              options={cities}
                              name={fild.name}
                              optionLabel="name"
                              placeholder={fild.placeholder}
                         />
                    ) : null}

                    {fild.type === "radio" ? (
                         <div className="d-inline-block w-75 border">
                              {fild.options.map((option, index) => {
                                   return (
                                        <div
                                             key={index}
                                             className="d-inline-flex">
                                             <RadioButton
                                                  className=" m-2"
                                                  inputId={option.value}
                                                  name={fild.name}
                                                  value={option.value}
                                                  onChange={handelFun}
                                                  checked={
                                                       val[fild.name] ===
                                                       option.value
                                                  }
                                             />

                                             <label
                                                  className="m-2"
                                                  htmlFor={option.value}>
                                                  {option.label}
                                             </label>
                                        </div>
                                   );
                              })}
                         </div>
                    ) : null}

                    {fild.type === "check" ? (
                         <div className="d-inline-block w-75 border mt-2">
                              <div className="d-flex flex-wrap">
                                   {fild.category.map((category) => {
                                        return (
                                             <div
                                                  key={category.key}
                                                  className="d-flex m-2 gap-2">
                                                  <Checkbox
                                                       inputId={category.key}
                                                       name={fild.name}
                                                       value={category.value}
                                                       onChange={handelFun}
                                                       checked={val?.[
                                                            fild.name
                                                       ]?.some(
                                                            (el) =>
                                                                 el ===
                                                                 category.value
                                                       )}
                                                  />
                                                  <label
                                                       htmlFor={category.key}
                                                       className="">
                                                       {category.value}
                                                  </label>
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    ) : null}
               </Lablelfild>
          </div>
     );
};

export default Inputfild;
