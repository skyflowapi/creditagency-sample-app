import theme from "../utils/theme";

export const localStorageKey = "records";

export const STATUS = {
  DONE: "done",
  CURRENT: "current",
  PENDING: "pending",
};

export const ELEMENT_STYLES = {
  // classes: {
  //   base: ".base", // default
  //   complete: ".complete",
  //   empty: ".empty",
  //   // focus: ".focus",
  //   invalid: ".invalid",
  // },
  styles: {
    base: {
      border: "1px solid #eae8ee",
      padding: "10px 16px",
      "border-radius": "4px",
      color: "#1d1d1d",
    },
    complete: {
      color: "#4caf50",
    },
    empty: {},
    focus: {},
    invalid: {
      color: "#f44336",
    },
  },
};

export const YOUR_INFO = {
  FIRST_NAME: {
    title: "First Name",
    options: {
      name: "first_name",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "firstName",
  },
  LAST_NAME: {
    title: "Last Name",
    options: {
      name: "last_name",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "lastName",
  },
  EMAIL: {
    title: "Email",
    options: {
      name: "email_address",
      validation: ["required", "default"],
      placeholder: "your@email.com",
      ...ELEMENT_STYLES,
    },
    elementType: "email",
    hide: true,
  },
  DOB: {
    title: "Date Of Birth",
    options: {
      name: "date_of_birth",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "dob",
  },
};

export const CONTACT_INFO = {
  ADDRESS: {
    title: "Address",
    options: {
      name: "address_line",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "address",
  },
  STREET: {
    title: "Street",
    options: {
      name: "address_street",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "street",
  },
  ZIP_CODE: {
    title: "Zip Code",
    options: {
      name: "address_zip_code",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "zipCode",
  },
  CITY: {
    title: "City",
    options: {
      name: "address_city",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "city",
  },
  STATE: {
    title: "State",
    options: {
      name: "address_state",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
    },
    elementType: "state",
  },
  PHONE_NUMBER: {
    title: "Phone Number",
    options: {
      name: "phone_number",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
    },
    elementType: "mobileNumber",
    hide: true,
  },
};

export const ACADEMIC_INFO = {
  LEVEL_OF_STUDY: {
    title: "Level Of Study",
    options: {
      name: "level_of_study",
      validation: ["required", "default"],
      options: [
        { text: "None", value: "None" },
        { text: "Masters", value: "Masters" },
        { text: "Bachelor's Degree", value: "Bachelors" },
        { text: "PHD", value: "PHD" },
      ],
      ...ELEMENT_STYLES,
    },
    elementType: "dropdown",
  },
  SCHOOL_STATE: {
    title: "School State/Territory",
    options: {
      name: "school_state",
      validation: ["required", "default"],
      options: [
        { text: "None", value: "None" },
        { text: "Washington", value: "Washington" },
        { text: "Arizona", value: "Arizona" },
        { text: "Virginia", value: "Virginia" },
      ],
      ...ELEMENT_STYLES,
    },

    elementType: "dropdown",
  },
  SCHOOL_NAME: {
    title: "School Name",
    options: {
      name: "school_name",
      validation: ["required", "default"],
      options: [
        { text: "None", value: "None" },
        {
          text: "Washington State university",
          value: "Washington State university",
        },
        {
          text: "Arizona State university",
          value: "Arizona State university",
        },
        {
          text: "Virginia State university",
          value: "Virginia State university",
        },
      ],
      ...ELEMENT_STYLES,
    },
    elementType: "dropdown",
  },
  MAJOR: {
    title: "Major",
    options: {
      name: "school_major",
      validation: ["required", "default"],
      options: [
        { text: "None", value: "None" },
        { text: "Computer Science", value: "Computer Science" },
        {
          text: "Artificial Intelligence",
          value: "Artificial Intelligence",
        },
        { text: "Machine Learning", value: "Machine Learning" },
      ],
      ...ELEMENT_STYLES,
    },
    elementType: "dropdown",
  },
};

export const FINANCIAL_INFO = {
  EDUCATION_LIVING_EXPENSES: {
    title: "Education and Living Expenses",
    options: {
      ...ELEMENT_STYLES,
      name: "education_living_expenses",
      validation: ["required", "default"],
      // placeholder: "Education and Living Expenses",
      sensitive: true,
    },
    elementType: "income",
    hide: true,
  },
  SOURCE_FUNDS: {
    title: "Source Of Funds",
    elementType: "dropdown",
    options: {
      ...ELEMENT_STYLES,
      name: "source_of_funds",
      validation: ["required", "default"],
      // placeholder: "Source Of Funds",
      options: [
        { text: "None", value: "None" },
        { text: "Personal Funds", value: "Personal Funds" },
        { text: "Loan", value: "Loan" },
        { text: "Scholarships", value: "Scholarships" },
      ],
    },
  },
  AVAILABLE_ASSETS: {
    title: "Available Assets",
    options: {
      ...ELEMENT_STYLES,
      // placeholder: "Available Assets",
      name: "available_assets",
      validation: ["required", "default"],
    },
    elementType: "income",
  },
  SSN: {
    title: "SSN",
    options: {
      ...ELEMENT_STYLES,
      name: "social_security_number",
      placeholder: "XXX-XX-XXXX",
      mask: ["XXX-XX-XXXX", { X: "[0-9]" }],
      validation: ["required"],
      sensitive: true,
    },
    elementType: "ssn",
    hide: true,
  },
};

export const OTHER_INFO = {
  AUTHORIZATION: {
    title: "Authorization",
    options: {
      name: "authorized",
      validation: ["required", "default"],
      value: "yes",
    },
    elementType: "checkbox",
  },
  CONSENT: {
    title: "Consent",
    options: {
      name: "consent",
      validation: ["required", "default"],
      value: "received",
    },
    elementType: "checkbox",
  },
};

export const INTERNAL_FORM_LABEL_STYLES = {
  styles: {
    base: {
      margin: "0 0 8px",
      color: theme.palette.pending[0],
      "font-size": "12px",
      "font-family":
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      // padding: "8px",
      "font-weight": "bold",
      "text-align": "left",
      "line-height": "17.16px",
    },
  },
};

export const REVEL_ELEMENT_OPTIONS = {
  styles: {
    "font-family":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    "font-size": "14px",
  },
};
