// App.js
import React, { useState } from "react";
import VideoDetails from "./Videodetails";
import video from "../data/video.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <VideoDetails
        video={video}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
        showComments={showComments}
        onToggleComments={toggleComments}
      />
    </div>
  );
}

export default App;
