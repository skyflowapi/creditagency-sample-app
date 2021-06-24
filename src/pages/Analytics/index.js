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
} from "@material-ui/core";
import Modal from "../../components/Modal";
import Header from "../../components/layout/header";
import AnalyticsCard from "../../components/AnalyticsCard";
import SummaryData from "../../components/SummaryData";
import { localStorageKey } from "../../utils/constants";
import { useSkyflow } from "../../services";
import { useSnackbar } from "notistack";
import { getData } from "../../services/getData";

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
}));

const colors = {
  Low: "#7ce7ac",
  Medium: "#facf55",
  High: "#e6492d",
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
  const [records, setRecords] = React.useState(getRecords());
  const { skyflow } = useSkyflow();
  const [notebook] = React.useState(skyflow.notebook());
  const { enqueueSnackbar } = useSnackbar();

  const [record, setRecord] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const handleModalOpen = (event, row) => {
    event.preventDefault();
    setRecord(row);
  };

  const handleModalClose = () => {
    setRecord("");
  };

  getData((data) => {
    console.log("data", JSON.stringify(data));
  });


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
      records = records.filter((record) => record.skyflow_vault_response.ID !== recordId);
      localStorage.setItem(localStorageKey, JSON.stringify(records));
      setRecords(getRecords());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box bgcolor="#fbfbfd" height={window.innerHeight}>
      {loading && (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
      <Box height="112px" component={Paper} boxShadow="0 1px 0 0 rgba(0, 0, 0, 0.06)">
        <Header />
      </Box>
      <Box width="1110px" mt={7.5} mx="auto">
        <Box display="flex">
          <AnalyticsCard
            title="PENDING REVIEWS"
            count={data.pendingReviews.count}
            footerText={data.pendingReviews.rate}
            mr={7.5}
          />
          <AnalyticsCard
            title="COMPLETED REVIEWS"
            count={data.completedReviews.count}
            footerText={data.completedReviews.rate}
            mr={7.5}
          />
          <AnalyticsCard
            title="MONTHLY REVIEWS"
            count={data.monthlyReviews.count}
            footerText={data.monthlyReviews.rate}
            mr={7.5}
          />
          <AnalyticsCard
            title="CREDIT RISK SCORE"
            count={data.creditRiskScore.score}
            footerText="RISK"
            risk={data.creditRiskScore.rate}
          />
        </Box>
        <Box
          component={Paper}
          boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.04)"
          border="solid 1px #eaedf3"
          mt={7.5}
        >
          <Box py={4.5} px={7.5} display="flex" alignItems="center">
            <Box mr={7.5}>
              <Typography variant="h5">Pending reviews</Typography>
            </Box>
            <Box width="1px" height="38px" bgcolor="#eaedf3" mr={7.5}></Box>
            <Box color="#696969">
              <Typography variant="h6">{data.length} New requests</Typography>
            </Box>
          </Box>
          <Box>
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow>
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
                      RISK
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption" color="textSecondary">
                      ACTIONS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.data.map((row) => (
                  <TableRow key={row.ID}>
                    <TableCell component="th" scope="row">
                      <Link
                        variant="h6"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          handleModalOpen(e, row);
                        }}
                      >
                        {row.fields.first_name.dlp}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{row.age}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{row.employementStatus}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{row.creditScore}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Box
                          mr={2}
                          width="10px"
                          height="10px"
                          borderRadius="5px"
                          bgcolor={colors[row.risk]}
                        ></Box>
                        <Typography variant="h6">{row.risk}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Link
                        variant="h6"
                        style={{ cursor: "pointer" }}
                        onClick={handleOnAcceptOrReject.bind(null, row, true)}
                      >
                        Accept
                      </Link>
                      <Link
                        variant="h6"
                        style={{ cursor: "pointer", marginLeft: "30px" }}
                        onClick={handleOnAcceptOrReject.bind(null, row, false)}
                      >
                        Decline
                      </Link>
                    </TableCell>
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
  );
}

const getRecords = () => {
  try {
    let records = (JSON.parse(localStorage.getItem(localStorageKey)) || []).reverse();
    const ages = [24, 45, 36, 52];
    const creditScore = [
      { value: 36, risk: "High" },
      { value: 95, risk: "Low" },
      { value: 60, risk: "Medium" },
      { value: 71, risk: "Medium" },
    ];
    records = records.map((record) => {
      const fields = {};
      record.skyflow_vault_response.fields.forEach((row) => {
        fields[row.name] = row;
      });
      const riskObj = creditScore[Math.floor(Math.random() * creditScore.length)];

      return {
        ID: record.skyflow_vault_response.ID,
        fields: fields,
        creditScore: riskObj.value || record.credit_score || "0608",
        risk: riskObj.risk,
        employementStatus: "Student",
        age: ages[Math.floor(Math.random() * ages.length)],
      };
    });
    return { data: records };
  } catch (e) {
    console.log(e);
    return { error: e, data: [] };
  }
};
