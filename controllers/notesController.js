const Note = require("../models/note");
const Rating = require('../models/rating')

const fetchAllNotes = async (req, res) => {
  // 1. Get all Notes from DB
  // 2. Send the notes back as a response
  const notes = await Note.find();
  // --------------------------------(1)
  res.json({ notes: notes });
  // --------------------------------(2)
};

const fetchAllRatings = async(req,res) => {
    const rating = await Rating.find()
    res.json({rating: rating})
}

const fetchNote = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  const noteId = req.params.id;
  // --------------------------------(1)
  const note = await Note.findById(noteId);
  // --------------------------------(2)
  res.json({ note: note });
  // --------------------------------(3)
};

const fetchRating = async(req,res) => {
    const ratingID = req.params.user;
    const rating = await Rating.findById(ratingID);
    res.json({rating: rating});

}

const createNote = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create note
  // 3. Respond with new copy of Note
  console.log(`BODY: ${req.body}`);
  const title = req.body.title;
  const body = req.body.body;
  // const {title,body} = req.body
  // --------------------------------(1)
  const note = await Note.create({
    title: title,
    body: body,
  });
  // --------------------------------(2)
  res.json({ note: note });
  // --------------------------------(3)
};

const createRating = async (req,res) => {
    const user = req.body.title;
    const rating = req.body.rating;
    const description = req.body.description;

    const rate = await Rating.create({
        user: user,
        rating: rating,
        description: description
    })

    res.json({rating: rate})
}

const updateNote = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Note
  // 4. Retrieve updatedNote and send it as a response
  const noteId = req.params.id;
  // --------------------------------(1)
  const { title, body } = req.body;
  // --------------------------------(2)
  const note = await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });
  // --------------------------------(2)
  const updatedNote = await Note.findById(noteId);
  res.json({ note: updatedNote });
};

const updateRating = async (req,res) => {
    const user = req.params.user

    const {rating, description} = req.body;

    const rate = await Rating.findByIdAndUpdate(user, {
        rating: rating,
        description: description
    });

    const updatedRate = await Rating.findById(user)
    res.json({rating: rate})
}

const deleteNote = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const noteId = req.params.id
  // --------------------------------(1)
  await Note.deleteOne({
    id: noteId
  })
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

const deleteRating = async(req,res) => {
    const user = req.params.user

    await Rating.deleteOne({
        user: user
    })

    res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllNotes,
    fetchAllRatings,
    fetchNote,
    fetchRating,
    createNote,
    createRating,
    updateNote,
    updateRating,
    deleteNote,
    deleteRating
}