import React, { useState } from "react";
import Input from "./Input";
import { Button } from "primereact/button";
import { Table } from "react-bootstrap";

const formFild = [
     {
          name: "खतरनाक",
          title: "खतरनाक",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "पहलेकभीजमानत",
          title: "पहले कभी जमानत का उलंघन किया",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "यदिहाँविवरण",
          title: "यदि हाँ, विशिष्ट विवरण प्रदान करें",
          type: "textarea",
     },
     {
          name: "आमतौरपरसशस्तर",
          title: "आम तौर पर सशस्त्र",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "साथियोंकेसाथकार्यवाहीकरताहै",
          title: "साथियों के साथ कार्यवाही करता है",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "ज्ञातअपराधी",
          title: "ज्ञात / सूचीबद्ध अपराधी",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "यदिहाँविशिष्टविवरण",
          title: "यदि हाँ, विशिष्ट विवरण प्रदान करें",
          type: "textarea",
     },
     {
          name: "ज्ञागिरफ्तारीकीअनुमतिठलीगईतअपराधी",
          title: "क्या आपको गिरफ्तारी की अनुमति वरिष्ठ अधिकारी से ली गई है (यदि लागू हो तो धारा 35 बीएनएसएस के तहत डिप्टी एसपी के पद से नीचे नहीं)",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "जानकारीसत्यापित",
          title: "उपरोक्त जानकारी सत्यापित है",
          type: "check",
     },
];

const formFild1 = [
     {
          name: "मुजरिम",
          title: "मुजरिम",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "जमानतसेफरार",
          title: "जमानत से फरार होने की संभावना",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "गवाहोंकोधमकानेकीसंभावना",
          title: "अपराध करने की या पीड़ितों / गवाहों को धमकाने की संभावना(यदि जमानत पर रिहा)",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "तस्वीरलेली",
          title: "तस्वीर ले ली",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "अन्यप्रकरणमेंतलाश",
          title: "किसी अन्य प्रकरण में तलाश",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
     {
          name: "विशिष्टविवरणप्रदानकरें",
          title: "यदि हाँ, विशिष्ट विवरण प्रदान करें",
          type: "textarea",
     },
     {
          name: "घोषितअपराधी",
          title: "घोषित अपराधी",
          type: "radio",
          radio: [
               { lable: "हाँ", value: "हाँ" },
               { lable: "नहीं", value: "नहीं" },
          ],
     },
];
const startValue = {
     खतरनाक: "",
     पहलेकभीजमानत: "",
     यदिहाँविवरण: "",
     आमतौरपरसशस्तर: "",
     साथियोंकेसाथकार्यवाहीकरताहै: "",
     ज्ञातअपराधी: "",
     यदिहाँविशिष्टविवरण: "",
     गिरफ्तारीकीअनुमतिठलीगई: "",
     मुजरिम: "",
     जमानतसेफरार: "",
     गवाहोंकोधमकानेकीसंभावना: "",
     तस्वीरलेली: "",
     अन्यप्रकरणमेंतलाश: "",
     विशिष्टविवरणप्रदानकरें: "",
     घोषितअपराधी: "",
     जानकारीसत्यापित: "",
};

const Form = () => {
     const [data, setData] = useState(startValue);
     const [value, setValue] = useState([]);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({ ...pre, [name]: value }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setValue((prev) => [...prev, data]);
          setData(startValue);
     };

     return (
          <>
               <h3 className="text-primary m-4 h2 text-center">
                    गिरफ्तार व्यक्ति का विवरण
               </h3>
               <div className="border rounded border-secondary m-5 p-5">
                    <div className="d-flex m-2 p-5">
                         <div className="w-50 m-2">
                              {formFild.map((item) => {
                                   return (
                                        <div>
                                             <Input
                                                  fild={item}
                                                  onFunction={handleChange}
                                                  fildValue={data}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                         <div className="w-50 m-2">
                              {formFild1.map((item) => {
                                   return (
                                        <div>
                                             <Input
                                                  fild={item}
                                                  onFunction={handleChange}
                                                  fildValue={data}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
                    <Button
                         className="float-end rounded p-2"
                         onClick={handleSubmit}
                         label="Submit"
                    />
               </div>

               <div className="m-3 border rounded text-center">
                    <Table striped bordered hover>
                         <thead>
                              <tr class="table-secondary">
                                   {[...formFild, ...formFild1].map((item) => (
                                        <th>{item.title}</th>
                                   ))}
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item) => (
                                   <tr class="table-primary">
                                        {[...formFild, ...formFild1].map(
                                             (head) => (
                                                  <td>{item?.[head.name]}</td>
                                             )
                                        )}
                                   </tr>
                              ))}
                         </tbody>
                    </Table>
               </div>
          </>
     );
};

export default Form;
