import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import "./Like.css"

const Like = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      console.log("unliked");
    } else {
      console.log("liked");
    }
    setLiked(!liked);
  };

  return (
    <div className="container">
      {liked ? <FaHeart size={50} /> : <GoHeart size={50}/>} {liked ? "" : ""}
      <button onClick={handleLike}>I love this</button>
    </div>
  );
};

export default Like;
