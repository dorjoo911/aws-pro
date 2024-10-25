import { Col, Row } from "react-bootstrap";
export const Newsletter = () => {


  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              DOWNLOAD MY LATEST RESUME.
            </h3>
          </Col>
          <Col md={6} xl={7}>
            
              <div className="new-email-bx">
                <input type="email" placeholder="Resume.pdf" />
                <a href="/ERDENE.pdf" download> 
                <button type="submit">Download</button>
                </a>
              </div>
            
          </Col>
        </Row>
      </div>
    </Col>
  );
};
