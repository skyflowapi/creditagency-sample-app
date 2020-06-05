import React from "react";
import SkyflowContext from ".";

const Skyflow = (props) => {
  const [skyflow] = React.useState(new window.Skyflow("", "", ""));
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
