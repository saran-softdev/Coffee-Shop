import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../common/mainnav";
import Footer from "../common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Navbars />
      </Row>
      {/* Image and text container */}
      <Row>
        <Col xs={12} sm={6} className="font_white p-5 head_quotes">
          <div className="body_parent">
            <div className="child focus-in-expand">
              <h1 className="fw-bold display-1">Welcome!</h1>{" "}
              {/* Adjust the display size for smaller screens */}
              <h1 className="fw-bold display-1">We serve the</h1>
              <h1 className="fw-bold display-1">richest coffee in</h1>
              <h1 className="fw-bold display-1">The city</h1>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6}>
          <img
            src="./homeimg1.png"
            className="img-fluid focus-in-expand"
            alt="..."
          />
        </Col>
      </Row>
      {/* Drinks container */}
      <Row data-aos="fade-up">
        <h1 className="font_white topics text-center">Beverages</h1>
        <p className="font_white text-center">_______________</p>
        <div>
          <p className="font_white text-center h5">
            {" "}
            "Explore our refreshing selection of drinks, from classic cocktails
            to exotic blends. Sip, savor, and quench your thirst with our
            handcrafted beverages."
          </p>
        </div>
        <a
          href="/Ourmenu"
          className="font_white topics mt-5  text-center anchortag"
        >
          All Drinks{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
          </svg>
        </a>
      </Row>
      {/* Card container */}
      <Row className="mt-5 card_container" data-aos="fade-up">
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover font_white">
            <Card.Img className="img_hover" variant="top" src="./card1.png" />
            <Card.Body>
              <Card.Title className="topics">Iced Coffee:</Card.Title>
              <Card.Text className="head_quotes">
                A coffee with ice, typically served with a dash of milk, cream
                or sweetenericed coffee is really as simple as that. Iced coffee
                fanatics know that whipping up .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover font_white">
            <Card.Img className="img_hover" variant="top" src="./card2.png" />
            <Card.Body>
              <Card.Title className="topics">Espresso:</Card.Title>
              <Card.Text className="head_quotes">
                Espresso is a concentrated coffee brewed by forcing a small
                amount of nearly boiling water through finely-ground coffee
                beans. It's the base for coffee.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover font_white">
            <Card.Img className="img_hover" variant="top" src="./card3.png" />
            <Card.Body>
              <Card.Title className="topics">Cappuccino:</Card.Title>
              <Card.Text className="head_quotes">
                A cappuccino is made by combining equal parts of espresso,
                steamed milk, and milk foam. It's known for its rich, creamy
                texture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Single img */}
      {/* <Row>
        <Col className=" d-flex justify-content-center m-5">
          <img
            src="./homeimg2.png"
            className="img-fluid image-with-transition"
            alt="..."
          />
        </Col>
      </Row>{" "} */}
      {/* Tea container */}
      <Row className="d-flex justify-content-center align-items-center mt-5 z-2">
        <div
          className="card mb-3 card_container1  p-3 mb-5 bg-body-tertiary rounded"
          style={{ maxWidth: "80%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./homeimg3.png"
                className="img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="fw-bold">From ₹80</p>
                <h2 className="card-title fw-bold">Buy for Home</h2>
                <p>_____________________</p>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      {/* About text */}
      <Row className="mt-3 font_white position-relative">
        <p className="text-center h4 p-0 mb-0 ">
          {/* where passion and quality come together to bring you the finest coffee
          experience */}
          <img
            src="./sideimg/side1.png"
            className=" position-absolute bottom-0 end-0 w-25"
            alt="..."
          />
        </p>
      </Row>
      {/* About context */}
      <Row className="p-0">
        <Footer />
      </Row>
    </Container>
  );
};

export default Homepg;
