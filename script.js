// css code
const animals = {
  lion: {
    name: "Lion",
    habitat: "Savannas, grasslands, and woodlands",
    diet: "Carnivore",
    lifespan: "10–14 years"
  },
  elephant: {
    name: "Elephant",
    habitat: "Forests, grasslands, and savannas",
    diet: "Herbivore",
    lifespan: "60–70 years"
  },
  giraffe: {
    name: "Giraffe",
    habitat: "Savannas and open woodlands",
    diet: "Herbivore",
    lifespan: "25–30 years"
  },
  zebra: {
    name: "Zebra",
    habitat: "Grasslands and savannas",
    diet: "Herbivore",
    lifespan: "20–30 years"
  }
};

function showAnimalInfo() {
  const select = document.getElementById("animalSelect");
  const infoDiv = document.getElementById("animalInfo");
  const animalKey = select.value;

  if (animalKey && animals[animalKey]) {
    const animal = animals[animalKey];
    infoDiv.innerHTML = `
      <strong>Name:</strong> ${animal.name}<br>
      <strong>Habitat:</strong> ${animal.habitat}<br>
      <strong>Diet:</strong> ${animal.diet}<br>
      <strong>Lifespan:</strong> ${animal.lifespan}
    `;
  } else {
    infoDiv.innerHTML = "";
  }
}
