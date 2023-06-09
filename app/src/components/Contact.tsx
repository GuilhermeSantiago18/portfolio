import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Container,
  Grid,
  Snackbar,
  Alert,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import emailjs from "emailjs-com";
import validateInputs from "@/Validations/ValidateInputs";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined
  );
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  useEffect(() => {
 
    const validations = validateInputs(name, email, message);
    setMessageError(validations);
    if (!name && !email && !message) {
      setMessageError('')
    }
  }, [email, message, name]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !message) {
      return ''
    }

    if (!messageError) {
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
          console.log(`E-mail enviado com sucesso!, ${response.status}, ${response.text}`);
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
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 5,
            mt: 25,
            color: "secondary.main",
            fontFamily: "Montserrat",
          }}
        >
          Contact me
        </Typography>
        <Container
          sx={{
            display: "flex",
            minHeight: "40vh",
            mt: 5,
            bgcolor: "#32404B",
            borderRadius: 1,
            justifyContent: "center",
          }}
        >
          <FormControl
            onSubmit={handleSubmit}
            sx={{ display: "flex", mt: 6, maxWidth: 700 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  color="secondary"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  color="secondary"
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
                  color="secondary"
                />
              </Grid>
              {messageError ? (
                <Stack>
                  <Typography variant="body2" color="#FF1744" sx={{ ml: 1 }}>
                    {messageError}
                  </Typography>
                </Stack>
              ) : null}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  onClick={handleSubmit}
                  fullWidth
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Container>
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
          sx={{ width: "90%", mr: isMobile ? 2 : 8, mb: isMobile ? 11 : 6 }}
        >
          Email successfully sent!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
