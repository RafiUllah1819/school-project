const router = require("express").Router();

let ClassModal = require("../Schema/classSchema");

router.route("/").get((req, res) => {
  ClassModal.find()
    .then((classRecords) => res.json(classRecords))
    .catch((err) => res.status(400).json("error" + err));
});

// add record
router.route("/add-class").post(async (req, res) => {
  const data = await ClassModal.find();
  const { classField, sectionField } = req.body;
  const newClass = new ClassModal(req.body);
  try {
    if (data.length <= 0) {
      const updatedClass = await newClass.save();
      console.log("updated class", updatedClass);
      res.status(201).send("class added successfully");
    }
    const isFound = data.find((item) => item.classField === classField);
    if (!isFound) {
      const updatedClass = await newClass.save();
      console.log("is not found", updatedClass);
      res.status(201).send("class added successfully 2");
    }
    data.forEach(async (item) => {
      try {
        if (
          item.classField === classField &&
          !item.sectionField.includes(sectionField)
        ) {
          await ClassModal.findByIdAndUpdate(
            item._id,
            { sectionField: [...item.sectionField, sectionField] },
            { new: true }
          );
          await res.status(201).send("New section added");
        }
      } catch (error) {
        console.log("Eror", error);
      }
    });
  } catch (error) {
    console.log("error: ", error);
  }

  // data.forEach(async (item) => {
  //   if (
  //     item.classField === classField &&
  //     !item.sectionField.includes(sectionField)
  //   ) {
  //     console.log("there is match");
  //     return await ClassModal.findByIdAndUpdate(
  //       item._id,
  //       {
  //         sectionField: [...item.sectionField, sectionField],
  //       },
  //       { new: true }
  //     );
  //   }
  // });
});

// router.route("/:id").get((req, res) => {
//   Category.findById(req.params.id)
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("Error " + err));
// });

module.exports = router;
