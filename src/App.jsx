
import React, { useState } from 'react';
import './App.css';


import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      replies: [],
      level: 0,
    };
    setComments([...comments, newComment]);
  };

  const addReply = (parentId, replyText) => {
    const addReplyRecursive = (comments, parentId, replyText, level) => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          const newReply = {
            id: Date.now(),
            text: replyText,
            replies: [],
            level: level + 1,
          };
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        } else {
          return {
            ...comment,
            replies: addReplyRecursive(comment.replies, parentId, replyText, level + 1),
          };
        }
      });
    };

    setComments(addReplyRecursive(comments, parentId, replyText, 0));
  };

  return (
    <div className="container">
      <h1>Comment and Reply Page</h1>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} addReply={addReply} />
    </div>
  );
};

export default App;
