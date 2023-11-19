// VideoDetails.js
import React from "react";

function VideoDetails({
  video,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote,
  showComments,
  onToggleComments,
}) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl} // Use 'embedUrl' property for the video URL
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <div>
        <h2>{video.title}</h2>
        <p>
          Views: {video.views} | Uploaded: {video.createdAt}
        </p>
        <button onClick={onUpvote}>👍 Upvote ({upvotes})</button>
        <button onClick={onDownvote}>👎 Downvote ({downvotes})</button>
        <button onClick={onToggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && (
          <div>
            <h3>Comments:</h3>
            {video.comments.map((comment) => (
              <div key={comment.id}>
                <p>
                  <strong>{comment.user}</strong>: {comment.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
