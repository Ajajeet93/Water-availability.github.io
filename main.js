$(".owl-carousel").owlCarousel({
  merge:true,
  loop:true,
  video:true,
  image:true
});

const waterAvailabilityData = {
  "USA": 97.3,
  "usa": 97.3,
  "Canada": 99.0,
  "canada": 99.0,
  "Brazil": 85.7,
  "brazil": 85.7,
  "India": 61.5,
  "india": 61.5,
  "Australia": 98.9,
  "australia": 98.9,
  "Colombia": 73.0,
  "colombia": 73.0,
  "Russia": 76.1,
  "russia": 76.1,
  "New Zealand": 100,
  "new zealand": 100,
  "Germany": 99.9,
  "germany": 99.9,
  "Mexico": 43.0,
  "mexico": 43.0,
  "Japan": 98.5,
  "japan": 98.5,
  "Nepal": 17.5,
  "nepal": 17.5,
  "Pakistan": 35.8,
  "pakistan": 35.8,
  "United Kingdom": 99.8,
  "united kingdom": 99.8,
  "Italy": 95.8,
  "italy": 95.8,
  "Bangladesh": 58.5,
  "bangladesh": 58.5,
  // Add more countries and data as needed
};

document.getElementById("search-button").addEventListener("click", function() {
  const countryInput = document.getElementById("country-input").value;
  const waterAvailabilityElement = document.getElementById("water-availability");

  if (waterAvailabilityData[countryInput]) {
      waterAvailabilityElement.innerText = `${waterAvailabilityData[countryInput]}%`;
  } else {
      waterAvailabilityElement.innerText = "Data not available for this country.";
  }
});

console.log(waterAvailabilityData[countryInput])
console.log(true)