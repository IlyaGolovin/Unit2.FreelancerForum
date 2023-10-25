const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function addNewFreelancer() {
  const randomFreelancer =
    freelancers[Math.floor(Math.random() * freelancers.length)];

  const columnDivName = document.querySelector(".columnName");
  const columnDivPrice = document.querySelector(".columnPrice");
  const columnDivOccupation = document.querySelector(".columnOccupation");
  // Create a new paragraph element
  const newParagraphElementName = document.createElement("p");
  const newParagraphElementPrice = document.createElement("p");
  const newParagraphElementOccupation = document.createElement("p");
  // Set the text content of the new element
  newParagraphElementName.textContent = randomFreelancer.name;
  newParagraphElementPrice.textContent = `$${randomFreelancer.price}`;
  newParagraphElementOccupation.textContent = randomFreelancer.occupation;
  // Append the new element to the column div
  columnDivName.appendChild(newParagraphElementName);
  columnDivPrice.appendChild(newParagraphElementPrice);
  columnDivOccupation.appendChild(newParagraphElementOccupation);
  updateAverageStartingPrice();
}

function updateAverageStartingPrice() {
  const startingPrices = document.querySelectorAll(".columnPrice p");
  let totalStartingPrice = 150;

  for (const startingPrice of startingPrices) {
    // Remove the dollar sign from the text content
    const startingPriceWithoutDollarSign = startingPrice.textContent.replace(
      "$",
      ""
    );

    // Parse the starting price without the dollar sign to an integer
    const parsedStartingPrice = parseInt(startingPriceWithoutDollarSign);

    // Add the parsed starting price to the total starting price
    totalStartingPrice += parsedStartingPrice;
  }

  // Calculate the average starting price
  let averageStartingPrice = totalStartingPrice / startingPrices.length;
  document.getElementById("price").textContent =
    "$" + averageStartingPrice.toFixed(2);
}

setInterval(addNewFreelancer, 3000);
