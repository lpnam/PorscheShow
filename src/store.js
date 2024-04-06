import { proxy } from "valtio";
const Car = {};
const state = proxy({
  colors: ["#ccc", "#EFBD4E", "#FF00FF", "#726DE8", "#353934"],
  color: "#353934",
  bodyColor: "#ccc",
  wheelColor: "#ccc",
  insideWheelColor: "#726DE8",
  frontAndBackColor: "#353934",
  windColor: "#353934",
});

const component = proxy({
  components: ["body", "wheel", "insideWheel", "frontAndBack", "wind"],
  target: "body",
});

export { state, component };
