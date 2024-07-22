import React, { useState } from "react";
import { Button } from "primereact/button";
import RadioCheckInput from "./RadioCheckInput";

const inputFild = [
     {
          name: "gender",
          type: "radio",
          title: "Gender",
          gender: [
               { value: "male", lable: "Male" },
               { value: "female", lable: "Female" },
               { value: "other", lable: "Other" },
          ],
     },
     {
          name: "education",
          type: "check",
          title: "Education",
          education: [
               { value: "M.Teach", key: "m" },
               { value: "B.Teach", key: "b" },
               { value: "Other", key: "o" },
          ],
     },
];

const incialValue = {
     gender: "",
     education: [],
};
const RadioCheckForm = () => {
     const [data,setData] = useState(incialValue);
     const [show,setShow] = useState([]);



     const handelChange = (fild, e) => {
          const { name, value } = e.target;

         if (fild.type === "check") {
             let selectItem = data?.[name] ?? [];
             let isExist = selectItem?.some((e) => e === value);
             if (isExist) {
                 selectItem = selectItem?.filter((el) => el !== value);
             } else {
                 selectItem.push(value);
             }
             setData((prev) => ({...prev, [name]: selectItem}))
          } else {
               setData((prev) => ({ ...prev, [name]: value }));
          }
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setShow((prev) => [...prev, data]);
          setData("");
     };
     return (
          <div>
               <div className="w-25 border p-3 mx-auto mt-5 rounded">
                    {inputFild.map((item) => {
                         return (
                              <div className="m-2">
                                   <RadioCheckInput
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

               <div className="w-50 border mx-auto mt-5 d-flex flex-wrap">
                    {show.map((item) => {
                         return (
                              <div className="border m-2 p-2">
                                   {inputFild.map((head) => {
                                        return (
                                             <div>
                                                  <div className="text-primary h6">
                                                       {head.title}:-
                                                  </div>
                                                  <div>{item?.[head.name]}</div>
                                             </div>
                                        );
                                   })}
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default RadioCheckForm;
