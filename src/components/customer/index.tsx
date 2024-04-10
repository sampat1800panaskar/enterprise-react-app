import React, { useState } from "react";
import CustomerCreate from "./CustomerCreate"; 
import CustomerSummary from "./CustomerSummary";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Customer: React.FC = () => {
  const [isView, setIsView] = useState(false);

  const changeIsView = () => {
    setIsView(!isView);
  };

  return (
    <Container maxWidth="xl">
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: "#fff",
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">
          {isView ? "View Customer Summary" : "Add Customer"}
        </Typography>
        <Box>
          <Button variant="contained" onClick={changeIsView}>
            {isView ? "Add Customer" : "View Summary"}
          </Button>
        </Box>
      </Paper>
      {isView ? <CustomerSummary /> : <CustomerCreate />}
    </Container>
  );
};

export default Customer;
