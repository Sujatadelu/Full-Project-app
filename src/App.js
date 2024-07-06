import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ReferralForm from "./ReferralForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleReferralSubmit = (data) => {
    // Handle referral form data submission (connect to backend here)
    // console.log("Referral submitted from App:", referralData);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeroSection openModal={handleOpenModal} />
        <ReferralForm
          open={openModal}
          onClose={handleCloseModal}
          onSubmit={handleReferralSubmit}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
