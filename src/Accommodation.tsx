import { Block, Container, Heading } from "react-bulma-components";

function Accomodation() {
  return (
    <div style={{}} className="page-section">
      <Container>
        <Heading size={3}>Ubytovanie</Heading>
        <Block>
          V areály svatby bude možné ubytovať iba malý počet hostí; pre
          ostatných máme na noc zo soboty na nedeľu bývanie v okolitých obciach.
          Ubytovať sa bude možné v sobotu od 15, odubytovanie bude v nedeľu do
          3. Aby sme vedeli zorganizovať dostupné kapacity, uveďte prosím vo
          formulári, či budete chcieť využiť nami rezervované ubytovanie alebo
          máte ubytovanie vyriešené sami.
        </Block>
        <Block>
          Transport medzi ubytovaním a Kostkou v Poli bude zabezpečený počas
          celého trvania svatby (od soboty 9am).
        </Block>
        <Block>
          Máme obmedzené kapacity na ubytovanie aj z piatka na sobotu. Ak máte
          záujem prísť už v piatok, dajte nám vedieť vo formulári alebo nám
          priamo napíšte a my skúsime nájsť pre vás miesto.
        </Block>
      </Container>
    </div>
  );
}

export default Accomodation;
