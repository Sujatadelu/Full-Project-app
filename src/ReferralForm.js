import React, { useState } from "react";
import axios from "axios";
//import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
//import Button from "@mui/material/Button";
import { Button, TextField } from "@mui/material";

const ReferralForm = ({ open, onClose, onSubmit }) => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success", // can be 'success', 'error', 'warning', 'info'
  });
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation logic here
    if (referrerName && referrerEmail && refereeName && refereeEmail) {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/referrals",
          {
            referrerName,
            referrerEmail,
            refereeName,
            refereeEmail,
          }
        );
        console.log("Referral submitted successfully:", response.data);

        onSubmit(response.data);

        onClose();
        setReferrerName("");
        setReferrerEmail("");
        setRefereeName("");
        setRefereeEmail("");
      } catch (error) {
        console.error("Error submitting referral:", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <TextField
          label="Your Name"
          value={referrerName}
          onChange={(e) => setReferrerName(e.target.value)}
          required
          fullWidth
          margin="dense"
        />
        <TextField
          label="Your Email"
          value={referrerEmail}
          onChange={(e) => setReferrerEmail(e.target.value)}
          required
          fullWidth
          margin="dense"
          type="email"
        />
        <TextField
          label="Friend's Name"
          value={refereeName}
          onChange={(e) => setRefereeName(e.target.value)}
          required
          fullWidth
          margin="dense"
        />
        <TextField
          label="Friend's Email"
          value={refereeEmail}
          onChange={(e) => setRefereeEmail(e.target.value)}
          required
          fullWidth
          margin="dense"
          type="email"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit Referral
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReferralForm;
