import { Block, Container, Heading } from "react-bulma-components";

function Program() {
  return (
    <div style={{}} className="page-section" id="section-program">
      <Container>
        <Heading size={3}>Na čo sa tešiť?</Heading>
        <Block></Block>
        <Block style={{ textAlign: "center" }}>
          <img src="program.png" />
        </Block>
      </Container>
    </div>
  );
}

export default Program;
