import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/order1.png";
import adlDriverImg2 from "../static/order2.png";
import adlDriverImg3 from "../static/order3.png";
import adlDriverImg4 from "../static/order4.png";
import adlDriverImg5 from "../static/order5.png";
import adlDriverImg6 from "../static/order6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Zoshk(props) {
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
          <h3> رب زشک خراسان </h3>
          <h4>پنل مدیریت سفارشات </h4>
          <h5> ASP.NET - React.js - SQL Server </h5>
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
          <a href="https://zoshk.efspco.ir:8010" target="_blank" rel="noreferrer">
            {" "}
            https://zoshk.efspco.ir{" "}
          </a>
        </span>
        <p className="description">
          پنل مدیریت سفارشات برای کارخانه رب زشک خراسان طراحی و توسعه داده شده است تا
          سفارشات خود را که قبلا با نرم افزار تحت DOS 
          ثبت و پیگیری می کردند، به محیط وب منتقل کنند و کارهایشان  آسان تر انجام گردد.
          این پنل برای بحث مالی و صدور فاکتور ها با الگوریتم پویا در تعامل است که جزو برترین شرکت ها در این زمینه می باشد.
      
        </p>
        <p className="description">
            من در این پروژه ابتدا ظاهر سایت را بازنویسی کردم و جلوه ظاهری آن را زیبا تر کردم. همچنین باگ های سایت را نیز برطرف کردم و تقویم های آن را بروز کردم. سپس بخش های جدیدی که
            مطابق درخواست شرکت زشک در رابطه با تعامل بهتر با پایا بود به سایت اضافه کردم.
            از جمله این بخش ها می توان به انتقال سفارشات تایید شده در پنل به پایا و یا صدور برگه خروج در هنگام تایید پایا اشاره کرد.
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش ASP.NET و
          SQL Server توسط من انجام شده است
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
