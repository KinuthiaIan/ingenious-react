import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useNavigate } from "@reach/router";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [theme] = useThemeHook();

  //Function to handle submit of data to create new user account and make a POST request to update the user in the store API
  function handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const firstname = form.firstName.value;
    const lastname = form.lastName.value;
    const email = form.email.value;
    if (username && password && firstname && lastname && email) {
      setLoading(true);
      console.log(username, password, firstname, lastname, email);
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: "email",
          username: "username",
          password: "password",
          name: {
            firstname: "firstname",
            lastname: "lastname",
          },
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .finally(() => {
          setLoading(false);
          navigate("/sign-in", { replace: true }); //Navigating user back to sign-in page then to Home page
        });
    }
  }
  //Form for new users to create their accounts. Forms is form controlled
  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light "
          }`}
        >
          <h1
            className={`text-center border-bottom pb-3 ${
              theme ? "text-dark-primary" : "text-light-primary"
            }`}
          >
            Create Account
          </h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                minLength={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength={8}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={loading}
              className={`${
                theme ? "bg-dark-primary text-black" : "bg-light-primary"
              } m-auto d-block`}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  {" "}
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...{" "}
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
