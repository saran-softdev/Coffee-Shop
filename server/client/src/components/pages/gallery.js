import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbars from "../common/mainnav";
import Footer from "../common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallerypg = () => {
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
      <Row className="text-center font_white my-5 topics">
        <h1>Gallery</h1>
      </Row>
      <Row className="image-row m-3" data-aos="fade-up">
        <Col xs={12} sm={4} md={4} className="p-3">
          <img src="./glimg1.jpg" className="img-fluid image " alt="Image 1" />
        </Col>
        <Col xs={12} sm={4} md={4} className="p-3">
          <img src="./glimg2.jpg" className="img-fluid image" alt="Image 2" />
        </Col>
        <Col xs={12} sm={4} md={4} className="p-3">
          <img src="./glimg3.jpg" className="img-fluid image" alt="Image 3" />
        </Col>
      </Row>
      <Row className="image-row m-3 pt-4">
        <Col xs={12} sm={6} md={3} className="p-3">
          <img src="./glimg4.jpg" className="img-fluid image" alt="Image 4" />
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3">
          <img src="./glimg5.jpg" className="img-fluid image" alt="Image 5" />
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3">
          <img src="./glimg6.jpg" className="img-fluid image" alt="Image 6" />
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3">
          <img src="./glimg3.jpg" className="img-fluid image" alt="Image 3" />
        </Col>
      </Row>

      <Row className=" mt-5">
        <Footer />
      </Row>
    </Container>
  );
};
export default Gallerypg;
