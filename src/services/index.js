import React, { useContext } from "react";

const SkyflowContext = React.createContext();

export const useSkyflow = () => useContext(SkyflowContext);

export default SkyflowContext;
