import express from "express";
const router = express.Router();

const cars = [
  {
    id: "1",
    title: "No-name GT 2025",
    price: "$189,000",
    category: "Sport",
    specs: {
      engine: "V8 Twin Turbo",
      year: "2025",
      mileage: "4,200 km",
      fuel: "Petrol",
      transmission: "Automatic",
    },
  },
  {
    id: "2",
    title: "No-name Electric XC",
    price: "$129,000",
    category: "Electric",
    specs: {
      range: "510 km",
      year: "2024",
      mileage: "1,800 km",
      fuel: "Electric",
      transmission: "Automatic",
    },
  },
];

router.get("/", (req, res) => {
  res.json(cars);
});

router.get("/:id", (req, res) => {
  const car = cars.find((item) => item.id === req.params.id);
  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }
  res.json(car);
});

router.post("/", (req, res) => {
  const { title, price, category, specs } = req.body;
  const newCar = {
    id: String(cars.length + 1),
    title: title || "New premium car",
    price: price || "$0",
    category: category || "Luxury",
    specs: specs || {},
  };
  cars.push(newCar);
  res.status(201).json(newCar);
});

export default router;
