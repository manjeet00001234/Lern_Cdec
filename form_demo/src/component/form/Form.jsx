import React, { useState } from "react";
import "./form.css";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import FormInputFild from "./FormInputFild";



const formFild = [
     { name: "username", type: "text", placeholder: "username", title: "name" },
     {name: "password", type: "password", placeholder: "password", title: "password"},
     { name: "city", type: "dropdown", placeholder: "city", title: "city" },
     { name: "date", type: "date", placeholder: "date", title: "date" },
];

const preValue = {
     username: "",
     password: "",
     city: "",
     date: "",
};

const Form = () => {
     const [data, setData] = useState(preValue);
     const [showData, setShowdata] = useState([]);

     const handelChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({
               ...pre,
               [name]: value,
          }));
     };

     const submitData = (e) => {
          e.preventDefault();
          if (data.name == ''|| data.pass=='' || data.city=='' || data.date=='') {
               toast.error("Wow so wrong!", {
                    position: "top-center",
                    theme:"colored"
               })

               return
          }
          setShowdata((prev) => [...prev, data]);
          setData(preValue);
     };

     return (
          <>
               <ToastContainer />
               <div className="w-50 mx-auto p-5 border m-5">
                    <h2 className="text-primary">Registrantion form</h2>

                    <div className="d-flex gap-3 flex-column mt-5">
                         {formFild?.map((item) => (
                              <FormInputFild
                                   fild={item}
                                   onchangecd={handelChange}
                                   val={data}
                              />
                         ))}

                         <div className="card flex justify-content-center mt-3">
                              <Button onClick={submitData} label="Submit" />
                         </div>
                    </div>
               </div>

               <div className="show_data">
                    {showData.map((item) => {
                         return (
                              <div key={item.id} className="pr_div">
                                   <div>Name:- {item.username}</div>
                                   <div>Password:- {item.password}</div>
                                   <div>City:- {item.city?.name}</div>
                                   <div>
                                        Date:-
                                        {moment(item.date).format(
                                             "DD/MM/YYYY hh:mm A"
                                        )}
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </>
     );
};

export default Form;

{
     /* <Reuseble name={"username"} title={"UserName"}>
                              <InputText
                                   className="w-50"
                                   type="text"
                                   name="name"
                                   value={data.name}
                                   onChange={handelChange}
                                   placeholder="username"
                              />
                         </Reuseble>

                         <Reuseble name={"Password"} title={"Password"}>
                              <InputText
                                   className="w-50"
                                   type="password"
                                   name="pass"
                                   value={data.pass}
                                   onChange={handelChange}
                                   placeholder="userpassword"
                              />
                         </Reuseble>

                         <Reuseble name={"City"} title={"City"}>
                              <Dropdown
                                   className="w-50"
                                   options={cities}
                                   optionLabel="name"
                                   placeholder="Select a City"
                                   name="city"
                                   value={data.city}
                                   onChange={handelChange}
                                   //  onChange={handleDropdownChange}
                              />
                         </Reuseble>

                         <Reuseble name={"Date"} title={"Date"}>
                              <Calendar
                                   className="w-50"
                                   name="date"
                                   value={data.date}
                                   onChange={handelChange}
                                   //  onChange={handleDateChange}
                                   placeholder="Date of birthday"
                              />
                         </Reuseble> */
}

{
     /* <div className="div">
                              <label style={{ width: "200px" }} for="username">
                                   Username:
                              </label>
                              <InputText
                                   type="text"
                                   name="name"
                                   value={data.name}
                                   onChange={handelChange}
                                   placeholder="username"
                              />
                         </div>

                         <div className="div">
                              <label style={{ width: "200px" }} for="username">
                                   password:
                              </label>
                              <InputText
                                   type="password"
                                   name="pass"
                                   value={data.pass}
                                   onChange={handelChange}
                                   placeholder="userpassword"
                              />
                         </div>

                         <div className="div">
                              <label style={{ width: "200px" }} for="username">
                                   city:
                              </label>

                              <Dropdown
                                   options={cities}
                                   optionLabel="name"
                                   placeholder="Select a City"
                                   name="city"
                                   value={data.city}
                                    onChange={handelChange}
                                  //  onChange={handleDropdownChange}
                              />
                         </div>

                         <div className="div">
                              <label style={{ width: "200px" }} for="username">
                                   Date:
                              </label>
                              <Calendar
                                   name="date"
                                   value={data.date}
                                    onChange={handelChange}
                                  //  onChange={handleDateChange}

                              />
                         </div> */
}
