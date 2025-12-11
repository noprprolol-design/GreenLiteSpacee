import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hash });

  res.json({ msg: "REGISTER SUCCESS" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "EMAIL NOT FOUND" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.json({ msg: "WRONG PASSWORD" });

  res.json({ msg: "LOGIN SUCCESS", user });
});

export default router;
