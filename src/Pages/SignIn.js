import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { Link, useNavigate } from "@reach/router";

//Icons
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [theme] = useThemeHook();
  const navigate = useNavigate();

  //Function to handle submission of sign-in form and make a POST request to the store API with user details
  function handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    if (username && password) {
      setLoading(true);
      console.log(username, password);
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "username",
          password: "password",
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
          navigate("/", { replace: true }); //Navigating user back to the Home Page upon successful sign-up
        });
    }
  }
  //Form for user sign-up. Form Control is achieved using Bootstrap
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
            Sign in
          </h1>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-4 mt-5">
              <InputGroup.Text>
                <AiOutlineUser size="1.8rem" />
              </InputGroup.Text>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                minLength={3}
                required
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text>
                <VscKey size="1.8rem" />
              </InputGroup.Text>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength={8}
                required
              />
            </InputGroup>
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
                "Sign in"
              )}
            </Button>
            <Form.Group className="mt-3 text-center">
              <Form.Text className="text-muted fw-bold">
                New to Ingenious?
              </Form.Text>
              <Row className="py2 border-bottom mb-3" />
              <Link to="/register" className="btn btn-info rounded-0">
                Create your Ingenious Account
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
