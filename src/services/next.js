import React from "react";
import { useNextHook } from "../App";

export const useNext = (isValid) => {
  const { next, setNext } = useNextHook();
  React.useEffect(() => {
    setNext(isValid);
  }, [isValid]);

  return next;
};
