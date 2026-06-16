import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token)
      return res.status(500).json({
        message: "Dont have token to authenticate",
      });

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "User not authenticated",
    });
  }
};
