import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlCustomerImg1 from "../static/adlCustomer1.png";
import adlCustomerImg2 from "../static/adlCustomer2.png";
import adlCustomerImg3 from "../static/adlCustomer3.png";
import adlCustomerImg4 from "../static/adlCustomer4.png";
import adlCustomerImg5 from "../static/adlCustomer5.png";
import adlCustomerImg6 from "../static/adlCustomer6.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import slider from "./slider";
import { Slideshow } from "./slider";
import { useHistory } from "react-router";

export default function AdlCmr(props) {
  const history = useHistory()
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlCustomerImg1,
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
          src={adlCustomerImg1}
          alt="project pic"
          className={`slide ${state.activeSlider == 1 ? "opaque" : ""}`}
        />
        <img
          src={adlCustomerImg2}
          alt="project pic"
          className={`slide ${state.activeSlider == 2 ? "opaque" : ""}`}
        />
        <img
          src={adlCustomerImg3}
          alt="project pic"
          className={`slide ${state.activeSlider == 3 ? "opaque" : ""}`}
        />
        <img
          src={adlCustomerImg4}
          alt="project pic"
          className={`slide ${state.activeSlider == 4 ? "opaque" : ""}`}
        />
        <img
          src={adlCustomerImg5}
          alt="project pic"
          className={`slide ${state.activeSlider == 5 ? "opaque" : ""}`}
        />
        <img
          src={adlCustomerImg6}
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
