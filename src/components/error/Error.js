import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Error.css';

function Error({ error }) {
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <div className="error-container">
      <button className="close-button" onClick={handleClose}>
        <AiOutlineClose /> 
      </button>
      <h2>Oops! An error occurred.</h2>
    </div>
  );
}

export default Error;

