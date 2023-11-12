import React, { useEffect } from "react";
import Story from "../components/Story";
import elonMuskStory from "../assets/elon-musk-story.jpg";
import elonMuskProfile from "../assets/elon-musk-profile.jpg";
import jeffBezosStory from "../assets/jeff-bezos-profile.jpg";
import jeffBezosProfile from "../assets/jeff-bezos-profile.jpg";
import markZuckerbergStory from "../assets/mark-zuckerberg-story.jpg";
import markZuckerbergProfile from "../assets/mark-zuckerberg-profile.jpg";
import billGatesStory from "../assets/bill-gates-story.jfif";
import billGatesProfile from "../assets/bill-gates-profile.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useStateValue } from "../contexts/StateProvider";

function PreviousArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] translate-y-[-50%] left-[1.25rem] bg-gray-300 text-black w-[2.8125rem] h-[2.8125rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 z-[5] max-lg:left-[2.5rem] max-md:w-[2.1875rem] max-md:h-[2.1875rem] max-sm:hidden"
    >
      <ChevronLeftIcon />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] translate-y-[-50%] right-[2.5rem] bg-gray-300 text-black w-[2.8125rem] h-[2.8125rem] rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-white duration-300 z-[5] max-md:w-[2.1875rem] max-md:h-[2.1875rem] max-sm:hidden lg:right-[1.25rem]"
    >
      <ChevronRightIcon />
    </div>
  );
}

const StoryReel = () => {
  const [{ user }, dispatch] = useStateValue();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const user = document.querySelector(".user");
  });

  return (
    <div className="w-[86.5%] overflow-hidden max-sm:pb-[1.5625rem] mx-auto xl:ml-[2.3438rem]">
      <Slider {...settings}>
        <Story
          image={user.photoURL}
          profilePic={user.photoURL}
          title={`${user.displayName}`}
          user="user"
        />
        <Story
          image={elonMuskStory}
          profilePic={elonMuskProfile}
          title="Elon Musk"
          user=""
        />
        <Story
          image={jeffBezosStory}
          profilePic={jeffBezosProfile}
          title="Jeff Bezos"
          user=""
        />
        <Story
          image={markZuckerbergStory}
          profilePic={markZuckerbergProfile}
          title="Mark Zuckerberg"
          user=""
        />
        <Story
          image={billGatesStory}
          profilePic={billGatesProfile}
          title="Bill Gates"
          user=""
        />
      </Slider>
    </div>
  );
};

export default StoryReel;
