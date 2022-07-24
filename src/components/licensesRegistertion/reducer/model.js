export const intialData = {
  submitForm: { isConfirmation: false, isSubmit: false },
  formFields: {
    fullname: {
      label: "Full Name",
      id: "fullname",
      placeholder: "Full Name",
      type: "text",
      value: "",
      options: {
        required: true,
      },
    },
    nric: {
      label: "NRIC",
      id: "nric",
      value: "",

      placeholder: "NRIC",
      type: "text",
      options: {
        required: true,
      },
    },
    dateOfBirth: {
      label: "Date of Birth",
      id: "dateOfBirth",
      value: "",
      placeholder: "DD/MM/YYYY",
      type: "date",
      options: {
        required: true,
      },
    },
    contactNumber: {
      label: "Contact Number",
      id: "contactNumber",
      value: "",
      placeholder: "Contact Number",
      type: "text",
      options: {
        required: true,
      },
    },
    dateOfActivity: {
      label: "Date Of Activity",
      id: "dateOfActivity",
      placeholder: "DD/MM/YYYY",
      value: "",
      type: "date",
      options: {
        required: true,
      },
    },
  },
  isSubmitInprogress: false,
};
