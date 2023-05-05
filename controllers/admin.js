const UserModel = require("../models/UserModel");

const registerController = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);
  let userobj = {
    name: name,
    password: password,
    email: email,
    role: role,
  };

  try {
    const mail = await UserModel.find({ email });

    if (mail.length !== 0) {
      console.log(mail);
      res.json({
        message: `${email} already exist`,
      });
    } else {
      let data = await UserModel(userobj).save();
      if (data) {
        return res.json({
          message: "data inserted successfully",
        });
      }
      return res.json({
        message: "data not inserted",
      });
    }
  } catch (error) {
    return res.json({
      message: "some error",
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const userpass = { password };
  try {
    const data = await UserModel.find({ email });
    if (data.length !== 0) {
      // console.log(data)
      console.log(userpass.password, data[0].password);
      if (userpass.password == data[0].password) {
        return res.json({
          message: `${data[0].name} logged in successfully`,
        });
      }
      return res.json({
        message: `Incorrect password`,
      });
    }

    return res.json({
      message: "User doesn't exist or Incorrect email",
    });
  } catch (error) {
    return res.json({
      message: "error",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const data = await UserModel.findOne({ email: email });

    if (data) {
      const newPass = password;
      await UserModel.findOneAndUpdate(
        { email: email },
        { $set: { password: newPass } }
      );
      res.json({
        message: "Password Updated Sucessfully",
      });
    } else {
      res.json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const findUser = async (req, res) => {
  const { email } = req.body;
  try {
    const data = await UserModel.find({ email });
    if (data) {
      // console.log(data)
      // console.log(userpass.password, data[0].password);

      const query = { email: email };
      const result = await UserModel.findOneAndDelete(query);
      if (result) {
        console.log("Successfully deleted one document.::Result=>", result);
        return res.json({
          message: `
            User Details:
            Name: ${result.name}
            Role: ${result.role}2         


          `,
        });
      }
      return res.json({
        message: `Incorrect email`,
      });
    }

    return res.json({
      message: "User doesn't exist or Incorrect email",
    });
  } catch (error) {
    return res.json({
      message: "error",
    });
  }
};

module.exports = {
  findUser,
};