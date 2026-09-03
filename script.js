"use strict";
import { InputToggler } from "./components/inputToggler.js";

const app = {
  inputType: "City Name",
};

const root = document.getElementById("root");
root.append(InputToggler.call(app));
