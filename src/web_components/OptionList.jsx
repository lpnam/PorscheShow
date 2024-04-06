import React from "react";
import { useSnapshot } from "valtio";
import { state, component } from "../store.js";

function OptionList() {
  const data = useSnapshot(state);
  const components = useSnapshot(component);
  console.log(data.color);
  return (
    <div className="bg-opacity-0 absolute z-20 flex top-1/2 left-60 gap-6 rotate-90">
      {data.colors.map((color) => {
        return (
          <div
            key={color}
            className={`h-8 w-8 border-2 rounded-full cursor-pointer hover:scale-125 translate-X "border-white`}
            style={{ background: color }}
            onClick={() => (state[components.target + "Color"] = color)}
          ></div>
        );
      })}
    </div>
  );
}

export default OptionList;
