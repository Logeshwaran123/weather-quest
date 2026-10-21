import Toggler from "./Toggler.js";
import InputForm from "./InputForm.js";
import Header from "./Header.js";

const initialState = {
  option: "city name",
  labels: ["city name", "coordinates"],
};

const store = new Proxy(initialState, {
  set(target, prop, value) {
    target[prop] = value;
    render(document.getElementById("root"));
    return true;
  },
});

function render(parent) {
  const header = Header.bind(store);
  const toggler = Toggler.bind(store);
  const inputForm = InputForm.bind(store);

  parent.replaceChildren(header.call(store), toggler.call(), inputForm.call());
  return root;
}

export { store };

export default render;
