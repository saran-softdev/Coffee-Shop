import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LogoutHandle } from "../Redux/ReduxUserData/UserDataAction";
import { useNavigate } from "react-router-dom";
import {
  loginUserEmail,
  loginUserName,
  loginUserImage
} from "../Redux/ReduxUserData/UserDataAction";

function Navbars() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  console.log(BACKEND_URL);

  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const reduxUserEmail = useSelector((state) => state.userData.userEmail);
  const reduxUserName = useSelector((state) => state.userData.userName);
  const reduxUserImage = useSelector((state) => state.userData.userImage);
  const navRef = useRef();

  console.log("<><>", reduxUserEmail, reduxUserName, reduxUserImage);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutHandler = () => {
    if (reduxUserEmail) {
      window.open(`${BACKEND_URL}/auth/logout`, "_self");
      dispatch(LogoutHandle);
      navigate("/");
    }
  };
  const loginHandler = () => {
    navigate("/signin");
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const navElement = navRef.current;
      const navOffsetTop = navElement.offsetTop;

      if (window.scrollY > navOffsetTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getUser = () => {
      fetch(`${BACKEND_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((res) => {
          console.log(res.user);
          dispatch(loginUserName(res.user.userName));
          dispatch(loginUserEmail(res.user.email));
          dispatch(loginUserImage(res.user.userProfile));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="navbar-container position-relative p-0">
      <img
        src="/sideimg/side1.png"
        className=" position-absolute rotate w-25"
        alt="..."
      />

      <Container fluid>
        <div
          className={` w-100 text-center mt-3 image-container ${
            scrolled ? "image-scroll-up" : ""
          }`}
        >
          <img src="/logo.png" className="img-fluid" alt="..." />
        </div>
        <Navbar
          ref={navRef}
          collapseOnSelect
          expand="sm"
          className={`d-flex flex-column ${scrolled ? "sticky" : ""}`}
        >
          <div className="pt-2">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="Togglecolor"
            />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pb-2">
              <Nav.Link href="/" className="font_white font_hover ">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="font_white font_hover">
                About us
              </Nav.Link>
              <Nav.Link href="/ourmenu" className="font_white font_hover">
                Our menu
              </Nav.Link>
              <Nav.Link href="/gallery" className="font_white font_hover">
                Gallery
              </Nav.Link>
              <Nav.Link href="/contact" className="font_white font_hover">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              {reduxUserImage && (
                <div className="center ">
                  <img
                    src={reduxUserImage}
                    width={40}
                    height={40}
                    alt=""
                    className="mx-2 rounded-circle m-xs-4"
                  />
                </div>
              )}
              {reduxUserEmail ? (
                <Button
                  onClick={() => {
                    logoutHandler();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    loginHandler();
                  }}
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navbars;
