import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/englishhob1.png";
import adlDriverImg2 from "../static/englishhob2.png";
import adlDriverImg3 from "../static/englishhob3.png";
import adlDriverImg4 from "../static/englishhob4.png";
import adlDriverImg5 from "../static/englishhob5.png";
import adlDriverImg6 from "../static/englishhob6.png";
import { useHistory } from "react-router";

export default function Englishhob(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
  });
  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={() => history.goBack()}>
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
          این پنل برای کاربران شرکت فارزویگ ایجاد شده است تا در محیط وب خودروهای
          موجود در انبار را ثبت کنند و مرحله به مرحله فرایند ثبت خودرو، شناسایی
          وضعیت خودرو، بررسی چک پوینت های موجود برای خودرو و تعیین وضعیت برای آن
          ها (از جمله: سالم، نیازمند بررسی، نیازمند قطعه و ...)، گرفتن گزارش از
          بخش های مختلف کار و ... را انجام دهند.
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر توسعه و دیباگینگ کار را بر عهده داشتم
          و بخش Mega Button را نیز به این پنل افزودم که با فشردن آن تمامی چک
          پوینت های اساسی سبز می شوند و صفحه جدیدی برای کاربر ایجاد می شود تا یک
          سری چک پوینت غیراساسی نیز کنترل شود
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
