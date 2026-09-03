export function InputForApp() {
  const inputFieldContainer = document.createElement("div");

  const inputForCity = document.createElement("input");
  inputForCity.placeholder = "Enter the City Name";

  const inputForCoord = ["Latitude", "Longitude"].map((field) => {
    const inputEle = document.createElement("input");
    inputEle.placeholder = `Enter ${field} here`;
    return inputEle;
  });
  const inputCoords = document.createElement("div");
  inputCoords.appendChild(...inputForCoord);
  //   console.log(inputCoords);
  //   console.log(this);
  //   console.log();
  return this.inputType === "City Name" ? inputForCity : inputCoords;
}
