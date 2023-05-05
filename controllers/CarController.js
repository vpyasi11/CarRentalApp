const CarModel = require("../models/CarModel");
const UserModel = require("../models/CarModel");

///////////////////////

const registerCar = async (req, res) => {
  const { company, image, model, price } = req.body;
  console.log(company, image, model, price);
  let userobj = {
    company: company,
    image: image,
    model: model,
    price: price,
  };

  try {
    let data = await CarModel(userobj).save();
    if (data) {
      return res.json({
        message: "data inserted successfully",
      });
    }
    return res.json({
      message: "data not inserted",
    });
  } catch (error) {
    return res.json({
      message: "some error",
    });
  }
};

//////////////////////////

const findCarByCompay = async (req, res) => {
  const { company } = req.body;
  try {
    const data = await CarModel.find({ company });
    console.log(data);

    if (data.length !== 0) {
      console.log("Inside Find");
      return res.send(data);
    }
    return res.json({
      message: "Please Enter Company name Properly",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "error",
    });
  }
};

const findCarByModel = async (req, res) => {
  const { model } = req.body;
  try {
    const data = await CarModel.find({ model });
    console.log(data);

    if (data.length !== 0) {
      console.log("Inside Find");
      return res.send(data);
    }
    return res.json({
      message: "Please Enter Company name Properly",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "error",
    });
  }
};

const showAllCars = async (req, res) => {
  const { company } = req.body;
  try {
    const data = await CarModel.find();
    return res.send(data);
  } catch (error) {
    return res.json({
      message: "error",
    });
  }
};
module.exports = {
  findCarByCompay,
  showAllCars,
  findCarByModel,
  registerCar,
};
