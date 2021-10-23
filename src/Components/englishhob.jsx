import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/englishhob1.png";
import adlDriverImg2 from "../static/englishhob2.png";
import adlDriverImg3 from "../static/englishhob3.png";
import adlDriverImg4 from "../static/englishhob4.png";
import adlDriverImg5 from "../static/englishhob5.png";
import adlDriverImg6 from "../static/englishhob6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Englishhob(props) {
  const history = useHistory();

  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
  });

  const buttons = [1, 2, 3, 4, 5, 6];

  const zoom = useRef();

  useEffect(() => {
    zoom.current.scrollIntoView(false);
  }, []);

  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={() => history.push("/#")} ref={zoom}>
        {" "}
      </div>
      <div className="main">
        <header>
          <h3> موسسه آموزش زبان انگلیش هاب </h3>
          <h4>سایت و پنل زبان آموزان </h4>
          <h5> Node.js - React.js - MySQL</h5>
        </header>
        <div className="imgWrapper">
          <img
            src={adlDriverImg1}
            alt="project pic"
            className={`slide ${state.activeSlider == 1 ? "opaque" : ""}`}
          />
          <img
            src={adlDriverImg2}
            alt="project pic"
            className={`slide ${state.activeSlider == 2 ? "opaque" : ""}`}
          />
          <img
            src={adlDriverImg3}
            alt="project pic"
            className={`slide ${state.activeSlider == 3 ? "opaque" : ""}`}
          />
          <img
            src={adlDriverImg4}
            alt="project pic"
            className={`slide ${state.activeSlider == 4 ? "opaque" : ""}`}
          />
          <img
            src={adlDriverImg5}
            alt="project pic"
            className={`slide ${state.activeSlider == 5 ? "opaque" : ""}`}
          />
          <img
            src={adlDriverImg6}
            alt="project pic"
            className={`slide ${state.activeSlider == 6 ? "opaque" : ""}`}
          />
        </div>
        <div className="buttonWrapper" style={{ marginBottom: "60px" }}>
          <button
            className="b"
            onClick={(e) =>
              setState((prevState) => ({
                ...prevState,
                activeSlider:
                  state.activeSlider !== 1 ? state.activeSlider - 1 : 6,
              }))
            }
          >
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/iiueiwdd.json"
              trigger="hover"
              colors="primary:#000,secondary:#000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>{" "}
          </button>
          {buttons.map((id, index) => (
            <button
            key={index}
              className={`circle ${
                state.activeSlider === id ? "activeCircle" : ""
              }`}
              onClick={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  activeSlider: id,
                }))
              }
            ></button>
          ))}
          <button
            className="b"
            onClick={(e) =>
              setState((prevState) => ({
                ...prevState,
                activeSlider:
                  state.activeSlider !== buttons.length
                    ? state.activeSlider + 1
                    : 1,
              }))
            }
          >
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/gkditgni.json"
              trigger="hover"
              colors="primary:#000,secondary:#000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>{" "}
          </button>
        </div>
        <span>
          {" "}
          آدرس سایـــــــت:{" "}
          <a href="https://englishhob.ir" target="_blank" rel="noreferrer">
            {" "}
            https://englishhob.ir{" "}
          </a>
        </span>
        <p className="description">
          سایت انگلیش هاب برای تدریس زبان انگلیسی و اشتراک دوره های رایگان
          آنلاین طراحی شده است. در این سایت که اولین سایت ساخته شده توسط من است،
          صفحات مختلفی وجود دارد و پنلی برای زبان آموزان تعبیه شده است تا در آن
          کلاس های ثبت نامی خود و پیشرفت خود در دوره های آنلاین را ببینند و یا
          با اساتید و دیگر زبان آموزان در محیط سایت چت کنند و آموخته های خود را
          به اشتراک بگذارند
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر تمامی بخش های کار را بر عهده داشتم و
          ایده این آموزشگاه نیز توسط من بوده تا در محیط اسکایپ معلومات زبان
          انگلیسی خودم را با زبان آموزان به اشتراک بگذارم
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش Node و
          MySQL توسط من انجام شده است
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
