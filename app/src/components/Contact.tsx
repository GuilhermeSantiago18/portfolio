import { TextField, Button, FormControl, Container, Grid } from "@mui/material";

const Contact: React.FC = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  

  return (
    <div id="contactSection">
    <Container sx={{minHeight: '100vh', mt: 2}} >
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
    </div>
  );
};

export default Contact;