import express from "express";
import cors from "cors";
import { employees } from "./data/employees.js";

const app = express();
app.use(cors());

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
