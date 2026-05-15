import express from "express";
import {
  listCars,
  getCar,
  createCar,
  editCar,
  removeCar,
} from "../controllers/carsController.js";

const router = express.Router();

router.get("/", listCars);
router.get("/:id", getCar);
router.post("/", createCar);
router.put("/:id", editCar);
router.delete("/:id", removeCar);

export default router;
