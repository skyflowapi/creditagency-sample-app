import React from "react";
import { useSkyflow } from ".";

export const useSkyflowElement = (elementType, options) => {
  const { elements } = useSkyflow();
  const [element, setElement] = React.useState(
    elements.getElement(elementType, options.name, options.value)
  );
  const elementRef = React.useRef(null);

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    if (element) {
      element.mount(elementRef.current);
      element.resetEvents();
      element.on("Change", (data) => {
        setState({ ...state, ...data });
      });
      element.update({
        label: null,
        labelStyles: {},
        styles: options.styles ? { ...options.styles } : undefined,
      });
      setState({ ...state, ...element.getState() });
    } else {
      setElement(elements.create(elementType, options));
    }
  }, [element]);

  return {
    element,
    elementRef,
    state,
  };
};

export const useMultipleSkyflowElements = (groupOptions) => {
  const { elements } = useSkyflow();
  const [element, setElement] = React.useState(
    elements.getElement("group", groupOptions.name)
  );
  const elementRef = React.useRef(null);

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    if (element) {
      element.mount(elementRef.current);
      element.resetEvents();
      element.on("Change", (data) => {
        setState({ ...state, ...data });
      });
      setState({ ...state, ...element.getState() });
    } else {
      setElement(elements.createMultipleElement(groupOptions));
    }
  }, [element]);

  return {
    element,
    elementRef,
    state,
  };
};

export const useMultipleSkyflowElementsCustom = (
  elementObjects,
  isValidCallback = undefined
) => {
  const elementsArray = [];
  const [isValid, setIsValid] = React.useState(false);

  elementObjects.forEach((element) => {
    elementsArray.push(useSkyflowElement(element.elementType, element.options));
  });

  React.useEffect(() => {
    let valid = true;
    for (const index in elementsArray) {
      if (!elementsArray[index].state.isValid) {
        valid = false;
      }
    }
    isValidCallback && isValidCallback(valid);
    setIsValid(valid);
  }, [elementsArray]);

  return { elements: elementsArray, isValid };
};
