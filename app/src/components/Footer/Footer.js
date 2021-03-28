import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="https://github.com/AlexB02" target="_blank">
                  <i class="fab fa-github"></i>
                  <p>Alex B</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i class="fab fa-github"></i>
                  <p>Aaryan M</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/aculisme" target="_blank">
                  <i class="fab fa-github"></i>
                  <p>Luca M</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/anton560996" target="_blank">
                  <i class="fab fa-github"></i>
                  <p>Anton Z</p>
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
