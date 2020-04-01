import React from "react";
import { Col, Card } from "react-bootstrap";
import moment from "moment";
import { Animated } from "react-animated-css";

const App = ({ obj }) => {
  const objData = {
    name: "Cases",
    data: "cases"
  };
  return (
    <>
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
    </>
  );
};

export default App;
