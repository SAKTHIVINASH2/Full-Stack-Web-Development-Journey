const express = require('express')
const restaurantdata = require("./restaurants.json")
const locationdata = require("./locations.json")
const mealdata = require("./MealTypes.json")
const app = express();
const port = 8900;
app.get('/',(req,res)=>{
    res.send('<h1> welcome to express server<h1>')
})

app.get('/getAllrestaurants',(req,res)=>{
            res.send(restaurantdata)
        });

app.get('/getAlllocation',(req,res)=>{
        res.send(locationdata)
    });

app.get('/getAllmeal',(req,res)=>{
    res.send(mealdata)
});

app.get('/getRestaurantsByLocation/:city', (req, res) => {
    const city = req.params.city;
    const filteredRestaurants = restaurantdata.filter(restaurant => restaurant.city.toLowerCase() === city.toLowerCase());
    res.json(filteredRestaurants);
  });

app.listen(port,()=>{
    console.log('server is running on port'+port);
})