import React, { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Footer from "../common/footer";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbars from "../common/mainnav";

const Aboutpg = () => {
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
      {/* About name container */}
      <Row className="my-5">
        <Col className="text-center topics font_white">
          <h1>About</h1>
        </Col>
        <Row>
          <Col className="text-center mt-5 head_quotes font_white">
            <h6>Tailored-Made Coffee</h6>
            <h1>We offer a unique coffee</h1>
            <h1>house environment unlike</h1>
            <h1>any other in India.</h1>
          </Col>
        </Row>
      </Row>
      <hr className="font_white" />
      {/* body_container */}
      <Row className="my-5 font_white" data-aos="fade-up">
        <Col className="head_quotes" xs={12} md={6}>
          <h1>Just Brewed</h1>
          <h1>Happiness</h1>
          <h1>In a Cup of Coffee!</h1>
        </Col>
        <Col className="">
          <h4>The perfect place to enjoy your coffee</h4>
          <p>
            "Indulge in the art of coffee at our charming café, where every cup
            is a journey to perfection. Our passion for coffee knows no bounds,
            and we're dedicated to delivering the ultimate coffee experience to
            our customers.
          </p>
          <p>
            Our artisanal coffee beans are carefully selected from exotic
            locations around the world, each with a unique story to tell. From
            the moment you step through our door, you'll be greeted by the
            alluring aroma of freshly brewed coffee.
          </p>
        </Col>
      </Row>
      <hr className="font_white" />
      <Row className="font_white d-flex my-5" data-aos="fade-up">
        <Row className=" text-center head_quotes">
          <h1>Our coffee offering include a wide</h1>
        </Row>
        <Row className=" text-center mt-3">
          <p className="text-center">
            Whether you're a fan of dark, rich roasts or prefer the subtle
            complexities of light roasts, we have something for everyone. Our
            dedicated team of baristas is passionate about brewing the perfect
            cup of coffee to suit your taste. At our coffee shop, you can savor
            the delightful aromas and flavors that our expertly roasted beans
            offer. We believe that every cup of coffee tells a story, and we're
            here to help you discover the narrative behind each sip.
          </p>
        </Row>
      </Row>
      {/* image_container */}
      <Row className="mt-5 " data-aos="fade-up">
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="image-with-hover">
            <Card.Img className="" variant="top" src="/abimg1.jpg" />
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="image-with-hover">
            <Card.Img className="" variant="top" src="/abimg5.jpg" />
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="image-with-hover">
            <Card.Img className="" variant="top" src="/abimg1.jpg" />
          </Card>
        </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  );
};
export default Aboutpg;
