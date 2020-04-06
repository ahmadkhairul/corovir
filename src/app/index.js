import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Animated } from "react-animated-css";
import Chart from "../app/chart";
import Menu from "../app/menu";

const App = () => {
  const [total, setTotal] = useState([]);
  const [world, setWorld] = useState([]);
  const [country, setCountry] = useState("USA");

  const getAll = async () => {
    const resTotal = await axios.get(
      "https://coronavirus-19-api.herokuapp.com/all"
    );
    const resWorld = await axios.get(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );
    setTotal(resTotal.data);
    setWorld(resWorld.data);
  };

  useEffect(() => {
    getAll();
  }, []);

  const obj = world.filter((world) => {
    return world.country === country;
  });

  if (total.length === 0 || world.length === 0) {
    return <Animated animationIn="fadeInDown">Now Loading</Animated>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Animated animationInDuration={1000} animationIn="fadeInDown">
            <Card>
              <Card.Header>Country</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Select Country</Form.Label>
                  <Form.Control
                    as="select"
                    value={country}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  >
                    {world.map((item, index) => {
                      return (
                        <option key={index} value={item.country}>
                          {item.country}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Animated>
        </Col>
        <Menu obj={obj} />
        <Col md={6}>
          <Card>
            <Card.Header>World Data</Card.Header>
            <Card.Body>
              <Chart legendPosition="bottom" data={total} />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Header>About Corovir</Card.Header>
            <Card.Body>
              <p>
                Corovir is very simple Web app for monitoring Corona Virus
                Spread from all over the world.
              </p>
              <p>Made with React JS by Ahmad Khairul</p>
              <p>
                <a href="https://github.com/ahmadkhairul/corovir">
                  source code
                </a>
              </p>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default App;
