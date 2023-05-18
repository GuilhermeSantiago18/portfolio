const validateInputs = (name: string, email: string, message: string): string | undefined => {
  
    if (name.trim().length < 3) {
        return "Please enter at least 3 characters for the name."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address."
    }
  
    if (message.trim().length < 10) {
        return "Please enter at least 10 characters for the message."
    }
  return undefined
  };
  
  export default validateInputs;