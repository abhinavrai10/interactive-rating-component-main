import React from "react";
import "./Wrapper.module.css";
const Wrapper = (props) => {
  return <main>{props.children}</main>;
};

export default Wrapper;
