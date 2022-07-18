import { Container, Button } from "react-bootstrap";
import "./index.css";

const mailchamp = () => {
  return (
    <Container>
      <form className="mail-champ row d-flex" event="/singup">
        <h2 className="mail-champ-label col-5">
          Get The Slatest in Your Inbox
        </h2>
        <div className="mail-champ-form col-7">
          <p className="email-lab">Email address:</p>
          <input className="form-control" name="email" id="email">
          </input>
          <div className="mail-cham-footer">
            <div className="col-8">
              <input type="checkbox" className="fonm-control pol-check" name="policyCheck" id="policyCheck" />
              <label className="checkbox-label">Send me updates about Slate special offers</label>
              <p className="pol-label">By siging up, you agree to our <a className="pol-link" href="#privacy Policy">Privacy Policy</a> and <a href="#terms">Terms</a>.</p>
            </div>
            <div className="col-4 btn-col">
              <Button className="btn signup-btn">Sign Up</Button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default mailchamp;