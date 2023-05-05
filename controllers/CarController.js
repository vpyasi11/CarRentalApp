const CarModel = require("../models/CarModel")

const carController = async (req, res) => {
    const { company, image, model, price, owner_id } = req.body
    console.log(company, image, model, price, owner_id)
    let userobj = {
        company: company,
        image: image,
        model: model,
        price: price,
        owner_id: owner_id
    }

    try {
        let data = await CarModel(userobj).save()
        if (data) {
            return res.json({
                message: "data inserted successfully"
            })
        }
        return res.json({
            message: "data not inserted"
        })

    }
    catch (error) {
        return res.json({
            message: "some error"
        })
    }
}

module.exports = carController