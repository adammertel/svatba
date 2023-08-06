import { Footer, Heading } from "react-bulma-components";
import { FaInstagram, FaLink } from "react-icons/fa";

function FooterPart() {
  return (
    <>
      <div id="Footer" style={{ textAlign: "center" }}>
        <Footer>
          <Heading subtitle size={1}>
            Tešíme sa na vás!
          </Heading>
          <Heading subtitle size={3}>
            Petra & Adam
          </Heading>
          <img
            src="footer-resized.jpg"
            style={{ width: "fit-content", height: "auto" }}
          />
          <Heading subtitle size={4} className="photo-copyright">
            <i>
              Fotky boli zhotovené šikovnou pani fotografkou{" "}
              <b>Chaňovic fotí</b>
            </i>
            <div
              style={{
                marginLeft: "4px",
                display: "inline",
                padding: "10px",
                verticalAlign: "top",
                fontWeight: "bold",
              }}
            >
              <a
                href="https://www.instagram.com/chanovicfoti/?hl=en"
                target="_blank"
              >
                <FaInstagram />
                instagram
              </a>
              <a href="https://chanovicfoti.cz/" target="_blank">
                <FaLink />
                webstranka
              </a>
            </div>
          </Heading>
        </Footer>
      </div>
    </>
  );
}

export default FooterPart;
