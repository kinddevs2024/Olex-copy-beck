import {
  getCars,
  findCarById,
  addCar,
  updateCar,
  deleteCar,
} from "../data/cars.js";

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
  const newCar = addCar(req.body);
  res.status(201).json(newCar);
}

export function editCar(req, res) {
  const updatedCar = updateCar(req.params.id, req.body);

  if (!updatedCar) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.json(updatedCar);
}

export function removeCar(req, res) {
  const wasDeleted = deleteCar(req.params.id);

  if (!wasDeleted) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.status(204).send();
}
