import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { component } from "../store.js";
import { useSnapshot } from "valtio";
import PorscheLogo from "../components/PorscheLogo.jsx";

function HeaderPage() {
  const [isView, setView] = useState(true);
  const dropData = useSnapshot(component);
  const handleClick = (e) => {
    setView((prev) => !prev);
    e.stopPropagation();
  };
  const handleSelect = (e) => {
    setView((prev) => !prev);
    component.target = e.target.dataset.val;
    e.stopPropagation();
  };

  return (
    <header className="absolute z-10 w-screen">
      <div className="mx-40 mt-10 bg-transparent bg-opacity-0 flex justify-between">
        <PorscheLogo width="80px" height="80px" colorFill="#ffffff" />

        <div className="w-96 flex gap-0.5">
          <div className="border-2 flex-1 rounded-md flex justify-center items-center text-white font-bold">
            {dropData.target.toUpperCase()}
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="p-4 border-2 rounded-md cursor-pointer transition-all duration-700 ease-in-out shadow-button hover:shadow-button-hver"
          >
            <AiFillCaretDown className="text-white" />
          </button>
        </div>
      </div>
      <div
        className={`absolute w-custom right-52 mr-1 ${isView ? "hidden" : ""}`}
      >
        {dropData.components.map((component) => {
          if (component !== dropData.target)
            return (
              <div
                key={component}
                data-val={component}
                onClick={(e) => handleSelect(e)}
                className=" h-custom flex-1 border-2 flex text-white font-bold justify-center items-center my-0.5 rounded-md cursor-pointer hover:scale-110"
              >
                {component.toUpperCase()}
              </div>
            );
        })}
      </div>
    </header>
  );
}

export default HeaderPage;
