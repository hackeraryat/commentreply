import React, { useState } from 'react';
import CommentList from './CommentList'; 

const Comment = ({ comment, addReply }) => {
  const [reply, setReply] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply.trim()) {
      addReply(comment.id, reply);
      setReply('');
      setShowReplyForm(false);
    }
  };

  return (
    <div style={{ marginLeft: `${comment.level * 20}px`, marginBottom: '10px' }}>
      <p>{comment.text}</p>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? 'Cancel' : 'Reply'}
      </button>
      {showReplyForm && (
        <form onSubmit={handleReplySubmit}>
          <input
            type="text"
            value={reply}
            onChange={handleReplyChange}
            placeholder="Write a reply..."
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <CommentList comments={comment.replies} addReply={addReply} />
      )}
    </div>
  );
};

export default Comment;
