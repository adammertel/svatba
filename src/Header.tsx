import { Container, Heading, Hero } from "react-bulma-components";

function Header() {
  return (
    <div style={{}}>
      <Hero
        size="large"
        style={{
          backgroundColor: "#455c40",
          backgroundImage: "url(header-opaque.png)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundSize: "auto 850px",
          backgroundBlendMode: "normal",
          backgroundAttachment: "local",
          padding: "4rem",
        }}
      >
        <Hero.Body>
          <Container>
            <Heading style={{ color: "white" }} size={1}>
              Svatba Petra + Adam
            </Heading>
            <Heading style={{ color: "white" }} size={2} subtitle>
              26.August 2023
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer>Footer</Hero.Footer>
      </Hero>
    </div>
  );
}

export default Header;
