import React, { useContext, useEffect, useRef, useState } from "react";
import SidebarRow from "../components/SidebarRow";
import { Avatar } from "@mui/material";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { context } from "../contexts/context";
import { useStateValue } from "../contexts/StateProvider"

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  const sidebarRef = useRef(null);
  const expandRef = useRef(null);
  const expandTextRef = useRef(null);
  const profileRef = useRef(null);

  const [hiddenItems, setHiddenItems] = useState("hide");

  const { sidebar } = useContext(context);

  function toggleHiddenItems() {
    if (expandRef.current.classList.contains("hide")) {
      setHiddenItems("show");
    } else {
      setHiddenItems("hide");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      profileRef.current.style.color = "white";
      profileRef.current.addEventListener("mouseover", () => {
        profileRef.current.style.background = "#333";
      });
      profileRef.current.addEventListener("mouseout", () => {
        profileRef.current.style.background = "none";
      });
      expandRef.current.addEventListener("mouseover", () => {
        expandRef.current.style.background = "#333";
      });
      expandRef.current.addEventListener("mouseout", () => {
        expandRef.current.style.background = "none";
      });
      expandTextRef.current.style.color = "white";
    } else {
      profileRef.current.style.color = "black";
      profileRef.current.addEventListener("mouseover", () => {
        profileRef.current.style.background = "rgb(243, 244, 246)";
      });
      profileRef.current.addEventListener("mouseout", () => {
        profileRef.current.style.background = "none";
      });
      expandRef.current.addEventListener("mouseover", () => {
        expandRef.current.style.background = "rgb(243, 244, 246)";
      });
      expandRef.current.addEventListener("mouseout", () => {
        expandRef.current.style.background = "none";
      });
      expandTextRef.current.style.color = "black";
    }

    function toggleSidebar() {
      if (window.innerWidth < 1024) {
        if (sidebar === "show") {
          sidebarRef.current.style.display = "block";
        } else {
          sidebarRef.current.style.display = "none";
        }
      } else {
        sidebarRef.current.style.display = "block";
      }
    }

    toggleSidebar();
    window.addEventListener("resize", toggleSidebar);
  });

  return (
    <section
      ref={sidebarRef}
      className="py-[1.5625rem] px-[0.625rem] flex-[0.33] max-lg:hidden"
    >
      <div
        ref={profileRef}
        className="flex items-center gap-[0.625rem] p-[0.625rem] cursor-pointer hover:bg-gray-100 hover:rounded-lg"
      >
        <div>
          <Avatar src={user.photoURL} />
        </div>
        <h4 className="font-semibold max-lg:text-sm">{user.displayName}</h4>
      </div>
      <SidebarRow image={friends} title="Friends" />
      <SidebarRow image={memories} title="Memories" />
      <SidebarRow image={saved} title="Saved" />
      <SidebarRow image={video} title="Video" />
      <SidebarRow image={marketplace} title="Marketplace" />
      <SidebarRow image={feeds} title="Feeds" />
      <SidebarRow image={events} title="Events" />
      <SidebarRow image={groups} title="Groups" />
      <SidebarRow image={adsManager} title="Ads Manager" />
      <SidebarRow image={fundraisers} title="Fundraisers" />
      {hiddenItems === "show" ? (
        <div>
          <SidebarRow
            image={climateScienceCenter}
            title="Climate Science Center"
          />
          <SidebarRow image={gamingVideo} title="Gaming Video" />
          <SidebarRow image={newsfeed} title="Newsfeed" />
          <SidebarRow image={ordersPayments} title="Orders and payments" />
          <SidebarRow image={pages} title="Pages" />
          <SidebarRow image={playGames} title="Play Games" />
          <SidebarRow image={recentAdActivity} title="Recent ad activity" />
        </div>
      ) : (
        <></>
      )}

      <div
        ref={expandRef}
        onClick={toggleHiddenItems}
        className={`${hiddenItems} flex items-center gap-[0.625rem] p-[0.625rem] cursor-pointer hover:bg-gray-100 hover:rounded-lg`}
      >
        <div className="w-[1.875rem] h-[1.875rem] bg-gray-200 flex items-center justify-center rounded-full">
          {hiddenItems === "show" ? (
            <div>
              <ExpandLessIcon />
            </div>
          ) : (
            <div>
              <ExpandMoreIcon />
            </div>
          )}
        </div>
        <h4 ref={expandTextRef} className="font-semibold max-lg:text-sm">
          {hiddenItems === "show" ? "See Less" : "See More"}
        </h4>
      </div>
    </section>
  );
};

export default Sidebar;
