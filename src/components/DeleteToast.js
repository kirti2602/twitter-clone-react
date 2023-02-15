import React from "react";

const DeleteToast = () => {
  return (
    <div className="delete-toast flex gap1rem pos-absolute">
      <i className="fas fa-check-circle"></i>
      Tweet Deleted!
    </div>
  );
};

export default DeleteToast;
