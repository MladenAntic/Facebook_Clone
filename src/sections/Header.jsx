import React, { useRef, useEffect, useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconTitle from "../components/IconTitle";
import ProfileDropdown from "../dropdowns/ProfileDropdown";
import MenuDropdown from "../dropdowns/MenuDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { context } from "../contexts/context";
import { useStateValue } from "../contexts/StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const inputContainerRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const chatRef = useRef(null);
  const notificationsRef = useRef(null);

  let menuRightItems = [menuRef, chatRef, notificationsRef];

  const profilePicRef = useRef(null);

  const { sidebar } = useContext(context);
  const { setSidebar } = useContext(context);

  function toggleSidebar() {
    if (sidebar === "hide") {
      setSidebar("show");
    } else {
      setSidebar("hide");
    }
  }

  useEffect(() => {
    headerRef.current.style.boxShadow =
      "0 0.3125rem 0.5rem -0.5625rem rgba(0, 0, 0, 0.75)";
    headerRef.current.style.webkitBoxShadow =
      "0 0.3125rem 0.5rem -0.5625rem rgba(0, 0, 0, 0.75)";
    headerRef.current.style.mozBoxShadow =
      "0 0.3125rem 0.5rem -0.5625rem rgba(0, 0, 0, 0.75)";

    const icons = document.querySelectorAll(".icon");
    const titles = document.querySelectorAll(".icon-title");

    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener("mouseover", () => {
        titles[i].style.display = "block";
      });
      icons[i].addEventListener("mouseout", () => {
        titles[i].style.display = "none";
      });
    }

    if (localStorage.getItem("dark") === "true") {
      headerRef.current.style.background = "#242526";
      headerRef.current.style.color = "white";
      headerRef.current.style.borderBottom = "0.0625rem solid #444";
      inputContainerRef.current.style.background = "#3a3b3c";
      menuRightItems.forEach((item) => {
        item.current.style.background = "#3a3b3c";

        item.current.addEventListener("mouseover", () => {
          item.current.style.background = "#333";
        });
        item.current.addEventListener("mouseout", () => {
          item.current.style.background = "#3a3b3c";
        });
      });
      for (let i = 1; i < icons.length; i++) {
        icons[i].addEventListener("mouseover", () => {
          icons[i].style.background = "#333";
        });
        icons[i].addEventListener("mouseout", () => {
          icons[i].style.background = "none";
        });
      }
    } else {
      headerRef.current.style.background = "white";
      headerRef.current.style.color = "black";
      headerRef.current.style.borderBottom = "none";
      inputContainerRef.current.style.background = "#eff2f5";
      menuRightItems.forEach((item) => {
        item.current.style.background = "rgb(229, 231, 235)";

        item.current.addEventListener("mouseover", () => {
          item.current.style.background = "rgb(209, 213, 219)";
        });
        item.current.addEventListener("mouseout", () => {
          item.current.style.background = "rgb(229, 231, 235)";
        });
      });
      for (let i = 1; i < icons.length; i++) {
        icons[i].addEventListener("mouseover", () => {
          icons[i].style.background = "rgb(243, 244, 246)";
        });
        icons[i].addEventListener("mouseout", () => {
          icons[i].style.background = "none";
        });
      }
    }
  });

  const [profileDropdown, setProfileDropdown] = useState("hide");
  const [menuDropdown, setMenuDropdown] = useState("hide");
  const [displayInput, setDisplayInput] = useState("hide");

  function toggleProfileDropdown() {
    if (profilePicRef.current.classList.contains("hide")) {
      setProfileDropdown("show");
      setMenuDropdown("hide");
    } else {
      setProfileDropdown("hide");
    }
  }

  function toggleMenuDropdown() {
    if (menuRef.current.classList.contains("hide")) {
      setMenuDropdown("show");
      setProfileDropdown("hide");
    } else {
      setMenuDropdown("hide");
    }
  }

  function toggleInput() {
    if (searchRef.current.classList.contains("hide")) {
      setDisplayInput("show");
      function hideMenuRight() {
        inputRef.current.style.display = "block";
        logoRef.current.style.display = "none";
        inputContainerRef.current.style.marginLeft = "0";
        menuRef.current.style.display = "none";
        chatRef.current.style.display = "none";
        notificationsRef.current.style.display = "none";
      }

      function hideMenuRightOnResize() {
        if (window.innerWidth < 1280) {
          hideMenuRight();
        }
      }

      hideMenuRightOnResize();
      window.addEventListener("resize", hideMenuRightOnResize);
    } else {
      setDisplayInput("hide");
      function showMenuRight() {
        inputRef.current.style.display = "none";
        logoRef.current.style.display = "block";
        inputContainerRef.current.style.marginLeft = "0.625rem";
        menuRef.current.style.display = "flex";
        chatRef.current.style.display = "flex";
        notificationsRef.current.style.display = "flex";
      }

      function showMenuRightOnResize() {
        if (window.innerWidth < 1280) {
          showMenuRight();
        }
      }

      showMenuRightOnResize();
      window.addEventListener("resize", showMenuRightOnResize);
    }
  }

  return (
    <header
      ref={headerRef}
      className="flex py-[0.9375rem] px-[1.25rem] justify-between sticky bg-white z-[100] top-0 left-0 right-0"
    >
      <div className="flex items-center justify-evenly">
        <img
          ref={logoRef}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
          className="h-[2.5rem]"
        />
        <div
          ref={inputContainerRef}
          className="flex items-center bg-[#eff2f5] p-[0.625rem] ml-[0.625rem] rounded-full"
        >
          <div
            onClick={() => {
              toggleInput();
              window.addEventListener("resize", () => {
                if (window.innerWidth > 1280) {
                  inputRef.current.style.display = "block";
                  logoRef.current.style.display = "block";
                  inputContainerRef.current.style.marginLeft = "0.625rem";

                  menuRef.current.style.display = "flex";
                  chatRef.current.style.display = "flex";
                  notificationsRef.current.style.display = "flex";
                }
              });
            }}
            ref={searchRef}
            className={`${displayInput} pointer-events-none max-xl:pointer-events-auto max-xl:cursor-pointer`}
          >
            <SearchIcon />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Facebook"
            className="border-none bg-transparent outline-none max-xl:hidden"
          />
        </div>
      </div>

      <div className="flex flex-1 gap-[1.25rem] items-center justify-center max-lg:gap-[0rem] max-md:justify-start">
        <div className="icon flex items-center py-[0.9375rem] px-[1.875rem] cursor-pointer relative text-blue-600 max-lg:px-[0.9375rem] max-md:hidden">
          <HomeRoundedIcon fontSize="medium" />
          <span className="absolute w-full h-[0.25rem] bg-blue-600 bottom-[-0.9375rem] left-0"></span>
          <IconTitle text="Home" />
        </div>
        <div className="icon flex items-center py-[0.9375rem] px-[1.875rem] cursor-pointer hover:bg-gray-100 rounded-lg relative max-lg:px-[0.9375rem] max-md:hidden">
          <PeopleAltOutlinedIcon fontSize="medium" />
          <IconTitle text="Friends" />
        </div>
        <div className="icon flex items-center py-[0.9375rem] px-[1.875rem] cursor-pointer hover:bg-gray-100 rounded-lg relative max-lg:px-[0.9375rem] max-md:hidden">
          <OndemandVideoRoundedIcon fontSize="medium" />
          <IconTitle text="Video" />
        </div>
        <div className="icon flex items-center py-[0.9375rem] px-[1.875rem] cursor-pointer hover:bg-gray-100 rounded-lg relative max-lg:px-[0.9375rem] max-md:hidden">
          <StorefrontOutlinedIcon fontSize="medium" />
          <IconTitle text="Marketplace" />
        </div>
        <div className="icon flex items-center py-[0.9375rem] px-[1.875rem] cursor-pointer hover:bg-gray-100 rounded-lg relative max-lg:px-[0.9375rem] max-lg:hidden">
          <SportsEsportsOutlinedIcon fontSize="medium" />
          <IconTitle text="Gaming" />
        </div>
        <div
          onClick={toggleSidebar}
          className="hidden px-[1.875rem] max-lg:block max-lg:px-[0.9375rem] cursor-pointer"
        >
          <MenuIcon fontSize="medium" />
        </div>
      </div>

      <div className="flex items-center gap-[0.625rem]">
        <div
          onClick={toggleMenuDropdown}
          ref={menuRef}
          className={`${menuDropdown} bg-gray-200 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer`}
        >
          <div className="max-lg:hidden flex items-center justify-center">
            <AppsIcon fontSize="small" />
          </div>
          <div className="hidden max-lg:flex items-center justify-center">
            <AddIcon fontSize="small" />
          </div>
        </div>
        <div
          ref={chatRef}
          className="bg-gray-200 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
        >
          <ChatBubbleIcon fontSize="small" />
        </div>
        <div
          ref={notificationsRef}
          className="bg-gray-200 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
        >
          <NotificationsIcon fontSize="small" />
        </div>
        <div
          onClick={toggleProfileDropdown}
          ref={profilePicRef}
          className={`${profileDropdown} cursor-pointer`}
        >
          <Avatar src={user.photoURL} />
        </div>
      </div>

      {menuDropdown === "show" ? <MenuDropdown /> : <></>}
      {profileDropdown === "show" ? <ProfileDropdown /> : <></>}
    </header>
  );
};

export default Header;
