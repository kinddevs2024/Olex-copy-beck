const cars = [
  {
    id: "1",
    title: "Chevrolet Cobalt 2023, автомат, 2 позиция",
    price: "178 000 000 сум",
    priceValue: 178000000,
    currency: "UZS",
    category: "Седаны",
    brand: "Chevrolet",
    model: "Cobalt",
    year: 2023,
    mileage: 24000,
    bodyType: "Седан",
    fuel: "Бензин",
    transmission: "Автомат",
    color: "Белый",
    condition: "Б/у",
    owners: "1 владелец",
    location: "Ташкент, Мирзо-Улугбекский район",
    publishedAt: "Сегодня 10:24",
    sellerType: "Частное лицо",
    sellerName: "Aziz",
    phone: "+998 90 123 45 67",
    promoted: "TOP",
    isOwn: true,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    description:
      "Автомобиль в хорошем состоянии. Салон чистый, ходовая без вложений. Есть кондиционер, камера заднего вида и полный комплект документов.",
    specs: [
      { label: "Марка", value: "Chevrolet" },
      { label: "Модель", value: "Cobalt" },
      { label: "Год выпуска", value: "2023" },
      { label: "Пробег", value: "24 000 км" },
      { label: "Топливо", value: "Бензин" },
      { label: "Коробка", value: "Автомат" },
    ],
  },
  {
    id: "2",
    title: "BYD Song Plus Champion 2024, гибрид",
    price: "32 500 у.е.",
    priceValue: 32500,
    currency: "USD",
    category: "Электромобили",
    brand: "BYD",
    model: "Song Plus",
    year: 2024,
    mileage: 1500,
    bodyType: "Кроссовер",
    fuel: "Гибрид",
    transmission: "Автомат",
    color: "Серый",
    condition: "Новая",
    owners: "Без владельцев",
    location: "Ташкент, Юнусабадский район",
    publishedAt: "Сегодня 09:12",
    sellerType: "Бизнес",
    sellerName: "Auto House Tashkent",
    phone: "+998 71 200 30 40",
    promoted: "VIP",
    isOwn: false,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
    description:
      "Новый гибридный кроссовер из салона. Гарантия, растаможен, возможна оплата перечислением и оформление в рассрочку.",
    specs: [
      { label: "Марка", value: "BYD" },
      { label: "Модель", value: "Song Plus" },
      { label: "Год выпуска", value: "2024" },
      { label: "Пробег", value: "1 500 км" },
      { label: "Топливо", value: "Гибрид" },
      { label: "Коробка", value: "Автомат" },
    ],
  },
  {
    id: "3",
    title: "Daewoo Nexia 2, 2015, газ/бензин",
    price: "77 000 000 сум",
    priceValue: 77000000,
    currency: "UZS",
    category: "Б/у авто",
    brand: "Daewoo",
    model: "Nexia",
    year: 2015,
    mileage: 168000,
    bodyType: "Седан",
    fuel: "Газ/бензин",
    transmission: "Механика",
    color: "Серебристый",
    condition: "Б/у",
    owners: "2 владельца",
    location: "Самарканд",
    publishedAt: "Вчера 18:40",
    sellerType: "Частное лицо",
    sellerName: "Bekzod",
    phone: "+998 93 555 11 22",
    promoted: "",
    isOwn: false,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    description:
      "Машина каждый день на ходу. Газ установлен официально. Есть мелкие косметические моменты, торг у капота.",
    specs: [
      { label: "Марка", value: "Daewoo" },
      { label: "Модель", value: "Nexia" },
      { label: "Год выпуска", value: "2015" },
      { label: "Пробег", value: "168 000 км" },
      { label: "Топливо", value: "Газ/бензин" },
      { label: "Коробка", value: "Механика" },
    ],
  },
  {
    id: "4",
    title: "Toyota Camry 70, 2021, полная комплектация",
    price: "Договорная",
    priceValue: 0,
    currency: "USD",
    category: "Бизнес авто",
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    mileage: 54000,
    bodyType: "Седан",
    fuel: "Бензин",
    transmission: "Автомат",
    color: "Черный",
    condition: "Б/у",
    owners: "1 владелец",
    location: "Ташкент, Яккасарайский район",
    publishedAt: "2 мая",
    sellerType: "Частное лицо",
    sellerName: "Dilshod",
    phone: "+998 99 777 88 99",
    promoted: "VIP",
    isOwn: false,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    description:
      "Camry 70 в максимальной комплектации. Бережная эксплуатация, не битая, обслуживание по регламенту.",
    specs: [
      { label: "Марка", value: "Toyota" },
      { label: "Модель", value: "Camry" },
      { label: "Год выпуска", value: "2021" },
      { label: "Пробег", value: "54 000 км" },
      { label: "Топливо", value: "Бензин" },
      { label: "Коробка", value: "Автомат" },
    ],
  },
];

export function getCars() {
  return cars;
}

export function findCarById(id) {
  return cars.find((car) => car.id === id);
}

export function addCar(carData) {
  const nextId = String(cars.length + 1);
  const newCar = {
    id: nextId,
    title: carData.title || "Новое объявление о продаже авто",
    price: carData.price || "Договорная",
    priceValue: carData.priceValue || 0,
    currency: carData.currency || "UZS",
    category: carData.category || "Легковые автомобили",
    brand: carData.brand || "",
    model: carData.model || "",
    year: carData.year || new Date().getFullYear(),
    mileage: carData.mileage || 0,
    bodyType: carData.bodyType || "",
    fuel: carData.fuel || "",
    transmission: carData.transmission || "",
    color: carData.color || "",
    condition: carData.condition || "Б/у",
    owners: carData.owners || "",
    location: carData.location || "Узбекистан",
    publishedAt: "Только что",
    sellerType: carData.sellerType || "Частное лицо",
    sellerName: carData.sellerName || "Продавец",
    phone: carData.phone || "",
    promoted: carData.promoted || "",
    isOwn: carData.isOwn ?? true,
    image:
      carData.image ||
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    description: carData.description || "Описание автомобиля появится позже.",
    specs: Array.isArray(carData.specs) ? carData.specs : [],
  };
  cars.push(newCar);
  return newCar;
}

export function updateCar(id, carData) {
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex === -1) {
    return null;
  }

  const updatedCar = {
    ...cars[carIndex],
    ...carData,
    id,
    specs: Array.isArray(carData.specs) ? carData.specs : cars[carIndex].specs,
  };

  cars[carIndex] = updatedCar;
  return updatedCar;
}

export function deleteCar(id) {
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex === -1) {
    return false;
  }

  cars.splice(carIndex, 1);
  return true;
}
