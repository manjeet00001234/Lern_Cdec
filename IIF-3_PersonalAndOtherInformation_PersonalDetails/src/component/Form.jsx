import React, { useState } from "react";
import Input from "./Input";

const संबंधप्रकार = [
     { name: "माता-पिता", value: "parent" },
     { name: "पति/पत्नी", value: "spouse" },
     { name: "भाई/बहन", value: "sibling" },
     { name: "बच्चा", value: "child" },
];
const राष्ट्रीयता = [
     { name: "भारतीय", value: "indian" },
     { name: "अमेरिकी", value: "american" },
     { name: "ब्रिटिश", value: "british" },
     { name: "कनाडाई", value: "canadian" },
];
const पहचानकाप्रकार = [
     { name: "आधार कार्ड", value: "aadhaar" },
     { name: "पासपोर्ट", value: "passport" },
     { name: "ड्राइविंग लाइसेंस", value: "driving_license" },
     { name: "वोटर आईडी", value: "voter_id" },
];
const लिंग = [
     { name: "पुरुष", value: "male" },
     { name: "महिला", value: "female" },
     { name: "अन्य", value: "other" },
];
const वैवाहिकस्थिति = [
     { name: "अविवाहित", value: "single" },
     { name: "विवाहित", value: "married" },
     { name: "तलाकशुदा", value: "divorced" },
     { name: "विधवा/विधुर", value: "widowed" },
];
const धर्म = [
     { name: "हिन्दू", value: "hindu" },
     { name: "मुस्लिम", value: "muslim" },
     { name: "ईसाई", value: "christian" },
     { name: "सिख", value: "sikh" },
];
const श्रेणी = [
     { name: "जनरल", value: "general" },
     { name: "ओबीसी", value: "obc" },
     { name: "एससी", value: "sc" },
     { name: "एसटी", value: "st" },
];

const inputFild1 = [
     { name: "एनपीआर", title: "एनपीआर", type: "number", placeholder: "एनपीआर" },
     { name: "यूआईडी", title: "यूआईडी", type: "number", placeholder: "यूआईडी" },
     {
          name: "प्रथमनाम",
          title: "प्रथम नाम",
          type: "text",
          placeholder: "प्रथम नाम",
     },
     {
          name: "मध्यनाम",
          title: "मध्य नाम",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "अंतिमनाम",
          title: "अंतिम नाम",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "उपनाम1",
          title: "उपनाम 1",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "उपनाम2",
          title: "उपनाम 2",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "संबंधप्रकार",
          title: "संबंध प्रकार",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "संबंधीकानाम",
          title: "संबंधी का नाम",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "राष्ट्रीयता",
          title: "राष्ट्रीयता",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "पहचानकाप्रकार",
          title: "पहचान का प्रकार",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "आईडीसंख्या",
          title: "आईडी संख्या",
          type: "number",
          placeholder: "only number",
     },
];

const inputFild2 = [
     {
          name: "लिंग",
          title: "लिंग",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "मोबाईलनंबर",
          title: "मोबाईल नंबर",
          type: "number",
          placeholder: "number",
     },
     {
          name: "लैंडलाइननंबर",
          title: "लैंडलाइन नंबर",
          type: "number",
          placeholder: "number",
     },
     {
          name: "ईमेलआईडी",
          title: "ईमेल आईडी",
          type: "text",
          placeholder: "Email",
     },
     {
          name: "वैवाहिकस्थिति",
          title: "वैवाहिक स्थिति",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "धर्म",
          title: "धर्म",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
     {
          name: "श्रेणी",
          title: "श्रेणी",
          type: "dropdown",
          placeholder: "-----------चयन----------",
     },
];

const inputFild3 = [
     {
          name: "पासपोर्टसंख्या",
          title: "पासपोर्ट संख्या",
          type: "number",
          placeholder: "number",
     },
     {
          name: "पासपोर्टजारीकरनेकास्थान",
          title: "पासपोर्ट जारी करने का स्थान",
          type: "text",
          placeholder: "English Characters only",
     },
     {
          name: "पासपोर्टजारीकरनेकातिथि",
          title: "पासपोर्ट जारी करने की तिथि(दिनांक/माह/वर्ष)",
          type: "date",
          placeholder: "Date",
     },
];

const inputFild4 = [
     {
          name: "जन्मतिथि",
          title: "जन्म तिथि",
          type: "date",
          placeholder: "Date",
     },
     {
          name: "आयु",
          title: "आयु (वर्ष/महीना)",
          type: "number",
          placeholder: "number",
     },
     {
          name: "जन्मकावर्ष",
          title: "जन्म का वर्ष",
          type: "number",
          placeholder: "number",
     },
     {
          name: "आयुसीमा",
          title: "आयु सीमा(से - तक)",
          type: "number",
          placeholder: "number",
     },
];

const intValue = {
     एनपीआर: "",
     यूआईडी: "",
     प्रथमनाम: "",
     मध्यनाम: "",
     अंतिमनाम: "",
     उपनाम1: "",
     उपनाम2: "",
     संबंधप्रकार: "",
     संबंधीकानाम: "",
     राष्ट्रीयता: "",
     पहचानकाप्रकार: "",
     आईडीसंख्या: "",
     लिंग: "",
     मोबाईलनंबर: "",
     लैंडलाइननंबर: "",
     ईमेलआईडी: "",
     वैवाहिकस्थिति: "",
     धर्म: "",
     श्रेणी: "",
     जाति: "",
     //  ---------------------
     पासपोर्टसंख्या: "",
     पासपोर्टजारीकरनेकास्थान: "",
     पासपोर्टजारीकरनेकातिथि: "",
     //  ---------------------
     जन्मतिथि: "",
     आयु: "",
     जन्मकावर्ष: "",
     आयुसीमा: "",
};

const Form = () => {
     const [data, setData] = useState(intValue);
     const [value, setValue] = useState([]);

     const handelChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({ ...pre, [name]: value }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setValue((pre) => [...pre, data]);
          console.log(data);
          setData(intValue);
     };

     const optionFunc = (option) => {
          if (option.name === "संबंधप्रकार") {
               return संबंधप्रकार;
          } else if (option.name === "राष्ट्रीयता") {
               return राष्ट्रीयता;
          } else if (option.name === "पहचानकाप्रकार") {
               return पहचानकाप्रकार;
          } else if (option.name === "लिंग") {
               return लिंग;
          } else if (option.name === "वैवाहिकस्थिति") {
               return वैवाहिकस्थिति;
          } else if (option.name === "धर्म") {
               return धर्म;
          } else if (option.name === "श्रेणी") {
               return श्रेणी;
          }
     };
     return (
          <div className="p-5 m-3 border rounded">
               <div className="d-flex">
                    <div className="w-50 border"> 
                         {inputFild1.map((item) => {
                              return (
                                   <div>
                                        <Input
                                             fild={item}
                                             onchangeFun={handelChange}
                                             inputValue={data}
                                             optionValue={optionFunc(item)}
                                        />
                                   </div>
                              );
                         })}
                    </div>
                    <div className="w-50 border">
                         {inputFild2.map((item) => {
                              return (
                                   <div>
                                        <Input
                                             fild={item}
                                             onchangeFun={handelChange}
                                             inputValue={data}
                                             optionValue={optionFunc(item)}
                                        />
                                   </div>
                              );
                         })}
                    </div>
               </div>
               <button onClick={handleSubmit}>submit</button>
          </div>
     );
};

export default Form;
