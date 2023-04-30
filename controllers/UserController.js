const UserModel = require("../models/UserModel")

const registerController = async (req, res) => {
    const { name, email, password, role } = req.body
    console.log(name, email, password, role)
    let userobj = {
        name: name,
        password: password,
        email: email,
        role: role
    }

    try {
        const mail = await UserModel.find({ email })

        if (mail.length !== 0) {
            console.log(mail)
            res.json({
                message: `${email} already exist`
            })
        }
        else {
            let data = await UserModel(userobj).save()
            if (data) {
                return res.json({
                    message: "data inserted successfully"
                })
            }
            return res.json({
                message: "data not inserted"
            })
        }
    }
    catch (error) {
        return res.json({
            message: "some error"
        })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    const userpass = {password}
    try {
        const data = await UserModel.find({ email })
        if (data.length !== 0) {
            // console.log(data)
            console.log(userpass.password, data[0].password)
            if(userpass.password == data[0].password){
                return res.json({
                    message: `${data[0].name} logged in successfully`
                })
            }
            return res.json({
                message: `Incorrect password`
            })
        }
        
        return res.json({
            message: "User doesn't exist or Incorrect email"
        })
    }
    catch (error) {
        return res.json({
            message: "error"
        })
    }
}

module.exports = {
    registerController,
    userLogin
}