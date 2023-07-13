import "./App.scss";
import "./../node_modules/bulma/css/bulma.min.css";
import Header from "./Header";
import Location from "./Location";
import { Section } from "react-bulma-components";
import FormSection from "./Form";
import Gifts from "./Gifts";
import Food from "./Food";
import DressCode from "./DressCode";
import Program from "./Program";
import Accommodation from "./Accommodation";
import FooterPart from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const scrollToSection = (sectionId: string) => {
    const anchor = document.querySelector(`#${sectionId}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    document.onscroll = () => {
      const newScroll =
        window.scrollY || document.getElementsByTagName("html")[0].scrollTop;
      setScroll(newScroll);
    };
  }, []);

  return (
    <>
      <div id="App">
        <Header scrollToSection={scrollToSection} scroll={scroll} />
        <Section>
          <Location />
          <Accommodation />
          <Food />
          <DressCode />
          <Gifts />
          <Program />
          <FormSection />
        </Section>
        <FooterPart></FooterPart>
      </div>
    </>
  );
}

export default App;
