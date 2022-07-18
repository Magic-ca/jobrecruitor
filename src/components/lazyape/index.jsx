import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <ul className="top-menu">
        <li><a href="#home">HOME</a></li>
        <li><a href="#VERIFY">VERIFY</a></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#labresult">LAB RESULTS</a></li>
      </ul>
    </Container>
  )
}

const LazyApe = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default LazyApe;