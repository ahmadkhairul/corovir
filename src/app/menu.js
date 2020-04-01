import React from "react";
import { Col, Card } from "react-bootstrap";
import moment from "moment";
import { Animated } from "react-animated-css";

const App = ({ obj }) => {
  const result = Object.keys(obj[0]).map(function(key) {
    return [obj[0][key]];
  });

  const constant = [
    "Country",
    "Cases",
    "Today Cases",
    "Death",
    "Today Death",
    "Recovered",
    "Active",
    "Critical Condition",
    "Cases Per 1M",
    "Deaths Per 1M",
    "First Case"
  ];

  let newObj = [];

  for (let i = 1; i < result.length; i++) {
    newObj.push({ name: constant[i], value: result[i][0] });
  }
  console.log(newObj);
  return (
    <>
      {newObj.map((item, index) => {
        return (
          <Col md={3} key={index}>
            <Animated
              animationInDuration={1000}
              animationInDelay={index * 100}
              animationIn="fadeInDown"
            >
              <Card>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>{item.value}</Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </Animated>
          </Col>
        );
      })}
      <Col md={3}>
        <Animated
          animationInDuration={1000}
          animationInDelay={1000}
          animationIn="fadeInDown"
        >
          <Card>
            <Card.Header>Last Update</Card.Header>
            <Card.Body>{moment().format()} UTC Time</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Animated>
      </Col>
    </>
  );
};

export default App;
