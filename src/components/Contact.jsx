import React, { useRef, useEffect } from "react";

const Contact = ({ src, name }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      contactRef.current.style.color = "white";
      contactRef.current.addEventListener("mouseover", () => {
        contactRef.current.style.background = "#333";
      });
      contactRef.current.addEventListener("mouseout", () => {
        contactRef.current.style.background = "none";
      });
    } else {
      contactRef.current.style.color = "black";
      contactRef.current.addEventListener("mouseover", () => {
        contactRef.current.style.background = "rgb(243, 244, 246)";
      });
      contactRef.current.addEventListener("mouseout", () => {
        contactRef.current.style.background = "none";
      });
    }
  });

  return (
    <div
      ref={contactRef}
      className="flex items-center gap-[0.625rem] mb-2 relative hover:bg-gray-100 cursor-pointer p-2 rounded-xl"
    >
      <img
        src={src}
        alt="Profile Image"
        className="object-cover rounded-full w-[3.125rem] h-[3.125rem]"
      />
      <p>{name}</p>

      <div className="absolute bottom-[0.625rem] left-[2.8125rem] bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
};

export default Contact;
