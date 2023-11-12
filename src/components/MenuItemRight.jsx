import React, { useRef, useEffect } from "react";

const MenuItemRight = ({ icon, title, text }) => {
  const itemRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      iconRef.current.style.background = "#333";
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "#333";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
    } else {
      iconRef.current.style.background = "rgb(229, 231, 235)";
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "rgb(243, 244, 246)";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
    }
  });
  return (
    <li
      ref={itemRef}
      className="flex items-start gap-[0.9375rem] hover:bg-gray-100 cursor-pointer p-[0.3125rem] rounded-lg"
    >
      <div
        ref={iconRef}
        className="w-[2.1875rem] h-[2.1875rem] bg-gray-200 flex items-center justify-center rounded-full"
      >
        {icon}
      </div>
      <div>
        <h5 className="font-semibold max-md:text-sm">{title}</h5>
        <small className="text-gray-600 hidden max-lg:block max-md:text-[0.625rem]">{text}</small>
      </div>
    </li>
  );
};

export default MenuItemRight;
