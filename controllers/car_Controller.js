// const carModel = require("../models/CarModel");
const CarModel = require("../models/CarModel");

const carDetails = async (req, res) => {
  const { company, image, model, price, rentarid } = req.body;
  console.log(company, image, model, price, rentarid);
  // res.json({ message: "Data recieved" });
  let userobj = {
    company: company,
    image: image,
    model: model,
    price: price,
    rentar_id: rentarid
  };
  // method to store the data in mongodb;
  try {
    let data = await CarModel(userobj).save();
    if (data) {
      return res.json({
        message: "data inserted successfully",
      });
    }
  } catch {
    return res.json({
      message: "Data not inserted",
    });
  }
};

const addCars = async (req, res) => {
  try {
    const cars = new carModel({
      company: req.body.company,
      image: req.body.image,
      model: req.body.model,
      price: req.body.price,
      renter_id: req.body.renter_id
    });
    const carlist = await cars.save();

    res.status(200).send({ success: true, msg: "Cars are added", data: carlist });
  } catch (error) { 
    res.json({ message: "Cars are not adding"})
  }
};
const updateCars = async (req, res) => {
  try {
    const dataUpdate = new carModel({
      company: req.body.company,
      image: req.body.image,
      model: req.body.model,
      price: req.body.price,
      renter_id: req.body.renter_id
    }) ;
    const dataUpdates =await dataUpdate.updateMany();

    res.status(200).send({ success: true, msg:"Updated", data: dataUpdates})
  } catch (error) {
    
  }
};

// const removeCar = async () => {};

module.exports = {
  carDetails,
  addCars,
  updateCars
};
