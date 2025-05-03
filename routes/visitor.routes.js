import express from "express";
import { addVisitor, getVisitors } from "../controller/visitor.controller.js";

const router = express.Router();

router.post("/visitor-entry", addVisitor);
router.get("/visitors/:ownerId", getVisitors);

export default router;
