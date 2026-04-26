import express from "express";
import { listCars, getCar, createCar } from "../controllers/carsController.js";

const router = express.Router();

router.get("/", listCars);
router.get("/:id", getCar);
router.post("/", createCar);

export default router;
