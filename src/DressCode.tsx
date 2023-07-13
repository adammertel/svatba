import { Block, Container, Heading } from "react-bulma-components";

function DressCode() {
  return (
    <div className="page-section" id="section-dresscode">
      <Container>
        <Heading size={3}>Dress code</Heading>
        <Block>
          Naša svadba bude ladená do vínovej, eukaliptovej a starorúžovej.
          Oblečte sa však predovšetkým tak, aby ste sa cítili dobre a pohodlne.
        </Block>
        <Block style={{ textAlign: "center" }}>
          <img src="dresscode.png" style={{ maxWidth: "300px" }} />
        </Block>
      </Container>
    </div>
  );
}

export default DressCode;
