import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/fahrzeugAdmin1.png";
import adlDriverImg2 from "../static/fahrzeugAdmin2.png";
import adlDriverImg3 from "../static/fahrzeugAdmin3.png";
import adlDriverImg4 from "../static/fahrzeugAdmin4.png";
import adlDriverImg5 from "../static/fahrzeugAdmin5.png";
import adlDriverImg6 from "../static/fahrzeugAdmin6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function FahrzeugAdmin(props) {
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
          <h3>شرکت آلمانی Fahrzeug </h3>
          <h4>پنل ادمین </h4>
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
          <a
            href="http://fahrzeugtool.inosup.org/admin"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://fahrzeugtool.inosup.org/admin{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای ادمین های شرکت فارزویگ ایجاد شده است تا در محیط وب نواحی،
          مناطق، چک پوینت ها و... مورد استفاده در پنل کاربری را تعریف، ویرایش و
          یا حذف کنند. و گزارش های کاملی از کار کارکنان شرکت دریافت کنند
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر توسعه و دیباگینگ کار را بر عهده داشتم
          و ناحیه های غیراساسی را نیز به این پنل اضافه کردم. از جمله ایرادات می
          توان به رفع validation در فرم های ثبت منطقه و ناحیه، ثبت ترکینگ برای
          مگا باتن اضافه شده در پنل کاربری، بهبود متن خطاها و ترکینگ ها و ایجاد
          سطخ دسترسی برای انواع کارمندان(تعمیرکار، بازرس، پشتیبانی و ...) اشاره
          کرد
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
