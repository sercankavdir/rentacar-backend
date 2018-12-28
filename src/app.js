const express = require('express')
const cors = require('cors')
const app = express()
const sendMail = require('./util')

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

var cars =
    {
        cars: [
        {
            name:'Renault Capture 1.5DCI',
            img: "https://www.avis.com.tr/assets/images/Car/A.png",
            price: 214,
            seatNumber: 4,
            gear: 'Manuel',
            climate: 'Var',
            fuelType: 'Dizel'
        },
        {
            name:'opel',
            img: "https://www.avis.com.tr/assets/images/Car/O.png",
            price: 180,
            seatNumber: 4,
            gear: 'Manuel',
            climate: 'Var',
            fuelType: 'Dizel'
        },
        {
            name:'opel',
            img: "https://www.avis.com.tr/assets/images/Car/H.png",
            price: 120,
            seatNumber: 4,
            gear: 'Manuel',
            climate: 'Var',
            fuelType: 'Dizel'
        },
        ]
    }

app.get('/getCars', (req,res) => {
    res.send(cars)
})

app.post('/addCar', (req,res) => {
    cars.cars.push(req.body)
    res.sendStatus(200)
})

app.post('/rentCar', (req,res) => {
    sendMail(req.body.form, req.body.carData)
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('Server has started in http://localhost:3000/')
})
