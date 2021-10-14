import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
// import adlDriverimg from "../static/adlCustomer.png";
import adlCmrImg1 from "../static/adlCmr1.png";
import adlCmrImg2 from "../static/adlCmr2.png";
import adlCmrImg3 from "../static/adlCmr3.png";
import adlCmrImg4 from "../static/adlCmr4.png";
import adlCmrImg5 from "../static/adlCmr5.png";
import adlCmrImg6 from "../static/adlCmr6.png";
import { useHistory } from "react-router";

export default function AdlCmr(props) {
  const history = useHistory()
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlCmrImg1,
  });
  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={()=>history.goBack() }> </div>
      <div className="main">
        <header>
          <h3> شرکت باربری عدل ترابران توس </h3>
          <h4>پنل باربری شرکت حمل و نقل </h4>
          <h5> ASP.NET - React.js - SQL Server</h5>
        </header>
        <div className="imgWrapper">
        <img
          src={adlCmrImg1}
          alt="project pic"
          className={`slide ${state.activeSlider == 1 ? "opaque" : ""}`}
        />
        <img
          src={adlCmrImg2}
          alt="project pic"
          className={`slide ${state.activeSlider == 2 ? "opaque" : ""}`}
        />
        <img
          src={adlCmrImg3}
          alt="project pic"
          className={`slide ${state.activeSlider == 3 ? "opaque" : ""}`}
        />
        <img
          src={adlCmrImg4}
          alt="project pic"
          className={`slide ${state.activeSlider == 4 ? "opaque" : ""}`}
        />
        <img
          src={adlCmrImg5}
          alt="project pic"
          className={`slide ${state.activeSlider == 5 ? "opaque" : ""}`}
        />
        <img
          src={adlCmrImg6}
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
          این پنل برای  شرکت های صدور بارنامه ایجاد شده است تا در محیط وب بار های موجود
        ثبت شده  در سامانه را ملاحظه کنند و بار های مورد علاقه خود را پذیرش کرده و مراحل صدور حواله، تایید مدیر فنی، ثبت اسکن حواله و بارنامه و ... را به راحتی انجام دهند 
        </p>
        <p className="description">
          این پنل از صفر تا صد توسط من انجام شده است. تمامی بخش های فرانت و تمامی مسیر ها و procedure های سمت سرور نیز 
          توسط من اجرا شدند.
          تمامی بارهایی که توسط صاحب کالا تایید قیمت می شوند وارد سالن اعلام بار می شوند و
          شرکت هایی که سریعتر اقدام کنند بار را پذیرش می کنند و مراحل
           صدور حواله، تایید حواله توسط مدیر فنی، ثبت اسکن حواله و بارنامه را 
           به صورت آنلاین انجام می دهند.
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
