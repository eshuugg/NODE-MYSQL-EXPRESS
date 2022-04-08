const express = require('express');
const cors = require('cors');
const router = require('./routes/employee.routes')

const app = express();

app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: 'Welcome to IT world' });
});

app.use("/", router);


const db = require("./models");

db.sequelize.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});