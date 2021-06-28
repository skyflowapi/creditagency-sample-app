import React from "react";
import getAccessToken from "../../services/authentication";
import { insertRecord } from "../../services/records";
import { useHistory } from "react-router-dom";

export const default_state = {
  firstName: "",
  lastName: "",
  dob: "",
  ssn: "",
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
  const [disabled, setDisabled] = React.useState(true);
  const [form, setForm] = React.useState(default_state);
  const [formErrors, setFormErrors] = React.useState(default_errors);
  const [recordId, setRecordId] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    setDisabled(!isFormValid(form));
  }, [form]);

  React.useEffect(() => {
    if (recordId) {
      history.push("/confirmation");
    }
  }, [recordId]);

  const handleFormChange = (event) => {
    const value = (event.currentTarget.value
      ? event.currentTarget.value
      : ""
    ).trimLeft();
    event.target.id &&
      setForm({
        ...form,
        [event.target.id]: trim ? value.trim() : value,
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

  const handleSubmit = () => {
    console.log(form);
    const data = {
      records: [
        {
          fields: {
            name: {
              first_name: form.firstName,
              last_name: form.lastName,
            },
            ssn: form.ssn,
            date_of_birth: form.dob,
            addresses: [
              {
                line_1: form.address,
                city: form.city,
                state: form.state,
                country: form.country,
                zip_code: form.zip,
              },
            ],
            phone_numbers: [
              {
                type: "TEMP",
                value: form.phone,
              },
            ],
            annual_income: parseInt(form.annualIncome),
            mortagage: parseInt(form.rentPayment),
            application_status: "Auto Approved",
            employment_status: "Employed",
            credit_score: 500,
            risk_score: "LOW",
            ...(form.annualIncome > 100000
              ? { AML: true, KYC: true, credits: true }
              : {}),
          },
        },
      ],
    };

    console.log(data);

    getAccessToken("user")
      .then((token) => {
        insertRecord("persons", data, token, (res) => {
          setRecordId(res.records[0].skyflow_id);
        });
      })
      .catch((err) => console.log(err));
  };

  return {
    disabled,
    form,
    formErrors,
    setForm,
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
};

// ssn - ^$|^([0-9]{3}-?[0-9]{2}-?[0-9]{4})$

// dob - ^$|((0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))(-([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)))

// phone - ^$|^[+]?[0-9]{0,3}\s*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$
