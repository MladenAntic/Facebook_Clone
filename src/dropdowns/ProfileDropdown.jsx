import React, { useContext, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import ProfileDropdownItem from "../components/ProfileDropdownItem";
import { context } from "../contexts/context";
import { useStateValue } from "../contexts/StateProvider";

const ProfileDropdown = () => {
  const [{ user }, dispatch] = useStateValue();

  const profileDropdownRef = useRef(null);
  const profileNameRef = useRef(null);
  const themeRef = useRef(null);
  const themeIconRef = useRef(null);

  const { theme } = useContext(context);
  const { setTheme } = useContext(context);

  useEffect(() => {
    profileDropdownRef.current.style.boxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";
    profileDropdownRef.current.style.webkitBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";
    profileDropdownRef.current.style.mozBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";

    profileNameRef.current.style.boxShadow = "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";
    profileNameRef.current.style.webkitBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";
    profileNameRef.current.style.mozBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.4)";

    if (localStorage.getItem("dark") === "true") {
      setTheme("dark");
      profileDropdownRef.current.style.background = "#242526";
      profileDropdownRef.current.style.color = "white";
      profileNameRef.current.addEventListener("mouseover", () => {
        profileNameRef.current.style.background = "#333";
      });
      profileNameRef.current.addEventListener("mouseout", () => {
        profileNameRef.current.style.background = "none";
      });
      themeRef.current.addEventListener("mouseover", () => {
        themeRef.current.style.background = "#333";
      });
      themeRef.current.addEventListener("mouseout", () => {
        themeRef.current.style.background = "none";
      });
      themeIconRef.current.style.background = "#3a3b3c";
    } else {
      setTheme("light");
      profileDropdownRef.current.style.background = "white";
      profileDropdownRef.current.style.color = "black";
      profileNameRef.current.addEventListener("mouseover", () => {
        profileNameRef.current.style.background = "rgb(243, 244, 246)";
      });
      profileNameRef.current.addEventListener("mouseout", () => {
        profileNameRef.current.style.background = "none";
      });
      themeRef.current.addEventListener("mouseover", () => {
        themeRef.current.style.background = "rgb(243, 244, 246)";
      });
      themeRef.current.addEventListener("mouseout", () => {
        themeRef.current.style.background = "none";
      });
      themeIconRef.current.style.background = "rgb(229, 231, 235)";
    }
  });

  function toggleTheme() {
    if (themeRef.current.classList.contains("light")) {
      setTheme("dark");
      localStorage.setItem("dark", "true");
    } else {
      setTheme("light");
      localStorage.setItem("dark", "false");
    }
  }

  return (
    <div
      ref={profileDropdownRef}
      className="absolute top-[5rem] right-[1.25rem] w-[22.5rem] h-[28.125rem] rounded-lg p-[0.9375rem] max-sm:w-[82.5%]"
    >
      <div
        ref={profileNameRef}
        className="w-full flex items-center gap-[0.625rem] rounded-lg p-[0.9375rem] hover:bg-gray-100 cursor-pointer"
      >
        <div>
          <Avatar src={user.photoURL} />
        </div>
        <h4 className="text-lg font-medium">{user.displayName}</h4>
      </div>

      <ul className="flex flex-col gap-[0.625rem] mt-[1.875rem]">
        <ProfileDropdownItem
          icon={<SettingsIcon fontSize="small" />}
          title="Settings & Privacy"
          arrow="true"
        />
        <ProfileDropdownItem
          icon={<HelpIcon fontSize="small" />}
          title="Help & Support"
          arrow="true"
        />
        <li
          onClick={toggleTheme}
          ref={themeRef}
          className={`${theme} flex items-center justify-between hover:bg-gray-100 cursor-pointer p-[0.3125rem] rounded-lg`}
        >
          <div className="flex items-center gap-[0.625rem]">
            <div
              ref={themeIconRef}
              className="bg-gray-200 w-[2.1875rem] h-[2.1875rem] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
            >
              {theme === "light" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </div>
            <span className="font-semibold max-md:text-[0.75rem]">
              {theme === "light" ? "Dark Mode Off" : "Dark Mode On"}
            </span>
          </div>
        </li>
        <ProfileDropdownItem
          icon={<FeedbackIcon fontSize="small" />}
          title="Give Feedback"
          arrow="false"
        />
        <ProfileDropdownItem
          icon={<LogoutIcon fontSize="small" />}
          title="Log Out"
          arrow="false"
        />
      </ul>

      <ul className="flex flex-wrap text-sm text-gray-500 mt-[0.9375rem] gap-[0.3125rem] max-md:text-[0.625rem]">
        <li className="hover:underline">
          <a href="#">Privacy</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">Terms</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">Advertising</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">Ad Choices</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">Cookies</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">More</a>
        </li>
        <li>•</li>
        <li className="hover:underline">
          <a href="#">Meta &copy; 2023</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
