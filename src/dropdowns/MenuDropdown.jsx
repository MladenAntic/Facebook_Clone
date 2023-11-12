import React, { useRef, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import events from "../assets/events.png";
import friends from "../assets/friends.png";
import groups from "../assets/groups.png";
import newsfeed from "../assets/newsfeed.png";
import feeds from "../assets/feeds.png";
import pages from "../assets/pages.png";
import gamingVideo from "../assets/gaming-video.png";
import playGames from "../assets/play-games.png";
import video from "../assets/video.png";
import ordersPayments from "../assets/orders-and-payments.png";
import marketplace from "../assets/marketplace.png";
import recentAdActivity from "../assets/recent-ad-activity.png";
import memories from "../assets/memories.png";
import saved from "../assets/saved.png";
import adsManager from "../assets/ads-manager.png";
import climateScienceCenter from "../assets/climate-science-center.png";
import fundraisers from "../assets/fundraisers.png";
import MenuItemLeft from "../components/MenuItemLeft";
import MenuItemRight from "../components/MenuItemRight";
import CreateIcon from "@mui/icons-material/Create";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import notFound from "../assets/not-found.svg";

const MenuDropdown = () => {
  const menuDropdownRef = useRef(null);
  const searchMenuRef = useRef(null);
  const createRef = useRef(null);
  const inputRef = useRef(null);
  const notFoundRef = useRef(null);

  const [input, setInput] = useState("");

  useEffect(() => {
    function addShadow() {
      menuDropdownRef.current.style.boxShadow =
        "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";
      menuDropdownRef.current.style.webkitBoxShadow =
        "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";
      menuDropdownRef.current.style.mozBoxShadow =
        "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";
    }

    addShadow();

    function removeShadow() {
      menuDropdownRef.current.style.boxShadow = "0rem 0rem 0rem 0rem rgba(0,0,0,0)";
      menuDropdownRef.current.style.webkitBoxShadow =
        "0rem 0rem 0rem 0rem rgba(0,0,0,0)";
      menuDropdownRef.current.style.mozBoxShadow =
        "0rem 0rem 0rem 0rem rgba(0,0,0,0)";
    }

    function toggleShadow() {
      if (window.innerWidth < 1024) {
        removeShadow();
      } else {
        addShadow();
      }
    }

    toggleShadow();
    window.addEventListener("resize", toggleShadow);

    createRef.current.style.boxShadow = "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";
    createRef.current.style.webkitBoxShadow = "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";
    createRef.current.style.mozBoxShadow = "0rem 0rem 0.3125rem 0rem rgba(0,0,0,0.4)";

    const dropdownSections = document.querySelectorAll(".dropdown-section");
    const menuLeftItems1 = document.querySelectorAll(
      ".dropdown-section-1 .menuLeftItem"
    );
    const menuLeftItems2 = document.querySelectorAll(
      ".dropdown-section-2 .menuLeftItem"
    );
    const menuLeftItems3 = document.querySelectorAll(
      ".dropdown-section-3 .menuLeftItem"
    );
    const menuLeftItems4 = document.querySelectorAll(
      ".dropdown-section-4 .menuLeftItem"
    );
    const menuLeftItems5 = document.querySelectorAll(
      ".dropdown-section-5 .menuLeftItem"
    );
    const menuLeftItems6 = document.querySelectorAll(
      ".dropdown-section-6 .menuLeftItem"
    );

    const itemTitles1 = document.querySelectorAll(".dropdown-section-1 .title");
    const section1 = document.querySelector(".dropdown-section-1");
    let hiddenItems1 = [];
    const itemTitles2 = document.querySelectorAll(".dropdown-section-2 .title");
    const section2 = document.querySelector(".dropdown-section-2");
    let hiddenItems2 = [];
    const itemTitles3 = document.querySelectorAll(".dropdown-section-3 .title");
    const section3 = document.querySelector(".dropdown-section-3");
    let hiddenItems3 = [];
    const itemTitles4 = document.querySelectorAll(".dropdown-section-4 .title");
    const section4 = document.querySelector(".dropdown-section-4");
    let hiddenItems4 = [];
    const itemTitles5 = document.querySelectorAll(".dropdown-section-5 .title");
    const section5 = document.querySelector(".dropdown-section-5");
    let hiddenItems5 = [];
    const itemTitles6 = document.querySelectorAll(".dropdown-section-6 .title");
    const section6 = document.querySelector(".dropdown-section-6");
    let hiddenItems6 = [];
    const dividers = document.querySelectorAll(".divider");
    const divider1 = document.querySelector(".divider-1");
    const divider2 = document.querySelector(".divider-2");
    const divider3 = document.querySelector(".divider-3");
    const divider4 = document.querySelector(".divider-4");
    const divider5 = document.querySelector(".divider-5");

    function displaySections() {
      if (hiddenItems1.length < 6) {
        section1.style.display = "flex";
        divider1.style.display = "block";
      } else {
        section1.style.display = "none";
        divider1.style.display = "none";
      }

      if (hiddenItems2.length < 3) {
        section2.style.display = "flex";
        divider2.style.display = "block";
      } else {
        section2.style.display = "none";
        divider2.style.display = "none";
      }

      if (hiddenItems3.length < 2) {
        section3.style.display = "flex";
        divider3.style.display = "block";
      } else {
        section3.style.display = "none";
        divider3.style.display = "none";
      }

      if (hiddenItems4.length < 3) {
        section4.style.display = "flex";
        divider4.style.display = "block";
      } else {
        section4.style.display = "none";
        divider4.style.display = "none";
      }

      if (hiddenItems5.length < 1) {
        section5.style.display = "flex";
        divider5.style.display = "block";
      } else {
        section5.style.display = "none";
        divider5.style.display = "none";
      }

      if (hiddenItems6.length < 2) {
        section6.style.display = "flex";
      } else {
        section6.style.display = "none";
      }

      if (
        section1.style.display === "none" &&
        section2.style.display === "none" &&
        section3.style.display === "none" &&
        section4.style.display === "none" &&
        section5.style.display === "none" &&
        section6.style.display === "none"
      ) {
        notFoundRef.current.style.display = "block";
      } else {
        notFoundRef.current.style.display = "none";
      }
    }

    function showDividers() {
      dividers.forEach((divider) => {
        divider.style.display = "block";
      });
    }

    inputRef.current.addEventListener("input", (e) => {
      if (e.target.value === "") {
        dropdownSections.forEach((section) => {
          section.style.display = "flex";
        });
        showDividers();
        notFoundRef.current.style.display = "none";
      }

      for (let i = 0; i < itemTitles1.length; i++) {
        if (
          itemTitles1[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems1[i].style.display = "flex";
        } else {
          menuLeftItems1[i].style.display = "none";

          if ((menuLeftItems1[i].style.display = "none")) {
            hiddenItems1.push(menuLeftItems1[i]);
          }

          displaySections();
        }
      }

      for (let i = 0; i < itemTitles2.length; i++) {
        if (
          itemTitles2[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems2[i].style.display = "flex";
        } else {
          menuLeftItems2[i].style.display = "none";

          if ((menuLeftItems2[i].style.display = "none")) {
            hiddenItems2.push(menuLeftItems2[i]);
          }

          displaySections();
        }
      }

      for (let i = 0; i < itemTitles3.length; i++) {
        if (
          itemTitles3[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems3[i].style.display = "flex";
        } else {
          menuLeftItems3[i].style.display = "none";

          if ((menuLeftItems3[i].style.display = "none")) {
            hiddenItems3.push(menuLeftItems3[i]);
          }

          displaySections();
        }
      }

      for (let i = 0; i < itemTitles4.length; i++) {
        if (
          itemTitles4[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems4[i].style.display = "flex";
        } else {
          menuLeftItems4[i].style.display = "none";

          if ((menuLeftItems4[i].style.display = "none")) {
            hiddenItems4.push(menuLeftItems4[i]);
          }

          displaySections();
        }
      }

      for (let i = 0; i < itemTitles5.length; i++) {
        if (
          itemTitles5[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems5[i].style.display = "flex";
        } else {
          menuLeftItems5[i].style.display = "none";

          if ((menuLeftItems5[i].style.display = "none")) {
            hiddenItems5.push(menuLeftItems5[i]);
          }

          displaySections();
        }
      }

      for (let i = 0; i < itemTitles6.length; i++) {
        if (
          itemTitles6[i].innerText
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          menuLeftItems6[i].style.display = "flex";
        } else {
          menuLeftItems6[i].style.display = "none";

          if ((menuLeftItems6[i].style.display = "none")) {
            hiddenItems6.push(menuLeftItems6[i]);
          }

          displaySections();
        }
      }
    });

    if (localStorage.getItem("dark") === "true") {
      menuDropdownRef.current.style.background = "#323436";
      createRef.current.style.background = "#242526";
      searchMenuRef.current.style.background = "#3a3b3c";
    } else {
      menuDropdownRef.current.style.background = "#f7f8fa";
      createRef.current.style.background = "white";
      searchMenuRef.current.style.background = "#eff2f5";
    }
  });

  return (
    <div
      ref={menuDropdownRef}
      className="fixed w-[38.125rem] h-[42.1875rem] bg-[#f7f8fa] rounded-lg top-[5rem] right-[1.25rem] p-[0.9375rem] overflow-hidden max-lg:bg-white max-lg:w-[21.875rem] max-md:h-fit max-sm:w-[80%]"
    >
      <h3 className="font-bold text-2xl mb-[0.625rem] max-lg:hidden">Menu</h3>

      <div className="flex relative h-[37.8125rem] overflow-hidden overflow-y-scroll max-lg:hidden">
        <div className="p-[0.625rem] rounded-lg flex-[0.525]">
          <div
            ref={searchMenuRef}
            className="flex items-center bg-[#eff2f5] p-[0.3125rem] mb-[0.9375rem] rounded-full"
          >
            <SearchIcon />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search Menu"
              className="border-none bg-transparent outline-none"
            />
          </div>

          <ul className="dropdown-section dropdown-section-1 flex flex-col gap-[0.625rem]">
            <li className="font-semibold text-lg">Social</li>{" "}
            <MenuItemLeft
              title="Events"
              image={events}
              text="Organize or find events and other things to do online and nearby."
            />{" "}
            <MenuItemLeft
              title="Friends"
              image={friends}
              text="Search for friends or people you may know."
            />{" "}
            <MenuItemLeft
              title="Groups"
              image={groups}
              text="Connect with people who share your interests."
            />{" "}
            <MenuItemLeft
              title="Newsfeed"
              image={newsfeed}
              text="See relevant posts from people and Pages you follow."
            />{" "}
            <MenuItemLeft
              title="Feeds"
              image={feeds}
              text="See the most recent posts from your friends, groups, Pages and more."
            />{" "}
            <MenuItemLeft
              title="Pages"
              image={pages}
              text="Discover and connect with businesses on Facebook."
            />
          </ul>

          <hr className="divider divider-1 my-[0.9375rem]" />

          <ul className="dropdown-section dropdown-section-2 flex flex-col gap-[0.625rem]">
            <li className="font-semibold text-lg">Entertainment</li>{" "}
            <MenuItemLeft
              title="Gaming Video"
              image={gamingVideo}
              text="Watch and connect with your favorite games and streamers."
            />{" "}
            <MenuItemLeft
              title="Play Games"
              image={playGames}
              text="Play Your Favorite Games"
            />{" "}
            <MenuItemLeft
              title="Video"
              image={video}
              text="A video destination personalized to your interests and connections."
            />
          </ul>

          <hr className="divider divider-2 my-[0.9375rem]" />

          <ul className="dropdown-section dropdown-section-3 flex flex-col gap-[0.625rem]">
            <li className="font-semibold text-lg">Shopping</li>{" "}
            <MenuItemLeft
              title="Orders and Payments"
              image={ordersPayments}
              text="A seamless, secure way to pay on the apps you already use."
            />{" "}
            <MenuItemLeft
              title="Marketplace"
              image={marketplace}
              text="Buy and sell in your community"
            />
          </ul>

          <hr className="divider divider-3 my-[0.9375rem]" />

          <ul className="dropdown-section dropdown-section-4 flex flex-col gap-[0.625rem]">
            <li className="mb-[0.625rem] font-semibold text-lg">Personal</li>{" "}
            <MenuItemLeft
              title="Recent ad activity"
              image={recentAdActivity}
              text="See all the ads you interacted with on Facebook."
            />{" "}
            <MenuItemLeft
              title="Memories"
              image={memories}
              text="Browse your old photos, videos and posts on Facebook."
            />{" "}
            <MenuItemLeft
              title="Saved"
              image={saved}
              text="Find posts, photos and videos that you saved for later."
            />
          </ul>

          <hr className="divider divider-4 my-[0.9375rem]" />

          <ul className="dropdown-section dropdown-section-5 flex flex-col gap-[0.625rem]">
            <li className="font-semibold text-lg">Professional</li>
            <li>
              {" "}
              <MenuItemLeft
                title="Ads Manager"
                image={adsManager}
                text="Create, manage and track the performance of your ads."
              />
            </li>
          </ul>

          <hr className="divider divider-5 my-[0.9375rem]" />

          <ul className="dropdown-section dropdown-section-6 flex flex-col gap-[0.625rem]">
            <li className="font-semibold text-lg">Community Resources</li>{" "}
            <MenuItemLeft
              title="Climate Science Center"
              image={climateScienceCenter}
              text="Learn about climate change and its effects."
            />{" "}
            <MenuItemLeft
              title="Fundraisers"
              image={fundraisers}
              text="Donate and raise money for nonprofits and personal causes."
            />
          </ul>

          <div ref={notFoundRef} className="text-center hidden">
            <img
              src={notFound}
              alt="Not Found"
              className="w-[7.8125rem] mx-auto mb-[0.625rem]"
            />
            <h3 className="text-gray-600 text-xl font-bold mb-[0.1563rem]">
              We didn't find anything
            </h3>
            <p className="text-gray-500 text-lg leading-tight">
              Try different keywords or make sure everything is spelled
              correctly.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={createRef}
        className="bg-white p-[0.9375rem] rounded-lg fixed top-[9.2188rem] right-[3.4375rem] max-lg:top-[4.375rem] max-lg:w-[21.875rem] max-lg:right-[1.25rem] max-sm:w-[80%]"
      >
        <h3 className="font-bold text-2xl mb-[1.5625rem]">Create</h3>

        <ul className="flex flex-col gap-[0.625rem]">
          <MenuItemRight
            icon={<CreateIcon fontSize="small" />}
            title="Post"
            text="Share a post on News Feed."
          />
          <MenuItemRight
            icon={<AutoStoriesIcon fontSize="small" />}
            title="Story"
            text="Share a photo or write something."
          />
          <MenuItemRight
            icon={<PlayCircleIcon fontSize="small" />}
            title="Reel"
            text="Share a reel."
          />
          <MenuItemRight
            icon={<StarRoundedIcon fontSize="small" />}
            title="Life event"
            text="Add a life event to your profile."
          />
        </ul>

        <hr className="my-[0.9375rem]" />

        <ul className="flex flex-col gap-[0.625rem]">
          <MenuItemRight
            icon={<FlagRoundedIcon fontSize="small" />}
            title="Page"
            text="Connect and share with customers or fans."
          />
          <MenuItemRight
            icon={<CampaignRoundedIcon fontSize="small" />}
            title="Ad"
            text="Advertise your business, brand or organization."
          />
          <MenuItemRight
            icon={<GroupsIcon fontSize="small" />}
            title="Group"
            text="Connect with people who share your interests."
          />
          <MenuItemRight
            icon={<AddBoxIcon fontSize="small" />}
            title="Event"
            text="Bring people together with a public or private event"
          />
          <MenuItemRight
            icon={<ShoppingBagIcon fontSize="small" />}
            title="Marketplace Listing"
            text="Sell items to people in your community"
          />
        </ul>
      </div>
    </div>
  );
};

export default MenuDropdown;
