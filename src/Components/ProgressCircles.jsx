import React from 'react'

export default function ProgressCircles(props) {
      return (
            <>
            <div className="circleWrapper">
                  <div className={props.isActive == 0 ? "activeCircle" : "circle"}></div>
                  <div className={props.isActive == 1 ? "activeCircle" : "circle"}></div>
                  <div className={props.isActive == 2 ? "activeCircle" : "circle"}></div>
                  <br />
            </div>
            <div className="loader"></div>
            </>
      )
}
