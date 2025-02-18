const flashUser = require("../models/User");

//Post Login Route
module.exports.postLoginRoute = async (req, res) => {
  res.redirect("/login");
};

//  SignUpUser Route
module.exports.postSignUpRoute = async (req, res) => {
  console.log(req.body);
  try {
    let { username, email, password } = req.body;
    const newUser = new flashUser({ email, username });
    console.log("newUsers : ", newUser);
    const registeredUser = await flashUser.register(newUser, password);
    console.log("Registered Users : ", registeredUser);
    res.redirect("/login");
  } catch (err) {
    console.log(err.message);
    res.redirect("/login");
  }
};

// Get FlashCard
module.exports.getFlashcards = async (req, res) => {
  const flashcards = await flashUser.find({
    nextReviewDate: { $lte: new Date() },
  });
  res.json(flashcards);
};

//CreateFlashCard
module.exports.createFlashcard = async (req, res) => {
  const { question, answer } = req.body;
  const flashcard = new flashUser({ question, answer });
  await flashUser.save();
  res.json(flashcard);
};

//UpdateFlashCard
module.exports.updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { correct } = req.body;
  let flashcard = await flashUser.findById(id);
  if (correct) flashcard.box = Math.min(5, flashcard.box + 1);
  else flashcard.box = 1;
  flashcard.nextReviewDate = new Date(
    Date.now() + flashcard.box * 24 * 60 * 60 * 1000
  );
  await flashcard.save();
  res.json(flashcard);
};

//DeleteFlashCard
module.exports.deleteFlashcard = async (req, res) => {
  await flashUser.findByIdAndDelete(req.params.id);
  res.json({ message: "Flashcard deleted" });
};
