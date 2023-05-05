const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car"
    },
    renter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status:{
        type:String,
        required:true
    }
    
}, {
    timestamps: true
}
);

const BookingModel = mongoose.model('Booking', BookingSchema)

module.exports = BookingModel