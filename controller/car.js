const carModel = require('../models/carModel')

const addCar = async (req, res, next) => {
    try {
        const car = new carModel(req.body);
        await car.save();
        res.status(200).json({
            message: "Successfully added",
            car: car
        });
    }
    catch (error) {
        next(error);
    }
}

const getCarWithID = async (req, res, next) => { // Added next as a parameter
    try {
        const car = await carModel.findById(req.params.id);
        if (!car) { // Fixed: used correct variable
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({
            message: "Car found",
            car: car
        });
    }
    catch (error) {
        next(error);
    }
}

const getCars = async (req, res, next) => { // Added next as a parameter
    try {
        const cars = await carModel.find(); 
        if (!cars) {
            return res.status(404).json({ message: "Cars not found" });
        }
        res.status(200).json({
            message: "Cars found",
            cars: cars
        });
    }
    catch (error) {
        next(error);
    }
}

const updateCar = async (req, res, next) => { // Added next as a parameter
    try {
        const car = await carModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Added req.body and { new: true }
        if (!car) { // Fixed: used correct variable
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({
            message: "Car updated successfully",
            car: car
        });
    }
    catch (error) {
        next(error);
    }
}

const deleteCarwithID = async (req, res, next) => { // Added next as a parameter
    try {
        const car = await carModel.findByIdAndDelete(req.params.id);
        if (!car) { // Fixed: used correct variable
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({
            message: "Car deleted successfully",
            car: car
        });
    }
    catch (error) {
        next(error);
    }
}

module.exports = { addCar, getCarWithID, getCars, updateCar, deleteCarwithID };
