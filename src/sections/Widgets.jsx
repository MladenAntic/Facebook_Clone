import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import jeffBezos from "../assets/jeff-bezos-profile.jpg";
import elonMusk from "../assets/elon-musk-profile.jpg";
import billGates from "../assets/bill-gates-profile.jpg";
import markZuckerberg from "../assets/mark-zuckerberg-profile.jpg";
import Contact from "../components/Contact";

const Widgets = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");

    if (localStorage.getItem("dark") === "true") {
      for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("mouseover", () => {
          icons[i].style.background = "#333";
        });
        icons[i].addEventListener("mouseout", () => {
          icons[i].style.background = "none";
        });
      }
    } else {
      for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("mouseover", () => {
          icons[i].style.background = "rgb(243, 244, 246)";
        });
        icons[i].addEventListener("mouseout", () => {
          icons[i].style.background = "none";
        });
      }
    }
  });
  return (
    <section className="hidden lg:flex flex-col">
      <div className="flex items-center justify-between w-60 text-gray-500 p-2 mt-5">
        <h2 className="text-xl font-semibold">Contacts</h2>
        <div className="flex items-center gap-[0.3125rem]">
          <div className="icon hover:bg-gray-100 cursor-pointer rounded-full p-[0.3125rem]">
            <SearchIcon />
          </div>
          <div className="icon hover:bg-gray-100 cursor-pointer rounded-full p-[0.3125rem]">
            <MoreHorizIcon />
          </div>
        </div>
      </div>

      <Contact src={jeffBezos} name="Jeff Bezos" />
      <Contact src={elonMusk} name="Elon Musk" />
      <Contact src={billGates} name="Bill Gates" />
      <Contact src={markZuckerberg} name="Mark Zuckerberg" />
    </section>
  );
};

export default Widgets;
