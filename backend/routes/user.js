const express = require("express");
const router = express.Router();
const userscontrollers = require("../controllers/user");
const passport = require("passport");

// Login Router
router.route("/auth/login").post(
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userscontrollers.postLoginRoute
);

//SignUp Route
router.route("/auth/signup").post(userscontrollers.postSignUpRoute);

router.get("/getFlashCard", userscontrollers.getFlashcards);
router.post("/createFlashCard", userscontrollers.createFlashcard);
router.put("/:id/UpdateFlash", userscontrollers.updateFlashcard);
router.delete("/:id", userscontrollers.deleteFlashcard);

module.exports = router;
