import React, { useEffect, useState } from "react";
import "./mystyles.css";

const Postform = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   const [posts, setPosts] = useState([]);

  const handelSubmit = (e) => e.preventDefault();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: id,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      //   .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="flexBox">
          <input
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input type="submit" />
        </div>
      </form>

      {/* <div id="dataWrapper">
        <ul>
            {
                posts.map(posts => <li key={posts.id}>{`Title: ${posts.title}`}</li>)
            }
        </ul>
      </div> */}
    </>
  );
};

export default Postform;
