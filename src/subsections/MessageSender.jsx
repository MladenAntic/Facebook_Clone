import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../contexts/StateProvider";
import db from "../firebase";
import storage from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();

  const messageSenderRef = useRef(null);
  const inputRef = useRef(null);
  const messageSenderTopRef = useRef(null);
  const filePickerRef = useRef(null);
  const [input, setInput] = useState("");
  const [imageToPost, setImageToPost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    addDoc(collection(db, "posts"), {
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageToPost,
    }).then((doc) => {
      if (imageToPost) {
        const uploadTask = uploadString(
          ref(storage, `posts/${doc.id}`),
          imageToPost,
          "data_url"
        );

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          null,
          (error) => console.error(error),
          () => {
            getDownloadURL(ref(storage, `posts/${doc.id}`)).then((url) => {
              setDoc(
                doc(collection(db, "posts")),
                {
                  postImage: url,
                },
                { merge: true }
              );
            });
          }
        );
      }
    });

    setInput("");
    removeImage();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  useEffect(() => {
    messageSenderRef.current.style.boxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";
    messageSenderRef.current.style.mozBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";
    messageSenderRef.current.style.webkitBoxShadow =
      "0rem 0rem 0.625rem 0rem rgba(0,0,0,0.75)";

    const actions = document.querySelectorAll(".action");

    if (localStorage.getItem("dark") === "true") {
      messageSenderRef.current.style.background = "#242526";
      inputRef.current.style.background = "#3a3b3c";
      messageSenderTopRef.current.style.borderColor = "#444";
      for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener("mouseover", () => {
          actions[i].style.background = "#333";
        });
        actions[i].addEventListener("mouseout", () => {
          actions[i].style.background = "none";
        });
      }
    } else {
      messageSenderRef.current.style.background = "white";
      inputRef.current.style.background = "rgb(229, 231, 235)";
      messageSenderTopRef.current.style.borderColor = "rgb(229, 231, 235)";
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
      ref={messageSenderRef}
      className="w-[82.5%] flex mt-[1.875rem] ml-[3.4375rem] flex-col bg-white rounded-xl max-lg:ml-0"
    >
      <div
        ref={messageSenderTopRef}
        className="flex border-b border-solid border-gray-200 p-[0.9375rem]"
      >
        <div className="cursor-pointer">
          <Avatar src={user.photoURL} />
        </div>
        <form className="flex-1 flex">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 outline-none border-none py-[0.3125rem] px-[1.25rem] my-0 mx-[0.625rem] rounded-full bg-gray-200 max-md:text-[12px]"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />

          <button onClick={handleSubmit} type="submit" className="hidden">
            Hidden submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={imageToPost}
              alt="Image To Post"
              className="object-contain h-10"
            />
            <div className="text-center text-red-500">
              <DeleteIcon fontSize="small" />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-[1.25rem] py-[0.625rem] max-md:gap-[0.9375rem] max-sm:gap-[0rem]">
        <div className="action flex items-center gap-[0.625rem] text-gray-500 cursor-pointer hover:bg-gray-100 rounded-2xl p-[0.9375rem] max-md:gap-[0.3125rem]">
          <VideocamIcon style={{ color: "red" }} />
          <h3 className="text-sm font-bold max-lg:text-sm max-md:text-[0.625rem] max-sm:text-[0.5rem]">
            Live Video
          </h3>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="action flex items-center gap-[0.625rem] text-gray-500 cursor-pointer hover:bg-gray-100 rounded-2xl p-[0.9375rem] max-md:gap-[0.3125rem]"
        >
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3 className="text-sm font-bold max-lg:text-sm max-md:text-[0.625rem] max-sm:text-[0.5rem]">
            Photo/Video
          </h3>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="action flex items-center gap-[0.625rem] text-gray-500 cursor-pointer hover:bg-gray-100 rounded-2xl p-[0.9375rem] max-md:gap-[0.3125rem]">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3 className="text-sm font-bold max-lg:text-sm max-md:text-[0.625rem] max-sm:text-[0.5rem]">
            Feeling/Activity
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
