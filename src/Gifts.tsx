import { Block, Container, Heading } from "react-bulma-components";

function Gifts() {
  return (
    <div className="page-section" id="section-gifts">
      <Container>
        <Heading size={3}>Dary</Heading>
        <Block>
          Ako praktický moderný pár, preferujeme finančné dary; nepohrdneme ale
          ani hodnotným alebo originálnym zážitkom.
        </Block>
        <Block>
          Určite nenoste kvetiny ani jedlo, budeme toho mať dostatok. :)
        </Block>
        <Block style={{ textAlign: "center" }}>
          <img src="gifts1.jpg" style={{ maxWidth: "300px" }} />
        </Block>
      </Container>
    </div>
  );
}

export default Gifts;
