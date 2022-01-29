const toggleSwitch = document.querySelector(".switch");
const toggleIndicator = document.querySelector(".circle");
const radioButtons = document.querySelectorAll('input[name="billing-period"]');
const basicCost = document.querySelector("#basic-cost");
const professionalCost = document.querySelector("#professional-cost");
const masterCost = document.querySelector("#master-cost");

const displayCost = () => {
  const billingPeriod = document.querySelector(
    'input[type="radio"]:checked'
  ).value;
  if (billingPeriod === "Monthly") {
    basicCost.innerHTML = "19.99";
    professionalCost.innerHTML = "24.99";
    masterCost.innerHTML = "39.99";
  } else if (billingPeriod === "Annually") {
    basicCost.innerHTML = "199.99";
    professionalCost.innerHTML = "249.99";
    masterCost.innerHTML = "399.99";
  }
};

displayCost();

const toggleSlider = () => {
  toggleIndicator.classList.toggle("toggle-circle");
};

radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    displayCost();
    toggleSlider();
  });
});

toggleSwitch.addEventListener("click", () => {
  document.querySelector("#annually").checked
    ? (document.querySelector("#monthly").checked = true)
    : (document.querySelector("#annually").checked = true);
  displayCost();
  toggleSlider();
});
