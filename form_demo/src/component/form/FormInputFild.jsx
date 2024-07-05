import React from 'react'
import Reuseble from './Reuseble';
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";


const cities = [
     { name: "New York" },
     { name: "Rome" },
     { name: "London" },
     { name: "Istanbul" },
     { name: "Paris" },
];


const FormInputFild = ({ fild, onchangecd, val }) => {
    return (
         <Reuseble name={fild.name} title={fild.title}>
              {fild.type === "date" ? (
                   <Calendar
                        className="w-50"
                        type={fild.type}
                        name={fild.name}
                        value={val?.[fild.name]}
                        onChange={onchangecd}
                        placeholder={fild.placeholder}
                   />
              ) : null}

              {["text", "password","email"]?.includes(fild.type) ?
                   <InputText
                        className="w-50"
                        type={fild.type}
                        name={fild.name}
                        value={val?.[fild.name] ?? ""}
                        onChange={onchangecd}
                        placeholder={fild.placeholder}
                   />
               : null}

              {fild.type === "dropdown" ? (
                   <Dropdown
                        options={cities}
                        optionLabel="name"
                        placeholder={fild.placeholder}
                        name={fild.name}
                        value={val?.[fild.name]}
                        onChange={onchangecd}
                   />
              ) : null}
         </Reuseble>
    );

};

export default FormInputFild