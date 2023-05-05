const express = require("express");
const CarRouter = express.Router();

const {
  showAllCars,
  findCarByModel,
  findCarByCompay,
  registerCar,
} = require("../controllers/CarController");

// const {rights,userbyrole} = require("../controllers/Rightcontroller")
// UserRouter.post("/right",rights)
// UserRouter.post("/getuserbyrole",userbyrole)

CarRouter.post("/carByCompany", findCarByCompay);
CarRouter.post("/carByModel", findCarByModel);

CarRouter.post("/allCars", showAllCars);

CarRouter.post("/registerCar", registerCar);

module.exports = CarRouter;
