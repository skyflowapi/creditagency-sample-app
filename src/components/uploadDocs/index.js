import React, { Component } from "react";
import Header from "../layout/header";
import { makeStyles, Divider, Button, Paper } from "@material-ui/core";
import theme from "../../utils/theme";
import creditCard from "../../assets/creditCard.png";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ContactsIcon from "@material-ui/icons/Contacts";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import { Link } from "react-router-dom";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ComputerIcon from "@material-ui/icons/Computer";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Montserrat"
  },
  button: {
    textTransform: "capitalize",
    background: theme.palette.royalBlue[0],
    color: "white",
  },
  instructionsTab: {
    marginTop: theme.spacing(15),
    marginRight: theme.spacing(15),
    width: "500px",
    border: "2px solid #eaedf3",
    borderRadius: "5px",
    fontFamily: "Montserrat",
  },
  uploadStep: {
    
    border: "2px solid #696969",
    // border: `2px solid ${borderColor}`,
    width: "700px",
    borderStyle: "dashed",
    marginTop: theme.spacing(4),
  },
  closeIcon: {
    float: "right",
    cursor: "pointer",
    padding: theme.spacing(3),
  },
  status:{
    marginLeft: theme.spacing(14),
    color: theme.palette.royalBlue[0],
  }
}));
export default function UploadPage() {
  const classes = useStyles();
  const [bankStatus, setBankStatus] = useState(true);
  const [passportStatus, setPassportStatus] = useState(true);
  const [visaStatus, setVisaStatus] = useState(true);
  const [formStatus, setFormStatus] = useState(true);
  const [bgColor, setBgColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#eaedf3");
  const handleBank = () => {
    setBankStatus(!bankStatus);
    if (bankStatus) {
      setBgColor(theme.palette.lightBlue[0]);
      setBorderColor(theme.palette.grey[1]);
    } else {
      setBgColor("#fff");
      setBorderColor("#eaedf3");
    }
  };
  return (
    <div className={classes.root}>
      <Header pos="relative" />
      <Divider />
      <div style={{display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ padding: theme.spacing(10), display: "flex" }}>
            <span style={{ padding: theme.spacing(4) }}>
              <ContactsIcon style={{ fill: theme.palette.skyBlue[0] }} />
            </span>
            <h3>Verify Your Identity</h3>
          </div>
          <div style={{ marginLeft: theme.spacing(15), display: "flex" }}>
            <img src={creditCard} />
            <div style={{ padding: theme.spacing(4) }}>
              <h4 style={{ color: theme.palette.skyBlue[0] }}>
                Just One more Step !
              </h4>
              <h4
                style={{
                  color: theme.palette.grey[1],
                  
                }}
              >
                Please provide the following documents to complete your
                application
              </h4>
            </div>
          </div>
          <div style={{ padding: theme.spacing(15)}}>
            <div className={classes.uploadStep} style={{ background: bgColor }}>
              {bankStatus && (
                <span className={classes.closeIcon} onClick={handleBank}>
                  <AddIcon />
                </span>
              )}
              {!bankStatus && (
                <span className={classes.closeIcon} onClick={handleBank}>
                  <CloseIcon />
                </span>
              )}
              <div style={{ display: "flex"}}>
                <span style={{ padding: theme.spacing(4) }}>
                  <AccountBalanceIcon />
                </span>
                <h4>Bank verification</h4>
              </div>
              <div>
                <h5 className={classes.status}>
                  Not uploaded yet
                </h5>
              </div>
              <div style={{ textAlign: "center" }} hidden={bankStatus}>
                <h4>Upload recent Bank Statement</h4>
                <div style={{ color: theme.palette.grey[1] }}>
                  <p>
                    Please Upload a copy of your most recent(checkings or
                    savings) U.S bank statement.It must have your name and not
                    to be more than 45 days old.
                  </p>
                  <i>
                    Below are examples of what your statement image should look
                    like{" "}
                  </i>
                </div>
                <img src={creditCard} />
                <div>
                  <h4>Drop your Bank Statement Image here.</h4>
                  <h4>OR</h4>
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="upload-button"
                      type="file"
                    />
                    <label htmlFor="upload-button">
                      <Button
                        variant="contained"
                        className={classes.button}
                        // component="span"
                        color="primary"
                      >
                        Upload Bank Statement
                      </Button>
                    </label>
                  </div>
                  <h4>OR</h4>
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                  >
                    Login to Bank
                  </Button>
                </div>
              </div>
            </div>
            <div className={classes.uploadStep}>
              {passportStatus && (
                <span className={classes.closeIcon} >
                  <AddIcon />
                </span>
              )}
              {!passportStatus && (
                <span className={classes.closeIcon} >
                  <CloseIcon />
                </span>
              )}
              <div style={{ display: "flex" }}>
                <span style={{ padding: theme.spacing(4) }}>
                  <MenuBookIcon />
                </span>
                <h4>Passport ID page</h4>
              </div>
              <h5 className={classes.status}>
                Not uploaded yet
              </h5>
            </div>
            <div className={classes.uploadStep}>
              {visaStatus && (
                <span className={classes.closeIcon} >
                  <AddIcon />
                </span>
              )}
              {!visaStatus && (
                <span className={classes.closeIcon} >
                  <CloseIcon />
                </span>
              )}
              <div style={{ display: "flex" }}>
                <span style={{ padding: theme.spacing(4) }}>
                  <CollectionsBookmarkIcon />
                </span>
                <h4>U.S Student Visa page</h4>
              </div>
              <h5 className={classes.status}>
                Not uploaded yet
              </h5>
            </div>
            <div className={classes.uploadStep}>
              {formStatus && (
                <span className={classes.closeIcon} >
                  <AddIcon />
                </span>
              )}
              {!formStatus && (
                <span className={classes.closeIcon} >
                  <CloseIcon />
                </span>
              )}
              <div style={{ display: "flex"}}>
                <span style={{ padding: theme.spacing(4) }}>
                  <DescriptionIcon />
                </span>
                <h4><b>Form I-20</b></h4>
              </div>
              <h5 className={classes.status}>
                Not uploaded yet
              </h5>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.instructionsTab}>
            <i>
              <b>
                <h4
                  style={{
                    padding: theme.spacing(3),
                    color: theme.palette.royalBlue[0],
                  }}
                >
                  Your Privacy is Our Top Priority
                </h4>
              </b>
            </i>
            <div style={{ display: "flex" }}>
              <span style={{ padding: theme.spacing(5) }}>
                <VpnKeyIcon style={{ fill: theme.palette.skyBlue[0] }} />
              </span>

              <p>
                Skyflow uses security measures and encryption to keep your
                information safe.
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <span style={{ padding: theme.spacing(5) }}>
                <LibraryBooksIcon style={{ fill: theme.palette.skyBlue[0] }} />
              </span>
              <p>
                Skyflow only uses this information in the credit decision making
                process.
              </p>
            </div>
            <p style={{ marginLeft: theme.spacing(5) }}>
              For more information, see{" "}
              <Link
                style={{
                  color: theme.palette.royalBlue[0],
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Link>
            </p>
            <i>
              <h4
                style={{
                  // marginTop:theme.spacing(6),
                  padding: theme.spacing(3),
                  color: theme.palette.royalBlue[0],
                }}
              >
                <b>Options for Uploading</b>
              </h4>
            </i>
            <div style={{ display: "flex" }}>
              <span style={{ padding: theme.spacing(5) }}>
                <PhoneAndroidIcon style={{ fill: theme.palette.skyBlue[0] }} />
              </span>
              <p>
                Use your smart phone camera to take a picture and upload items.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ padding: theme.spacing(5) }}>
                <CloudUploadIcon style={{ fill: theme.palette.skyBlue[0] }} />
              </span>

              <p>
                Access scanned copies of items saved on a cloud storage device.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ padding: theme.spacing(5) }}>
                <ComputerIcon style={{ fill: theme.palette.skyBlue[0] }} />
              </span>

              <p>Drag and drop images onto the box at left.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
