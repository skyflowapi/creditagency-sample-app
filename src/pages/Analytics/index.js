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
import Modal from "../../components/Modal";
import AnalyticsCard from "../../components/AnalyticsCard";
import ApplicationStatus from "../../components/ApplicationStatus";
import SummaryData from "../../components/SummaryData";
import { localStorageKey } from "../../utils/constants";
import { useSkyflow } from "../../services";
import { useSnackbar } from "notistack";
import {
  getData,
  queryData,
  revealData,
  updateRecordData,
} from "../../services/getData";
import acme from "../../assets/acme.png";
import { useHistory } from "react-router-dom";
import SearchFilter from "../../molecules/searchWithFilter";
import _ from "lodash";

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
  tableLoader: {
    border: "1px solid #eaedf3",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    // boxShadow: "0 2px 25px 5px rgba(0, 0, 0, 0.04)",
  },
  roleToggleButton: {
    fontSize: "14px",
    textTransform: "none",
    padding: "1px 16px",
    borderRadius: "2px",
    boxShadow: "none",
  },
}));

const colors = {
  LOW: "#e50000",
  MEDIUM: "#facf55",
  HIGH: "#4169e1",
  "": "#4169e1",
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
  "Auto Approved": {
    fontColor: "#3193ff",
    backgroundColor: "#d6ebff",
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
  const [approvedLoading, setApprovedLoading] = React.useState(false);
  const [declinedLoading, setDeclinedLoading] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(true);

  const [searchTerm, setSearchTerm] = React.useState("");

  const [filteredGenderValues, setFilteredGenderValues] = React.useState([]);

  const [filterChange, setFilterChange] = React.useState(false);

  const [reviewData, setReviewData] = React.useState({});

  const [checks, setChecks] = React.useState({
    kyc: false,
    aml: false,
    credits: false,
  });

  const handleModalOpen = (event, row) => {
    event.preventDefault();
    setRecord(row);
  };

  const handleModalClose = () => {
    setRecord("");
  };

  const handleOnAcceptOrReject = (record, accept, event) => {
    event.preventDefault();

    const recordId = record.ID;
    setLoading(true);
    setTimeout(() => {
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
            enqueueSnackbar("Credit card application has been approved", {
              variant: "success",
            });
          } else {
            enqueueSnackbar("Credit card application has been declined", {
              variant: "success",
            });
          }
          handleModalClose();
          setLoading(false);
        });
    }, 1000);
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

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  React.useEffect(() => {
    if (searchTerm) {
      const query = `SELECT * FROM persons WHERE name->'first_name' = to_json('${searchTerm}'::text)`;
      queryData(query, "analyst", (data) => {
        setReviewData(data);
      });
    } else {
      getData("analyst", (data) => {
        setReviewData(data);
      });
    }
  }, [searchTerm]);

  React.useEffect(() => {
    console.log("reviewData", reviewData);
    if (reviewData && reviewData.records) {
      setTableLoading(false);
    }
  }, [reviewData]);

  React.useEffect(() => {
    let query = `select * from persons`;
    if (!filteredGenderValues.length) {
      getData("analyst", (data) => {
        setReviewData(data);
      });
    } else {
      filteredGenderValues.forEach((item, index) => {
        const temp = item.toUpperCase();
        if (index === 0) {
          query += ` where gender = \'${temp}\'`;
        } else {
          query += ` or gender = \'${temp}\'`;
        }
      });
      queryData(query, "analyst", (data) => {
        setReviewData(data);
      });
    }
  }, [filteredGenderValues]);

  const handleGenderChange = (checked, value) => {
    if (checked) {
      setFilteredGenderValues([...filteredGenderValues, value]);
    } else {
      const tempArray = [...filteredGenderValues];
      tempArray.splice(tempArray.indexOf(value), 1);
      setFilteredGenderValues(tempArray);
    }
  };

  const handleRevealClick = (key, recordId) => {
    revealData(key, recordId, "analyst", (data) => {
      setRecord({
        fields: {
          ...record.fields,
          [key]: data.fields[key],
        },
      });
    });
  };

  const handleHideClick = (key) => {
    setRecord({
      fields: {
        ...record.fields,
        [key]: null,
      },
    });
  };

  const handleChecks = (checked, key) => {
    setChecks({ ...checks, [key]: checked });
  };

  React.useEffect(() => {
    if (record) {
      setChecks({
        kyc: record.fields.kyc,
        aml: record.fields.aml,
        credits: record.fields.credits,
      });
    }
  }, [record]);

  const handleApproveOrDecline = (recordId, status) => {
    // setLoading(true);
    status === "Approved" ? setApprovedLoading(true) : setDeclinedLoading(true);

    updateRecordData(
      recordId,
      {
        record: {
          fields: {
            application_status: status,
            kyc: true,
            aml: true,
            credits: true,
          },
        },
      },
      "analyst",
      (data) => {
        enqueueSnackbar(
          status === "Approved"
            ? "Credit card application has been approved"
            : "Credit card application has been declined",
          {
            variant: "success",
          }
        );
        handleModalClose();
        updateReviewDataStatus(recordId, status);
        // setLoading(false);
        status === "Approved"
          ? setApprovedLoading(false)
          : setDeclinedLoading(false);
      },
      (data) => {
        enqueueSnackbar("Sorry, something went wrong", {
          variant: "error",
        });
        // setLoading(false);
        status === "Approved"
          ? setApprovedLoading(false)
          : setDeclinedLoading(false);
      }
    );
  };

  const updateReviewDataStatus = (recordId, status) => {
    if (reviewData) {
      const temp = _.cloneDeep(reviewData);
      let index = 0;
      temp.records.forEach((item, i) => {
        if (item.fields.skyflow_id === recordId) {
          index = i;
        }
      });
      temp.records[index].fields = {
        ...temp.records[index].fields,
        application_status: status,
        kyc: true,
        aml: true,
        credits: true,
      };
      // setReviewData(temp);
    }
  };

  return (
    <>
      <Box bgcolor="#f9fafd" height={"100%"} minHeight={"100vh"}>
        {/* {tableLoading && (
          <Box className={classes.loader}>
            <CircularProgress />
          </Box>
        )} */}
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
              onClick={() => {
                history.push("/customer");
              }}
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
        <Box width="1134px" mt={7.5} mx="auto" pb={7.5}>
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
            // boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.04)"
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
              <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={handleSearchChange}
                filteredGenderValues={filteredGenderValues}
                handleGenderChange={handleGenderChange}
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
                        GENDER
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
                {tableLoading && (
                  <Box
                    className={classes.tableLoader}
                    width="1134px"
                    height="352px"
                    bgcolor="#fff"
                  >
                    <CircularProgress />
                  </Box>
                )}
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
                              : Math.floor(Math.random() * 50) + 20}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {row && row.fields && row.fields.gender
                              ? row.fields.gender
                              : "NA"}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {row && row.fields && row.fields.employment_status
                              ? row.fields.employment_status
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
                                colors[
                                  row && row.fields && row.fields.risk_score
                                    ? row.fields.risk_score
                                    : "High"
                                ]
                                // colors["High"]
                              }
                            ></Box>
                            <Typography variant="h6">
                              {row && row.fields && row.fields.risk_score
                                ? row.fields.risk_score
                                : ""}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <ApplicationStatus
                            applicationStatus={
                              row && row.fields && row.fields.application_status
                                ? row.fields.application_status
                                : "NA"
                            }
                            color={
                              applicationStatusColors[
                                row &&
                                row.fields &&
                                row.fields.application_status
                                  ? row.fields.application_status
                                  : "Declined"
                              ]
                              // applicationStatusColors["Approved"]
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
            handleRevealClick={handleRevealClick}
            handleHideClick={handleHideClick}
            checks={checks}
            handleChecks={handleChecks}
            handleApproveOrDecline={handleApproveOrDecline}
            approvedLoading={approvedLoading}
            declinedLoading={declinedLoading}
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
    return { error: e, data: [] };
  }
};
