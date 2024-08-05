import React from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/InputNumber";
import { InputText } from "primereact/inputtext";
import Lable from "./Lable";

const Input = ({ fild, onchangeFun, inputValue, optionValue }) => {
     return (
          <div className="d-flex justify-content-between border border-primary">
               <Lable name={fild.name} title={fild.title}>
                    {fild.type === "text" ? (
                         <InputText
                              value={inputValue?.[fild.name]}
                              onChange={onchangeFun}
                              name={fild.name}
                              placeholder={fild.placeholder}
                         />
                    ) : null}
               </Lable>

               {fild.type === "date" ? (
                    <Calendar
                         value={inputValue?.[fild.name]}
                         name={fild.name}
                         onChange={onchangeFun}
                         placeholder={fild.placeholder}
                    />
               ) : null}

               {fild.type === "dropdown" ? (
                    <Dropdown
                         value={inputValue?.[fild.name]}
                         onChange={onchangeFun}
                         options={optionValue}
                         name={fild.name}
                         optionLabel="name"
                         placeholder={fild.placeholder}
                    />
               ) : null}

               {fild.type === "number" ? (
                    <InputNumber
                         value={inputValue?.[fild.name]}
                         onValueChange={onchangeFun}
                         name={fild.name}
                         placeholder={fild.placeholder}
                    />
               ) : null}
          </div>
     );
};

export default Input;
