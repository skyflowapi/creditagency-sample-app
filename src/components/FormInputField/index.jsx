import {
    Box,
    FormControl,
    FormHelperText,
    Typography,
    TextField,
  } from '@material-ui/core';
  import { makeStyles, Theme } from '@material-ui/core/styles';
  import React from 'react';
  import InfoIcon from '@material-ui/icons/Info';
  import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
  
  const useStyles = makeStyles((theme) => ({
    defaultRoot: {
      '& .MuiInputLabel-root.Mui-disabled': {
        color: theme.palette.text.secondary,
      },
  
      '& .MuiInputLabel-root.Mui-focused:not(.Mui-error)': {
        color: theme.palette.text.secondary,
      },
  
      '& .MuiInput-underline:not(.Mui-error):after': {
        borderBottomColor: theme.palette.primary.main,
      },
  
      '& .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):before': {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        borderBottomColor: theme.palette.grey[300],
      },
  
      '& .MuiInput-underline:hover:not(.Mui-disabled):not(.Mui-error):before': {
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        borderBottomColor: theme.palette.grey[400],
      },
  
      '& .MuiInput-underline:not(.Mui-disabled):.Mui-focused:after': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        borderBottomColor: theme.palette.primary.main,
      },
      '& .MuiInput-underline:not(.Mui-disabled):.Mui-focused:before': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        borderBottomColor: theme.palette.primary.main,
      },
  
      '& .MuiInput-underline.Mui-disabled:before': {
        borderBottomStyle: 'unset',
      },
      '& .MuiInputBase-root.Mui-disabled': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.grey[200],
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        borderBottomColor: theme.palette.grey[400],
        borderRadius: theme.spacing(1),
      },
      '& .MuiInputBase-root': {
        paddingLeft: theme.spacing(1),
      },
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1, 0),
    },
  
    active: {
      '& label.Mui-focused': {
        color: theme.palette.text.secondary,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
      },
      '& .MuiInput-underline:hover': {
        borderBottomColor: theme.palette.primary.light,
      },
  
      '& .MuiInput-underline:not(.Mui-disabled):not(.Mui-error):before': {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        borderBottomColor: theme.palette.primary.light,
      },
  
      minHeight: '32px',
      ...theme.typography.body2,
    },
    withBackgroundRoot: {
      backgroundColor: theme.palette.grey[400],
    },
    helperText: {
      minHeight: 0,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
    },
    infoIcon: {
      marginRight: theme.spacing(1.5),
      marginTop: theme.spacing(0.5),
      fill: theme.palette.grey[500],
    },
    reportIcon: {
      marginRight: theme.spacing(1.5),
      marginTop: theme.spacing(0.5),
    },
  }));
  
  const FormInputField = ({
    label,
    id,
    disabled,
    helperText,
    noBorder,
    withBackground,
    value,
    errorText,
    endAdornment,
    infoText,
    inputComponent,
    ...rest
  }) => {
    const [error, setError] = React.useState('');
    const classes = useStyles();
  
    React.useEffect(() => {
      if (error.length !== 0) {
        setError(helperText || '');
      }
    }, [helperText, error]);
  
    const handleBlur = () => {
      helperText && value && value.length !== 0 && setError(helperText);
    };
  
    React.useEffect(() => {
      if (!value) {
        handleBlur();
      }
    }, [value]);
  
    return (
      <Box display="flex" flexDirection="column">
        <FormControl>
          <TextField
            id={id}
            error={(errorText && errorText.length !== 0) || error.length !== 0}
            disabled={disabled}
            value={value}
            label={label}
            onBlur={handleBlur}
            {...rest}
            classes={{
              root: `${classes.defaultRoot} ${
                value && !errorText && !disabled
                  ? classes.active
                  : classes.defaultRoot
              } ${
                withBackground ? classes.withBackgroundRoot : classes.defaultRoot
              }`,
              ...rest.classes,
            }}
            InputProps={{
              endAdornment: endAdornment,
              inputComponent: inputComponent,
              ...rest.InputProps,
            }}
            inputProps={{ 'data-testid': id, ...rest.inputProps }}
          />
  
          {(errorText && errorText.length !== 0) || error.length !== 0 ? (
            <FormHelperText>
              <Typography
                variant="body2"
                color="error"
                className={classes.helperText}
                component="span"
              >
                <Box display="flex" alignItems="center">
                  <React.Fragment>
                    <ReportProblemOutlinedIcon
                      fontSize="small"
                      style={{ borderRadius: '10px' }}
                      className={classes.reportIcon}
                    />{' '}
                    {errorText || error}
                  </React.Fragment>
                </Box>
              </Typography>
            </FormHelperText>
          ) : (
            infoText &&
            infoText.length !== 0 && (
              <FormHelperText>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.helperText}
                  component="span"
                >
                  <Box display="flex" alignItems="center">
                    <React.Fragment>
                      <InfoIcon fontSize="small" className={classes.infoIcon} />{' '}
                      {infoText}
                    </React.Fragment>
                  </Box>
                </Typography>
              </FormHelperText>
            )
          )}
        </FormControl>
      </Box>
    );
  };
  
  export default FormInputField;
  