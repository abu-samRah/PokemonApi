const express = require("express");

const pokemonRouter = require("./routes/pokemon")
const app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("holas")
});

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
    console.log("listining " +port)
})