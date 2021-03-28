import React from "react";
import $ from 'jquery';

import ChartistGraph from "react-chartist";
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
  Col,
  Form,
  OverlayTrigger,
  Tooltip, ProgressBar,
} from "react-bootstrap";
import {CardBody, CardHeader} from "reactstrap";
import Tab from 'react-bootstrap/Tab'
import {BrowserRouter, Route} from "react-router-dom";

function StockExplorer() {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="technology">Technology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="consumer_cyclical">Consumer Cyclical</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="basic_materials">Basic Materials</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="communication_services">Communication services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="consumer_defences">Consumer Defences</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="energy">Energy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="financial">Financial</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="healthcare">Healthcare</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="industrials">Industrials</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="real_estate">Real Estate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="utilities">Utilities</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            {/*<BrowserRouter>*/}
              {/*<Route path={"/stocks/*"}>*/}
              {/*  <div>*/}
              {/*    */}
              {/*  </div>*/}
              {/*</Route>*/}
              {/*<Route path={"/stockExplorer"}>*/}
                <Tab.Content>
                  <Tab.Pane eventKey="technology">{SectorPage("Technology")}</Tab.Pane>
                  <Tab.Pane eventKey="consumer_cyclical">{SectorPage("consumer cyclical")}</Tab.Pane>
                  <Tab.Pane eventKey="basic_materials">{SectorPage("basic materials")}</Tab.Pane>
                  <Tab.Pane eventKey="communication_services">{SectorPage("communication services")}</Tab.Pane>
                  <Tab.Pane eventKey="consumer_defences">{SectorPage("consumer_defences")}</Tab.Pane>
                  <Tab.Pane eventKey="energy">{SectorPage("energy")}</Tab.Pane>
                  <Tab.Pane eventKey="financial">{SectorPage("financial")}</Tab.Pane>
                  <Tab.Pane eventKey="healthcare">{SectorPage("healthcare")}</Tab.Pane>
                  <Tab.Pane eventKey="industrials">{SectorPage("industrials")}</Tab.Pane>
                  <Tab.Pane eventKey="real_estate">{SectorPage("real estate")}</Tab.Pane>
                  <Tab.Pane eventKey="utilities">{SectorPage("utilities")}</Tab.Pane>
                </Tab.Content>
            {/*  </Route>*/}
            {/*</BrowserRouter>*/}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function SectorPage(sectorName) {
  return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h2>{sectorName}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  {getStock("AAPL")}
                  {/*<p>applestuff: {getStock('AAPL')}</p>*/}
                  {/*{getStock('AAPL').json()["AAPL"]}*/}
                  {/*{Object.entries(getStock("AAPL"))}*/}
                  {/*{getTopThreeGreenStocks("Technology")}*/}
                </CardHeader>
                <CardBody>
                  {/*{...}*/}
                  {/*{...}*/}
                  <ProgressBar variant="success" now={{/*score for green index*/}} />
                  <ProgressBar variant="warning" now={{/*score for volatility index*/}} />
                  <ProgressBar variant="info" now={{/*score for profitability index*/}} />
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                {/*  */}
                </CardHeader>
                <CardBody>
                  {/*{...}*/}
                  {/*{...}*/}
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>
                {/*  */}
                </CardHeader>
                <CardBody>
                  {/*{...}*/}
                  {/*{...}*/}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

class getStock extends React.Component {

  fun = () => {
    let _this = this;
    $(document).ready(function(){
      // Get user details
      const req = $.ajax({
        url: "/getStock",
        type: "POST",
        data: JSON.stringify({"ticker": "AAPL"}),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
      });

      try {
        req.done(function(data) {
          console.log("YOLO")
        });
      }
      catch (e) {};
    });
  };


  // const { foo, bar }  = await fetch("/getStock", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({"ticker": ticker})
  //     }).then(result => result.data);
  // console.log(foo)
  // console.log(bar)
  // return foo;

  // fetch('/getStock')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // try {
  //   console.log(ticker)
  //   return fetch("/getStock", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({"ticker": ticker})})
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         for (let key in Object.keys(responseData)) {
  //           console.log(responseData[key])
  //         }
  //       }).catch(err => { console.log(err)}
  //       )
  //   });
  //   return response.json();
      // }
      // catch (err) {
      //   console.log("fuck")
      //   console.log(err)
      // }
    }

  function tempFunc() {
    return <p>this sucks balls</p>;
  }

  function getTopThreeGreenStocks(industry) {
    try {
      fetch("/getTopThreeGreenStocks", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"industry": industry})
      }).then((response) => response.json())
          .then((responseData) => {
            return responseData;
          })
    } catch (err) {
    }
  }

  export default StockExplorer;

