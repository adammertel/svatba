import { Footer, Heading } from "react-bulma-components";

function FooterPart() {
  return (
    <>
      <div id="Footer" style={{ textAlign: "center" }}>
        <Footer>
          <img src="footer.jpg" style={{ height: "400px" }} />
          <Heading subtitle size={1}>
            Tešíme sa na vás!
          </Heading>
          <Heading subtitle size={3}>
            Petra & Adam
          </Heading>
        </Footer>
      </div>
    </>
  );
}

export default FooterPart;
