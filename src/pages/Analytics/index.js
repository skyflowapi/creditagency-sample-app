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
} from "@material-ui/core";
import Modal from "../../components/Modal";
import Header from "../../components/layout/header";
import AnalyticsCard from "../../components/AnalyticsCard";
import SummaryData from "../../components/SummaryData";

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
  newRequests: 4,
  pendingList: [
    {
      name: "John",
      age: "24",
      employementStatus: "Employeed",
      creditScore: "96",
      risk: "High",
    },
    {
      name: "John",
      age: "24",
      employementStatus: "Employeed",
      creditScore: "96",
      risk: "Low",
    },
    {
      name: "John",
      age: "24",
      employementStatus: "Employeed",
      creditScore: "96",
      risk: "Medium",
    },
  ],
};

export default function Analytics(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Box bgcolor="#fbfbfd" height={window.innerHeight}>
      <Box
        height="112px"
        component={Paper}
        boxShadow="0 1px 0 0 rgba(0, 0, 0, 0.06)"
      >
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
              <Typography variant="h6">
                {data.newRequests} New requests
              </Typography>
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
                {data.pendingList.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <Link
                        variant="h6"
                        style={{ cursor: "pointer" }}
                        onClick={handleModalOpen}
                      >
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{row.age}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">
                        {row.employementStatus}
                      </Typography>
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
                      <Link variant="h6" style={{ cursor: "pointer" }}>
                        Accept
                      </Link>
                      <Link
                        variant="h6"
                        style={{ cursor: "pointer", marginLeft: "30px" }}
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
      <Modal open={open} onClose={handleModalClose}>
        <SummaryData handleClose={handleModalClose} />
      </Modal>
    </Box>
  );
}
