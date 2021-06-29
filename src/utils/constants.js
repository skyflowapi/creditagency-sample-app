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
  label: "",
  labelStyles: {},
  disabled: "",
};

export const YOUR_INFO = {
  FIRST_NAME: {
    title: "First Name",
    options: {
      name: "name.first_name",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "Roana",
    },
    elementType: "firstName",
  },
  LAST_NAME: {
    title: "Last Name",
    options: {
      name: "name.last_name",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "Rigglesford",
    },
    elementType: "lastName",
  },
  // EMAIL: {
  //   title: "Email",
  //   options: {
  //     name: "email_address",
  //     validation: ["required", "default"],
  //     placeholder: "your@email.com",
  //     ...ELEMENT_STYLES,
  //     value: "rrigglesford0@qq.com",
  //   },
  //   elementType: "email",
  //   hide: true,
  // },
  DOB: {
    title: "Date Of Birth",
    options: {
      name: "date_of_birth",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "1990-10-09",
    },
    elementType: "dob",
  },
  SSN: {
    title: "SSN",
    options: {
      name: "ssn",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "1990-10-09",
    },
    elementType: "dob",
  },
};

export const CONTACT_INFO = {
  ADDRESS: {
    title: "Address",
    options: {
      name: "addresses.0.line_1",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "561 Birchwood Alley	",
    },
    elementType: "address",
  },
  CITY: {
    title: "City",
    options: {
      name: "addresses.0.city",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "Oklahoma City",
    },
    elementType: "city",
  },
  STATE: {
    title: "State",
    options: {
      name: "addresses.0.state",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "Oklahoma",
    },
    elementType: "state",
  },
  COUNTRY: {
    title: "Country",
    options: {
      name: "addresses.0.country",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "Oklahoma",
    },
    elementType: "state",
  },
  // STREET: {
  //   title: "Street",
  //   options: {
  //     name: "address_street",
  //     validation: ["required", "default"],
  //     ...ELEMENT_STYLES,
  //     value: "Mosinee Parkway",
  //   },
  //   elementType: "street",
  // },
  ZIP_CODE: {
    title: "Zip Code",
    options: {
      name: "addresses.0.zip_code",
      validation: ["required", "default"],
      ...ELEMENT_STYLES,
      value: "73139",
    },
    elementType: "zipCode",
  },

  PHONE_NUMBER: {
    title: "Phone Number",
    options: {
      parentPath: "phone_numbers",
      name: "phone_numbers.0.value",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
    },
    elementType: "reveal",
    hide: true,
  },
};

export const FINANCIAL_INFO = {
  MORTGAGE: {
    title: "Monthly Mortgage/ Rent Payment",
    options: {
      name: "mortagage",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
    },
    elementType: "mobileNumber",
    hide: true,
  },
  ANNUAL_INCOME: {
    title: "Annual Income",
    options: {
      name: "annual_income",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
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
      value: "Masters",
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
      value: "Arizona",
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
      value: "Arizona State university",
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
      value: "Artificial Intelligence",
    },
    elementType: "dropdown",
  },
};

export const DOCUMENT_INFO = {
  AML: {
    title: "AML",
    options: {
      name: "aml",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
    },
    elementType: "checkbox",
    hide: true,
  },
  KYC: {
    title: "KYC",
    options: {
      name: "kyc",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
    },
    elementType: "checkbox",
    hide: true,
  },
  CREDITS: {
    title: "Credits",
    options: {
      name: "credits",
      placeholder: "+1 (XXX) XXX-XX-XX",
      mask: ["+1 (XXX) XXX-XX-XX", { X: "[0-9]" }],
      validation: ["required"],
      ...ELEMENT_STYLES,
      sensitive: true,
      value: "4056068899",
    },
    elementType: "checkbox",
    hide: true,
  },
};

// export const FINANCIAL_INFO = {
//   EDUCATION_LIVING_EXPENSES: {
//     title: "Education and Living Expenses",
//     options: {
//       ...ELEMENT_STYLES,
//       name: "education_living_expenses",
//       validation: ["required", "default"],
//       // placeholder: "Education and Living Expenses",
//       sensitive: true,
//       value: "52752312",
//     },
//     elementType: "income",
//     hide: true,
//   },
//   SOURCE_FUNDS: {
//     title: "Source Of Funds",
//     elementType: "dropdown",
//     options: {
//       ...ELEMENT_STYLES,
//       name: "source_of_funds",
//       validation: ["required", "default"],
//       // placeholder: "Source Of Funds",
//       options: [
//         { text: "None", value: "None" },
//         { text: "Personal Funds", value: "Personal Funds" },
//         { text: "Loan", value: "Loan" },
//         { text: "Scholarships", value: "Scholarships" },
//       ],
//       value: "Personal Funds",
//     },
//   },
//   AVAILABLE_ASSETS: {
//     title: "Available Assets",
//     options: {
//       ...ELEMENT_STYLES,
//       // placeholder: "Available Assets",
//       name: "available_assets",
//       validation: ["required", "default"],
//       value: "26",
//     },
//     elementType: "income",
//     hide: true,
//   },
//   SSN: {
//     title: "SSN",
//     options: {
//       ...ELEMENT_STYLES,
//       name: "social_security_number",
//       placeholder: "XXX-XX-XXXX",
//       mask: ["XXX-XX-XXXX", { X: "[0-9]" }],
//       validation: ["required"],
//       sensitive: true,
//       value: "529573023",
//     },
//     elementType: "ssn",
//     hide: true,
//   },
// };

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

export const REVEAL_ELEMENT_OPTIONS = {
  styles: {
    "font-family":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    "font-size": "14px",
  },
};

export const VAULT_PARAMS = {
  ORG_NAME: "sb",
  ACCOUNT_NAME: "area51",
  VAULT_ID: "t6e64fcafe67436fb942ad5b8b445307",
};

export const RECORD = {
  record: {
    fields: {
      addresses: [
        {
          full_name: "Rubetta Mortlock",
          use: "TEMPORARY",
          line_1: "5250 Eliot Point",
          line_2: "02 Dennis Trail",
          city: "Seixo de Manhoses",
          district: "Pavliš",
          country: "CAYMAN_ISLANDS",
          zip_code: "38005",
          address_type: "BOTH",
        },
        {
          full_name: "Hollis Varker",
          use: "OLD_INCORRECT",
          line_1: "173 Green Ridge Trail",
          line_2: "6209 Prairieview Center",
          city: "Lembang",
          district: "Lukou",
          country: "GUAM",
          zip_code: "26651",
          address_type: "POSTAL",
        },
      ],
      phone_numbers: [
        {
          value: "46(544)403-1641",
          type: "OLD",
        },
        {
          value: "62(146)591-4867",
          type: "TEMP",
        },
      ],
      emails: [
        {
          value: "jridout0@joomla.org",
          type: "OLD",
        },
        {
          value: "jtilt1@about.com",
          type: "OFFICIAL",
        },
      ],
      name: {
        prefix: "Honorable",
        first_name: "Raj",
        middle_name: "Aimee",
        last_name: "Pechacek",
        use: "NICKNAME",
        suffix: "III",
      },
      date_of_birth: "1963-05-08",
      gender: "OTHER",
      race: "CREE",
      ethnicity: "OTHER_ETHNICITY",
      religion: "EPISCOPALIAN",
      preferred_language: "CAMBODIAN_LANGUAGE",
      nationality: "GUINEAN",
      marital_status: "DOMESTIC_PARTNER",
    },
  },
};

export const RECORDS = {
  records: [
    {
      fields: {
        addresses: [
          {
            full_name: "Rubetta Mortlock",
            use: "TEMPORARY",
            line_1: "5250 Eliot Point",
            line_2: "02 Dennis Trail",
            city: "Seixo de Manhoses",
            district: "Pavliš",
            country: "CAYMAN_ISLANDS",
            zip_code: "38005",
            address_type: "BOTH",
          },
          {
            full_name: "Hollis Varker",
            use: "OLD_INCORRECT",
            line_1: "173 Green Ridge Trail",
            line_2: "6209 Prairieview Center",
            city: "Lembang",
            district: "Lukou",
            country: "GUAM",
            zip_code: "26651",
            address_type: "POSTAL",
          },
        ],
        phone_numbers: [
          {
            value: "46(544)403-1641",
            type: "OLD",
          },
          {
            value: "62(146)591-4867",
            type: "TEMP",
          },
        ],
        emails: [
          {
            value: "jridout0@joomla.org",
            type: "OLD",
          },
          {
            value: "jtilt1@about.com",
            type: "OFFICIAL",
          },
        ],
        name: {
          prefix: "Honorable",
          first_name: "Test name",
          middle_name: "Aimee",
          last_name: "Pechacek",
          use: "NICKNAME",
          suffix: "III",
        },
        date_of_birth: "1963-05-08",
        gender: "OTHER",
        race: "CREE",
        ethnicity: "OTHER_ETHNICITY",
        religion: "EPISCOPALIAN",
        preferred_language: "CAMBODIAN_LANGUAGE",
        nationality: "GUINEAN",
        marital_status: "DOMESTIC_PARTNER",
      },
    },
  ],
};

// export const ANALYST_PLAIN_TEXT_FIELDS = [
//   "skyflow_id",
//   "date_of_birth",
//   "name",
//   "age",
//   "Employment_Status",
//   "Risk_Score",
//   "credit_score",
//   "Application_Status",
//   "addresses",
//   "phone_numbers",
//   "AML_CHECK",
//   "KYC_CHECK"
// ];

export const ANALYST_PLAIN_TEXT_FIELDS = [
  "skyflow_id",
  "date_of_birth",
  "name",
  "employment_status",
  "risk_score",
  "credit_score",
  "application_status",
  "addresses",
  // "phone_numbers",
  "aml",
  "kyc",
  "credits",
  "credit_score",
  "risk_score",
  // "mortagage",
  // "annual_income",
  "gender",
  "age"
];

export const ANALYST_REDACTED_TEXT_FIELDS = [
  "phone_numbers",
  // "mortagage",
  // "annual_income",
];
