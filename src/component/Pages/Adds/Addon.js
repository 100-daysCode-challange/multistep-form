import React from "react";

function Addon({ addOn, isSelected, onToggle }) {
  return (
    <div className={`addOnn_btn ${isSelected ? "selected" : ""}`}>
      <div className="group">
        <input
          type="checkbox"
          name="addOnn"
          id={`addOn_cont_${addOn.id}`}
          value={addOn.id}
          onClick={() => onToggle(addOn.id)} // Toggle add-on selection
        />
        <div className="addOn">
          <p className="addSize">{addOn.label}</p>
          <span>{addOn.description}</span>
        </div>
      </div>
      <p className="price">+${addOn.price}</p>
    </div>
  );
}

export default Addon;
