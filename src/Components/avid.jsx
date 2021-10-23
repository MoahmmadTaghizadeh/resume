import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
// import adlDriverimg from "../static/adlCustomer.png";
import webAppImg1 from "../static/avid1.png";
import webAppImg2 from "../static/avid2.png";
import webAppImg3 from "../static/avid3.png";
import webAppImg4 from "../static/avid4.png";
import webAppImg5 from "../static/avid5.png";
import webAppImg6 from "../static/avid6.png";
import webAppImg7 from "../static/avid7.png";
import webAppImg8 from "../static/avid8.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function WebApplicationTaxi(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: webAppImg1,
  });
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8];

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
          <h3>استارتاپ آوید</h3>
          <h4>شبکه اجتماعی آوید</h4>
          <h5> Node.js - Flutter - MySQL</h5>
        </header>
        <div className="imgWrapper">
          <img
            src={webAppImg1}
            alt="project pic"
            className={`slide ${state.activeSlider == 1 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg2}
            alt="project pic"
            className={`slide ${state.activeSlider == 2 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg3}
            alt="project pic"
            className={`slide ${state.activeSlider == 3 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg4}
            alt="project pic"
            className={`slide ${state.activeSlider == 4 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg5}
            alt="project pic"
            className={`slide ${state.activeSlider == 5 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg6}
            alt="project pic"
            className={`slide ${state.activeSlider == 6 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg7}
            alt="project pic"
            className={`slide ${state.activeSlider == 7 ? "opaque" : ""}`}
          />
          <img
            src={webAppImg8}
            alt="project pic"
            className={`slide ${state.activeSlider == 8 ? "opaque" : ""}`}
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
          آدرس سایـــــــت: (در حال توسعه)
          <a
            href="https://englishhob.ir/chat16/gettypes/en?type=0&groupCode=0"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            نمونه ای از مسیر اطلاعات انگلیسی{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت: (در حال توسعه)
          <a
            href="https://englishhob.ir/chat16/gettypes/fa?type=0&groupCode=0"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            نمونه ای از مسیر اطلاعات فارسی{" "}
          </a>
        </span>
        <p className="description">
          آوید یک شبکه اجتماعی است که بر مبنای تست شخصیتی مایر بریگز بنیان گزاری
          شده است . امکانات مختلفی از جمله تشخیص تیپ شخصیتی کاربر با آزمون تهیه
          شده، چت با بقیه کاربران، یافتن افراد نزدیک شخص با پروفایل پابلیک،
          یافتن افرادی که تیپ شخصیتی مکمل فرد را دارند و... را داراست
        </p>
        <p className="description">
          این اپلیکیشن با فلاتر انجام شده است و قسمت backend آن توسط من انجام
          شده و تمامی بخش سرور توسط من هندل شده است (تهیه هاست و آپلود فایل ها و
          خرید دامنه)
        </p>
        <p className="description">
          این اپلیکیشن فعلا در حال توسعه است و امکاناتی مثل تست شخصیت و الگوریتم
          تشخیص تیپ شخصیتی بر اساس پاسخ، چت با بقیه کاربران، یافتن افراد نزدیک
          شخص و ویرایش پروفایل اجرا شده اند و بخش هایی مثل دو زبانه شدن نرم
          افزار و یافتن افراد دارای تیپ شخصیتی مکمل فرد نیز در حال اجرا هستند
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
