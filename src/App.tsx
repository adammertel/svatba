import "./App.scss";
import "./../node_modules/bulma/css/bulma.min.css";
import Header from "./Header";
import Location from "./Location";
import { Section } from "react-bulma-components";
import FormSection from "./Form";
import Gifts from "./Gifts";
import Food from "./Food";
import Program from "./Program";
import Accommodation from "./Accommodation";

function App() {
  const scrollToSection = (sectionId) => {
    const anchor = document.querySelector(`#${sectionId}`);
    console.log(anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div id="App">
        <Header scrollToSection={scrollToSection} />
        <Section>
          <Location />
          <Accommodation />
          <Food />
          <FormSection />
          <Gifts />
          <Program />
        </Section>
      </div>
    </>
  );
}

export default App;
