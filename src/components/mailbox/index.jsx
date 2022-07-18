import { Container, Button, Row } from "react-bootstrap";
import "./index.css";

const MailBox = () => {
  return (
    <Container className="mt-5">
      <div className="mail-box">
        <Row className="mail-box-body p-2">
          <div className="col-8 text-start">
            <h2 className="strong mt-2">
              Stay informed with The Slatest newsletter
            </h2>
            <p className="fs-4 strong">Sign up and get a daily email update of the stories you need to read right now.</p>
          </div>
          <div className="col-4 text-end">
            <Button className="btn signup-by-mail">Sign Up</Button>
          </div>
        </Row>

        <ul className="mail-box-footer d-flex">
          <li className="soc-link"><a href="#tweet" ><i className="fa fa-twitter m-twitter"></i> TWEET</a></li>
          <li className="soc-link"><a href="#facebook"><i className="fa fa-facebook-f m-fackbook"></i> SHARE</a></li>
          <li className="soc-link"><a href="#comment"><i className="fa fa-comment m-comment"></i> COMMENT</a></li>
        </ul>
        <Button className="fa fa-exclamation close-btn" />
      </div>
    </Container>
  );
};

export default MailBox;