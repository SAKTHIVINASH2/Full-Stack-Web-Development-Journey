const fs = require("fs");
const path = require("path");

const AllRestroModel = () => {
  fs.readFile(
    path.join(__dirname, "./Restaurants.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error reading restaurant data:", err);
        return 0;
      }
      try {
        const restaurants = JSON.parse(data);
        return restaurants;
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
    }
  );
};

module.exports = { AllRestroModel };
