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
  return (
    <>
      <div id="App">
        <Header />
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
