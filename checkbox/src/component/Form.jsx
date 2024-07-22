import React, { useState } from "react";
import FormInput from "./FormInput";
import { Button } from "primereact/button";

const inputFild = [
     {
          name: "game",
          type: "check",
          title: "Game",
          game: [
               { value: "cricket", key: "c" },
               { value: "hockey", key: "h" },
               { value: "footbol", key: "f" },
          ],
     },
     {
          name: "education",
          type: "check",
          title: "Education",
          game: [
               { value: "M.SC", key: "m" },
               { value: "B.Teach", key: "b" },
               { value: "M.Teach", key: "t" },
          ],
     },
     {
          name: "hobbies",
          type: "check",
          title: "Hobbies",

          game: [
               { value: "Game", key: "g" },
               { value: "Education", key: "e" },
               { value: "Raning", key: "r" },
          ],
     },
];

const inicialValue = {
     game: null,
     education: null,
     hobbies: null,
};
const Form = () => {
     const [data, setData] = useState(inicialValue);
     const [value, setValue] = useState([]);

     const handelChange = (fild, e) => {
          const { name, value } = e.target;
          if (fild.type === "check") {
               let slectItem = data?.[name] ?? [];
               let isExist = slectItem?.some((el) => el === value);
               if (isExist) {
                    slectItem = slectItem?.filter((item) => item !== value);
               } else {
                    slectItem.push(value);
               }
               setData((prev) => ({ ...prev, [name]: slectItem }));
          } else {
               setData((prev) => ({
                    ...prev,
                    [name]: value,
               }));
          }
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setValue((pre) => [...pre, data]);
       setData({ ...inicialValue });


     };

     return (
          <div>
               <div className="w-25 m-auto border mt-5 p-3">
                    {inputFild.map((item) => {
                         return (
                              <div className="m-3">
                                   <FormInput
                                        fild={item}
                                        func={(e) => handelChange(item, e)}
                                        val={data}
                                   />
                              </div>
                         );
                    })}
                    <div className="card flex justify-content-center">
                         <Button onClick={handelSubmit} label="Submit" />
                    </div>
               </div>

               <div>
                    <div className="d-flex border w-75 mx-auto mt-5 p-1 rounded  flex-wrap">
                         {value.map((item) => {
                              return (
                                   <div className="border p-3 m-2 border-primary rounded-top rounded-bottom">
                                        {inputFild.map((head) => {
                                             return (
                                                  <div className="d-flex w-100">
                                                       <div className="text-primary w-50 h6">{head.title}:-{"  "}</div>
                                                       <div className="text-info w-50">{item?.[head.name]}</div>
                                                  </div>
                                             );
                                        })}
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default Form;
