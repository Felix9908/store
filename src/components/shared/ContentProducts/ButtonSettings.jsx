import React from "react";

function ButtonSettings({name, type, setShowSettings, showSettings}) {
  return (
    <div>
      <button
        onClick={() => setShowSettings(type)}
        className={`relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all ${
          showSettings === type
            ? "text-[#ec7c6a] before:bg-[#ec7c6a]"
            : ""
        }`}
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonSettings;
