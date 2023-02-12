import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  //get post from API
  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //get api data component mount
  useEffect(() => {
    getPosts();
  }, []);

  //datagrid columns
  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "userId", headerName: "userId", width: 150 },
    { field: "title", headerName: "title", width: 650 },
  ];
  const rows = posts.map((row) => ({
    id: row.id,
    userId: row.userId,
    title: row.title,
  }));

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
    return (
      // <div>
      //   {posts.map((post) => (
      //     <li key={post.id}>{post.title}</li>
      //   ))}
      // </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          // rowsPerPageOptions={10}
        />
      </div>
    );
  }
};

export default Posts;
