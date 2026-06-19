import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middlewares/sendMail.middleware.js";
import TryCatch from "../middlewares/TryCatch.js";

export const register = TryCatch(async (req, res) => {
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
      user: { name, email, password: hashedPassword },
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
});

export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;

  const verify = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);

  if (!verify) {
    return res.status(400).json({
      message: "OTP Expired",
    });
  }

  if (verify.otp !== otp) {
    return res.status(400).json({
      message: "Wrong OTP",
    });
  }

  await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
  });

  res.json({
    message: "User Registered",
  });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({
      message: "No user registered with this email",
    });

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword)
    return res.status(400).json({
      message: "Wrong password",
    });

  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

export const myProfile = TryCatch(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized. Please log in.",
    });
  }

  const user = await User.findById(req.user._id);

  res.json({ user });
});
