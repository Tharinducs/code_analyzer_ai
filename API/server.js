require("dotenv").config();
const express = require("express");
const cors = require("cors");
const codeRoutes = require("./routes/codeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/code", codeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));