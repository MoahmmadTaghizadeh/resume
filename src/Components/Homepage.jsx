import React, { useState, useEffect } from 'react'
import ProgressCircles from './ProgressCircles'
import { NavLink } from 'react-router-dom'
import Jobs from './Jobs'

export default function Homepage() {
      const [state, setState] = useState({
            isScrolled: false,
            activeAboutMe: 1
      })
      const AboutMes = [{
            firstTitle: " اسم من1 ",
            secondTitle: "علیرضا ولی زاده است",
            paragraph: "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم"
      }, {
            firstTitle: " اسم من 2",
            secondTitle: "2علیرضا ولی زاده است",
            paragraph: "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم"
      },
      {
            firstTitle: " اسم من3 ",
            secondTitle: "3علیرضا ولی زاده است",
            paragraph: "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم"
      }
      ]
      const interval = setInterval(() => {
            setState((prevState) => ({
                  ...prevState,
                  activeAboutMe: state.activeAboutMe === AboutMes.length - 1 ? 0 : state.activeAboutMe + 1
            }))
            clearInterval(interval)
      }, 5000)
      
      const navLinks = [{
            link: "/",
            title: "مهارت ها"
      }, {
            link: "/#resume",
            title: "نمونه کار ها"
      }, {
            link: "/#jobs",
            title: "سابقه شغلی"
      }, {
            link: "/#contact-me",
            title: "ارتباط با من"
      }]
      let handleShow = (boolean) => {
            console.log(state.activeAboutMe)
            setState((prevState) => ({
                  ...prevState,
                  isScrolled: boolean
            }))
      }
      useEffect(() => {
            window.addEventListener('scroll', () => {
                  if (window.scrollY > 100) {
                        handleShow(true);
                  } else handleShow(false);
            });
            return () => {
                  window.removeEventListener('scroll', {});
            };
      }, []);
      const backToTop = () => {
            window.scroll({ top: 0, behavior: 'smooth' });
      };

      return (
            <>
                  <div className="homePage">
                        <div className="bg-home">
                              <section id="home">
                                    <nav>
                                          <div id="wrapper">
                                                <ul>
                                                      {navLinks.map((item, index) => (
                                                            <li className="different">
                                                                  <a href={item.link} exact key={index} >
                                                                        <span className="aLink">{item.title} </span>
                                                                  </a>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </nav>
                                          <div className="about-me" >
                                                <h2> {AboutMes[state.activeAboutMe].firstTitle} </h2>
                                                <h1> {AboutMes[state.activeAboutMe].secondTitle} </h1>
                                                <br />
                                                <p> {AboutMes[state.activeAboutMe].paragraph} </p>
                                                <ProgressCircles isActive={state.activeAboutMe} />
                                          </div>
                              </section>
                        </div>
                  </div>
                  <section id="resume">
                        asdasd
                  </section>
                  <section id="jobs">
                        <Jobs />
                  </section>
                  {state.isScrolled ? <button className="scrollButton" onClick={() => backToTop()}><lord-icon
                        src="https://cdn.lordicon.com/rvuqcvqy.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{ width: '35px', height: '35px' }}>
                  </lord-icon></button> : null}
            </>
      )
}
