const express = require('express');
const router  = express.Router();

let Movie = require("../models/Movie")

router.get("/new", (req, res) => {
  res.render("movies/new")
})

router.get("/", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", {movies})
    })
})

router.get("/:_id", (req, res) => {
  Movie.findById(req.params._id)
    .then(movie => {
      res.render("movies/detail", {movie})
    })
})

router.get("/:_id/edit", (req, res) => {
  Movie.findById(req.params._id)
    .then(movie => {
      res.render("movies/form", {movie})
    })
})

router.post("/", (req, res) => {
  Movie.create(req.body)
    .then(() => {
      res.redirect("/movies")
    })
})

router.post("/:_id/delete", (req, res) => {
  Movie.findByIdAndDelete(req.params._id)
    .then(() => {
      res.redirect("/movies")
    })
})

router.post("/:_id", (req, res) => {
  Movie.findByIdAndUpdate(req.params._id, {$set: req.body}, {new: true})
    .then(movie => {
      res.redirect(`/movies/${movie._id}`)
    })
})


module.exports = router;