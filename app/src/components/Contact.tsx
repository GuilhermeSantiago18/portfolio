import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Container,
  Grid,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";
import validateInputs from "@/Validations/ValidateInputs";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [messageError, setMessageError] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validations = validateInputs(name, email, message);
    setMessageError(validations);

    if (!validations) {
      const serviceId = "service_a8n6f1t";
      const templateId = "template_c4qipbp";
      const userId = "XhIsTPNFx_ykfnuep";

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          `E-mail enviado com sucesso!, ${response.status}, ${response.text}`;
          setShowSuccessMessage(true);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Erro ao enviar o e-mail:", error);
        });

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 4000);
    }
  };

  const handleClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div id="contactSection">
      <Container sx={{ minHeight: "50vh", mt: 10, background: "linear-gradient(90deg, #BEC1C1, #E1E2E2)", borderRadius: 1}}>
        <FormControl onSubmit={handleSubmit} sx={{ mt: 15 }}>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                color="warning"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color="warning"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Write your message"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                color="warning"
              />
            </Grid>
            {messageError && (
              <Grid item xs={12}>
                <Typography variant="body2" color="error">
                  {messageError}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                onClick={handleSubmit}
                fullWidth
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Container>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "90%", mr: 8 }}
        >
          Email successfully sent!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
