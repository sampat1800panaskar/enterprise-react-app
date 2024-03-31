import React, { useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CustomerSummary = () => {
  const [rows, setRows] = useState([
    { id: 1, Name: 'John', ContactName: 'Vicky' },
    { id: 2, Name: 'Jane', ContactName: 'Vicky' },
    { id: 3, Name: 'Doe', ContactName: 'Vicky' },
  ]);

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleStorageChange = () => {
    const dataFromStorage = localStorage.getItem('customerData');
    if (dataFromStorage) {
      setRows(JSON.parse(dataFromStorage));
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.ContactName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomerSummary;
