const express = require("express");
const router = express.Router();
// const config = require("config")
const Listing = require("../../models/Listing");

router.post("/", (req,res) => {
    const {subject, course, title, author, price } = req.body;
    Listing.create(req.body).then(listing => res.json(listing));
});

module.exports = router;