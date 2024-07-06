import React from "react";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const HeroSection = ({ openModal }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="app">
      <div
        className="hero-section "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Refer a Friend, Earn Rewards!</h1>
          <p>Share the love of learning and get rewarded for it.</p>
          <Button variant="contained" size="large" onClick={openModal}>
            Refer Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
