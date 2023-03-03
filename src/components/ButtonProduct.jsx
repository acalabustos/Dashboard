import React from 'react';


function ButtonProduct (props) {
  const buttonStyle = {
    margin: '10px',
  };

  return (
    <button style={buttonStyle} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ButtonProduct;