import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { Link, glide, Navigation } from "react-tiger-transition";
// import "react-tiger-transition/styles/main.min.css";

// glide({
//   name: "glide-right",
//   direction: "right",
// });

export default function ResumeCard(props) {
  return (
    <NavLink className="resumeCard" to={props.link}>
      {props.show ? <img
        src={props.img}
        alt="project sample page"
        height="230px"
        width="350px"
        className="s"
      /> : <div style={{height: '0px'}}> </div> }
      <div>
        <h3 className="resumeCard2">{props.firstTitle}</h3>
        <h4>{props.secondTitle}</h4>
        <h5>{props.thirdTitle}</h5>
      </div>
    </NavLink>
  );
}
