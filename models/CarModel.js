const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    company : {
        type: String,
        required:true
    },
    image : {
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    renter_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps:true
}
);

const CarModel = mongoose.model('car', CarSchema)

module.exports = CarModel