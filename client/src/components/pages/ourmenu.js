import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../common/mainnav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../common/footer";

const Ourmenu = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [userData, setUserData] = useState([]);

  const handleBuyClick = () => {
    alert("Apologize, the order has not been included.");
  };
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/product-get`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Row className="mt-5">
        <h1 className=" text-center topics font_white">Our Menu</h1>
        <h1 className=" text-center topics font_white mt-5">Drinks</h1>
        <p className=" text-center font_white mt-2">
          Discover a world of flavors at our café with our extensive beverage
          menu. Whether you prefer a soothing latte, a bold espresso, or a
          refreshing iced tea, we have something for every palate. Our expertly
          crafted drinks are made with the finest ingredients and love for the
          art of coffee.
        </p>
      </Row>
      <Row className="mt-5" data-aos="fade-up">
        {/* <div className="marquee-container ">
          <div className="marquee-content">
            <p >Your scrolling text goes here. </p>
          </div>
        </div> */}
        <marquee behavior="" direction="">
          <h3 className=" text-light fst-italic">
            This coffee is only available in our shop.
          </h3>
        </marquee>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c2.png"
              />
            </div>
            <Card.Body>
              <Card.Title className="font_white">Americano</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                An Americano is a type of coffee made by adding boiled water to
                a shot of espresso. It is called an "Americano" because it is
                similar to the kind of coffee typically served in the United
                States, usually made by brewing hot water over ground coffee
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c3.png"
              />
            </div>

            <Card.Body>
              <Card.Title className="font_white">Latte</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                A latte is a coffee figured up with espresso and steamed milk,
                topped with a thin layer of milk foam. It is typically served in
                a tall, 12-ounce '360-millilitre' glass. A latte has a milder
                flavour and a creamier texture. The milk foam on top adds a
                smooth, velvety texture and a slightly sweet taste.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c4.png"
              />
            </div>

            <Card.Body>
              <Card.Title className="font_white">Macchiato</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                A macchiato is a coffee made with a small amount of steamed milk
                and a dollop of milk foam on top of a shot of espresso. It is
                typically served in a small, 4-ounce (120-millilitre) glass. The
                word "macchiato" means "marked" or "stained" in Italian, which
                refers to the way that the milk foam "marks" the espresso. It is
                similar to a cappuccino but has less milk and more foam, giving
                it a more concentrated flavour.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c5.png"
              />
            </div>

            <Card.Body>
              <Card.Title className="font_white">Mocha</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                Mocha is a coffee made with a latte base and chocolate syrup or
                cocoa powder added. It is typically served in a tall, 12-ounce
                (360-millilitre) glass. The chocolate flavour in a mocha comes
                from either chocolate syrup or cocoa powder, which is mixed into
                the steamed milk before the espresso is added. This gives the
                mocha a rich, chocolaty taste and a smooth, creamy texture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c6.png"
              />
            </div>

            <Card.Body>
              <Card.Title className="font_white ">Flat White</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                A Flat White is a coffee prepared with a double shot of espresso
                and a small amount of steamed milk, topped with a thin layer of
                milk foam. A Flat White is made with about 3 ounces (90
                millilitres) of espresso and 4 ounces (120 millilitres) of
                steamed milk, topped with a thin layer of milk foam. The milk
                foam is typically poured over the espresso and milk in a
                circular motion, creating a "flat" surface on top of the drink.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="mb-4 p-5">
          <Card className="card_hover">
            <div className=" d-flex justify-content-center">
              <Card.Img
                className="img_hover img-container"
                variant="top"
                src="./c7.png"
              />
            </div>

            <Card.Body>
              <Card.Title className="font_white">Cortado</Card.Title>
              <Card.Text className="font_white">₹ 120</Card.Text>
              <Card.Text className="font_white">
                A cortado is a coffee made with a small amount of boiled milk
                and a thin layer of milk foam on top of a shot of espresso. It
                is typically served in a small, 4-ounce (120-millilitre) glass.
                The word "cortado" means "cut" in Spanish, which refers to the
                way that the milk "cuts" the strength of the espresso. A cortado
                is characterized by its balanced, smooth flavour and creamy,
                velvety texture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <h1 className=" font_white topics text-center">Coffee Powders</h1>
      </Row>
      <Row data-aos="fade-up">
        {userData.map((user, index) => (
          <Col className="mb-4 p-5" xs={12} sm={6} lg={4} key={index}>
            <Container>
              <Card className="card_hover img_hover custom-card">
                <Card.Img variant="top" src={user.productImage} />
                <Card.Body>
                  <Card.Title className="font_white">
                    {user.productName}
                  </Card.Title>
                  <Card.Text className="font_white">
                    <p>₹ {user.productPrice} Q-1kg</p>
                  </Card.Text>
                  <Button variant="primary" onClick={handleBuyClick}>
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Ourmenu;
