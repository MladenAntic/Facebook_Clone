import React, { useRef, useEffect } from "react";

const SidebarRow = ({ image, title }) => {
  const sidebarRowRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      sidebarRowRef.current.addEventListener("mouseover", () => {
        sidebarRowRef.current.style.background = "#333";
      });
      sidebarRowRef.current.addEventListener("mouseout", () => {
        sidebarRowRef.current.style.background = "none";
      });
      titleRef.current.style.color = "white";
    } else {
      sidebarRowRef.current.addEventListener("mouseover", () => {
        sidebarRowRef.current.style.background = "rgb(243, 244, 246)";
      });
      sidebarRowRef.current.addEventListener("mouseout", () => {
        sidebarRowRef.current.style.background = "none";
      });
      titleRef.current.style.color = "black";
    }
  });

  return (
    <div
      ref={sidebarRowRef}
      className="flex items-center gap-[0.625rem] p-[0.625rem] cursor-pointer hover:bg-gray-100 hover:rounded-lg"
    >
      <img src={image} alt="Image" />
      <h4 ref={titleRef} className="font-semibold max-lg:text-sm">
        {title}
      </h4>
    </div>
  );
};

export default SidebarRow;
