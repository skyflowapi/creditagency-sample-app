import React from "react";

export default function useDebounce(useEffectDeps, onDebounce, delay = 1000) {
  React.useEffect(() => {
    const handler = setTimeout(() => {
      onDebounce();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, useEffectDeps);

  return {};
}
