import React from "react";
import { TextField, Button, FormControl, Box } from "@mui/material";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormControl onSubmit={handleSubmit}>
        <TextField label="Nome" fullWidth />
        <TextField label="Email" fullWidth />
        <Box display="flex" alignItems="flex-start">
          <TextField
            label="Mensagem"
            fullWidth
            multiline
            rows={4}
          />
        </Box>
        <Button type="submit">Enviar</Button>
      </FormControl>
    </Box>
  );
};

export default Contact;
