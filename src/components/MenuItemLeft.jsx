import React, { useRef, useEffect } from "react";

const MenuItemLeft = ({ image, title, text }) => {
  const itemRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "#444";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
      textRef.current.style.color = "#888";
    } else {
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "rgb(229, 231, 235)";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
      textRef.current.style.color = "rgb(75, 85, 99)";
    }
  });
  return (
    <li
      ref={itemRef}
      className="menuLeftItem flex items-start gap-[0.9375rem] hover:bg-gray-200 cursor-pointer rounded-lg p-[0.3125rem]"
    >
      <img src={image} alt="Image" />
      <div>
        <h5 className="title font-semibold mb-[-0.3125rem]">{title}</h5>
        <small ref={textRef} className="text-gray-600">
          {text}
        </small>
      </div>
    </li>
  );
};

export default MenuItemLeft;
