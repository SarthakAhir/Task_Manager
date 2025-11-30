const express = require("express");
const app = express();
const port = 8080
const path = require("path");
const mongoose = require("mongoose");
const Task = require("./models/task");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

const mongo_url = "mongodb://127.0.0.1:27017/taskmanager";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

//Index
app.get("/tasks", async (req, res) => {
    const allTasks = await Task.find({});
    res.render("tasks/index.ejs", { tasks: allTasks });
});

//new
app.get("/tasks/new", (req, res) => {
    res.render("tasks/new.ejs");
});

// Show Routes
app.get("/tasks/:id", async (req, res) => {
    let {id} = req.params;
    const task = await Task.findById(id);
    res.render("tasks/show.ejs", { task });
});

app.post("/tasks", async (req, res) => {

    const newtask = new Task(req.body.task);
    await newtask.save();
    res.redirect("/tasks");
});

// Delete Route
app.delete("/tasks/:id", async (req, res) => {
    let {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/tasks");
});

// Update status
app.put("/tasks/:id", async (req, res) => {
    let {id} = req.params;
    await Task.findByIdAndUpdate(id, {...req.body.task});
    res.redirect(`/tasks/${id}`);
});

app.listen(port, () => {
    console.log(`Server is running ${port}`);   
});