import React from "react";
import SkyflowContext from ".";
import properties from "../utils/properties";

const Skyflow = (props) => {
  const [skyflow] = React.useState(
    new window.Skyflow({
      // username: properties.username,
      // password: properties.password,
      orgId: properties.orgId,
      // orgAppId: "c0e915a9904011ea95ba2e321592fd49",
      // orgAppSecret: "MpdB0NTs8KT3oBG7rhSTwB5kJ1c=",
      vaultId: properties.vaultId,
      // notebookId: properties.notebookId,
      appId: properties.appId,
      workflowURL: properties.workflowURL,
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
