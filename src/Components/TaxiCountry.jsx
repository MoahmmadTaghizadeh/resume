import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/taxi1.png";
import adlDriverImg2 from "../static/taxi2.png";
import adlDriverImg3 from "../static/taxi3.png";
import adlDriverImg4 from "../static/taxi4.png";
import adlDriverImg5 from "../static/taxi5.png";
import adlDriverImg6 from "../static/taxi6.png";
import { useHistory } from "react-router";

export default function TaxiCountry(props) {
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
          <h3> شرکت ابتکار فناوران </h3>
          <h4>پروژه مدیریت آژانس در کل کشور</h4>
          <h5> Node.js - React.js - SQL Server - MongoDB</h5>
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
          در حال توسعه
          {/* <a
            href="http://fahrzeugtool.inosup.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://fahrzeugtool.inosup.org{" "}
          </a>  */}
        </span>
        <p className="description">
          این پروژه با 4 سطح دسترسی در سطح کشور تعریف شده است: کاربر اتحادیه
          کشوری، کاربر اتحادیه شهری، مدیر آژانس و اپراتور آژانس. مدیر کشوری بر
          تمامی استان ها و آژانس ها دسترسی دارد و همینطور مرحله به مرحله دسترسی
          ها کم و کمتر می شوند. در نهایت اپراتور آژانس فقط می تواند برای آژانس
          خود سفر ثبت کند و موقعیت رانندگان را روی نقشه مشاهده کند.
        </p>
        <p className="description">
          این پروژه با ASP.NET و React پیش رفته بود اما با توجه به سیاست های
          شرکت تصمیم بر این شد تمامی بخش ASP به Node تغییر پیدا کند. که این کار
          توسط من انجام شد. هم چنین بخش سایدبار سایت نیز توسط من طراحی شد و صفحه
          پیمایش مسیر نیز توسط من انجام شده است.
        </p>
        <p className="description">
          در صفحه پیمایش مسیر، تمامی مختصات های رانندگان در دیتابیس MongoDB هر
          15 ثانیه ذخیره می شود . سپس با توجه به بازه زمانی انتخاب شده و کد
          تاکسی مربوطه مسیر حرکت تاکسی روی نقشه کشیده می شود.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
