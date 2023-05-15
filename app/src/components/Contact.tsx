import { useEffect, useRef } from "react";
import { TextField, Button, FormControl, Box, Container, Grid } from "@mui/material";
import { ScrollContextProvider, useScrollContext } from "@/Context/ScrollContext";

const Contact: React.FC = () => {
  const { scrollToRef } = useScrollContext();
  const contactRef = useRef<null | HTMLDivElement>(null);
   
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    scrollToRef(contactRef);
  }, []);
  return (
    <Container ref={contactRef}>
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