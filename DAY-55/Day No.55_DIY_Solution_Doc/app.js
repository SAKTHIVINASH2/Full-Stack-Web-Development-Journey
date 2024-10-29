const express = require('express')
const FileSystem = require('fs');
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
app.post('/postRestaurants',(req,res)=>{
    const restaurant = req.body;
    const filepath = 'restaurants.json';
    FileSystem.readFile(filepath, (err, data) => {
        if (err) {
            if(err.code === 'ENOENT') {
                FileSystem.writeFile(filepath, JSON.stringify([restaurantdata], null,2),(err) => {
                    if (err) {
                        return res.status(500).json({message:'Error writing to file'});
                    }
                    res.status(201).json({message: 'Data Posted Successfully'});
                });
            }else {
                return res.status(500).json({message:'Error reading file'});
            }
        }else{
            let existingData;
            try{
                existingData = JSON.parse(data);
            }catch(error){
                existingData = [];
            }
            existingData.push(restaurantdata);
            FileSystem.appendFile(filepath, JSON.stringify(existingData, null,2),(err) => {
                if (err) {
                    return res.status(500).json({message:'Error writing to file'});
                }
                res.status(201).json({message: 'Data Posted Successfully'});
            });
        }

    });


});

app.listen(port,()=>{
    console.log('server is running on port'+port);
})