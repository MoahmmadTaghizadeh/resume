import React, { useRef, useState } from "react";
import ResumeCard from "./ResumeCard";
import adlDriverimg from "../static/adlCustomer.png";
import adlDriverImg1 from "../static/18301.png";
import adlDriverImg2 from "../static/18302.png";
import adlDriverImg3 from "../static/18303.png";
import adlDriverImg4 from "../static/18304.png";
import adlDriverImg5 from "../static/18305.png";
import adlDriverImg6 from "../static/18306.png";
import title from "../static/1830title.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Taxi1830(props) {
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
        {/* <img src={title} /> */}
        {/* <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28243%2C243%2C247%2C1%29&t=seti&wt=none&l=stylus&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253Cheader%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253E%2520%25D8%25A2%25DA%2598%25D8%25A7%25D9%2586%25D8%25B3%25201830%2520%25D9%2585%25D8%25B4%25D9%2587%25D8%25AF%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%2520%25D9%25BE%25D9%2586%25D9%2584%2520%25D8%25A7%25D9%25BE%25D8%25B1%25D8%25A7%25D8%25AA%25D9%2588%25D8%25B1%2520%25D8%25AA%25D9%2584%25D9%2581%25D9%2586%2520%25D9%2588%2520%25D8%25A8%25DB%258C%25D8%25B3%25DB%258C%25D9%2585%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E%2520ASP.NET%2520-%2520React.js%2520-%2520SQL%2520Server%2520%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fheader%253E"
          style={{width: '588px', height:' 276px', border:'0', transform: 'scale(1)', overflow:'hidden', }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe> */}
        <header>
          <h3> آژانس 1830 مشهد </h3>
          <h4>پنل اپراتور تلفن و بیسیم</h4>
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
            href="https://kalaran.efspco.ir:5001"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://kalaran.efspco.ir:5001{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای ثبت سفر تاکسی 1830 مشهد طراحی شده است که اپراتور ها با آن
          می توانند سفر های موجود را ثبت یا پیگیری کنند.
        </p>
        <p className="description">
          در این پروژه من بخش هایی که ایراد داشت (ثبت سفر و یا بخش آدرس های اخیر
          مشتری) را رفع ایراد کردم و بخش های جدیدی نیز به پروژه افزودم. از جمله
          این بخش ها می توان به اضافه شدن کپچا، دریافت شماره تماس گیرنده و پر
          شدن فرم بر اساس اطلاعات موجود از مشتری، بخش کنسلی سرویس ها و از همه
          مهم تر تماس اینترنتی در محیط وب در همان صفحه با استفاده از SIP و
          ارتباط این بخش با سرور، ارسال متن صوتی تماس مشتری با اپراتور برای
          راننده و موارد دیگر اشاره کرد.
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
