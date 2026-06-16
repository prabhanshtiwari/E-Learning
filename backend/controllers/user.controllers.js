import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middlewares/sendMail.middleware.js";

export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = {
      name,
      email,
      password: hashedPassword,
    };

    const otp = Math.floor(100000 + Math.random() * 900000);

    const activationToken = jwt.sign(
      {
        newUser: { name, email, password: hashedPassword },
        otp,
      },
      process.env.ACTIVATION_SECRET,
      {
        expiresIn: "5m",
      },
    );

    const data = {
      name,
      otp,
    };

    await sendMail(email, "E learning Verification", data);

    res.status(200).json({
      message: "OTP sent to your email address",
      activationToken, // Sent to client to pass into /verify endpoint next
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
