const express = require("express")
const UserRouter = express.Router()

// const { registerController,userLogin} = require("../controllers/UserController")
// const { carDetails, resetPassword } = require("../carRentalApp/CarRentalApp/controllers/userOfownerController");
// const  CarModel = require("../models/CarModel");
// const { addCars, updateCars, removeCar } = require("../controllers/userOfownerController");

// const {rights,userbyrole} = require("../controllers/Rightcontroller")
// UserRouter.post("/right",rights)
// UserRouter.post("/getuserbyrole",userbyrole)




// const express = require("express");
// const userRouter = express.Router();
// const { registerController,userController} = require("../controllers/userController");
// const { roles, userByRole } = require("../controllers/RightsController");
// const { resetPassword } = require("../../carRentalApp/CarRentalApp/controllers/car_Controller");
const { carDetails,updateCars } = require("../controllers/car_Controller")


// userRouter.post("/register", registerController)
// userRouter.post("/user", userController)
// userRouter.post("/role", roles)
// userRouter.post("/getUserByRole", userByRole)
UserRouter.post("/car", carDetails)
UserRouter.post("/carUpdate", updateCars)

// UserRouter.post("/register",registerController)
// UserRouter.post("/login",userLogin)
// // userRouter.post("/car", carDetails)
// userRouter.post("/reset", resetPassword)


module.exports = UserRouter