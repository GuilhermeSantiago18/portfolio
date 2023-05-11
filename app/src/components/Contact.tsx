import React from "react";
import { TextField, Button, FormControl, Box } from "@mui/material";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Box justifyContent="center">
      <FormControl onSubmit={handleSubmit}>
        <TextField label="Nome" fullWidth />
        <TextField label="Email" fullWidth />
          <TextField
            label="Mensagem"
            fullWidth
            multiline
            rows={4}
          />
        <Button type="submit" variant="contained">Enviar</Button>
      </FormControl>
    </Box>
  );
};

export default Contact;
