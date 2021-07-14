import React from "react";
import getAccessToken from "../../services/authentication";
import { insertRecord } from "../../services/records";
import { useHistory } from "react-router-dom";
import { getAge } from "../../utils/helper";
import { useSnackbar } from "notistack";
import { useSkyflow } from "../../services";
import { useMultipleSkyflowElements } from "../../services/skyflowHooks";
import Information from "../information";
import {
  CONTACT_INFO,
  FINANCIAL_INFO,
  INTERNAL_FORM_LABEL_STYLES,
  YOUR_INFO,
} from "../../utils/constants";

export const default_state = {
  firstName: "",
  lastName: "",
  dob: "",
  ssn: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  phone: "",
  rentPayment: "",
  annualIncome: "",
  checkBox: false,
};

export const default_errors = {
  firstName: "",
  lastName: "",
  dob: "",
  ssn: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  phone: "",
  rentPayment: "",
  annualIncome: "",
  checkBox: true,
};

export const useCustomerForm = (default_state, trim = true) => {
  const { elements } = useSkyflow();

  const [disabled, setDisabled] = React.useState(true);
  const [form, setForm] = React.useState(default_state);
  const [formErrors, setFormErrors] = React.useState(default_errors);
  const [recordId, setRecordId] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    setDisabled(!isFormValid(form));
  }, [form]);

  React.useEffect(() => {
    if (recordId) {
      setLoading(false);
      if (form.annualIncome >= 100000) {
        history.push("/confirmation", { status: form.application_status });
      } else {
        history.push("/pending", { status: form.application_status });
      }
    }
  }, [recordId]);

  const handleFormChange = (event) => {
    let value = (event.currentTarget.value
      ? event.currentTarget.value
      : ""
    ).trimLeft();

    if (event.target.id && event.target.id === "ssn") {
      if (form.ssn.slice(0, form.ssn.length - 1) !== event.target.value) {
        const chars = value
          .split("-")
          .join("")
          .split("");

        if (chars.length > 2) {
          chars.splice(3, 0, "-");
        }
        if (chars.length > 5) {
          chars.splice(6, 0, "-");
        }

        value = chars.join("").slice(0, 11);
      }
    }

    event.target.id &&
      setForm({
        ...form,
        [event.target.id]:
          event.target.id === "address" ||
          event.target.id === "state" ||
          event.target.id === "city" ||
          event.target.id === "country"
            ? value
            : trim
            ? value.trim()
            : value,
      });
    setFormErrors({
      ...formErrors,
      [event.target.id]: "",
    });
  };

  const handleFormBlur = (event) => {
    setFormErrors({
      ...formErrors,
      [event.target.id]: fieldValidationError(
        event.target.value,
        regexObj[event.target.id]
      ),
    });
  };

  const handleSelectBlur = (event, id) => {
    setFormErrors({
      ...formErrors,
      [id]: fieldValidationError(event.target.value, regexObj[id]),
    });
  };

  const handleSelectChange = (event, id) => {
    id &&
      setForm({
        ...form,
        [id]: event.target.value,
      });
    setFormErrors({
      ...formErrors,
      [id]: "",
    });
  };

  const handleCheckBox = (event) => {
    setForm({
      ...form,
      checkBox: event.target.checked,
    });
  };

  const isFormValid = (formState) => {
    let flag = true;
    for (const field of Object.keys(formState)) {
      if (fieldValidationError(formState[field], regexObj[field])) {
        flag = false;
      } else {
        // setFormErrors({
        //   ...formErrors,
        //   [field]: "",
        // });
      }
    }
    return flag;
  };

  // const handleSubmit = () => {
  //   const data = {
  //     records: [
  //       {
  //         fields: {
  //           first_name: form.firstName,
  //           last_name: form.lastName,
  //           ssn: form.ssn,
  //           date_of_birth: form.dob,
  //           age: getAge(form.dob),
  //           gender: form.gender,
  //           address: form.address,
  //           city: form.city,
  //           state: form.state,
  //           country: form.country,
  //           zipCode: form.zip,
  //           phone_number: form.phone,
  //           annual_income: parseInt(form.annualIncome),
  //           mortgage: parseInt(form.rentPayment),
  //           employment_status: "Employed",
  //           credit_score: 500,
  //           risk_score: "LOW",
  //           ...(form.annualIncome >= 100000
  //             ? {
  //                 aml: true,
  //                 kyc: true,
  //                 credits: true,
  //                 application_status: "Auto Approved",
  //               }
  //             : {
  //                 aml: false,
  //                 kyc: false,
  //                 credits: false,
  //                 application_status: "Pending",
  //               }),
  //         },
  //       },
  //     ],
  //   };
  //   setLoading(true);
  //   getAccessToken("user")
  //     .then((token) => {
  //       insertRecord(
  //         "persons",
  //         data,
  //         token,
  //         (res) => {
  //           setRecordId(res.records[0].skyflow_id);
  //         },
  //         (err) => {
  //           console.log(err);
  //           enqueueSnackbar("Sorry, something went wrong", {
  //             variant: "error",
  //           });
  //           setLoading(false);
  //         }
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // };

  return {
    disabled,
    form,
    formErrors,
    setForm,
    loading,
    isFormValid,
    handleFormChange,
    handleFormBlur,
    handleCheckBox,
    handleSubmit,
    handleSelectChange,
    handleSelectBlur,
  };
};

const fieldValidationError = (value, regex) => {
  if (value) {
    if (!regex || regex.test(value)) {
      return "";
    } else {
      return "Invalid field";
    }
  }
  return "Field is required";
};

const regexObj = {
  ssn: new RegExp("^([0-9]{3}-?[0-9]{2}-?[0-9]{4})$"),
  dob: new RegExp(
    "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])))$"
  ),
  phone: new RegExp("^[+]?[0-9]{0,3}s*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"),
  checkBox: new RegExp("^(true)$"),
  rentPayment: new RegExp("[0-9]+"),
  annualIncome: new RegExp("[0-9]+"),
  zip: new RegExp("[0-9]+"),
};

export const useForm = () => {
  const { elements } = useSkyflow();
  
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    element,
    elementRef: personalInfoRef,
    state: personalInfoState,
  } = useMultipleSkyflowElements({
    name: "name-group",
    rows: [
      {
        spacing: "16px",
        elements: [
          {
            elementType: YOUR_INFO.FIRST_NAME.elementType,
            ...YOUR_INFO.FIRST_NAME.options,
            label: "FIRST NAME",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: YOUR_INFO.LAST_NAME.elementType,
            ...YOUR_INFO.LAST_NAME.options,
            label: "LAST NAME",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
      {
        spacing: "16px",
        elements: [
          {
            elementType: YOUR_INFO.DOB.elementType,
            ...YOUR_INFO.DOB.options,
            label: "DOB",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: YOUR_INFO.SSN.elementType,
            ...YOUR_INFO.SSN.options,
            label: "SSN",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
      {
        spacing: "16px",
        elements: [
          {
            elementType: YOUR_INFO.GENDER.elementType,
            ...YOUR_INFO.GENDER.options,
            styles: {
              ...YOUR_INFO.GENDER.options.styles,
              base: {
                ...YOUR_INFO.GENDER.options.styles.base,
                width: "330px",
              },
            },
            label: "GENDER",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
    ],
  });

  const {
    elementRef: contactInfoRef,
    state: contactInfoState,
  } = useMultipleSkyflowElements({
    name: "contact-group",
    rows: [
      {
        spacing: "16px",
        elements: [
          {
            elementType: CONTACT_INFO.ADDRESS.elementType,
            ...CONTACT_INFO.ADDRESS.options,
            label: "ADDRESS",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: CONTACT_INFO.CITY.elementType,
            ...CONTACT_INFO.CITY.options,
            label: "CITY",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
      {
        spacing: "16px",
        elements: [
          {
            elementType: CONTACT_INFO.STATE.elementType,
            ...CONTACT_INFO.STATE.options,
            label: "STATE",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: CONTACT_INFO.COUNTRY.elementType,
            ...CONTACT_INFO.COUNTRY.options,
            label: "COUNTRY",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
      {
        spacing: "16px",
        elements: [
          {
            elementType: CONTACT_INFO.ZIP_CODE.elementType,
            ...CONTACT_INFO.ZIP_CODE.options,
            label: "ZIP",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: CONTACT_INFO.PHONE_NUMBER.elementType,
            ...CONTACT_INFO.PHONE_NUMBER.options,
            label: "PHONE",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
    ],
  });

  const {
    elementRef: incomeRef,
    state: incomeState,
  } = useMultipleSkyflowElements({
    name: "income-group",
    rows: [
      {
        spacing: "16px",
        elements: [
          {
            elementType: FINANCIAL_INFO.MORTGAGE.elementType,
            ...FINANCIAL_INFO.MORTGAGE.options,
            label: "MONTHLY MORTGAGE/RENT PAYMENT",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: FINANCIAL_INFO.ANNUAL_INCOME.elementType,
            ...FINANCIAL_INFO.ANNUAL_INCOME.options,
            label: "ANNUAL INCOME",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
    ],
  });

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    setLoading(true);
    elements
      .tokenize()
      .then((data) => {
        setRecordId(data.records[0].skyflow_id);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(personalInfoState)
  console.log(personalInfoRef)
  return {
    personalInfoRef,
    personalInfoState,
    contactInfoRef,
    contactInfoState,
    incomeRef,
    incomeState,
    checked,
    loading,
    handleCheckBox,
    handleSubmit,
  };
};
