import React from "react";
import { CircularProgress, Typography, Box, Link, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { REVEL_ELEMENT_OPTIONS } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  value: {
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#1d1d1d",
    paddingLeft: "4px",
  },
  viewText: {
    paddingLeft: "4px",
  },
}));

export default ({
  element: elementObj,
  notebook: propNotebook,
  token,
  value,
  ...props
}) => {
  const classes = useStyles();

  if (!elementObj.hide) {
    return <Typography className={classes.value}>{value}</Typography>;
  }

  const [view, setView] = React.useState(false);
  const [notebook] = React.useState(propNotebook);
  const [element, setElement] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    if (view) {
      setLoading(true);
      if (element) {
        element
          .mount(ref.current)
          .then((data) => {})
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        notebook
          .revelToken(token, ref.current, {
            ...REVEL_ELEMENT_OPTIONS,
            mask: elementObj.options.mask,
          })
          .then(({ element, data }) => {
            setElement(element);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }

    if (!view && element) {
      setLoading(false);
      element.unmount();
    }
  }, [view]);

  const handleViewChange = (event) => {
    event.preventDefault();
    setView(!view);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #eae8ee"
      maxWidth="168px"
    >
      {/* <Box> */}
      {view ? (
        <Box position="relative">
          {loading && (
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              zIndex="1"
            >
              <CircularProgress size="20px" />
            </Box>
          )}
          <Box ref={ref} paddingLeft="4px" {...props}></Box>
        </Box>
      ) : (
        <Typography className={classes.value}>{value}</Typography>
      )}
      {
        // <Link className={classes.viewText} variant="caption" onClick={handleViewChange}>
        //   {!loading && (view ? "view masked data" : "view raw data")}
        // </Link>
      }
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleViewChange}
        style={{
          padding: "0px",
          // border: "1px solid #eae8ee",
          // borderRadius: "4px",
          padding: "3px",
        }}
      >
        {view ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
      </IconButton>
    </Box>
  );
};
