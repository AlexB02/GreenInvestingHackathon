import React from "react";
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
            <Tab.Content>
              <Tab.Pane eventKey="technology">{SectorPage("technology")}</Tab.Pane>
              <Tab.Pane eventKey="consumer_cyclical">{SectorPage("consumer_cyclical")}</Tab.Pane>
              <Tab.Pane eventKey="basic_materials">{SectorPage("basic_materials")}</Tab.Pane>
              <Tab.Pane eventKey="communication_services">{SectorPage("communication_services")}</Tab.Pane>
              <Tab.Pane eventKey="consumer_defences">{SectorPage("consumer_defences")}</Tab.Pane>
              <Tab.Pane eventKey="energy">{SectorPage("energy")}</Tab.Pane>
              <Tab.Pane eventKey="financial">{SectorPage("financial")}</Tab.Pane>
              <Tab.Pane eventKey="healthcare">{SectorPage("healthcare")}</Tab.Pane>
              <Tab.Pane eventKey="industrials">{SectorPage("industrials")}</Tab.Pane>
              <Tab.Pane eventKey="real_estate">{SectorPage("real_estate")}</Tab.Pane>
              <Tab.Pane eventKey="utilities">{SectorPage("utilities")}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function SectorPage(sectorName) {
  return (
      <div>
      </div>
  );
}


export default StockExplorer;
