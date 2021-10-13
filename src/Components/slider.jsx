import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import adlDriverimg from "../static/adl.png";
const slideImages = [
  {
    url: adlDriverimg,
    caption: 'Slide 1'
  },
  {
    url: adlDriverimg,
    caption: 'Slide 2'
  },
  {
    url: adlDriverimg,
    caption: 'Slide 3'
  },
];

export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`, minHeight: '700px'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}