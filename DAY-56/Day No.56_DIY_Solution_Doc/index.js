const { RestroRoutes } = require("./routes/RestroRoutes");

const app = require("express")();
const PORT = 3900;


app.get("/", (req, res) => {
    res.status(200).send("Home Page 🏠");
});

app.use("/api", RestroRoutes);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});