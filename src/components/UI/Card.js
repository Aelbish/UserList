import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    //   we have to make sure that we can apply our css class in our custom component, hence we use props to get that css class
    <div className={`${classes.card} ${props.className}`}> {props.children}</div>
  );
};

export default Card;
