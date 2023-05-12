import React from "react";
import { TextField, Button, FormControl, Box, Container, Grid } from "@mui/material";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container>
      <FormControl onSubmit={handleSubmit}>
        <Grid container spacing={1} p={1} justifyContent="right">
          <Grid item xs={6}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Write your message"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>Send</Button>
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default Contact;
