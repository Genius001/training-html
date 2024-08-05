// DOM Elements DOCUMENT OBJECT MODEL
const tipedriverEl = document.getElementById("tipedriver");
const tanggalEl = document.getElementById("tanggal");
const jamEl = document.getElementById("jam");
const penumpangEl = document.getElementById("penumpang");
const cariEl = document.getElementById("cari");

// Logging DOM Elements
console.log(tipedriverEl);
console.log(tanggalEl);
console.log(jamEl);
console.log(penumpangEl);
console.log(cariEl);

// Event Listeners
tipedriverEl.addEventListener("change", function(e) {
  console.log(e.target.value);
});

tanggalEl.addEventListener("change", function(e) {
  console.log(e.target.value);
  const today = new Date().toISOString().split("T")[0];
  if (e.target.value < today) {
    e.target.value = today;
  } else {
    e.target.style.backgroundColor = "white";
  }
});

jamEl.addEventListener("change", function(e) {
  console.log(e.target.value);
});

penumpangEl.addEventListener("change", function(e) {
  e.target.style.backgroundColor = "white";
  const value = parseInt(e.target.value, 10);
  if (value >= 7) {
    e.target.style.backgroundColor = "red";
  }
  if (value <= 0) {
    e.target.value = 0;
    console.log(e.target.value);
  } else if (value >= 9) {
    e.target.value = 8;
  }
});

cariEl.addEventListener("click", function(e) {
  e.preventDefault();
  const inputData = {
    tipedriver: tipedriverEl.value,
    tanggal: tanggalEl.value,
    jam: jamEl.value,
    penumpang: penumpangEl.value
  };
  getData(inputData);
});

// Fetch and Filter Car Data
async function getData(inputData) {
  let itemHtml;
  const getCars = await fetch(
    "https://api-car-rental.binaracademy.org/customer/car"
  );
  const result = await response.json();
  const data = Binar.populateCars(result);

  const filteredData = data.filter(
    car => car.typeDriver === inputData.tipedriver
  );
  console.log(filteredData);
}
