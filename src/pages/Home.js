import React from "react";
import { useState, useEffect } from "react";
import ActivityPost from "../ActivityPost.js";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/activities",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token,
          },
        }
      );
      const parseRes = await response.json();
      setPosts(parseRes);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const activities = posts.map((post) => {
    return <ActivityPost post={post} key={post.id} />;
  });

  console.log(activities);
  return <div>{activities}</div>;
}

export default Home;