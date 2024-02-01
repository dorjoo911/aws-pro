import { Col, Row } from "react-bootstrap";
export const Newsletter = ({ status, message, onValidated }) => {
  const downloadResume = () => {
    const resumeUrl = "../assets/resume/Munkh MIU.pdf"; // URL to the PDF resume
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = "Munkh MIU.pdf";
    anchor.click();
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Get my latest resume to learn more about my qualifications and my
              contributions to cutting-edge Full-Stack Development.
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onClick={downloadResume}>
              <div className="new-email-bx">
                <input type="email" placeholder="Munkh MIU.pdf" />
                <button type="submit">Download</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
