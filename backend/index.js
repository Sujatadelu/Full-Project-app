const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// POST endpoint to save referral data
app.post("/api/referrals", async (req, res) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

    if (!referrerName) {
      return res
        .status(400)
        .json({ message: "Missing required field: referrer" });
    }

    const newReferral = await prisma.referral.create({
      data: {
        referrer: referrerName,
        referrerEmail: referrerEmail,
        referee: refereeName,
        refereeEmail: refereeEmail,
      },
    });

    res.json({
      message: "Referral submitted successfully!",
      referral: newReferral,
    });

    // Implement email notification logic here (refer to step 5)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving referral data!" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
