import { useEffect, useContext } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import styles from "../css/ScrollButton.module.css";
import { Button, Stack } from "@mui/material";
import { MyContext } from "@/Context/AppContext";

const ScrollButton: React.FC = () => {
  const { showButton, setShowButton } = useContext(MyContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowButton]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack flexDirection="column" justifyContent="center">
      <Button
        variant="contained"
        className={`${styles.scrollButton} ${
          showButton ? styles.showButton : ""
        }`}
        onClick={handleScrollToTop}
      >
        <KeyboardDoubleArrowUpIcon />
      </Button>
    </Stack>
  );
};

export default ScrollButton;
