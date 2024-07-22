import React from "react";
import RadioCheckLable from "./RadioCheckLable";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";


const RadioCheckInput = ({ fild, func, val }) => {
     return (
          <div>
               <RadioCheckLable name={fild.name} title={fild.title}>
                    {fild.type === "radio" ? (
                         <div className="d-flex">
                              {fild.gender.map((gender) => {
                                   return (
                                        <div>
                                             <RadioButton
                                                  className="m-1"
                                                  inputId={gender.value}
                                                  name={fild.name}
                                                  value={gender.value}
                                                  onChange={func}
                                                  checked={
                                                       val?.[fild.name] ===
                                                       gender.value
                                                  }
                                             />
                                             <label
                                                  className="m-1"
                                                  htmlFor={gender.value}>
                                                  {gender.lable}
                                             </label>
                                        </div>
                                   );
                              })}
                         </div>
           ) : null}


           {fild.type === "check" ? (

             <div className="d-flex">
               {fild.education.map((education) => {
                 return (
                      <div>
                           <Checkbox
                                className="m-1"
                                inputId={education.key}
                                name={fild.name}
                                value={education.value}
                                onChange={func}
                                checked={val?.[fild.name]?.some(
                                     (item) => item === education.value
                                )}
                           />

                           <label htmlFor={education.key} className="m-1">
                                {education.value}
                           </label>
                      </div>
                 );
               })}
            </div>

           ):null}
               </RadioCheckLable>
          </div>
     );
};

export default RadioCheckInput;
