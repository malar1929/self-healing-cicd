const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Self-Healing CI/CD Application - Version 2");
});

app.get("/health", (req, res) => {
    res.status(500).json({
        status: "unhealthy",
        version: "v2"
    });
});
app.listen(PORT, () => {
    console.log("Application running on http://localhost:3000");
});