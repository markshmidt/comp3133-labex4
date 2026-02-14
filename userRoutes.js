const express = require("express");
const router = express.Router();
const User = require("./User");

// POST /users
router.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: savedUser
    });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;
