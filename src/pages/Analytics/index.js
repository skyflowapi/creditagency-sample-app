import React from "react";
import {
  makeStyles,
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  CircularProgress,
  Button,
  InputAdornment,
  Popover,
} from "@material-ui/core";
import FormInputField from "../../components/FormInputField";
import Modal from "../../components/Modal";
import Header from "../../components/layout/header";
import AnalyticsCard from "../../components/AnalyticsCard";
import ApplicationStatus from "../../components/ApplicationStatus";
import SummaryData from "../../components/SummaryData";
import { localStorageKey } from "../../utils/constants";
import { useSkyflow } from "../../services";
import { useSnackbar } from "notistack";
import { getData } from "../../services/getData";
import acme from "../../assets/acme.png";
import Search from "@material-ui/icons/Search";
import Filter from "../../assets/filter.svg";
import FilterCheckbox from "../../components/FilterCheckbox";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    "& .MuiTableCell-root": {
      border: "none",
    },
    "& .MuiTableRow-root": {
      borderTop: "1px solid #eaedf3",
    },
    "& .MuiTableCell-root:first-child": {
      paddingLeft: "30px",
    },
  },
  loader: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#13182021",
    zIndex: "2",
  },
  roleToggleButton: {
    fontSize: "14px",
    textTransform: "none",
    padding: "1px 16px",
    borderRadius: "2px",
    boxShadow: "none",
  },
  searchBox: {
    width: "440px",
    height: theme.spacing(9),
    borderRadius: theme.spacing(1),
    border: `solid 1px ${theme.palette.grey[300]}`,
    display: "flex",
    justifyContent: "center",
    "& .MuiInput-underline:after, & .MuiInput-underline:before": {
      border: "none !important",
    },
  },
  filterBox: {
    cursor: "pointer",
  },
  popoverContent: {
    backgroundColor: "white",
    userSelect: "none",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "4px",
    boxShadow: "none",
  },
}));

const colors = {
  Low: "#e50000",
  Medium: "#facf55",
  High: "#4169e1",
  Med: "#ffae42",
  "": "red",
};

const applicationStatusColors = {
  Approved: {
    fontColor: "#3193ff",
    backgroundColor: "#d6ebff",
  },
  Pending: {
    fontColor: "#ff9514",
    backgroundColor: "#fff2e0",
  },
  Declined: {
    fontColor: "#ff6c63",
    backgroundColor: "#ffe0de",
  },
  "": {
    fontColor: "red",
    backgroundColor: "red",
  },
};

const data = {
  pendingReviews: {
    count: 24,
    rate: "13% Increase",
  },
  completedReviews: {
    count: 47,
    rate: "5% Increase",
  },
  monthlyReviews: {
    count: 115,
    rate: "21% Decrease",
  },
  creditRiskScore: {
    score: 92,
    rate: [60, 25, 15],
  },
};

export default function Analytics(props) {
  const classes = useStyles();
  const history = useHistory();
  const [records, setRecords] = React.useState(getRecords());
  const { skyflow } = useSkyflow();
  const [notebook] = React.useState(skyflow.notebook());
  const { enqueueSnackbar } = useSnackbar();

  const [record, setRecord] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [reviewData, setReviewData] = React.useState(null);

  const handleModalOpen = (event, row) => {
    event.preventDefault();
    setRecord(row);
  };

  const handleModalClose = () => {
    setRecord("");
  };

  React.useEffect(() => {
    getData("analyst", (data) => {
      console.log("data", JSON.stringify(data));
      setReviewData(data);
    });
  }, []);

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleOnAcceptOrReject = (record, accept, event) => {
    event.preventDefault();

    const recordId = record.ID;
    setLoading(true);
    handleModalClose();
    notebook
      .updateRecord(recordId, [
        {
          name: "credit_card_number",
          value: accept === true ? "4141414141414141" : "DECLINED",
        },
      ])
      .then((data) => {
        removeRecordFromDB(recordId);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (accept) {
          enqueueSnackbar(
            "Credit card is created and the number is stored in the Skyflow vault",
            { variant: "success" }
          );
        } else {
          enqueueSnackbar(
            "Application is denied and the record is updated in the Skyflow vault",
            { variant: "success" }
          );
        }
        setLoading(false);
      });
  };

  const removeRecordFromDB = (recordId) => {
    try {
      let records = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      records = records.filter(
        (record) => record.skyflow_vault_response.ID !== recordId
      );
      localStorage.setItem(localStorageKey, JSON.stringify(records));
      setRecords(getRecords());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Box bgcolor="#fbfbfd" height={window.innerHeight}>
        {loading && (
          <Box className={classes.loader}>
            <CircularProgress />
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="space-between"
          width="1134px"
          pt={"26px"}
          mx="auto"
        >
          <img src={acme}></img>
          <Box>
            <Button
              className={classes.roleToggleButton}
              onClick={()=>{history.push("/customer")}}
            >
              Customer
            </Button>
            <Button
              className={classes.roleToggleButton}
              variant="contained"
              color="primary"
            >
              Analyst
            </Button>
          </Box>
        </Box>
        <Box width="1134px" mt={7.5} mx="auto">
          <Box display="flex" justifyContent="space-between">
            <AnalyticsCard
              title="REVIEWS PENDING"
              count={24}
              footerText={"13% Increase"}
            />
            <AnalyticsCard
              title="REVIEWS COMPLETED"
              count={47}
              footerText={"5% Increase"}
            />
            <AnalyticsCard
              title="MONTHLY REVIEWS"
              count={115}
              footerText={"21% Decrease"}
            />
          </Box>
          <Box
            component={Paper}
            boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.04)"
            border="solid 1px #eaedf3"
            mt={7.5}
            borderRadius={"12px"}
            boxShadow={"0 2px 25px 5px rgba(0, 0, 0, 0.04)"}
          >
            <Box
              py={4.5}
              px={7.5}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box mr={7.5}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  APPLICANTS
                </Typography>
              </Box>
              <FormInputField
                id="search"
                placeholder={"Search applicants"}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                value={searchTerm}
                autoComplete={"off"}
                inputProps={{ "data-testid": "search" }}
                className={classes.searchBox}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" disablePointerEvents>
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      <Box
                        height={"24px"}
                        width={"1px"}
                        bgcolor={"#dfe3eb"}
                      ></Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        width={"56px"}
                        height={"21px"}
                        mx={3}
                        onClick={(e) => {
                          handlePopoverClick(e);
                        }}
                        className={classes.filterBox}
                      >
                        <img src={Filter} style={{ marginRight: "2px" }}></img>
                        <Typography variant="h6">Filter</Typography>
                      </Box>
                      <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        elevation={1}
                        classes={{
                          paper: `${classes.popoverContent}`,
                        }}
                      >
                        <FilterCheckbox></FilterCheckbox>
                      </Popover>
                    </>
                  ),
                }}
              />
            </Box>
            <Box>
              <Table aria-label="simple table" className={classes.table}>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#f5f8fa" }}>
                    <TableCell>
                      <Typography variant="caption" color="textSecondary">
                        NAME
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="textSecondary">
                        AGE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="textSecondary">
                        EMPLOYMENT STATUS
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="textSecondary">
                        CREDIT SCORE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="textSecondary">
                        RISK SCORE
                      </Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Typography variant="caption" color="textSecondary">
                        APPLICATION STATUS
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviewData &&
                    reviewData.records &&
                    reviewData.records.map((row) => (
                      <TableRow key={row.ID}>
                        <TableCell component="th" scope="row">
                          <Link
                            variant="h6"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              handleModalOpen(e, row);
                            }}
                          >
                            {row &&
                            row.fields &&
                            row.fields.name &&
                            row.fields.name.first_name
                              ? row.fields.name.first_name
                              : ""}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {row && row.fields && row.fields.age
                              ? row.fields.age
                              : ""}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {row && row.fields && row.fields.Employment_Status
                              ? row.fields.Employment_Status
                              : ""}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {row && row.fields && row.fields.credit_score
                              ? row.fields.credit_score
                              : ""}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Box
                              mr={2}
                              width="10px"
                              height="10px"
                              borderRadius="5px"
                              bgcolor={
                                // colors[
                                //   row && row.fields && row.fields.Risk_Score
                                //     ? row.fields.Risk_Score
                                //     : ""
                                // ]
                                colors["High"]
                              }
                            ></Box>
                            <Typography variant="h6">
                              {row && row.fields && row.fields.Risk_Score
                                ? row.fields.Risk_Score
                                : ""}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <ApplicationStatus
                            applicationStatus={
                              row && row.fields && row.fields.Application_Status
                                ? row.fields.Application_Status
                                : ""
                            }
                            color={
                              // applicationStatusColors[
                              //   row &&
                              //   row.fields &&
                              //   row.fields.Application_Status
                              //     ? row.fields.Application_Status
                              //     : ""
                              // ]
                              applicationStatusColors["Approved"]
                            }
                          ></ApplicationStatus>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>
        <Modal open={!!record}>
          <SummaryData
            handleClose={handleModalClose}
            record={record}
            notebook={notebook}
            handleOnAcceptOrReject={handleOnAcceptOrReject}
            loading={loading}
          />
        </Modal>
      </Box>
    </>
  );
}

const getRecords = () => {
  try {
    let records = (
      JSON.parse(localStorage.getItem(localStorageKey)) || []
    ).reverse();
    const ages = [24, 45, 36, 52];
    const creditScore = [
      { value: 36, risk: "High" },
      { value: 95, risk: "Low" },
      { value: 60, risk: "Med" },
      { value: 71, risk: "Med" },
    ];
    const applicationStatus = ["Pending", "Approved", "Declined"];
    records = records.map((record) => {
      const fields = {};
      record.skyflow_vault_response.fields.forEach((row) => {
        fields[row.name] = row;
      });
      const riskObj =
        creditScore[Math.floor(Math.random() * creditScore.length)];
      const currApplicationStatus =
        applicationStatus[Math.floor(Math.random() * applicationStatus.length)];
      return {
        ID: record.skyflow_vault_response.ID,
        fields: fields,
        creditScore: riskObj.value || record.credit_score || "0608",
        risk: riskObj.risk,
        employementStatus: "Student",
        age: ages[Math.floor(Math.random() * ages.length)],
        applicationStatus: currApplicationStatus,
      };
    });
    return { data: records };
  } catch (e) {
    console.log(e);
    return { error: e, data: [] };
  }
};
