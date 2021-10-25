import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlCustomerImg1 from "../static/adlCustomer2.png";
import adlCustomerImg2 from "../static/adlCustomer1.png";
import adlCustomerImg3 from "../static/adlCustomer3.png";
import adlCustomerImg4 from "../static/adlCustomer4.png";
import adlCustomerImg5 from "../static/adlCustomer5.png";
import adlCustomerImg6 from "../static/adlCustomer6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Slider from "react-slick";
export default function AdlCustomer(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlCustomerImg1,
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    { url: adlCustomerImg1, title: "adlCustomerImg1" },
    { url: adlCustomerImg2, title: "adlCustomerImg1" },
    { url: adlCustomerImg3, title: "adlCustomerImg1" },
    { url: adlCustomerImg4, title: "adlCustomerImg1" },
    { url: adlCustomerImg5, title: "adlCustomerImg1" },
    { url: adlCustomerImg6, title: "adlCustomerImg1" },
  ];
  const buttons = [1, 2, 3, 4, 5, 6];

  const zoom = useRef();

  useEffect(() => {
    zoom.current.scrollIntoView(false);
  }, []);
  let arr = <div>next</div>
  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={() => history.push("/#")} ref={zoom}>
        {" "}
      </div>
      <div className="main">
        <header>
          <h3> شرکت باربری عدل ترابران توس </h3>
          <h4>پنل باربری صاحب کالا </h4>
          <h5> ASP.NET - React.js - SQL Server</h5>
        </header>
        <Slider {...settings}   >
          <div>
            <img src={adlCustomerImg1} />
          </div>
          <div>
              <img src={adlCustomerImg2} />
          </div>
          <div>
          <img src={adlCustomerImg3} />
          </div>
          <div>
          <img src={adlCustomerImg4} />
          </div>
          <div>
          <img src={adlCustomerImg5} />
          </div>
          <div>
          <img src={adlCustomerImg6} />
          </div>
        </Slider>
        {/* <div className="imgWrapper">
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
        </div> */}
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
          این پنل برای مشتریان شرکت ایجاد شده است تا در محیط وب بار های موجود
          خود را در سامانه ثبت کنند و با اشراف کامل بر فرایند قیمت گزاری و حمل
          بار، بار خود را در مقصد صحیح و سالم از راننده تحویل بگیرند
        </p>
        <p className="description">
          در این پروژه من توسعه بخش های جستجوی نقشه، احراز هویت صاحب کالا
          validation اطلاعات ثبت شده در فرم های مختلف سایت (از جمله ثبت اطلاعات
          شخص حقوقی و حقیقی، ثبت مشخصات بار و ...)، اضافه شدن بخش نمایش حواله و
          بارنامه در صفحه بار ها، اضافه شدن نوع دسته بندی بار هنگام ثبت، رفع
          ایرادات موجود و... را به عهده داشتم. موارد فوق به صورت Full-stack
          انجام شده و تمامی Procedure ها و webservice های لازم را نیز ایجاد و
          ویرایش کردم.
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
