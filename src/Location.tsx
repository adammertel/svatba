import {
  Block,
  Columns,
  Container,
  Heading,
  Image,
} from "react-bulma-components";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

function Location() {
  const [mapEl, setMapEl] = useState<any>(null);

  const llKostka = L.latLng(48.9304605, 16.150659);
  const llMapCenter = L.latLng(48.9, 16.14);

  useEffect(() => {
    if (mapEl === null) {
      try {
        const map = L.map("map", { scrollWheelZoom: false });
        // map.setMinZoom(12);
        setMapEl(map);
        map.setView(llMapCenter, 12);
        const point = L.circleMarker(llKostka, {
          fillColor: "#80374b",
          color: "#80374b",
        });
        point.addTo(map);

        var CartoDB_Positron = L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 14,
            minZoom: 8,
          }
        );
        CartoDB_Positron.addTo(map);
      } catch {
        console.log("map already registered");
      }
    }
  }, []);

  return (
    <div style={{}} className="page-section" id="section-location">
      <Container>
        <Heading size={3}>Miesto</Heading>
        <Block>
          Svadba sa bude konať v{" "}
          <a href="https://kostkavpoli.cz/">Kostke v poli</a>, ktorá sa nachádza
          niekde v poli medzi dedinami Žerotice, Horní Dunajovice a Tvořihráz.
          Najbližšie mesto je Znojmo, ktoré leží cca 10 minút cesty autom.
          Doporučujeme prísť z cesty Tvořihráz - Horní Dunajovice. Cesta z
          Žerotic je tiež možná, ale viac pripomína motokrosovú trať.
        </Block>

        <Block>
          Objekt disponuje vlastným parkoviskom, kde by sme mali zvládnuť
          zaparkovať cca 20-30 áut.
        </Block>

        <Block>
          V areáli sa nachádza aj bazén, takže určite si nezabudnite pribaliť
          plavky. :)
        </Block>

        <Block id="kostka-pictures">
          <Columns>
            <Columns.Column>
              <Block>
                <Image src="kostka1.jpg" />
              </Block>
            </Columns.Column>
            <Columns.Column>
              <Block>
                <Image src="kostka2.jpg" />
              </Block>
            </Columns.Column>
          </Columns>
        </Block>

        <Block id="map-block">
          <div id="map" style={{ height: "500px" }} />
        </Block>
      </Container>
    </div>
  );
}

export default Location;
