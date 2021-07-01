import React from "react";
import getAccessToken from "../../services/authentication";
import { insertRecord } from "../../services/records";
import { useHistory } from "react-router-dom";
import { getAge } from "../../utils/helper";
import { useSnackbar } from "notistack";

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
      if (value.length === 3 || value.length === 6) {
        value = value + "-";
      }
    }

    event.target.id &&
      setForm({
        ...form,
        [event.target.id]: event.target.id ==="address" || event.target.id ==="state" || event.target.id ==="city" || event.target.id ==="country" ? value : trim ? value.trim() : value
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
    const data = {
      records: [
        {
          fields: {
            first_name: form.firstName,
            last_name: form.lastName,
            ssn: form.ssn,
            date_of_birth: form.dob,
            age: getAge(form.dob),
            gender: form.gender,
            address: form.address,
            city: form.city,
            state: form.state,
            country: form.country,
            zipcode: form.zip,
            phone_number: form.phone,
            annual_income: parseInt(form.annualIncome),
            mortgage: parseInt(form.rentPayment),
            application_status: "Pending",
            employment_status: "Employed",
            credit_score: 500,
            risk_score: "LOW",
            ...(form.annualIncome >= 100000
              ? {
                  AML: true,
                  KYC: true,
                  credits: true,
                  application_status: "Auto Approved",
                }
              : {}),
          },
        },
      ],
    };
    setLoading(true);
    getAccessToken("user")
      .then((token) => {
        insertRecord(
          "persons",
          data,
          token,
          (res) => {
            setRecordId(res.records[0].skyflow_id);
          },
          (err) => {
            console.log(err);
            enqueueSnackbar("Sorry, something went wrong", {
              variant: "error",
            });
            setLoading(false);
          }
        );
      })
      .catch((err) => console.log(err));
  };

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
  rentPayment : new RegExp("[0-9]+"),
  annualIncome: new RegExp("[0-9]+")
};

// ssn - ^$|^([0-9]{3}-?[0-9]{2}-?[0-9]{4})$

// dob - ^$|((0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))(-([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)))

// phone - ^$|^[+]?[0-9]{0,3}\s*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$
