import { useEffect, useMemo, useRef, useState } from "react";
import { Container, Heading, Hero } from "react-bulma-components";

function Header({
  scrollToSection,
  scroll,
}: {
  scrollToSection: Function;
  scroll: number;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const navStatic: boolean = useMemo(() => {
    return scroll > headerHeight;
  }, [scroll, headerHeight]);

  useEffect(() => {
    if (heroRef.current) {
      setHeaderHeight(heroRef.current.clientHeight - 20);
    }
  }, []);

  return (
    <div id="header" ref={heroRef}>
      <Hero
        size="large"
        style={{
          backgroundColor: "#455c40",
          backgroundImage: "url(header-opaque.png)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "70%",
          backgroundSize: "auto 100%",
          backgroundBlendMode: "normal",
          backgroundAttachment: "local",
          padding: "0",
          position: navStatic ? "unset" : "unset",
        }}
      >
        <Hero.Body>
          <Container>
            <Heading style={{ color: "white" }} size={2} subtitle>
              Svatba
            </Heading>
            <Heading style={{ color: "white" }} size={1}>
              Petra & Adam
            </Heading>
            <Heading style={{ color: "white" }} size={2} subtitle>
              26. August 2023
            </Heading>
          </Container>
        </Hero.Body>
        <Hero.Footer>
          <nav
            className="tabs is-boxed is-fullwidth"
            color="primary"
            style={{
              zIndex: 2000,
              position: navStatic ? "fixed" : "absolute",
              top: navStatic ? "0" : "unset",
              left: 0,
              right: 0,
              background: "#455c40",
            }}
          >
            <div className="container">
              <ul>
                <li key="location">
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
                <li key="dresscode">
                  <a onClick={() => scrollToSection("section-dresscode")}>
                    Dress code
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
                <li key="form">
                  <a onClick={() => scrollToSection("section-form")}>
                    Formulár
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
