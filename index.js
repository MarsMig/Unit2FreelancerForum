const freelancers = [
  { name: "Mr.Green", price: 25, occupation: "Gardener" },
  { name: "Mr. Zero", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 53, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Mr. Speeder", price: 60, occupation: "Driver" },
];

const body = document.querySelector("body");
body.style.backgroundColor = "lightBlue";
const section = document.createElement("section");
const getRandomItems = (array, numItems) => {
  const randomFreelancers = array.sort(() => 0.5 - Math.random());
  return randomFreelancers.slice(0, numItems);
};

const calculateAveragePrice = () => {
  const sum = freelancers.reduce(
    (accumulator, freelancer) => accumulator + freelancer.price,
    0
  );
  const average = sum / freelancers.length;
  return parseFloat(average.toFixed(2));
};

const displayAveragePrice = () => {
  const average = calculateAveragePrice();
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.innerText = `Average Price is: $${average}`;
  h3.style.backgroundColor = "teal";
  div.append(h3);
  section.append(div);
};

const addFreelancer = () => {
  const randomIndex = Math.floor(Math.random() * freelancers.length);
  const add = freelancers.splice(randomIndex, 1)[0];
  const myTimeout = setTimeout(addFreelancer, 8000);
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("h5");
  h3.innerText = add.name;
  h3.style.backgroundColor = "teal";
  h4.innerText = add.occupation;
  h4.style.backgroundColor = "white";
  p.innerText = `Price per Hour: $${add.price}`;
  p.style.backgroundColor = "white";
  div.append(h3);
  div.append(h4);
  div.append(p);
  section.append(div);
};

const display = (arr) => {
  section.style.display = "flex";
  section.style.flexWrap = "wrap";
  section.style.justifyContent = "space-around";
  document.body.append(section);
  addFreelancer();
  arr.forEach((element) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("h5");
    h3.innerText = element.name;
    h3.style.backgroundColor = "teal";
    h4.innerText = element.occupation;
    h4.style.backgroundColor = "white";
    p.innerText = `Price per Hour: $${element.price}`;
    p.style.backgroundColor = "white";
    div.append(h3);
    div.append(h4);
    div.append(p);
    section.append(div);
  });
  document.body.append(section);
};

const init = () => {
  const randomFreelancers = getRandomItems(freelancers, 1);
  display(randomFreelancers);
  displayAveragePrice();
  intervalId = setInterval(addFreelancer, 2000);
};

init();
