const express = require("express");

const Feedback = require("../models/Feedback");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, feedbackText } = req.body;

    const existingFeedback =
      await Feedback.findOne({ userId });

    if (existingFeedback) {
      return res.status(400).json({
        message:
          "Feedback already exists. Use update."
      });
    }

    const feedback = await Feedback.create({
      userId,
      feedbackText
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/all", async (req, res) => {
  const feedbacks = await Feedback.find()
    .populate("userId", "username email");

  res.json(feedbacks);
});

router.get("/:userId", async (req, res) => {
  try {
    const feedback = await Feedback.findOne({
      userId: req.params.userId
    });

    res.json(feedback);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const { feedbackText } = req.body;

    const updatedFeedback =
      await Feedback.findOneAndUpdate(
        { userId: req.params.userId },
        { feedbackText },
        { new: true }
      );

    res.json({
      message: "Feedback Updated",
      updatedFeedback
    });
  } catch (error) {
    res.status(500).json(error);
  }
});




router.delete("/:id", async (req, res) => {

  await Feedback.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted Successfully"
  });
});

router.delete("/delete-all", async (req, res) => {
  await Feedback.deleteMany({});
  res.json({ message: "All feedback deleted" });
});

module.exports = router;