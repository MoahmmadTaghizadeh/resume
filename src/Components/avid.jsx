import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
// import adlDriverimg from "../static/adlCustomer.png";
import webAppImg1 from "../static/avid4.png";
import webAppImg2 from "../static/avid1.png";
import webAppImg3 from "../static/avid2.png";
import webAppImg4 from "../static/avid3.png";
import webAppImg5 from "../static/avid5.png";
import webAppImg6 from "../static/avid6.png";
import webAppImg7 from "../static/avid7.png";
import webAppImg8 from "../static/avid8.png";
import { useHistory } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/swiper.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

// SwiperCore.use([EffectCoverflow,Pagination]);
export default function Avid(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: webAppImg1,
  });
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={() => history.goBack()}>
        {" "}
      </div>
      <div className="main">
        <header>
          <h3> شرکت ابتکار فناوران سهند پویا </h3>
          <h4>وب اپلیکیشن تاکسی ابتکار</h4>
          <h5> Node.js - React.js - SQL Server</h5>
        </header>
        <Swiper
          effect={"coverflow"}
          style={{height: "400px"}}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
        {/* <div className="imgWrapper"> */}
          {/* <img
            src={webAppImg1}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 1 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg2}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 2 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg3}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 3 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg4}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 4 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg5}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 5 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg6}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 6 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg7}
            alt="project pic"
            width="300px"
            height="500px"
            className={`slide ${state.activeSlider == 7 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg8}
            alt="project pic"
            width="305px"
            height="500px"
            className={`slide ${state.activeSlider == 8 ? "opaque" : ""}`}
          /> */}
        {/* </div> */}
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
        {/* <span>
          {" "}
          آدرس سایـــــــت: (در حال توسعه)
          <a href="http://efspco.ir:3001" target="_blank" rel="noreferrer">
            {" "}
            https://efspco.ir:3001{" "}
          </a>
        </span> */}
        <p className="description">
          این وب اپلیکیشن برای تاکسی ابتکار طراحی شده است که تمامی امکانات
          درخواست تاکسی، ذخیره مبدا و مقصد، ذخیره مسیر و ... را داراست و کارایی
          آن مشابه اسنپ می باشد.
        </p>
        <p className="description">
          این اپلیکیشن تماما یعنی تمامی بخش های فرانت اند (React و MaterialUI) و
          تمامی بخش های بک اند (Node.js و SQL Server) توسط من انجام شده است. از
          جمله امکانات این اپ نقشه OpenStreetMap کتابخانه زیبای MaterialUI است.
        </p>
        <p className="description">
          این اپلیکیشن فعلا در حال توسعه است و امکاناتی مثل ثبت سفر، محاسبه
          هزینه سفر، پیمایش مسیر و تنظیمات سفر اجرا شده اند و بخش هایی مثل کیف
          پول و پیگیری سفر نیز در حال اجرا هستند
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
