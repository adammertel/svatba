import { Block, Container, Heading } from "react-bulma-components";

function Gifts() {
  return (
    <div className="page-section" style={{}}>
      <Container>
        <Heading size={3}>Dary</Heading>
        <Block>
          Ako praktický moderný pár, preferujeme finančné dary; nepohrdneme ale
          ničím hodnotným alebo originálnym.
        </Block>
        <Block>Určite nenoste kvetiny, tých budeme mať dostatok :)</Block>
      </Container>
    </div>
  );
}

export default Gifts;
