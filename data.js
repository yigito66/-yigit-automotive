const brands = ["BMW", "Audi", "Mercedes", "Tesla", "Toyota", "Ford", "Hyundai", "Kia", "Porsche", "Volkswagen"];
const models = ["X", "M", "S", "GT", "RS", "Sport", "Pro", "EV", "Turbo", "Line"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 🚗 1000 araba üret
const cars = Array.from({ length: 1000 }, (_, i) => {
  const brand = brands[random(0, brands.length - 1)];
  const model = models[random(0, models.length - 1)] + " " + random(1, 99);

  return {
    id: i + 1,
    brand,
    model,
    hp: random(90, 1000),
    topSpeed: random(160, 350)
  };
});
