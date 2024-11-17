const express = require("express");
const { allRestro } = require("../controllers/Restaurants");

const RestroRoutes = express.Router();

RestroRoutes.route("/all-restro").get(allRestro);

module.exports = {RestroRoutes}