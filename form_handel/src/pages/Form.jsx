import React, { useEffect } from "react";
import { useState } from "react";
import Input from "./Input";
import { Button } from "primereact/button";
import moment from "moment";
import Table from "react-bootstrap/Table";

const city = [
     { name: "jaipur" },
     { name: "sikar" },
     { name: "jhunjhunu" },
     { name: "ajmer" },
     { name: "alwar" },
];

const inputFild = [
     {
          name: "name",
          type: "text",
          title: "Name",
          Placeholder: "Enter your name",
     },
     {
          name: "email",
          type: "text",
          title: "Email",
          Placeholder: "Enter your email",
     },
     {
          name: "password",
          type: "password",
          title: "Password",
          Placeholder: "Enter your password",
     },
     {
          name: "city",
          type: "dropdown",
          title: "City",
          Placeholder: "Enter your city",
     },
     {
          name: "textarea",
          type: "textarea",
          title: "Address",
          Placeholder: "Enter your Address",
     },
     {
          name: "date",
          type: "date",
          title: "Date",
          Placeholder: "Enter your date",
     },
];

const preValue = {
     name: "",
     email: "",
     password: "",
     city: "",
     textarea: "",
     date: "",
};

const Form = () => {
     const [data, setData] = useState(preValue);
     const [value, setValue] = useState([]);

     const handelChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({
               ...pre,
               [name]: value,
          }));
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setValue((pre) => [...pre, data]);
          setData(preValue);
     };

     const getOption = (drop) => {
          if (drop.name === "city") {
               return city;
          }
     };

     const getFormattedValue = (item, head) => {
          if (head.type === "dropdown") {
               return item[head.name].name;
          } else if (head.type === "date") {
               return moment(item[head.name]).format("DD/MM/YYYY");
          }
          return item[head.name];
     };

     return (
          <div>
               <div className="w-25 mx-auto border p-3 mt-5">
                    {inputFild.map((item,index) => {
                         return (
                              <div key={index}>
                                   <Input
                                        fild={item}
                                        funOnchange={handelChange}
                                        Val={data}
                                        options={getOption(item)}
                                   />
                              </div>
                         );
                    })}
                    <div className=" flex justify-content-center">
                         <Button
                              className="w-100 mt-3"
                              onClick={handelSubmit}
                              label="Submit"
                         />
                    </div>
               </div>

               <div className="w-50 mx-auto mt-5 container">
                    <Table className="text-center" striped bordered hover>
                         <thead>
                              <tr>
                                   {inputFild.map((item, index) => {
                                        return (
                                             <th key={index}>{item.title}</th>
                                        );
                                   })}
                              </tr>
                         </thead>

                         <tbody>
                              {value?.map((item,index) => {
                                   return (
                                        <tr key={index}>
                                             {inputFild?.map((head,index) => {
                                                  return (
                                                       <td key={index}>
                                                            {getFormattedValue(
                                                                 item,
                                                                 head
                                                            )}
                                                            {/* {head.type ===
                                                            "date"
                                                                 ? moment(
                                                                        item[
                                                                             head
                                                                                  .name
                                                                        ]
                                                                   ).format(
                                                                        "DD/MM/YYYY"
                                                                   )
                                                                 : head.type ===
                                                                   "dropdown"
                                                                 ? item[
                                                                        head
                                                                             .name
                                                                   ]?.name
                                                                 : item[
                                                                        head
                                                                             .name
                                                                   ]} */}
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
