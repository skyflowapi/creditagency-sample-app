import {
    Box,
    FormControl,
    FormHelperText,
    Typography,
  } from '@material-ui/core';
  import OutlinedInput, {
    OutlinedInputProps,
  } from '@material-ui/core/OutlinedInput';
  import { makeStyles, Theme } from '@material-ui/core/styles';
  import React from 'react';
  import InfoIcon from '@material-ui/icons/InfoOutlined';
  
  const useStyles = makeStyles((theme) => ({
    defaultRoot: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.spacing(1),
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.grey[400]} !important`,
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    defaultInput: {
      padding: theme.spacing(2, 4),
      minHeight: '22px',
      ...theme.typography.body2,
    },
    withBackgroundRoot: {
      backgroundColor: theme.palette.grey[400],
      borderRadius: 4,
    },
    borderNone: {
      border: '0px',
    },
    border: {
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: 4,
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
    },
  }));
  
//   export interface IFormOutlinedInputField extends OutlinedInputProps {
//     label?: string;
//     id: string;
//     helperText?: string;
//     noBorder?: boolean;
//     withBackground?: boolean;
//     value?: any;
//     errorText?: string;
//     infoText?: string;
//   }
  
  const FormOutlinedInputField = ({
    label,
    id,
    helperText,
    noBorder,
    withBackground,
    value,
    errorText,
    infoText,
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
        {label && (
          <Box mb={1.5}>
            <Typography variant="caption" color={'textSecondary'}>
              {label}
            </Typography>
          </Box>
        )}
        <FormControl>
          <OutlinedInput
            id={id}
            classes={{
              root: `${
                withBackground ? classes.withBackgroundRoot : classes.defaultRoot
              }`,
              notchedOutline: `${noBorder ? classes.borderNone : classes.border}`,
              input: classes.defaultInput,
            }}
            error={(errorText && errorText.length !== 0) || error.length !== 0}
            onBlur={handleBlur}
            inputProps={{
              'data-testid': id,
            }}
            value={value}
            {...rest}
          />
          {(errorText && errorText.length !== 0) || error.length !== 0 ? (
            <FormHelperText>
              <Typography
                variant="body2"
                color="error"
                className={classes.helperText}
                component="span"
              >
                <Box display="flex" alignItems="flexStart">
                  <React.Fragment>
                    <InfoIcon fontSize="inherit" className={classes.infoIcon} />{' '}
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
                  <Box display="flex" alignItems="flexStart">
                    <React.Fragment>
                      <InfoIcon fontSize="inherit" className={classes.infoIcon} />{' '}
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
  
  export default FormOutlinedInputField;
  