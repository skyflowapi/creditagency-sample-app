import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import theme from "../../utils/theme";
import {
  useMultipleSkyflowElements,
  useMultipleSkyflowElementsCustom,
} from "../../services/skyflowHooks";
import Element from "../Element";
import { INTERNAL_FORM_LABEL_STYLES } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.blue[0],
    // fontSize: "18px",

    // fontWeight:"bold"
  },
  key: {
    color: theme.palette.grey[1],
    padding: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}));
export default function Information(props) {
  const classes = useStyles();
  const { elementRef } = useMultipleSkyflowElements({
    name: props.title,
    spacing: "6px",
    rows: Object.values(props.data).map((obj) => {
      return {
        elements: [
          {
            elementType: obj.elementType,
            ...obj.options,
            disabled: true,
            label: obj.title,
            styles: {
              ...obj.options.styles,
              base: {
                ...obj.options.styles.base,
                border: "none",
                padding: "10px 0px",
              },
            },
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      };
    }),
  });

  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        {props.title}
      </Typography>
      <div style={{ marginTop: theme.spacing(5) }}>
        <Element width="204px" height="443px" ref={elementRef} />
        {/* {Object.values(props.data).map((obj, index) => {
          return (
            <div>
              <Typography className={classes.key} variant="h6">
                {obj.title}
              </Typography>
              <Box
                p={1}
                width="204px"
                height="37px"
                ref={elements[index].elementRef}
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
