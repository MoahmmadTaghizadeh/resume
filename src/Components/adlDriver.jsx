import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/adlDriver1.png";
import adlDriverImg2 from "../static/adlDriver2.png";
import adlDriverImg3 from "../static/adlDriver3.png";
import adlDriverImg4 from "../static/adlDriver4.png";
import adlDriverImg5 from "../static/adlDriver5.png";
import adlDriverImg6 from "../static/adlDriver6.png";
import { useHistory } from "react-router";

export default function AdlDriver(props) {
  const history = useHistory()
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
  });
  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={()=>history.goBack() }> </div>
      <div className="main">
        <header>
          <h3> شرکت باربری عدل ترابران توس </h3>
          <h4>پنل باربری راننده </h4>
          <h5> ASP.NET - React.js - SQL Server</h5>
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
            ></lord-icon>{" "}{" "}
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
          <a
            href="http://adltarabaran.efspco.ir:8016"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://adltarabaran.efspco.ir{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="http://noorinet.efspco.ir:2005"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://noorinet.efspco.ir{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="http://kalaran.efspco.ir:3000"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://kalaran.efspco.ir{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای رانندگان شرکت ایجاد شده است تا در محیط وب بار های موجود
          در سامانه باربری عدل ترابر را مشاهده کنند و با ثبت قیمت مورد نظر خود
          برای حمل بار در صورت برنده شدن در مناقصه بارگیری و حمل بار را انجام
          دهند.
        </p>
        <p className="description">
          در این پروژه من توسعه بخش های جستجوی نقشه، احراز هویت راننده،
          validation اطلاعات ثبت شده در فرم های مختلف سایت (از جمله ثبت اطلاعات
          راننده و خودرو)، اضافه شدن بخش نمایش حواله و بارنامه و اطلاعات شرکت
          حمل و نقل در صفحه بار ها، اضافه شدن پیشنهادات و انتقادات و ... را به
          عهده داشتم. موارد فوق به صورت Full-stack انجام شده و تمامی Procedure
          ها و webservice های لازم را نیز ایجاد و ویرایش کردم.
        </p>
        <p className="description">
          این پنل برای 3 شرکت "باربری نوریــ نت" ، "باربری عدل ترابر" و "باربری
          کالاران رهنگار" اعمال شده است که شرکت های نورینت و عدل ترابر نیز مجوز
          رسمی پنل را از وزارتخانه مربوطه دریافت کردند.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
