import React, { useState, useRef } from "react";
import "./selectoc.css";

const Selectoc = ({ options, onChange, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "");
  const containerRef = useRef(null);

  React.useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const handleOptionClick = (value) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="container-selectoc">
      <div className="selected" onClick={() => setOpen(!open)}>
        {selected}
        {open && (
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Selectoc;
