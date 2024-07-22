import React, { useState } from "react";
import Inputgroup from "./Inputgroup";
import { Button } from "primereact/button";
import Table from "react-bootstrap/Table";
import moment from "moment";
import { state, district, city, inputFild, preValue } from "./Data";

const Formgroup = () => {
     const [data, setData] = useState(preValue);
     console.log(data);
     const [value, setValue] = useState([]);

     const handelChange = (field, e) => {
          const { name, value } = e.target;
          console.log(value);
          if (field.type === "check") {
               let selectItem = data?.[field.name] ?? [];
               let isExist = selectItem.some((el) => el === value);
               if (isExist) {
                    selectItem = selectItem.filter((item) => item !== value);
               } else {
                    selectItem.push(value);
               }
               setData((prev) => ({ ...prev, [name]: selectItem }));
          } else {
               setData((pre) => ({
                    ...pre,
                    [name]: value,
               }));
          }
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setValue((prev) => [...prev, data]);
          setData(preValue);
     };

     const citiesChange = (citi) => {
          if (citi.name === "state") {
               return state;
          } else if (citi.name === "district") {
               return district;
          } else {
               return city;
          }
     };

     const showValue = (item, head) => {
          if (head.type === "dropdown") {
               return item[head.name]?.name;
          } else if (head.type === "date") {
               return moment(item[head.name]).format("DD/MM/YYYY");
          } else {
               return item[head.name];
          }
     };

     return (
          <>
               <div className="border w-50 mx-auto p-5 m-4 rounded">
                    {inputFild.map((item) => {
                         return (
                              <Inputgroup
                                   fild={item}
                                   handelFun={(e) => handelChange(item, e)}
                                   val={data}
                                   cities={citiesChange(item)}
                              />
                         );
                    })}
                    <div className="card flex justify-content-center mt-4">
                         <Button onClick={handelSubmit} label="Submit" />
                    </div>
               </div>

               <div className="w-75 mx-auto">
                    <Table striped bordered hover>
                         <thead>
                              <tr>
                                   {inputFild.map((item, index) => {
                                        return (
                                             <th
                                                  className="bg-info"
                                                  key={index}>
                                                  {item.title}
                                             </th>
                                        );
                                   })}
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item) => {
                                   return (
                                        <tr>
                                             {inputFild.map((head, index) => {
                                                  return (
                                                       <td key={index}>
                                                            {showValue(
                                                                 item,
                                                                 head
                                                            )}
                                                       </td>
                                                  );
                                             })}
                                        </tr>
                                   );
                              })}
                              <tr></tr>
                         </tbody>
                    </Table>
               </div>
          </>
     );
};
export default Formgroup;
