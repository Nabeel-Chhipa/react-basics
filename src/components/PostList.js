import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul style={{ padding: 5 }}>
        {posts.map((posts) => (
          <li style={{ listStyle: "none" }} key={posts.id}>
            <strong>{`${posts.title}`}</strong>
            <p style={{ marginTop: "2px" }}>{posts.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
