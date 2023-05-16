import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import styles from "../css/ScrollButton.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Stack } from "@mui/material";


const ScrollButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack flexDirection="column" justifyContent="center">
    <Button className={styles.whattsButton}>
        <WhatsAppIcon />
        </Button>
    <Button
      className={`${styles.scrollButton} ${showButton ? styles.showButton : ""}`}
      onClick={handleScrollToTop}
    >
      <KeyboardDoubleArrowUpIcon />
    </Button>
    </Stack>
  );
};

export default ScrollButton;
