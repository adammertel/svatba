import "./App.css";
import "./../node_modules/bulma/css/bulma.min.css";
import Header from "./Header";
import Location from "./Location";
import { Section } from "react-bulma-components";
import FormSection from "./Form";
import Gifts from "./Gifts";
import Program from "./Program";

function App() {
  return (
    <>
      <div id="App">
        <Header />
        <Section>
          <Location />
          <FormSection />
          <Gifts />
          <Program />
        </Section>
      </div>
    </>
  );
}

export default App;
