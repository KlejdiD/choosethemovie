import React from "react";

const SubheadButton = ({ text , clickHandler }) => {

  // Define the action that happens when the button is clicked

  

  return (
    <div>
      <button 
      onClick={clickHandler}
        style={{
          backgroundColor: 'transparent', // Button background color
          color: 'black', // Text color
          padding: '0px 0px', // Padding
          borderRadius: '5px', // Rounded corners
          border: 'none', // No border
          cursor: 'pointer', // Pointer cursor on hover
          fontSize: '16px', // Text size
          fontWeight: 'bold'
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default SubheadButton;
