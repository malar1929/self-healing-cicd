const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Self-Healing CI/CD Application - Version 1");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        version: "v1"
    });
});

app.listen(PORT, () => {
    console.log("Application running on http://localhost:3000");
});