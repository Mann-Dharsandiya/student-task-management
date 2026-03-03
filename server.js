const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    tasks.push(req.body);
    res.json({ message: "Task Added" });
});

app.delete("/tasks/:index", (req, res) => {
    tasks.splice(req.params.index, 1);
    res.json({ message: "Task Deleted" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});