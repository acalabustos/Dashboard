import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonProduct (props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ButtonProduct;