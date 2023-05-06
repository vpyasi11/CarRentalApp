const BookingModel = require("../models/bookinModel");

const registerController = async (req, res) => {
    const { car_id, renter_id, owner_id } = req.body;
    console.log(car_id, renter_id, owner_id);
    let userobj = {
        car_id: car_id,
        renter_id: renter_id,
        owner_id: owner_id,
        status: "booked",

    };

    try {

        let data = await BookingModel(userobj).save();
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

const removeBooking = async (req, res) => {
    const { car_id } = req.body;
    try {
        const data = await BookingModel.find({ car_id });
        if (data.length !== 0) {
            // console.log(data)

            const result = await BookingModel.findOneAndUpdate(
                { car_id: car_id },
                { $set: { status: "available" } }
            );
            if (result) {

                return res.json({
                    message: `Thanks for riding with us.`,
                });
            } else {

                return res.json({
                    message: `No booking found`,
                });
            }
        }
        return res.json({
            message: `error`,
        });
    }


    catch (error) {
        return res.json({
            message: "error",
        });
    }
};

const findBooking = async (req, res) => {
    const { car_id } = req.body;
    try {
        const data = await BookingModel.find({ car_id }).populate("car_id").populate("renter_id");
        console.log(data);

        if (data.length !== 0) {
            return res.send(data);
        }
        return res.json({
            message: "Incorrect data",
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            message: "error",
        });
    }
};

const showAll = async (req, res) => {
    try {
        const data = await BookingModel.find();
        return res.send(data);
    } catch (error) {
        return res.json({
            message: "error",
        });
    }
};

const getStatus = async (req, res) => {
    const { car_id } = req.body;
    try {
        const data = await BookingModel.find({ car_id });
        return res.send(data[0].status);
    } 
    catch (error) {
        return res.json({
            message: "error",
        });
    }
}

module.exports = {
    registerController,
    removeBooking,
    findBooking,
    showAll,
    getStatus 
};