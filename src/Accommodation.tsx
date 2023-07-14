import { Block, Container, Heading } from "react-bulma-components";

function Accomodation() {
  return (
    <div style={{}} className="page-section" id="section-accommodation">
      <Container>
        <Heading size={3}>Ubytovanie</Heading>
        <Block>
          V areáli svadby bude možné ubytovať iba malý počet hostí; pre
          niektorých ďalších máme na noc zo soboty na nedeľu bývanie v okolitých
          obciach. Ubytovať sa bude možné v sobotu od 15, odubytovanie potom
          bude v nedeľu do 15. Aby sme vedeli zorganizovať dostupné kapacity,
          uveďte prosím vo formulári, či budete chcieť využiť nami rezervované
          ubytovanie alebo máte ubytovanie vyriešené sami.
        </Block>
        <Block>
          Transport medzi ubytovaním, Kostkou v Poli, prípadne ďalšími okolitými
          obcami (vrátane Znojma) bude zabezpečený počas celého trvania svadby
          (od soboty 9 ráno).
        </Block>
      </Container>
    </div>
  );
}

export default Accomodation;
