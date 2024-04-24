const Fruit = require("../models/fruit");
const Note = require("../models/note");
const Rating = require('../models/rating')
const Car = require("../models/car.js");

const fetchAllNotes = async (req, res) => {
  // 1. Get all Notes from DB
  // 2. Send the notes back as a response
  const notes = await Note.find();
  // --------------------------------(1)
  res.json({ notes: notes });
  // --------------------------------(2)
};

const fetchAllRatings = async(req,res) => {
    const rating = await Rating.find();
    res.json({rating: rating});
}

const fetchAllFruit = async(req,res) => {
  const fruit = await Fruit.find();
  res.json({fruit: fruit});
}

const fetchAllCars = async(req,res) => {
  const car = await Car.find();
  res.json({car: car});
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
    const ratingID = req.params.id;
    console.log(ratingID);
    const rating = await Rating.findById(ratingID);
    res.json({rating: rating});

}

const fetchFruit = async(req,res) => {
  const fruitID = req.params.id;
  const fruit = await Fruit.findById(fruitID);
  res.json({fruit: fruit})
}


const fetchCar = async(req,res) => {
  const carID = req.params.id;
  const car = await Car.findById(carID);
  res.json({car: car});
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
    const user = req.body.user;
    const rating = req.body.rating;
    const description = req.body.description;

    const rate = await Rating.create({
        user: user,
        rating: rating,
        description: description
    })

    res.json({rating: rate})
}

const createFruit = async(req,res) => {
  const {name,color} = req.body;

  const fruit = await Fruit.create({
    name: name,
    color: color
  });

  res.json({fruit: fruit});
};

const createCar = async(req,res) => {
  const {make,model} = req.body;

  const car = await Car.create({
    make: make,
    model: model
  });

  res.json({car: car});
};
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
   const ratingID = req.params.id;
    const {user, rating, description} = req.body;

    const rate = await Rating.findByIdAndUpdate(ratingID, {
        user: user,
        rating: rating,
        description: description
    });

    const updatedRate = await Rating.findById(ratingID);
    res.json({rating: updatedRate});
};

const updateFruit = async(req,res) => {
  const fruitID = req.params.id;
  const {name,color} = req.body;

  const fruit = await Fruit.findByIdAndUpdate(fruitID, {
    name: name,
    color: color
  });

  const updatedFruit = await Fruit.findById(fruitID);
  res.json({fruit: updatedFruit})
}

const updateCar = async(req,res) => {
  const carID = req.params.id;
  const {make,model} = req.body;

  const car = await Car.findByIdAndUpdate(carID, {
    make: make,
    model: model
  });

  const updatedCar = await Car.findById(carID);
  res.json({car: updatedCar})
}

const deleteNote = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const noteId = req.params.id
  // --------------------------------(1)
  await Note.findByIdAndDelete(noteId)
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

const deleteRating = async(req,res) => {
    const ratingID = req.params.id;

    await Rating.findByIdAndDelete(ratingID);

    res.json({success: "Record has been deleted successfully"});
}

const deleteFruit = async(req,res) => {
  const fruitID = req.params.id;

  await Fruit.findByIdAndDelete(fruitID);
  res.json({success: "Record has been deleted successfully"})
}

const deleteCar = async(req,res) => {
  const carID = req.params.id;
  console.log(carID)
  await Car.findByIdAndDelete(carID);
  res.json({success: "Record has been deleted successfully"});
}

module.exports = {
    fetchAllNotes,
    fetchAllRatings,
    fetchAllFruit,
    fetchAllCars,
    fetchNote,
    fetchRating,
    fetchFruit,
    fetchCar,
    createNote,
    createRating,
    createFruit,
    createCar,
    updateNote,
    updateRating,
    updateFruit,
    updateCar,
    deleteNote,
    deleteRating,
    deleteFruit,
    deleteCar
}