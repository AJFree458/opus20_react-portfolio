import React from "react";
import EventBook from "../../images/2020:02:16-EventBook-Screenshot.png"
import JavascriptQuiz from "../../images/2020:03:16-JavascriptQuiz-Screenshot.png";
import PasswordGen from "../../images/2020:03:16-PasswordGen-Screenshot.png";
import WeatherDashboard from "../../images/2020:03:16-WeatherDashboard-Screenshot.png";
import Burger from "../../images/Burger_Demo.png";
import Tracker from "../../images/Employee-Tracker_Demo.png";
import Notes from "../../images/Note-Taker_Demo.png";
import Volunteer from "../../images/Project-2_Demo.png";
import Readme from "../../images/Readme-generator_Demo.png";


const Card = () => {
  return (
    <div>
      <div className="row">
        <div className="card-deck p-3">
          <div className="card mb-3">
            <img src={EventBook} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">EventBook</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/Project_opus_1">github.com/AJFree458/Project_opus_1</a></p>
              <p>Deployment: <a href="https://ajfree458.github.io/Project_opus_1/">ajfree458.github.io/Project_opus_1/</a></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={Volunteer} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Project-2_Volunteer</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/Project-2">github.com/AJFree458/Project-2</a></p>
              <p>Deployment: <a href="https://project2-volunteer.herokuapp.com/">project2-volunteer.herokuapp.com/</a></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={PasswordGen} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Password Generator</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus3_pgenerator">github.com/AJFree458/opus3_pgenerator</a></p>
              <p>Deployment: <a href="https://ajfree458.github.io/opus3_pgenerator/">ajfree458.github.io/opus3_pgenerator/</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-deck p-3">
          <div className="card mb-3">
            <img src={JavascriptQuiz} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">JS Quiz</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus4_js_basics_quiz">github.com/AJFree458/opus4_js_basics_quiz</a></p>
              <p>Deployment: <a href="https://ajfree458.github.io/opus4_js_basics_quiz/">ajfree458.github.io/opus4_js_basics_quiz/</a></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={Burger} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">MVC Eat-Da Burger</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus13_MVC-Burger">github.com/AJFree458/opus13_MVC-Burger</a></p>
              <p>Deployment: <a href="https://warm-plains-37625.herokuapp.com/">Heroku App</a></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={WeatherDashboard} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Weather Dashboard</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus6_weather_dash">github.com/AJFree458/opus6_weather_dash</a></p>
              <p>Deployment: <a href="https://ajfree458.github.io/opus6_weather_dash/">ajfree458.github.io/opus6_weather_dash/</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-deck p-3">
          <div className="card mb-3">
            <img src={Notes} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Express Note Taker</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus11_express-note-taker">github.com/AJFree458/opus11_express-note-taker</a></p>
              <p>Deployment: <a href="https://ancient-woodland-06582.herokuapp.com/">ancient-woodland-06582.herokuapp.com/</a></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={Tracker} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Employee Tracker</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus12_employee-tracker">github.com/AJFree458/opus12_employee-tracker</a></p>
              <p>Deployment: N/A</p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={Readme} className="card-img-top" alt="portfolio" />
            <div className="card-body">
              <h3 className="card-title">Readme Generator</h3>
              <h4>Links:</h4>
              <p>Repository: <a href="https://github.com/AJFree458/opus9_readme-generator">github.com/AJFree458/opus9_readme-generator</a></p>
              <p>Deployment: N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;