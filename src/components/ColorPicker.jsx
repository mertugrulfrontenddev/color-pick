import { useState } from "react";

const ColorPicker = () => {
  function handleColorPicker(event) {
    setColor(event.target.value);
  }

  let [color, setColor] = useState("#ffffff");
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <p>This is Choosen Color: {color}</p>
            <input
              className="form-control me-2"
              type="color"
              onChange={handleColorPicker}
              value={color}
            />
          </form>
        </div>
      </nav>
      <div
        style={{ width: "400px", height: "300px", backgroundColor: color }}
      ></div>
    </>
  );
};

export default ColorPicker;
