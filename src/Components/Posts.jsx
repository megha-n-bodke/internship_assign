import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  //get post from API
  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get api data component mount
  useEffect(() => {
    getPosts();
  }, []);
  if (!localStorage.getItem("info")) {
    console.log("empty");
    return (
      <div>
        You need to login to see posts
        <p>
          Click here to login
          <Link to="/">Login</Link>
        </p>
      </div>
    );
  } else {
    return <div>Posts</div>;
  }
};

export default Posts;
