import React from "react";
import { useState } from "react";
import Input from "./Input";
import { Button } from "primereact/button";
import Table from "react-bootstrap/Table";
import moment from "moment";
import {
     अदालतकेप्रकार,
     कीगईकार्यवाही,
     राज्,
     जिला,
     पुलिसस्टेशन,
     बीटसं,
     कार्यपालकन्‍यायाधीशकानाम,
     inputFild1,
     inputFild2,
     preValue,
} from "./Data";

const Form = () => {
     const [data, setData] = useState(preValue);
     const [value, setValue] = useState([]);

     const handelChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({ ...pre, [name]: value }));
     };

const handleSubmit = (e) => {
     e.preventDefault();
     if (requiredValidation([...inputFild1, ...inputFild2])) {
          setValue((prev) => [...prev, data]);
          setData(preValue);
     }
};

const requiredValidation = (fields) => {
     for (let field of fields) {
          if (field.required && !data[field.name]) {
               alert(`${field.title} is required.`);
               return false;
          }
     }
     return true;
};




     const selectOption = (slect) => {
          if (slect.name === "अदालतकेप्रकार") {
               return अदालतकेप्रकार;
          } else if (slect.name === "कीगईकार्यवाही") {
               return कीगईकार्यवाही;
          } else if (slect.name === "राज्") {
               return राज्;
          } else if (slect.name === "जिला") {
               return जिला;
          } else if (slect.name === "पुलिसस्टेशन") {
               return पुलिसस्टेशन;
          } else if (slect.name === "बीटसं") {
               return बीटसं;
          } else {
               return कार्यपालकन्‍यायाधीशकानाम;
          }
     };

     const showData = (item, head) => {
          if (head.type === "dropdown") {
               return item[head.name]?.name;
          } else if (head.type === "date") {
               return moment(item[head.name]).format("DD/MM/YYYY");
          } else {
               return item[head.name];
          }
     };
     return (
          <div>
               <div className=" p-3 rounded border m-5">
                    <div className="d-flex w-100">
                         <div className="w-50">
                              {inputFild1.map((item1) => {
                                   return (
                                        <div>
                                             <Input
                                                  fild={item1}
                                                  fun={handelChange}
                                                  val={data}
                                                  option={selectOption(item1)}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                         <div className="w-50">
                              {inputFild2.map((item2) => {
                                   return (
                                        <div>
                                             <Input
                                                  fild={item2}
                                                  fun={handelChange}
                                                  val={data}
                                                  option={selectOption(item2)}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
                    <div className="text-center m-5">
                         <Button
                              className="w-25 rounded"
                              onClick={handleSubmit}
                              label="Submit"
                         />
                    </div>
               </div>
               <div className="m-5">
                    <Table striped bordered hover>
                         <thead>
                              <tr>
                                   {[...inputFild1, ...inputFild2].map(
                                        (item) => {
                                             return <th>{item.title}</th>;
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





// import React, { useState } from "react";
// import Input from "./Input";
// import { Button } from "primereact/button";
// import Table from "react-bootstrap/Table";
// import moment from "moment";
// import {
//      अदालतकेप्रकार,
//      कीगईकार्यवाही,
//      राज्,
//      जिला,
//      पुलिसस्टेशन,
//      बीटसं,
//      कार्यपालकन्‍यायाधीशकानाम,
//      inputFild1,
//      inputFild2,
//      preValue,
// } from "./Data";

// const Form = () => {
//      const [data, setData] = useState(preValue);
//      const [value, setValue] = useState([]);

//      const handleChange = (e) => {
//           const { name, value } = e.target;
//           setData((prev) => ({ ...prev, [name]: value }));
//      };

//      const handleSubmit = (e) => {
//           e.preventDefault();
//           if (requiredValidation([...inputFild1, ...inputFild2])) {
//                setValue((prev) => [...prev, data]);
//                setData(preValue);
//           }
//      };

//      const requiredValidation = (fields) => {
//           for (let field of fields) {
//                if (field.required && !data[field.name]) {
//                     alert(`${field.title} is required.`);
//                     return false;
//                }
//           }
//           return true;
//      };

//      const selectOption = (field) => {
//           switch (field.name) {
//                case "अदालतकेप्रकार":
//                     return अदालतकेप्रकार;
//                case "कीगईकार्यवाही":
//                     return कीगईकार्यवाही;
//                case "राज्":
//                     return राज्;
//                case "जिला":
//                     return जिला;
//                case "पुलिसस्टेशन":
//                     return पुलिसस्टेशन;
//                case "बीटसं":
//                     return बीटसं;
//                default:
//                     return कार्यपालकन्‍यायाधीशकानाम;
//           }
//      };

//      const showData = (item, head) => {
//           if (head.type === "dropdown") {
//                return item[head.name]?.name;
//           } else if (head.type === "date") {
//                return moment(item[head.name]).format("DD/MM/YYYY");
//           } else {
//                return item[head.name];
//           }
//      };

//      return (
//           <div>
//                <div className="p-3 rounded border m-5">
//                     <div className="d-flex w-100">
//                          <div className="w-50">
//                               {inputFild1.map((item1) => (
//                                    <div key={item1.name}>
//                                         <Input
//                                              field={item1}
//                                              onChange={handleChange}
//                                              value={data[item1.name]}
//                                              options={selectOption(item1)}
//                                         />
//                                    </div>
//                               ))}
//                          </div>
//                          <div className="w-50">
//                               {inputFild2.map((item2) => (
//                                    <div key={item2.name}>
//                                         <Input
//                                              field={item2}
//                                              onChange={handleChange}
//                                              value={data[item2.name]}
//                                              options={selectOption(item2)}
//                                         />
//                                    </div>
//                               ))}
//                          </div>
//                     </div>
//                     <div className="text-center m-5">
//                          <Button
//                               className="w-25 rounded"
//                               onClick={handleSubmit}
//                               label="Submit"
//                          />
//                     </div>
//                </div>
//                <div className="m-5">
//                     <Table striped bordered hover>
//                          <thead>
//                               <tr>
//                                    {[...inputFild1, ...inputFild2].map(
//                                         (item) => (
//                                              <th key={item.name}>
//                                                   {item.title}
//                                              </th>
//                                         )
//                                    )}
//                               </tr>
//                          </thead>
//                          <tbody>
//                               {value.map((item, index) => (
//                                    <tr key={index}>
//                                         {[...inputFild1, ...inputFild2].map(
//                                              (head) => (
//                                                   <td key={head.name}>
//                                                        {showData(item, head)}
//                                                   </td>
//                                              )
//                                         )}
//                                    </tr>
//                               ))}
//                          </tbody>
//                     </Table>
//                </div>
//           </div>
//      );
// };

// export default Form;

