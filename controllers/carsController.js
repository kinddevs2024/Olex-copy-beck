import { getCars, findCarById, addCar } from "../data/cars.js";

export function listCars(req, res) {
  res.json(getCars());
}

export function getCar(req, res) {
  const car = findCarById(req.params.id);
  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }
  res.json(car);
}

export function createCar(req, res) {
  const { title, price, category, description, specs } = req.body;
  const newCar = addCar({ title, price, category, description, specs });
  res.status(201).json(newCar);
}
