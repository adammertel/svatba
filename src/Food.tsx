import { Block, Container, Heading } from "react-bulma-components";

function Food() {
  return (
    <div className="page-section" id="section-food">
      <Container>
        <Heading size={3}>Jedlo a pitie</Heading>
        <Block>
          Ráno začneme cca od 10 hodiny niečím menším na zakusnutie k prípitkom.
          Po obrade budeme podávať polievku, zvyšok obeda bude riešený formou
          bufetu. K torte máme pripraveného kávamana zo Znojma, ktorý mimo
          samotného esspressa pripraví aj filter alebo miešaný kávový koktejl.
          Večer príde znova raut pripravený priamo na grilu, vrátane hamburgeru.
          Ak máte o hamburger záujem, prosím dajte nám vedieť vo formulári,
          pretože potrebný počet surovín je treba dopredu pripraviť.
        </Block>
        <Block>
          Na pitie budeme mať klasicky vína rôznych farieb, a pivo s processom
          na čape. K tomu plánujeme pre skúsenejších ponúknuť gin s tonicom a
          mandlovicu, alebo pre fajnšmekrov borovičku a samozrejme domáce.
        </Block>
        <Block>Sme si istí, že sa máte na čo tešiť.</Block>
      </Container>
    </div>
  );
}

export default Food;
