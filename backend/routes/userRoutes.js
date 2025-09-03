import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/me", protect, async (req, res) => {

  res.json({ user: req.user });
});

export default router;
