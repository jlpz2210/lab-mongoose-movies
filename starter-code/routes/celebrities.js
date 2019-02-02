const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/Celebrity")

router.get("/new", (req, res) => {
  res.render("celebrities/new")
})

router.get("/", (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", {celebrities})
    })
})

router.get("/:_id", (req, res) => {
  Celebrity.findById(req.params._id)
    .then(celeb => {
      res.render("celebrities/detail", {celeb})
    })
})

router.get("/:_id/edit", (req, res) => {
  Celebrity.findById(req.params._id)
    .then(celeb =>{
      res.render("celebrities/form", {celeb})
    })
})

router.post("/", (req, res) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect("/celebrities/")
    })
})

router.post("/:_id/delete", (req, res) => {
  Celebrity.findByIdAndDelete(req.params._id)
    .then(() => {
      res.redirect("/celebrities/")
    })
})

router.post("/:_id", (req, res) => {
  Celebrity.findByIdAndUpdate(req.params._id, {$set: req.body}, {new: true})
    .then(celeb =>{
      res.redirect(`/celebrities/${celeb._id}`)
    })
})

module.exports = router;