import React from "react";
import Me from "../../images/2020:03:15-Profile.jpeg"
import "./style.css";

const Home = () => {
  return (
    <div>
      <h1>Arthur Freeman</h1>
      <article className="flex-shrink-0">
        <div className="container border mt-5 p-3 mb-auto cardBg">
          <h2 className="border-bottom mb-3 pb-3 text-center font-weight-bold">About</h2>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Me} className="card-img mt-5 ml-2" alt="It's Me!"/>
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title">Bio</h4>
                  <p className="card-text">I was born in Charlotte, NC thirty-five years ago. I have an associates degree in architectural technology. I am working on coding right now.</p>
                  <p className="card-text">I like cats, having one myself. I ride a 250cc scooter that I have had for several years. I love music, of almost all types. My current favorite is Irish and Celtic Music. I love to read. Most of what I enjoy is Sci-Fi, Fantasy, and graphic novels.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h4>Important Links</h4>
                  <p>LinkedIn: <a href="https://www.linkedin.com/in/arthur-j-freeman/">https://www.linkedin.com/in/arthur-j-freeman/</a></p>
                  <p>GitHub: <a href="https://github.com/AJFree458">https://github.com/AJFree458</a></p>
                  <h4>Resume</h4>
                  <p>Resume PDF: <a href="./assets/pdf/2020_05_11-Resume.pdf">My Resume</a></p>
                  <h4>Contact Information</h4>
                  <p>Email: rthr.frmn@gmail.com</p>
                  <p>Phone: (704) 258-0102</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Home;
