import axios from "axios";
import React from "react";
import SkyflowContext from ".";
import properties from "../utils/properties";

const Skyflow = (props) => {
  const [skyflow] = React.useState(
    new window.Skyflow({
      vaultId: properties.vaultId,
      production: false,
      getAccessToken: () => {
        return axios
          .get("http://localhost:8000/js/userToken")
          .then((res) => res.data.accessToken);
      },
    })
  );
  const [elements] = React.useState(skyflow.elements({}));

  return (
    <SkyflowContext.Provider
      value={{
        skyflow,
        elements,
      }}
    >
      {props.children}
    </SkyflowContext.Provider>
  );
};

export default Skyflow;
