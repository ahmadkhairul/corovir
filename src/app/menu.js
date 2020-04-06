import React from "react";
import { Table, Col, Card } from "react-bootstrap";
import moment from "moment";
import { Animated } from "react-animated-css";

const App = ({ obj }) => {
  const result = Object.keys(obj[0]).map(function (key) {
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
    "Total Test",
    "Test Per 1M",
  ];

  let newObj = [];

  for (let i = 1; i < result.length; i++) {
    newObj.push({ name: constant[i], value: result[i][0] });
  }
  console.log(obj);
  return (
    <Col md={4}>
      <Animated
        animationInDuration={1000}
        animationInDelay={100}
        animationIn="fadeInDown"
      >
        <Card>
          <Card.Header>Detail</Card.Header>
          <Card.Body>
            <table>
              {newObj.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>:</td>
                    <td style={{ textAlign: "right" }}>
                      {item.value.toLocaleString("id")}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td> Last Update </td>
                <td>:</td>
                <td>{moment().format("HH:mm DD/MM/YYYY")} UTC</td>
              </tr>
            </table>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </Animated>
    </Col>
  );
};

export default App;
