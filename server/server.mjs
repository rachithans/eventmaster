import express from "express";
import cors from "cors";
import LoginInfo from "./routes/Logininfo.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/loginInfo", LoginInfo);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});