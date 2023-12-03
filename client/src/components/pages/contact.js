import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbars from "../common/mainnav";
import Footer from "../common/footer";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container fluid>
      <Row>
        <Navbars />
      </Row>
      <Row className="font_white mt-5 topics">
        <Col>
          <h1 className="text-center">Contact</h1>
        </Col>
      </Row>
      <hr className=" font_white mt-5" />
      <Row className="font_white mt-4">
        <Col xs={12} md={6} className="p-5">
          <h3 className="head_quotes">Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper
          </p>
          <p className=" m-0 mt-3 ">929-242-6868</p>
          <p className="m-0 ">contact@gmail.com</p>
          <p className="m-0 ">123 Fifth Avenue, New York, NY 10160</p>
        </Col>
        <Col xs={12} md={6} className="mt-3 p-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Footer />
      </Row>
    </Container>
  );
};

export default Contact;
