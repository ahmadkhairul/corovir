import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

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

  const obj = world.filter(world => {
    return world.country == country;
  });

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Header>Country</Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Select Country</Form.Label>
                <Form.Control
                  as="select"
                  value={country}
                  onChange={event => {
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
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Cases</Card.Header>
            <Card.Body>{obj[0]?.cases}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Today Cases</Card.Header>
            <Card.Body>{obj[0]?.todayCases}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Death</Card.Header>
            <Card.Body>{obj[0]?.deaths}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Today Death</Card.Header>
            <Card.Body>{obj[0]?.todayDeaths}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Recovered</Card.Header>
            <Card.Body>{obj[0]?.recovered}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Active</Card.Header>
            <Card.Body>{obj[0]?.active}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Critical Condition</Card.Header>
            <Card.Body>{obj[0]?.critical}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Cases Per 1M</Card.Header>
            <Card.Body>{obj[0]?.casesPerOneMillion}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Deaths Per 1M</Card.Header>
            <Card.Body>{obj[0]?.deathsPerOneMillion}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>First Case</Card.Header>
            <Card.Body>{obj[0]?.firstCase}</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>Last Update</Card.Header>
            <Card.Body>{moment().format()} UTC Time</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>About Corovir</Card.Header>
            <Card.Body>
              Corovir is very simple Web app for monitoring Corona Virus Spread
              from all over the world
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>World Data</Card.Header>
            <Card.Body>
              <Chart legendPosition="bottom" data={total} />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
