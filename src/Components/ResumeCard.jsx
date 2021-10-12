import React from 'react'

export default function ResumeCard(props) {
      return (
            <div className="resumeCard">
                  <img src={props.img} alt="picture" height="230px" width="350px" className="s" />
                  <div>
                        <h3 className="resumeCard2">
                              {props.firstTitle}
                        </h3>
                        <h4>
                              {props.secondTitle}
                        </h4>
                        <h5>
                              {props.thirdTitle}
                        </h5>
                  </div>
            </div>
      )
}
