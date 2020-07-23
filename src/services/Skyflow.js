import React from "react";
import SkyflowContext from ".";
import properties from "../utils/properties";

const Skyflow = (props) => {
  const [skyflow] = React.useState(
    new window.Skyflow({
      orgId: properties.orgId,
      vaultId: properties.vaultId,
      appId: properties.appId,
      production: true,
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
