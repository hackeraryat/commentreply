import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Write a comment..."
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
