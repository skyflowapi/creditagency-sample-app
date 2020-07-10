import React from "react";
import { useSkyflow } from "../../services";

export const useAnalystSummary = () => {
  const { skyflow } = useSkyflow();
  const [notebook] = React.useState(skyflow.notebook());
  const [state, setState] = React.useState({
    data: undefined,
    loading: true,
    error: undefined,
  });

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const records = JSON.parse(localStorage.getItem("records") || {});
    const keys = Object.keys(records);

    if (keys.length > 0) {
      const record = records[keys[keys.length - 1]].Skyflow_vault_response.responses;

      const fields = {};
      record.fields.forEach((field) => {
        fields[field.name] = field.ID;
      });
      record.fields = fields;
      setData(record);

      notebook
        .getRecordByToken(record.ID)
        .then((response) => {
          const fields = {};
          response.fields.forEach((field) => {
            fields[field.name] = { value: field.value, id: data.fields[field.name] };
          });
          // record.fields = fields;
          this.setState({
            ...state,
            data: fields,
            loading: false,
            error: undefined,
          });
        })
        .catch((error) => {
          this.setState({ ...state, data: undefined, loading: false, error: error });
        });
    } else {
      setState({ ...state, loading: false, data: undefined, error: true });
    }
  }, []);

  return {
    notebook,
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
