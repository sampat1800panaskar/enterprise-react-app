import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Switch,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Box,
  IconButton,
  Input,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CustomerCreate = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [status, setStatus] = useState(false);
  const [showStandardAlert, setShowStandardAlert] = useState(false);
  const [showEmissionUnit, setShowEmissionUnit] = useState(false);
  const [uom, setUOM] = useState("");
  const [ldar, setLDAR] = useState(false);
  const [complianceAgency, setComplianceAgency] = useState("");
  const [nonEnterpriseUsers, setNonEnterpriseUsers] = useState("");
  const [preferredEmailDomains, setPreferredEmailDomains] = useState("");

  const handleSubmit = () => {
    setSubmitted(true);

    // Placeholder for submission
    // console.log("Submitted:", {
    //   name,
    //   contactName,
    //   status,
    //   showStandardAlert,
    //   showEmissionUnit,
    //   uom,
    //   ldar,
    //   complianceAgency,
    //   nonEnterpriseUsers,
    //   preferredEmailDomains,
    // });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Uploaded file:", e.target.files[0]);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "left",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        Customer Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            required
            error={submitted && name === ""}
            helperText={submitted && name === "" ? "Name is required" : ""}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Contact Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
            error={submitted && name === ""}
            helperText={
              submitted && contactName === ""
                ? "Please Enter your Contact Name"
                : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Status</Typography>
          <Switch
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Show Standard Alert</Typography>
          <Switch
            checked={showStandardAlert}
            onChange={(e) => setShowStandardAlert(e.target.checked)}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Show Emission Unit</Typography>
          <Switch
            checked={showEmissionUnit}
            onChange={(e) => setShowEmissionUnit(e.target.checked)}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Logo</Typography>
          <IconButton component="label">
            <CloudUploadIcon />
            <Input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth required>
            <InputLabel>UOM</InputLabel>
            <Select value={uom} onChange={(e) => setUOM(e.target.value)}>
              <MenuItem value="">Select UOM</MenuItem>
              <MenuItem value="Metric">Metric</MenuItem>
              <MenuItem value="Imperial">Imperial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography>LDAR</Typography>
          <Switch
            checked={ldar}
            onChange={(e) => setLDAR(e.target.checked)}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Compliance Agency</InputLabel>
            <Select
              value={complianceAgency}
              onChange={(e) => setComplianceAgency(e.target.value)}
            >
              <MenuItem value="">Select Compliance Agency</MenuItem>
              <MenuItem value="S2C ">S2C </MenuItem>
              <MenuItem value="Maximo ">Maximo </MenuItem>
              <MenuItem value="CNTRAL">CNTRAL</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Non Enterprise Users</InputLabel>
            <Select
              value={nonEnterpriseUsers}
              onChange={(e) => setNonEnterpriseUsers(e.target.value)}
            >
              <MenuItem value="">Select Non Enterprise Users</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Preferred Email Domains"
            value={preferredEmailDomains}
            onChange={(e) => setPreferredEmailDomains(e.target.value)}
          />
        </Grid>
        <Grid container justifyContent="flex-end" item xs={12}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomerCreate;
