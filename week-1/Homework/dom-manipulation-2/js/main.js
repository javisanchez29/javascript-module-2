const blueBtn = document.querySelector("#blueBtn")
blueBtn.addEventListener("click", function () {

  const jumboTron = document.querySelector(".jumbotron")
  jumboTron.style.backgroundColor = "#588fbd"

  const donateButton = document.querySelector(".buttons").querySelector(".btn")
  donateButton.style.backgroundColor = "#ffa500"

  const donateVolunteer = document
  .querySelector(".buttons")
  .querySelector(".btn:nth-child(2)")
  donateVolunteer.style.backgroundColor = "black"
  donateVolunteer.style.color = "white"
})

const orangeBtn = document.querySelector("#orangeBtn")
orangeBtn.addEventListener("click", function () {
  
  const jumboTron = document.querySelector(".jumbotron")
  jumboTron.style.backgroundColor = "#f0ad4e"

  const donateButton = document.querySelector(".buttons").querySelector(".btn")
  donateButton.style.backgroundColor = "#5751fd"
  
  const donateVolunteer = document
  .querySelector(".buttons")
  .querySelector(".btn:nth-child(2)")
  donateVolunteer.style.backgroundColor = "#31b0d5"
  donateVolunteer.style.color = "white"
})

const greenBtn = document.querySelector("#greenBtn")
greenBtn.addEventListener("click", function () {
  
  const jumboTron = document.querySelector(".jumbotron")
  jumboTron.style.backgroundColor = "#87ca8a"

  const donateButton = document.querySelector(".buttons").querySelector(".btn")
  donateButton.style.backgroundColor = "black"

  const donateVolunteer = document
  .querySelector(".buttons")
  .querySelector(".btn:nth-child(2)")
  donateVolunteer.style.backgroundColor = "#8c9c08"
})

