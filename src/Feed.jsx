import React, { useRef, useState, useEffect, useContext } from "react";
import StoryReel from "./subsections/StoryReel";
import { context } from "./contexts/context";
import MessageSender from "./subsections/MessageSender";
import Post from "./components/Post";
import db from "./firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const Feed = () => {
  const feedRef = useRef(null);
  const [posts, setPosts] = useState([]);

  const { sidebar } = useContext(context);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  useEffect(() => {
    function toggleFeed() {
      if (window.innerWidth < 1024) {
        if (sidebar === "show") {
          feedRef.current.style.flex = "0";
        } else {
          feedRef.current.style.flex = "1";
        }
      } else {
        feedRef.current.style.flex = "1";
      }
    }

    toggleFeed();
    window.addEventListener("resize", toggleFeed);
  });

  return (
    <div
      ref={feedRef}
      className="flex-1 py-[1.875rem] flex flex-col items-start overflow-x-hidden max-lg:items-center"
    >
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
        post={post}
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
