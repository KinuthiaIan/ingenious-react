import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../Components/ProductCard";

function Home() {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  //Fetching product data from API using fetch and the useEffect Hook and displaying them
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((r) => r.json())
      .then((products) => {
        setProductData(products); //Updating the state of product data to the fetched product array
        console.log(productData);
      });
  }, []); //Empty dependencies array to fetch the data only once

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={
                theme ? "bg-light-black text-light" : "bg-light text-black"
              }
            />
          </InputGroup>
        </Col>
        {/**Using search filter to filter the displayed products */}
        <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
}

export default Home;
