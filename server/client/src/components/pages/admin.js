import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Offcanvas, Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import Footer from "../common/footer";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminpg = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [isProduct, setIsProduct] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [userData, setUserData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [validationError, setValidationError] = useState("");
  const [formError, setFormError] = useState("");

  const handleEditClick = (id) => {
    const userToEdit = userData.find((user) => user._id === id);
    setEditingId(id);
    setProductName(userToEdit.productName);
    setProductImage(userToEdit.productImage);
    setProductPrice(userToEdit.productPrice);
    setIsEditing(true);
    setValidationError(""); // Reset validation error
  };

  const handleSaveClick = (id) => {
    // Perform validation here
    if (!productName || !productImage || !productPrice) {
      setValidationError("All fields are required.");
      return;
    }

    // Handle save logic here
    handlePutRequest(id);
    toast.success("Data Updated successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000 // Time in milliseconds to close the notification automatically
    });
  };

  const handleLogin = () => {
    setIsProduct(true);
    setIsClient(false);
    handleClose();
  };

  const handleShowReports = () => {
    setIsProduct(false);
    setIsClient(true);
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    getdata();
  };

  const formHandle = async (e) => {
    e.preventDefault();

    if (!productName || !productImage || !productPrice) {
      setFormError("Please fill in all fields");
    } else {
      const data = { productName, productImage, productPrice };

      try {
        await axios.post(`${BACKEND_URL}/product-post`, data);
        console.log("Data Submitted Successfully");

        // Reset form and error state after successful submission
        setProductName("");
        setProductImage("");
        setProductPrice("");
        setFormError("");

        // Optionally, fetch updated data after submission
        getdata();
      } catch (error) {
        console.error(error);
      }
    }
    toast.success("Data Submitted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000 // Time in milliseconds to close the notification automatically
    });
  };

  const getdata = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/product-get`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePutRequest = async (id) => {
    const data = { productName, productImage, productPrice };
    try {
      await axios.put(`${BACKEND_URL}/product-update/${id}`, data);
      console.log("Data Updated");
      getdata();
      setIsEditing(false);
      setEditingId(null);
      setValidationError("");
      setProductName("");
      setProductImage("");
      setProductPrice("");
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = (id) => {
    axios
      .delete(`${BACKEND_URL}/product-delete/${id}`)
      .then(() => {
        setUserData(userData.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
    toast.success("Data deleted successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000 // Time in milliseconds to close the notification automatically
    });
  };

  return (
    <Container fluid>
      <Row>
        <h1 className="text-center mt-5 ">Welcome Admin</h1>
      </Row>
      <Row>
        <span className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
        </span>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column gap-2">
            <span>
              <Button onClick={handleLogin}>Product Add</Button>
            </span>

            <span>
              <Button onClick={handleShowReports}>Orders</Button>
            </span>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>

      <div className="pt-5">
        {isProduct ? (
          <div>
            <Row className="m-5">
              <h1 className="text-center">Product Add</h1>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Control
                      type="text"
                      placeholder="Enter Product Name"
                      value={productName}
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicImageUrl">
                    <Form.Control
                      type="text"
                      placeholder="Enter Image Url"
                      value={productImage}
                      onChange={(e) => {
                        setProductImage(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control
                      type="text"
                      placeholder="Enter Price"
                      value={productPrice}
                      onChange={(e) => {
                        setProductPrice(e.target.value);
                      }}
                    />
                  </Form.Group>
                  {formError && <p style={{ color: "red" }}>{formError}</p>}

                  <Button variant="primary" type="submit" onClick={formHandle}>
                    <ToastContainer />
                    Submit
                  </Button>
                </Form>
              </div>
            </Row>
            <Row>
              <h1 className="text-center">Product Update</h1>
            </Row>
            <Row className="m-5">
              <Col xs={12}>
                <Table responsive striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>S/no</th>
                      <th>pId</th>
                      <th>productName</th>
                      <th>productImage</th>
                      <th>productPrice</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user, index) => (
                      <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user._id}</td>
                        <td>
                          {isEditing && editingId === user._id ? (
                            <>
                              <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                              />
                              {validationError && (
                                <p style={{ color: "red" }}>
                                  {validationError}
                                </p>
                              )}
                            </>
                          ) : (
                            user.productName
                          )}
                        </td>
                        <td>
                          {isEditing && editingId === user._id ? (
                            <input
                              type="text"
                              value={productImage}
                              onChange={(e) => setProductImage(e.target.value)}
                            />
                          ) : (
                            user.productImage
                          )}
                        </td>
                        <td>
                          {isEditing && editingId === user._id ? (
                            <input
                              type="text"
                              value={productPrice}
                              onChange={(e) => setProductPrice(e.target.value)}
                            />
                          ) : (
                            user.productPrice
                          )}
                        </td>
                        <td className=" d-flex flex-column gap-2 ">
                          {isEditing && editingId === user._id ? (
                            <button
                              onClick={() => handleSaveClick(user._id)}
                              style={{
                                backgroundColor: "lightblue",
                                border: "1px solid blue",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                cursor: "pointer"
                              }}
                            >
                              <ToastContainer />
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEditClick(user._id)}
                              style={{
                                backgroundColor: "lightblue",
                                border: "1px solid blue",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                cursor: "pointer"
                              }}
                            >
                              <PencilSquare />
                            </button>
                          )}
                          <button
                            onClick={() => onDelete(user._id)}
                            style={{
                              backgroundColor: "lightblue",
                              border: "1px solid blue",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              cursor: "pointer"
                            }}
                          >
                            <ToastContainer />
                            <Trash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className="mt-5">
              <Footer />
            </Row>
          </div>
        ) : isClient ? (
          <div className=" p-5 text-center ">
            <h1>Apologize, the order has not been included.</h1>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Adminpg;
