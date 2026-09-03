import { InputForApp } from "./inputForApp.js";

export function InputToggler(optionSide = "left") {
  const activeToggleElem = document.createElement("div");
  const toggleContainer = document.createElement("div");
  toggleContainer.className = "toggle-container";
  toggleContainer.append(activeToggleElem);
  activeToggleElem.className = `active-toggle-option ${optionSide}`;
  const inputFieldContainer = document.createElement("div");
  const inputsContainer = document.createElement("div");
  const sample = this;

  ["City Name", "Coordinates"].map((label) => {
    // Defaults
    const labelEle = document.createElement("p");
    labelEle.classList.add("label-toggler");
    if (label === "City Name") {
      labelEle.classList.add("active-toggle-option-label");
    }

    // Action based on Click
    labelEle.addEventListener("click", function () {
      optionSide = this.textContent == "City Name" ? "left" : "right";

      sample.inputType = optionSide === "left" ? "City Name" : "Coord";
      console.log(sample);

      activeToggleElem.className = `active-toggle-option ${optionSide}`;
      [...document.querySelectorAll(".label-toggler")].forEach((ele) => {
        ele.classList.toggle("active-toggle-option-label");
      });
      console.log(InputForApp.call(sample));
      inputsContainer.innerHTML = InputForApp.call(sample);
    });

    // Labels
    labelEle.textContent = label;
    toggleContainer.append(labelEle);
  });
  inputFieldContainer.append(toggleContainer, inputsContainer);
  return inputFieldContainer;
}
