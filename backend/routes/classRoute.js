const router = require("express").Router();

let Category = require("../Schema/classSchema");

router.route("/").get((req, res) => {
  Category.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("error" + err));
});

// add record
router.route("/add-class").post((req, res) => {
  const { classField, sectionField } = req.body;
  const updatedRec = new Category({ classField, sectionField });
  updatedRec
    .save()
    .then(() => res.json("class added"))
    .catch((err) => res.status(400).json("Err " + err));
});

module.exports = router;
