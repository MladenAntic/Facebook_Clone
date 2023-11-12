import React, { useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseIcon from "@mui/icons-material/Close";
import db from "../firebase";
import { query, collection, doc, deleteDoc } from "firebase/firestore";

const Post = ({ post, profilePic, image, username, timestamp, message }) => {
  const postRef = useRef(null);

  useEffect(() => {
    const actions = document.querySelectorAll(".action");

    postRef.current.style.boxShadow = "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";
    postRef.current.style.mozBoxShadow = "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";
    postRef.current.style.webkitBoxShadow = "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";

    if (localStorage.getItem("dark") === "true") {
      postRef.current.style.background = "#242526";
      postRef.current.style.color = "white";
      for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener("mouseover", () => {
          actions[i].style.background = "#333";
        });
        actions[i].addEventListener("mouseout", () => {
          actions[i].style.background = "none";
        });
      }
    } else {
      postRef.current.style.background = "white";
      postRef.current.style.color = "black";
      for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener("mouseover", () => {
          actions[i].style.background = "rgb(243, 244, 246)";
        });
        actions[i].addEventListener("mouseout", () => {
          actions[i].style.background = "none";
        });
      }
    }
  });

  return (
    <div
      ref={postRef}
      className="w-[82.5%] mt-[1.875rem] ml-[3.4375rem] rounded-2xl bg-white max-lg:ml-0"
    >
      <div className="flex items-center justify-between p-[0.9375rem] relative">
        <div className="flex items-center gap-[0.625rem]">
          <div className="cursor-pointer">
            <Avatar src={profilePic} />
          </div>
          <div>
            <h3>{username}</h3>
            <p className="text-sm text-gray-500">
              {new Date(timestamp?.toDate()).toUTCString()}
            </p>
          </div>
        </div>

        <div
          onClick={(event) => {
            query(
              collection(db, "posts"),
              deleteDoc(doc(db, "posts", post.id))
            );
          }}
          className="cursor-pointer"
        >
          <CloseIcon />
        </div>
      </div>

      <div className="p-[0.9375rem] pt-0">
        <p className="max-md:text-sm">{message}</p>
      </div>

      <div>
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="pt-[0.625rem] flex justify-evenly text-base text-gray cursor-pointer p-[0.9375rem]">
        <div className="action flex items-center justify-center gap-[0.3125rem] p-[0.3125rem] flex-1 text-gray-500 rounded-lg hover:bg-gray-100">
          <ThumbUpRoundedIcon />
          <p className="font-semibold">Like</p>
        </div>
        <div className="action flex items-center justify-center gap-[0.3125rem] p-[0.3125rem] flex-1 text-gray-500 rounded-lg hover:bg-gray-100">
          <CommentRoundedIcon />
          <p className="font-semibold">Comment</p>
        </div>
        <div className="action flex items-center justify-center gap-[0.3125rem] p-[0.3125rem] flex-1 text-gray-500 rounded-lg hover:bg-gray-100">
          <SendRoundedIcon />
          <p className="font-semibold">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
