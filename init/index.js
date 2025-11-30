const mongoose = require("mongoose");
const data = require("./data.js");
const Task = require("../models/task");

const mongo_url = "mongodb://127.0.0.1:27017/taskmanager";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongo_url);
}    

const initDB = async () => {
    await Task.deleteMany({});
    await Task.insertMany(data.data);
    console.log("data was initialized");
};

initDB();