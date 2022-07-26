// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React, { useState } from "react";
import MyNavbar from "./common/myNavbar";
import MyFooter from "./common/myFooter";
import "./my_website.css";
import { Container, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProductCard from "./common/productCards";
import productsData from "./data/productsData.js";
import ProductDetails from "./common/productDetails";
import MyLogin from "./common/myLogin";
import MySignup from "./common/mySignup";
import { validate } from "./validations/validations";

function App() {
  const [myProductsData, setMyProductsData] = useState(productsData);
  const [showProduct, setShowProduct] = useState(false);
  const [specificProd, setSpecificProd] = useState("");

  function handleProductClicked(e, category) {
    setShowProduct(true);

    setSpecificProd(myProductsData[category][e.target.id - 1]);
  }

  function handleProductClose() {
    setShowProduct(false);
  }

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [signupForm, setSignupForm] = useState({
    username: {
      value: "",
      validations: {
        required: true,
        minLength: 8,
      },
      errors: [],
    },
    email: {
      value: "",
      validations: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      errors: [],
    },
    password: {
      value: "",
      validations: {
        required: true,
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      },
      errors: [],
    },
    passwordRepeat: {
      value: "",
      validations: {
        required: true,
        repeat: "",
      },
      errors: [],
    },
  });

  const validateInput = (e) => {
    let { name, value } = e.target;

    signupForm.passwordRepeat.validations.repeat = signupForm.password.value;

    signupForm[name].value = value;
    signupForm[name].errors.length = 0;
    signupForm[name].errors.push(
      ...validate(name, value, signupForm[name].validations)
    );
    setSignupForm({ ...signupForm });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = [...e.currentTarget.elements];

    data = data
      .map((elem) => {
        return { name: elem.name, value: elem.value };
      })
      .filter((elem) => elem.name);

    for (let i = 0; i < data.length; i++) {
      signupForm[data[i].name][data[i].value] = data[i].value;
    }

    for (let i = 0; i < data.length; i++) {
      signupForm[data[i].name].errors.push(
        ...validate(
          data[i].name,
          signupForm[data[i].name].value,
          signupForm[data[i].name].validations
        )
      );
    }
    setSignupForm({ ...signupForm });
  };

  return (
    <>
      <MyNavbar
        onClickLogin={handleShowLogin}
        onClickSignup={handleShowSignup}
      ></MyNavbar>

      <Tabs id="my-tabs" className="mb-3" justify onClick={handleProductClose}>
        <Tab
          eventKey="tshirts"
          title={<span style={{ color: "black" }}>Tshirts</span>}
          id="myTab"
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            {!showProduct ? (
              <div className="row align-items-center justify-content-center">
                {myProductsData.tshirts.map((product) => (
                  <ProductCard
                    onClick={(e) => handleProductClicked(e, "tshirts")}
                    key={product.id}
                    id={product.id}
                    productImgSrc={product.productImgSrc}
                    productName={product.productName}
                    productCost={product.productCost}
                  ></ProductCard>
                ))}
              </div>
            ) : null}

            {showProduct ? (
              <ProductDetails
                onClick={handleProductClose}
                key={specificProd.id}
                productImgSrc={specificProd.productImgSrc}
                productName={specificProd.productName}
                productCost={specificProd.productCost}
                productColors={specificProd.productColors}
                productSizes={specificProd.productSizes}
                productAmounts={specificProd.productAmounts}
              ></ProductDetails>
            ) : null}
          </Container>
        </Tab>

        <Tab
          eventKey="hoodies"
          title={<span style={{ color: "black" }}>Hoodies</span>}
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            {!showProduct ? (
              <div className="row align-items-center justify-content-center">
                {myProductsData.hoodies.map((product) => (
                  <ProductCard
                    onClick={(e) => handleProductClicked(e, "hoodies")}
                    key={product.id}
                    id={product.id}
                    productImgSrc={product.productImgSrc}
                    productName={product.productName}
                    productCost={product.productCost}
                  ></ProductCard>
                ))}
              </div>
            ) : null}
            {showProduct ? (
              <ProductDetails
                onClick={handleProductClose}
                key={specificProd.id}
                productImgSrc={specificProd.productImgSrc}
                productName={specificProd.productName}
                productCost={specificProd.productCost}
                productColors={specificProd.productColors}
                productSizes={specificProd.productSizes}
                productAmounts={specificProd.productAmounts}
              ></ProductDetails>
            ) : null}
          </Container>
        </Tab>

        <Tab
          eventKey="pants"
          title={<span style={{ color: "black" }}>Pants</span>}
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            {!showProduct ? (
              <div className="row align-items-center justify-content-center">
                {myProductsData.pants.map((product) => (
                  <ProductCard
                    onClick={(e) => handleProductClicked(e, "pants")}
                    key={product.id}
                    id={product.id}
                    productImgSrc={product.productImgSrc}
                    productName={product.productName}
                    productCost={product.productCost}
                  ></ProductCard>
                ))}
              </div>
            ) : null}
            {showProduct ? (
              <ProductDetails
                onClick={handleProductClose}
                key={specificProd.id}
                productImgSrc={specificProd.productImgSrc}
                productName={specificProd.productName}
                productCost={specificProd.productCost}
                productColors={specificProd.productColors}
                productSizes={specificProd.productSizes}
                productAmounts={specificProd.productAmounts}
              ></ProductDetails>
            ) : null}
          </Container>
        </Tab>

        <Tab
          eventKey="socks"
          title={<span style={{ color: "black" }}>Socks</span>}
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            {!showProduct ? (
              <div className="row align-items-center justify-content-center">
                {myProductsData.socks.map((product) => (
                  <ProductCard
                    onClick={(e) => handleProductClicked(e, "socks")}
                    key={product.id}
                    id={product.id}
                    productImgSrc={product.productImgSrc}
                    productName={product.productName}
                    productCost={product.productCost}
                  ></ProductCard>
                ))}
              </div>
            ) : null}
            {showProduct ? (
              <ProductDetails
                onClick={handleProductClose}
                key={specificProd.id}
                productImgSrc={specificProd.productImgSrc}
                productName={specificProd.productName}
                productCost={specificProd.productCost}
                productColors={specificProd.productColors}
                productSizes={specificProd.productSizes}
                productAmounts={specificProd.productAmounts}
              ></ProductDetails>
            ) : null}
          </Container>
        </Tab>

        <Tab
          eventKey="favorites"
          title={
            <i
              style={{ color: "black" }}
              className="fa fa-heart"
              aria-hidden="true"
              title="favorites"
            ></i>
          }
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            <h4>Favorites</h4>
          </Container>
        </Tab>

        <Tab
          eventKey="cart"
          title={
            <i
              style={{ color: "black" }}
              className="fa fa-shopping-cart"
              aria-hidden="true"
              title="shopping cart"
            ></i>
          }
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            <h4>Cart</h4>
          </Container>
        </Tab>

        <Tab
          eventKey="history"
          title={
            <i
              style={{ color: "black" }}
              className="fa fa-history"
              aria-hidden="true"
              title="history"
            ></i>
          }
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            <h4>Purchased Products</h4>
          </Container>
        </Tab>

        <Tab
          eventKey="info"
          title={
            <i
              style={{ color: "black" }}
              className="fa fa-info-circle"
              aria-hidden="true"
              title="about us"
            ></i>
          }
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            <h4>About Us</h4>
            <p>One Man Selling Some Stuff</p>
          </Container>
        </Tab>

        <Tab
          eventKey="help"
          title={
            <i
              style={{ color: "black" }}
              className="fa fa-question-circle"
              aria-hidden="true"
              title="help"
            ></i>
          }
        >
          <Container style={{ padding: "1.5rem 0 100% 0" }}>
            <h4>Contact Us</h4>
            <p>
              Leave us your contacts and your message and we'll get back to you
              asap!
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  maxLength={"300"}
                  as="textarea"
                  type="textarea"
                  placeholder="Write Here (300 characters)"
                />
              </Form.Group>

              <Button
                id="submitButton"
                variant="primary"
                type="submit"
                style={{ lineHeight: "0", margin: "0", padding: "0" }}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Tab>
      </Tabs>

      <MyLogin
        showLogin={showLogin}
        handleCloseLogin={handleCloseLogin}
        handleShowSignup={handleShowSignup}
      ></MyLogin>
      <MySignup
        showSignup={showSignup}
        handleCloseSignup={handleCloseSignup}
        handleShowLogin={handleShowLogin}
        handleSubmit={handleSubmit}
        validateInput={validateInput}
        emailValue={signupForm.email.value}
        emailErrors={signupForm.email.errors}
        usernameValue={signupForm.username.value}
        usernameErrors={signupForm.username.errors}
        passwordValue={signupForm.password.value}
        passwordErrors={signupForm.password.errors}
        passwordRepeatValue={signupForm.passwordRepeat.value}
        passwordRepeatErrors={signupForm.passwordRepeat.errors}
      ></MySignup>

      <MyFooter></MyFooter>
    </>
  );
}

export default App;
