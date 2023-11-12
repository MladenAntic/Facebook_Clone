import React, { useEffect, useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const ProfileDropdownItem = ({ icon, title, arrow }) => {
  const itemRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "#333";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
      iconRef.current.style.background = "#3a3b3c";
    } else {
      itemRef.current.addEventListener("mouseover", () => {
        itemRef.current.style.background = "rgb(243, 244, 246)";
      });
      itemRef.current.addEventListener("mouseout", () => {
        itemRef.current.style.background = "none";
      });
      iconRef.current.style.background = "white";
    }
  });
  return (
    <li
      onClick={() => {
        if (title === "Log Out") {
          signOut(auth);
        }
      }}
      ref={itemRef}
      className="flex items-center justify-between hover:bg-gray-100 cursor-pointer p-[0.3125rem] rounded-lg"
    >
      <div className="flex items-center gap-[0.625rem]">
        <div
          ref={iconRef}
          className="bg-gray-200 w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
        >
          {icon}
        </div>
        <span className="font-semibold max-md:text-[0.75rem]">{title}</span>
      </div>

      {arrow === "true" ? (
        <div>
          <ChevronRightIcon />
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default ProfileDropdownItem;
