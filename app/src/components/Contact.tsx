import { useState } from 'react';
import { TextField, Button, FormControl, Container, Grid, Snackbar, Alert } from "@mui/material";
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    const serviceId = 'service_a8n6f1t';
    const templateId = 'template_c4qipbp'; 
    const userId = 'XhIsTPNFx_ykfnuep'
  
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
  
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
       `E-mail enviado com sucesso!, ${response.status}, ${response.text}`
       setShowSuccessMessage(true);
       setName('');
       setEmail('');
       setMessage('');
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
      });
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 4000)
  };

  const handleClose = () => {
    setShowSuccessMessage(false)
  }
 
  return (
    <div id="contactSection">
      <Container sx={{ minHeight: '100vh', mt: 10 }}>
        <FormControl onSubmit={handleSubmit} sx={{ mt: 20 }}>
          <Grid container spacing={1} p={1} justifyContent="right">
            <Grid item xs={6}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" onClick={handleSubmit} fullWidth>Send</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Container>
      <Snackbar open={showSuccessMessage} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert  onClose={handleClose} severity="success" sx={{ width: '90%', mr: 8}}>
        Email successfully sent!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
