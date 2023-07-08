import { Block, Container, Heading } from "react-bulma-components";

function Food() {
  return (
    <div className="page-section" style={{}}>
      <Container>
        <Heading size={3}>Jedlo a pitie</Heading>
        <Block>
          Ráno začneme cca od 10 hodiny niečím menším na zakusnutie k prípitkom.
          Po obrade budeme podávať polievku, zvyšok obeda bude riešený formou
          bufetu. K torte máme pripraveného kávamana zo Znojma, ktorý mimo
          samotného esspressa pripraví aj filter alebo miešaný kávový koktejl.
          Večer príde znova raut, ktorý ale doplní hamburger spravený priamo na
          mieste na grile. Ak o neho máte záujem, prosím indikujte túto možnosť
          vo formulári, pretože potrebný počet surovín je treba dopredu
          pripraviť.
        </Block>
        <Block>
          Na pitie budeme mať klasicky pivo a vína rôznych farieb. K tomu
          plánujeme pre skúsenejších ponúknuť gin s tonicom, mandlovicu alebo
          borovičku. Jeden výčap bude fungovať pre šumivé víno. Ako nealko máme
          klasicky pripravenú kofolu, džúsy alebo minerálku.
        </Block>
        <Block>
          Catering bude zabezpečený skupinou veľmi šikovných dám, ktoré si
          hovoria matky. Máme s nimi skúsenosť už z inej svatby a sme si istý,
          že sa máte na čo tešiť .
        </Block>
      </Container>
    </div>
  );
}

export default Food;
