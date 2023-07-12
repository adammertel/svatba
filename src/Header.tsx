import { Container, Heading, Hero, Tabs, Tab } from "react-bulma-components";

function Header({ scrollToSection }: { scrollToSection: Function }) {
  return (
    <div style={{}} id="header">
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
          padding: "0 4rem",
        }}
      >
        <Hero.Body>
          <Container>
            <Heading style={{ color: "white" }} size={1}>
              Svatba Petra + Adam
            </Heading>
            <Heading style={{ color: "white" }} size={2} subtitle>
              26. August 2023
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer>
          <nav className="tabs is-boxed is-fullwidth" color="primary">
            <div className="container">
              <ul>
                <li key="location" className="is-active">
                  <a onClick={() => scrollToSection("section-location")}>
                    Miesto
                  </a>
                </li>
                <li key="accommodation">
                  <a onClick={() => scrollToSection("section-accommodation")}>
                    Ubytovanie
                  </a>
                </li>
                <li key="food">
                  <a onClick={() => scrollToSection("section-food")}>Strava</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("section-form")}>
                    Formulár
                  </a>
                </li>
                <li key="gifts">
                  <a onClick={() => scrollToSection("section-gifts")}>Dary</a>
                </li>
                <li key="program">
                  <a onClick={() => scrollToSection("section-program")}>
                    Program
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </Hero.Footer>
      </Hero>
    </div>
  );
}

export default Header;
