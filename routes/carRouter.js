const express=require('express')

const router=express.Router()

const{
    addCar, getCarWithID, getCars, updateCar, deleteCarwithID

}=require('../controller/car')

//add Car

router.post('/addCar',addCar)

//get car with id

router.get('/carWithID/:id',getCarWithID)

//get all cars

router.get('/allCars',getCars)

//update car

router.put('/updateCar/:id',updateCar)

// delete car

router.delete('/deletecar/:id',deleteCarwithID)

module.exports=router

