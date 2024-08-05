import React, { useState } from "react";
import Input from "./Input";
import './form.css'
import { Button } from "primereact/button";
import { Table } from "react-bootstrap";

import {
     आय,
     रहनेकास्तर,
     व्यवसाय,
     शैक्षिकयोग्यता,
     गिरफ्तार,
     inputFild1,
     inputFild2,
     preValue,
} from "./Data";



const Form = () => {
     const [data, setData] = useState(preValue);
     const [value, setValue] = useState([]);


     const handleChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({ ...pre, [name]: value }));

     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (fildRequired([...inputFild1, ...inputFild2])) {

               setValue((prev) => [...prev, data]);
               setData(preValue);

}
     };


     const fildRequired = (fild) => {

          for (let field of fild) {
               if (field.required && !data?.[field.name]) {
                    alert(`${field.title} आवश्यक है`);
                    return false;
               }

          }
          return true;

     }



     const selectOption = (option) => {
          if (option.name === "आय") {
               return आय;
          } else if (option.name === "रहनेकास्तर") {
               return रहनेकास्तर;
          } else if (option.name === "व्यवसाय") {
               return व्यवसाय;
          } else if (option.name === "शैक्षिकयोग्यता") {
               return शैक्षिकयोग्यता;
          } else if (option.name === "गिरफ्तार") {
               return गिरफ्तार;
          }
     };

     const showData = (item, head) => {
          if (head.type === 'dropdown') {
               return item?.[head.name].name;
          } else {
               return item?.[head.name]
          }

     }


     return (
          <div>
               <h3 className="text-center mt-5 h2 text-primary">
                    सामान्य सूचना
               </h3>
               <div className="main_countener border rounded">
                    <div className="main_div">
                         <div className="div1">
                              {inputFild1.map((item) => {
                                   return (
                                        <div>
                                             <Input
                                                                                                                                                                               
                                                  fild={item}
                                                  changeFun={handleChange}
                                                  val={data}
                                                  opt={selectOption(item)}

                                             />
                                        </div>
                                   );
                              })}
                         </div>

                         <div className="div2">
                              {inputFild2.map((item) => {
                                   return (
                                        <div>
                                             <Input
                                                  className="w-50"
                                                  fild={item}
                                                  changeFun={handleChange}
                                                  val={data}
                                                  opt={selectOption(item)}

                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
                    <div>
                         <Button onClick={handleSubmit} label="Submit" />
                    </div>
               </div>

               <div className="m-2 text-center">
                    <Table striped bordered hover>
                         <thead>
                              <tr className="bg-info">
                                   {[...inputFild1, ...inputFild2].map(
                                        (item) => {
                                             return (
                                                  <th className="bg-info text-white">
                                                       {item.title}
                                                  </th>
                                             );
                                        }
                                   )}
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item) => {
                                   return (
                                        <tr>
                                             {[
                                                  ...inputFild1,
                                                  ...inputFild2,
                                             ].map((head) => {
                                                  return (
                                                       <td>
                                                            {showData(
                                                                 item,
                                                                 head
                                                            )}
                                                       </td>
                                                  );
                                             })}
                                        </tr>
                                   );
                              })}
                         </tbody>
                    </Table>
               </div>
          </div>
     );
};

export default Form;
