require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our Mongoose connection into application

const Note = require("./models/note.js");
const rating = require("./models/rating.js")
const Fruit = require("./models/fruit.js")
const notesController = require("./controllers/notesController.js");
const cors = require("cors");
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());
connectToDb();
// This initializes our connectToDB() function
// -------------------------------------------------reQs


app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/notes", notesController.fetchAllNotes);
app.get("/ratings", notesController.fetchAllRatings)
app.get("/fruit", notesController.fetchAllFruit);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
app.get("/ratings/:id", notesController.fetchRating)
app.get("/fruit/:id", notesController.fetchFruit);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
app.post("/ratings", notesController.createRating);
app.post("/fruit", notesController.createFruit);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
app.put("/ratings/:id", notesController.updateRating);
app.put("/fruit/:id", notesController.updateFruit);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
app.delete("/ratings/:id", notesController.deleteRating)
app.delete("/fruit/:id", notesController.deleteFruit)
// -----------------> Delete a Specific Note - [Delete]
// -------------------------------------------------Routing


app.listen(PORT, () => {
  console.log(`Express Server Listening on port num: ${PORT}`);
});