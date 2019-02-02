require("dotenv").config()
let mongoose = require("mongoose")

mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let Celebrity = require("../models/Celebrity")
let Movie = require("../models/Movie")

let celeb = [
  {
    name: "Adam Sandler",
    occupation: "Actor",
    catchPhrase: "Click"
  },
  {
    name: "Ewan McGregor",
    occupation: "Actor",
    catchPhrase: "Hello There"
  },
  {
    name: "Ed Sheeran",
    occupation: "Singer",
    catchPhrase: "Taco friday"
  }
]
console.log(celeb)

let movie = [
  {
    title: "Click",
    genre: "Comedy",
    plot: "A weird movie with a remote control"
  },
  {
    title: "Star Wars: Episode II",
    genre: "Action",
    plot: "A movie with a lot of spaceships"
  },
  {
    title: "Songwriter",
    genre: "Documentary",
    plot: "How the best singer came out with one of his albums"
  }
]

Movie.create(movie).then(()=>{
  console.log("listo")
})