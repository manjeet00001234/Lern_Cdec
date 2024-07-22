import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import { Button } from "primereact/button";
import Inputfild from "./Inputfild";
import { Toast } from "primereact/toast";
import {
     state,
     district,
     city,
     ps,
     inputFild1,
     inputFild2,
     initiValue,
} from "./Data.js";

// const showMessage = (event, ref, severity) => {
//      const label = event.target.innerText;

//      ref.current.show({
//           severity: severity,
//           summary: label,
//           detail: label,
//           life: 2000,
//      });
// };

const Formfild = () => {
     const [data, setData] = useState(initiValue);
     console.log(data);
     const [value, setValue] = useState([]);
     const toast = useRef(null);

     const handelChange = (field, e) => {
          const { name, value } = e.target;
          if (field.type === "check") {
               let selectItem = data?.[name] ?? [];

               let isExist = selectItem?.some((el) => el === value);
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
          setData(initiValue);
     };

     const showData = (item, head) => {
          if (head.type === "date") {
               return moment(item[head.name]).format("DD/MM/YYYY");
          } else if (head.type === "dropdown") {
               return item[head.name]?.name;
          } else {
               return item[head.name];
          }
     };

     const handelCity = (citis) => {
          if (citis.name === "state") {
               return state;
          } else if (citis.name === "district") {
               return district;
          } else if (citis.name === "city") {
               return city;
          } else if (citis.name === "ps") {
               return ps;
          }
     };
     return (
          <div>
               <Toast ref={toast} position="top-center" />
               <div className="w-75 mx-auto border p-5 m-3  rounded">
                    <h1 className="text-center text-secondary">FORM</h1>
                    <div className="d-flex">
                         <div className="w-50 p-4 border m-2">
                              {inputFild1.map((item, index) => {
                                   return (
                                        <Inputfild
                                             key={index}
                                             fild={item}
                                             handelFun={(e) =>
                                                  handelChange(item, e)
                                             }
                                             val={data}
                                             cities={handelCity(item)}
                                        />
                                   );
                              })}
                         </div>
                         <div className="w-50 p-4 border m-2">
                              {inputFild2.map((item, index) => {
                                   return (
                                        <Inputfild
                                             key={index}
                                             fild={item}
                                             handelFun={(e) =>
                                                  handelChange(item, e)
                                             }
                                             val={data}
                                             cities={handelCity(item)}
                                        />
                                   );
                              })}
                         </div>
                    </div>
                    <div className="card flex justify-content-center my-3">
                         <Button onClick={handelSubmit} label="Submit" />
                    </div>
               </div>

               <Table striped bordered hover className="w-75 mx-auto">
                    <thead>
                         <tr>
                              {[...inputFild1, ...inputFild2].map(
                                   (item, index) => {
                                        return (
                                             <th
                                                  className="bg-info text-light"
                                                  key={index}>
                                                  {item.name}
                                             </th>
                                        );
                                   }
                              )}
                         </tr>
                    </thead>
                    <tbody>
                         {value.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        {[...inputFild1, ...inputFild2].map(
                                             (head) => {
                                                  return (
                                                       <td className="text-wrap">
                                                            {showData(
                                                                 item,
                                                                 head
                                                            )}
                                                       </td>
                                                  );
                                             }
                                        )}
                                   </tr>
                              );
                         })}
                    </tbody>
               </Table>
          </div>
     );
};

export default Formfild;
