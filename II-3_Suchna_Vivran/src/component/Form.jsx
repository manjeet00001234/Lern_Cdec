import React from "react";
import { useState } from "react";
import Input from "./Input";
import { Button } from "primereact/button";
import Table from "react-bootstrap/Table";
import moment from "moment";
import {
     inputFild1,
     inputFild2,
     inputFild3,
     preValue,
     गिरफ्तारव्यक्तिकेसाथसंबंध,
     सूचनाकीविधि,
     देश,
     राज्य,
     जिला,
     पुलिसस्टेशन,
} from "./Data";



const Form = () => {
     const [data, setData] = useState(preValue);
     console.log(data);
     const [value, setValue] = useState([]);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({
               ...pre,
               [name]: value,
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (requiredFild([...inputFild1, ...inputFild2, ...inputFild3])) {
               setValue((pre) => [...pre, data]);
               setData(preValue);
          }
     };

     const requiredFild = (fields) => {
          for (let fild of fields) {
               if (fild.required && !data[fild.name]) {
                    alert(`${fild.title} अनिवार्य है`);
                    return false;
               }
          }
          return true;
     };

     const selectOption = (option) => {
          switch (option.name) {
               case "गिरफ्तारव्यक्तिकेसाथसंबंध":
                    return गिरफ्तारव्यक्तिकेसाथसंबंध;
               case "सूचनाकीविधि":
                    return सूचनाकीविधि;
               case "देश":
                    return देश;
               case "राज्य":
                    return राज्य;
               case "जिला":
                    return जिला;
               default:
                    return पुलिसस्टेशन;
          }
     };

     const showData = (item, head) => {
          if (head.type === "dropdown") {
               return item?.[head.name]?.name;
          } else if (head.type === "date") {
               return moment(item?.[head.name])?.format("DD/MM/YYYY");
          } else {
               return item?.[head.name];
          }
     };

     return (
          <div>
               <h3 className="text-center m-5 h1 text-secondary">
                    {" "}
                    सूचना विवरण
               </h3>
               <div className="border rounded  p-3 m-5">
                    <div className="m-3 border-bottom border-secondary">
                         {inputFild1.map((item1) => {
                              return (
                                   <Input
                                        fild={item1}
                                        fun={handleChange}
                                        val={data}
                                        optn={selectOption(item1)}
                                   />
                              );
                         })}
                         <h3 className="h3 text-primary">पता</h3>
                    </div>
                    <h5 className="h5 text-primary m-2">स्थायी पता</h5>
                    <div className="w-100 d-flex">
                         <div className="w-50 m-2">
                              {inputFild2.map((item2) => {
                                   return (
                                        <Input
                                             fild={item2}
                                             fun={handleChange}
                                             val={data}
                                             optn={selectOption(item2)}
                                        />
                                   );
                              })}
                         </div>
                         <div className="w-50 m-2">
                              {inputFild3.map((item3) => {
                                   return (
                                        <Input
                                             fild={item3}
                                             fun={handleChange}
                                             val={data}
                                             optn={selectOption(item3)}
                                        />
                                   );
                              })}
                         </div>
                    </div>

                    <div className="card flex justify-content-center">
                         <Button onClick={handleSubmit} label="Submit" />
                    </div>
               </div>

               <div className="m-5">
                    <Table striped bordered hover className="text-center">
                         <thead>
                              <tr>
                                   {[
                                        ...inputFild1,
                                        ...inputFild2,
                                        ...inputFild3,
                                   ].map((item) => {
                                        return <th>{item.title}</th>;
                                   })}
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item) => {
                                   return (
                                        <tr>
                                             {[
                                                  ...inputFild1,
                                                  ...inputFild2,
                                                  ...inputFild3,
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
