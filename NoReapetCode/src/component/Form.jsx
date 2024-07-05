import React, { useState } from "react";
import { Button } from "primereact/button";
import InputFild from "./InputFild";
import moment from "moment";
import { classNames } from "primereact/utils";

const states = [
     { name: "अंदमान और निकोबार", code: "अंदमान और निकोबार" },
     { name: "अरुणाचल प्रदेश", code: "अरुणाचल प्रदेश" },
     { name: "उत्तर प्रदेश", code: "उत्तर प्रदेश" },
     { name: "उत्तराखंड", code: "उत्तराखंड" },
];

const district = [
     { name: "jhunjhunu" },
     { name: "sikar" },
     { name: "jaipur" },
     { name: "alwar" },
];

const policeStation = [
     { name: "sikar" },
     { name: "kota" },
     { name: "jaipur" },
     { name: "jhunjhunu" },
];

const preValue = {
     startDate: "",
     endDate: "",
     psDate: "",
     // -------------------
     homeNo: "",
     roadName: "",
     coloniName: "",
     villName: "",
     tehsilName: "",
     pinCode: "",
     // -------------------

     pPngikarnDeri: "",
     vPangikarnDeri: "",
     // -------------------

     stare: "",
     district: "",
     ps: "",
};


const inputFild1 = [
     {
          placeholder: "DD/MM/YYYY HH:MM",
          type: "date",
          title: "घटना सूचना",
          id: "id1",
          name: "startDate",
     },
     {
          placeholder: "DD/MM/YYYY HH:MM",
          type: "date",
          title: "से दिनांक / समय",
          id: "id2",
          name: "endDate",
     },
     {
          placeholder: "DD/MM/YYYY HH:MM",
          type: "date",
          title: "तक दिनांक / समय*",
          id: "id3",
          name: "psDate",
     },
];

// *****************************************************************************************
const inputFild2 = [
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "घटना – स्थल",
          id: "id4",
          name: "homeNo",
     },
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "सड़क का नाम",
          id: "id5",
          name: "roadName",
     },
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "कॉलोनी / इलाक़ा /क्षेत्र",
          id: "id6",
          name: "coloniName",
     },
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "ग्राम / नगर / शहर *",
          id: "id7",
          name: "villName",
     },
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "तहसील / ब्लॉक / मंडल",
          id: "id8",
          name: "tehsilName",
     },
     {
          placeholder: "English Characters Only",
          type: "text",
          title: "पिन कोड",
          id: "id9",
          name: "pinCode",
     },
];

// *****************************************************************************************
const inputFild3 = [
     {
          placeholder: "English Characters Only",
          type: "textarea",
          title: "पुलिस द्वारा पंजीकरण में",
          id: "id10",
          name: "pPngikarnDeri",
     },
     {
          placeholder: "English Characters Only",
          type: "textarea",
          title: "शिकायतकर्ता द्वारा रिपोर्टिंग में",
          id: "id11",
          name: "vPangikarnDeri",
     },
];
// *****************************************************************************************
const inputFild4 = [
     {
          placeholder: "---चयन---",
          type: "dropdown",
          title: "राज्य",
          id: "id12",
          name: "stare",
     },
     {
          placeholder: "---चयन---",
          type: "dropdown",
          title: "जिला",
          id: "id13",
          name: "district",
     },
     {
          placeholder: "---चयन---",
          type: "dropdown",
          title: "पुलिस स्टेशन",
          id: "id4",
          name: "ps",
     },
];
const Form = () => {
     const [data, setData] = useState(preValue);
     const [value, setValue] = useState([]);

     const handelChange = (e) => {
          const { name, value } = e.target;
          setData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handelSubmit = (e) => {
          e.preventDefault();
          setValue((prev) => [...prev, data]);
          setData(preValue);
     };

     const getOptions = (item) => {
          if (item.name === "stare") {
               return states;
          } else if (item.name === "district") {
               return district;
          } else if (item.name === "ps") {
               return policeStation;
          }
     };
     console.log(value);

     return (
          <>
               {/* -----------------------main contaner---------------------------- */}

               <div className="border w-75 mx-auto mt-5 p-5">
                    {/* --------------------------top contaner------------------------ */}
                    <div className="w-100 mx-auto d-flex">
                         {/* -----------------top contaner 1-------------------------------- */}
                         <div className="w-50 border m-2 p-2">
                              <h5 className="text-primary">घटना सूचना</h5>

                              {inputFild1?.map((item) => (
                                   <InputFild
                                        fild={item}
                                        funChange={handelChange}
                                        val={data}
                                        options={getOptions(item)}
                                   />
                              ))}
                         </div>
                         {/* -----------------top contaner 2-------------------------------- */}

                         <div className="w-50 border mt-2 p-2">
                              <h5 className="text-primary">घटना – स्थल</h5>

                              {inputFild2?.map((item) => (
                                   <InputFild
                                        fild={item}
                                        funChange={handelChange}
                                        val={data}
                                        options={getOptions(item)}
                                   />
                              ))}
                         </div>
                    </div>

                    {/* --------------------------bottom contaner------------------------ */}

                    <div className="w-100 mx-auto d-flex">
                         {/* -----------------bottom contaner 1-------------------------------- */}
                         <div className="w-50 border m-2 p-2">
                              <h5 className="text-primary">
                                   देरी के लिए कारण (अगर कोई)
                              </h5>

                              {inputFild3?.map((item) => (
                                   <InputFild
                                        fild={item}
                                        funChange={handelChange}
                                        val={data}
                                        options={getOptions(item)}
                                   />
                              ))}
                         </div>
                         {/* -----------------bottom contaner 2-------------------------------- */}

                         <div className="w-50 border m-2 p-2">
                              <h5 className="text-primary">बाहरी सीमा विवरण</h5>

                              {inputFild4?.map((item) => (
                                   <InputFild
                                        fild={item}
                                        funChange={handelChange}
                                        val={data}
                                        options={getOptions(item)}
                                   />
                              ))}
                         </div>
                    </div>

                    <div className="card flex justify-content-center">
                         <Button onClick={handelSubmit} label="Submit" />
                    </div>
               </div>

               {/* --------------------------------show data contaner------------------------------------------- */}
               <div>
                    <div>
                         <div className="container border my-3">
                              <div className="row">
                                   {inputFild1.map((item) => {
                                        return (
                                             <div className="col-sm">
                                                  {item.title}
                                             </div>

                                        );
                                   })}

                                   {inputFild2.map((item) => {
                                        return (
                                             <div className="col-sm">
                                                  {item.title}
                                             </div>

                                        );
                                   })}

                                   {inputFild3.map((item) => {
                                        return (
                                             <div className="col-sm">
                                                  {item.title}
                                             </div>

                                        );
                                   })}

                                   {inputFild4.map((item) => {
                                        return (
                                             <div className="col-sm">
                                                  {item.title}
                                             </div>
                                        );
                                   })}

                              </div>
                         </div>
                    </div>
                    {value.map((item) => {
                         return (
                              <div key={item.id}>
                                   <div className="container border my-3">
                                        <div className="row">
                                             <div className="col-sm">
                                                  {moment(
                                                       item.startDate
                                                  ).format("DD/MM/YYYY")}
                                             </div>
                                             <div className="col-sm">
                                                  {moment(item.endDate).format(
                                                       "DD/MM/YYYY"
                                                  )}
                                             </div>
                                             <div className="col-sm">
                                                  {moment(item.psDate).format(
                                                       "DD/MM/YYYY"
                                                  )}
                                             </div>

                                             <div className="col-sm">
                                                  {item.homeNo}
                                             </div>
                                             <div className="col-sm">
                                                  {item.roadName}
                                             </div>
                                             <div className="col-sm">
                                                  {item.coloniName}
                                             </div>
                                             <div className="col-sm">
                                                  {item.villName}
                                             </div>
                                             <div className="col-sm">
                                                  {item.tehsilName}
                                             </div>
                                             <div className="col-sm">
                                                  {item.pinCode}
                                             </div>

                                             <div className="col-sm">
                                                  {item.pPngikarnDeri}
                                             </div>
                                             <div className="col-sm">
                                                  {item.vPangikarnDeri}
                                             </div>

                                             <div className="col-sm">
                                                  {item.stare}
                                             </div>
                                             <div className="col-sm">
                                                  {item.district}
                                             </div>
                                             <div className="col-sm">
                                                  {item.ps}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </>
     );
};

export default Form;
