import express from "express";
import cors from "cors";
import { employees } from "./data/employees.js";

const app = express();
app.use(cors());

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
