const express = require("express");
const UserRouter = express.Router();

const {
  registerController,
  userLogin,
  resetPassword,
  removeUser,
  updateUser,
} = require("../controllers/UserController");

// const {rights,userbyrole} = require("../controllers/Rightcontroller")
// UserRouter.post("/right",rights)
// UserRouter.post("/getuserbyrole",userbyrole)

UserRouter.post("/register", registerController);
UserRouter.post("/login", userLogin);
UserRouter.post("/resetPassword", resetPassword);
UserRouter.post("/removeUser", removeUser);
UserRouter.post("/updateUser", updateUser);

module.exports = UserRouter;
