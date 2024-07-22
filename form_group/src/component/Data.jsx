export const state = [
     { name: "Andhra Pradesh", code: "AP" },
     { name: "Bihar", code: "BR" },
     { name: "Gujarat", code: "GJ" },
     { name: "Karnataka", code: "KA" },
     { name: "Kerala", code: "KL" },
     { name: "Maharashtra", code: "MH" },
     { name: "Rajasthan", code: "RJ" },
     { name: "Tamil Nadu", code: "TN" },
     { name: "Uttar Pradesh", code: "UP" },
     { name: "West Bengal", code: "WB" },
];

export const district = [
     { name: "Jaipur", code: "JP" },
     { name: "Jodhpur", code: "JD" },
     { name: "Udaipur", code: "UD" },
     { name: "Ajmer", code: "AJ" },
     { name: "Bikaner", code: "BK" },
     { name: "Kota", code: "KT" },
     { name: "Alwar", code: "AL" },
     { name: "Bhilwara", code: "BL" },
     { name: "Bundi", code: "BN" },
     { name: "Chittorgarh", code: "CT" },
];

export const city = [
     { name: "Malviya Nagar", code: "MN" },
     { name: "Vaishali Nagar", code: "VN" },
     { name: "Mansarovar", code: "MS" },
     { name: "C-Scheme", code: "CS" },
     { name: "Raja Park", code: "RP" },
     { name: "Adarsh Nagar", code: "AN" },
     { name: "Jagatpura", code: "JP" },
     { name: "Bapu Nagar", code: "BN" },
     { name: "Amer", code: "AM" },
     { name: "Shastri Nagar", code: "SN" },
];

export const inputFild = [
     {
          name: "fname",
          type: "text",
          title: "First Name",
          Placeholder: "Enter Your FirstName",
          required: true,
     },
     {
          name: "mname",
          type: "text",
          title: "Middle Name",
          Placeholder: "Enter Your MiddleName",
     },
     {
          name: "lname",
          type: "text",
          title: "Last Name",
          Placeholder: "Enter Your LastName",
     },
     {
          name: "email",
          type: "text",
          title: "Email",
          Placeholder: "Enter Your Email",
          required: true,
     },
     {
          name: "password",
          type: "password",
          title: "Password",
          Placeholder: "Enter Your password",
          required: true,
     },
     {
          name: "state",
          type: "dropdown",
          title: "State",
          Placeholder: "Enter Your State",
          required: true,
     },
     {
          name: "district",
          type: "dropdown",
          title: "District",
          Placeholder: "Enter Your District",
          required: true,
     },
     {
          name: "city",
          type: "dropdown",
          title: "City",
          Placeholder: "Enter Your City",
          required: true,
     },
     {
          name: "date",
          type: "date",
          title: "Date",
          Placeholder: "Enter Your Date",
          required: true,
     },
     {
          name: "gender",
          type: "radio",
          title: "Gender",
          required: true,
          options: [
               { label: "Male", value: "male" },
               { label: "Female", value: "female" },
               { label: "Other", value: "other" },
          ],
     },
     {
          name: "Qualification",
          type: "check",
          title: "Qualification",
          required: true,
          options: [
               { label: "B.Teach", key: "B" },
               { label: "M.Teach", key: "M" },
               { label: "Other", key: "O" },
          ],
     },
     {
          name: "address",
          type: "textarea",
          title: "Message",
          Placeholder: "Enter Your Message",
     },
];

export const preValue = {
     fname: "",
     mname: "",
     lname: "",
     email: "",
     password: "",
     state: "",
     district: "",
     city: "",
     date: "",
     gender: "",
     address: "",
     Qualification: "",
};