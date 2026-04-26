const cars = [
  {
    id: "1",
    title: "Olex Premium GT",
    price: "$189,000",
    category: "Sport",
    description:
      "A premium performance car with crisp minimal design and luxury detail.",
    specs: [
      { label: "Engine", value: "V8 Twin Turbo" },
      { label: "Year", value: "2025" },
      { label: "Mileage", value: "4,200 km" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
    ],
  },
  {
    id: "2",
    title: "Olex Electric XC",
    price: "$129,000",
    category: "Electric",
    description: "Electric luxury crossover with modern premium comfort.",
    specs: [
      { label: "Range", value: "510 km" },
      { label: "Year", value: "2024" },
      { label: "Mileage", value: "1,800 km" },
      { label: "Fuel", value: "Electric" },
      { label: "Transmission", value: "Automatic" },
    ],
  },
  {
    id: "3",
    title: "Olex Luxury SUV",
    price: "$149,000",
    category: "SUV",
    description:
      "A high-end SUV tailored for premium buyers and executive use.",
    specs: [
      { label: "Engine", value: "3.0L V6" },
      { label: "Year", value: "2024" },
      { label: "Mileage", value: "2,200 km" },
      { label: "Fuel", value: "Hybrid" },
      { label: "Transmission", value: "Automatic" },
    ],
  },
];

export function getCars() {
  return cars;
}

export function findCarById(id) {
  return cars.find((car) => car.id === id);
}

export function addCar({ title, price, category, description, specs }) {
  const nextId = String(cars.length + 1);
  const newCar = {
    id: nextId,
    title: title || "New premium listing",
    price: price || "$0",
    category: category || "Luxury",
    description: description || "A premium vehicle description.",
    specs: Array.isArray(specs)
      ? specs
      : [
          { label: "Year", value: "2025" },
          { label: "Mileage", value: "0 km" },
        ],
  };
  cars.push(newCar);
  return newCar;
}
