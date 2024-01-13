import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Favorite } from "@mui/icons-material";
import avatar from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import Person from "../../assets/Person.jpeg";
import Mursel from "../../assets/Mursel.jpeg";
import "./index.css";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="title">
            People{" "}
            <Favorite
              sx={{
                fontSize: "40px",
                color: "#5ba601",
              }}
            />{" "}
            Us and here's why
          </h2>

          <p className="decription">
          Over 13,000+ people use WealthGo to invest in properties,
           mining & jews here’s what a few of them have to say
          </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={avatar} alt="customer" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Investor</h4>
              <p>
              At first, I was doubting but after I gave it a trial and received my investment profit in Plan 1. 
              I was totally convinced that the system is reliable 👍 
              </p>
            </div>
          </div>
          <div>
            <img src={Person} alt="customer" />
            <div className="myCarousel">
              <h3>Ümit Çetin</h3>
              <h4>Investor</h4>
              <p>
              WealthGo is really fast and easy to use. I don’t 
              have issues investing in this company
              </p>
            </div>
            </div>

          <div>
            <img src={Person} alt="customer" />
            <div className="myCarousel">
              <h3>Özcan Hasan</h3>
              <h4>Investor</h4>
              <p>
              Joining WealthGo has really been a life changing platform 
              for not just me but my friends and family, I’ve been investing in 
              this platform and my portfolio has really grown on the platform I’m 
              so happy to be in this investment journey with WealthGo
              </p>
            </div>
          </div>

          <div>
            <img src={Mursel} alt="customer" />
            <div className="myCarousel">
              <h3>Mürsel Özdemir</h3>
              <h4>Investor</h4>
              <p>
              I am happy to be here and part of the investment journey so far, 
              I recommend. It is secured and guaranteed 
              </p>
            </div>
            </div>
          <div>
            <img src={avatar3} alt="customer" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Investor</h4>
              <p>
              I enjoy catching up with WealthGo on
               my laptop, or on my phone when I’m on the go! 
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
