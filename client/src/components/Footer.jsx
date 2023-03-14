import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-info">
      <Container>
        <Row>
          <Col className="p-2 mt-3 center">
            <p className="font-weight-bold font-italic">
              Copyright © 2023 - All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
