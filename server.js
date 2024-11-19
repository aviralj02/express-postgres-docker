import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools");

    res.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;

  try {
    await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
      name,
      location,
    ]);

    res.status(200).send({
      message: "Successfully add child!",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))"
    );

    res.status(200).send({
      message: "Successfully created table!",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
