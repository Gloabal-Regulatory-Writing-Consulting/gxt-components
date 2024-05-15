import React, { FC } from "react";
import DropdownButton from "../dropdownButton";

const Example: FC = () => {
  const selectItems = [
    "Item 1",
    {
      label: "Custom Button",
      element: (
        <button
          style={{ backgroundColor: "#f0f0f0", padding: "8px", border: "none" }}
          onClick={() => console.log("Custom Button Clicked")}
        >
          Custom Button
        </button>
      ),
    },
    "Item 2",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <DropdownButton disabled={false} selectItems={selectItems} />
    </div>
  );
};

export default Example;
