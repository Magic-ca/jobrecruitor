import { Container } from "react-bootstrap";
import "./index.css";

const Mp = () => {
  return (
    <div className="mp py-5">
      <Container className="text-start">
        {/* <div className="logo">MP</div> */}
        <img className="logo" src="./assets/img/logo.png" alt="logo" />
        <div className="row mp-title">
          <div className="col-8">
            <h1 className=" fw-bolder">
              We succeed from what we read.<br />
              Will you support us?
            </h1>
          </div>
        </div>
        <div className="row align-items-center mt-4">
          <div className="col-8">
            <div className="col-11">
              We're proud to say that we've grown into a globally distributed magazine for entrepreneurs over the last year. The support we're seeking is to keep MP high-quality, ad-free, and focused on providing real-world value to the entrepreneurially-minded community with each article we publish. We do this because we believe entrepreneurship doesn't need to be complicated, and we know not everyone is in a position to pay for high-quality information on how to succeed as an entrepreneur.<br />
              <span className="fw-bolder">But if you are, we'd like your support.</span> You can provide us with the support we need by purchasing access to one of our digital magazines or other products from the MP Merch Shop, or by simply contributing.<span className="fw-bolder">Suppoprt us for as little as $1. Thank you.</span>
            </div>
          </div>
          <div className="col-4 row">
            <div className="link-sec">
              <a className="h3" href="#contributors">Contribute to MP<i className="material-icons">arrow_forward</i></a>
              <p>All major credit cards accepted.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mp;