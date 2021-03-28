import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col, ProgressBar,
} from "react-bootstrap";
import {CardBody, CardHeader} from "reactstrap";
import {Link} from "react-router-dom";
import Stock from "./Stock";

// portfolio includes apple, and tesla, 50/50
// hard coded using real values due to issues regarding
// backend and frontend programming

function PortfolioOverview() {

  return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h2>portfolio_name</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                   <h3>Apple and Tesla Portfolio</h3>
                </CardHeader>
                <CardBody>
                  <p>Portfolio Green Index 🌳</p>
                  <ProgressBar variant="success" now={94} />
                  <p>Profitability</p>
                  <ProgressBar variant="warning" now={30} />
                  <p>Volatility</p>
                  <ProgressBar variant="info" now={56} />
                  <br></br>
                  <p>Portfolio Management:
                  Green = Tesla, Yellow = Apple</p>
                  <ProgressBar>
                    <ProgressBar variant="success" now={50} key={1} />
                    <ProgressBar variant="warning" now={50} key={2} />
                  </ProgressBar>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
  );
}

export default PortfolioOverview;
