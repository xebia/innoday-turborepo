import express from "express";
import { Person } from "types";

const PORT = 3002;

const app = express();

const person: Person = {
  email: "everweij@xebia.com",
  firstName: "Erik",
  lastName: "Verweij",
};

app.get("/", (req, res) => {
  res.json(person);
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}!`));
