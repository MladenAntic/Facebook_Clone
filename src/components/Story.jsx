import React, { useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Story = ({ image, profilePic, title, user }) => {
  const storyRef = useRef(null);
  const overlayHoverRef = useRef(null);

  useEffect(() => {
    storyRef.current.style.background = `url(${image}) no-repeat center center/cover`;

    storyRef.current.addEventListener("mouseover", () => {
      overlayHoverRef.current.style.display = "block";
    });
    storyRef.current.addEventListener("mouseout", () => {
      overlayHoverRef.current.style.display = "none";
    });
  });

  return (
    <div
      ref={storyRef}
      className={`${user} relative w-[9.375rem] h-[15.625rem] rounded-lg cursor-pointer p-[0.625rem] mx-auto`}
    >
      <div>
      <Avatar
        src={profilePic}
        className="mr-[0.625rem] border-4 border-solid border-[#2e81f4]"
      />
      </div>
      <h4 className="absolute bottom-[1.25rem] left-[1.25rem] text-sm font-semibold text-white">
        {title}
      </h4>

      <div
        ref={overlayHoverRef}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30 rounded-lg z-[5] hidden"
      ></div>

      {user === "user" ? (
        <div>
          <div className="absolute w-full h-[3.125rem] left-0 bottom-0 bg-white border rounded-b-lg flex items-end justify-center text-sm font-semibold">
            <h4 className="text-center pb-[0.4688rem]">Create Story</h4>
          </div>

          <div className="bg-[#2e81f4] w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center text-white border-4 border-white absolute left-[50%] translate-x-[-50%] bottom-[1.875rem] z-[10]">
            <AddIcon />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Story;
