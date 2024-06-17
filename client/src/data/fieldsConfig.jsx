const fields = [
  {
    label: "Name",
    placeholder: "Let us know what to call you",
    fields: [
      { label: "First Name", type: "text", id: "firstName" },
      { label: "Last Name", type: "text", id: "lastName" },
    ],
  },
  {
    label: "Display name",
    placeholder: "Choose a display name",
    fields: [{ label: "Display name", type: "text", id: "displayName" }],
  },
  {
    label: "Email address",
    placeholder: "avash115@gmail.com",
    fields: [{ label: "Email address", type: "text", id: "emailAddress" }],
  },
  {
    label: "Phone number",
    placeholder: "Add your phone number",
    fields: [{ label: "Phone number", type: "text", id: "phoneNumber" }],
  },
  {
    label: "Date of Birth",
    placeholder: "Enter your date of birth",
    fields: [
      { label: "Day", type: "text", id: "dobDay" },
      { label: "Month", type: "text", id: "dobMonth" },
      { label: "Year", type: "text", id: "dobYear" },
    ],
  },
  {
    label: "Nationality",
    placeholder: "Enter your nationality",
    fields: [{ label: "Nationality", type: "text", id: "nationality" }],
  },
  {
    label: "Gender",
    placeholder: "Select your gender",
    fields: [{ label: "Gender", type: "text", id: "gender" }],
  },
];

export default fields;
