// const RightModel = require("../models/rightsmodel")

// const rights = async (req, res) => {
//     const { userid, role } = req.body
//     console.log(userid, role)
//     let userobj = {
//         user_id: userid,
//         role:role
//     }

//     try {
//         const mail = await RightModel.find({ email })

//         if (mail.length !== 0) {
//             console.log(mail)
//             res.json({
//                 message: `${email} already exist`
//             })
//         }
//         else {
//             let data = await RightModel(userobj).save()
//             if (data) {
//                 return res.json({
//                     message: "data inserted successfully"
//                 })
//             }
//             return res.json({
//                 message: "data not inserted"
//             })
//         }
//     }
//     catch (error) {
//         return res.json({
//             message: "some error"
//         })
//     }
// }

// const userbyrole = async(req,res) => {
//     const {id} = req.body
//     const roledata = await RightModel.find({_id:id}).populate("user_id")
//     res.send(roledata)
// }

// module.exports = {
//     rights,
//     userbyrole
// }