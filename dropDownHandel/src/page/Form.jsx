import React, { useState } from "react";
import Input from "./Input";
import { Button } from "primereact/button";
import Table from "react-bootstrap/Table";
import { state, district, tehsil, ps, preValue, formInput } from "../page/Data";

const Form = () => {
     const [data, setData] = useState(preValue);
     const [value, setValue] = useState([]);


     const handelChange = (item, e) => {
          const { name, value } = e.target;

          if (item.type === "check") {
               let selectItem = Array.isArray(data?.[name]) ? data[name] : [];
               let isExist = selectItem?.some((evl) => evl === value);
               if (isExist) {
                    selectItem = selectItem?.filter((el) => el !== value);
               } else {
                    selectItem.push(value);
               }
               setData((prev) => ({ ...prev, [name]: selectItem }));
          } else {
               setData((prev) => ({ ...prev, [name]: value }));
          }
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setValue((pre) => [...pre, data]);
          setData(preValue);
     };

     const hendeloption = (item) => {
          if (item.name === "state") {
               return state;
          }
          if (item.name === "district") {
               return district;
          }
          if (item.name === "tehsil") {
               return tehsil;
          } else {
               return ps;
          }
     };

     const showValue = (item, head) => {
          if (head.type === "dropdown") {
               return item[head.name]?.name;
          } else {
               return item[head.name];
          }
     };

     return (
          <>
               <div className="w-50 mx-auto border p-3">
                    {formInput.map((item) => (
                         <div key={item.name}>
                              <Input

                                   fild={item}
                                   val={data}
                                   func={(e) => handelChange(item, e)}
                                   option={hendeloption(item)}
                              />
                         </div>
                    ))}
                    <div className="w-100 text-center mt-5">
                         <Button
                              className="w-75 mx-auto"
                              onClick={handelSubmit}
                              label="Submit"
                         />
                    </div>
               </div>
               <div className="mt-5 w-50 mx-auto text-center">
                    <Table striped bordered hover>
                         <thead>
                              <tr>
                                   {formInput.map((item) => (
                                        <th key={item.name}>{item.title}</th>
                                   ))}
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item1, index) => (
                                   <tr key={index}>
                                        {formInput.map((head) => (
                                             <td key={head.name}>
                                                  {showValue(item1, head)}
                                             </td>
                                        ))}
                                   </tr>
                              ))}
                         </tbody>
                    </Table>
               </div>
          </>
     );
};

export default Form;
