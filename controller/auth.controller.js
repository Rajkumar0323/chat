import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client.js";
import { sendOtpEmail } from "../services/email.service.js";
import { generateOtp } from "../utils/otp.js  ";

export const signup = async (req, res) => {
  const { name, mobile, address, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await prisma.owners.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = await prisma.owners.create({
      data: { name, mobile, address, email, password: hashedPassword },
    });

    const otp = generateOtp();
    await sendOtpEmail(email, otp);

    res
      .status(201)
      .json({ message: "Signup successful. Please verify your email." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.owners.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
