const mongoose = require("mongoose");
const initdata = require("./data");
const flashUser = require("../models/User");

const MONGO_URL = "mongodb://127.0.0.1:27017/flashCard";

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await flashUser.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "6776b7178edf626ea27afd9b",
  }));
  await flashUser.insertMany(initdata.data);
  console.log("Data was saved ...");
};

initDB();
