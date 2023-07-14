import { useMemo, useState } from "react";
import {
  Block,
  Box,
  Button,
  Card,
  Columns,
  Container,
  Form,
  Heading,
  Message,
  Modal,
  Tag,
} from "react-bulma-components";

import { FaChild, FaHamburger, FaPlus, FaTrash } from "react-icons/fa";
import { MdChildFriendly, MdMail, MdNoDrinks, MdWarning } from "react-icons/md";

import { init as emailInit, send as emailSend } from "emailjs-com";
import { BiSolidDrink, BiSolidWine } from "react-icons/bi";
import { GiFruitBowl, GiStrong } from "react-icons/gi";
import { PiBeerSteinFill, PiDressFill } from "react-icons/pi";

type PersonCategory = "m" | "f" | "c" | "t";
type PersonFood =
  | "all"
  | "vegan"
  | "vegetarian"
  | "diabetes"
  | "celiac"
  | "breatharian";

type PersonDrink = "beer" | "wine" | "destilates" | "gin" | "non-alcoholic";
interface Person {
  name: string;
  category: PersonCategory;
  food: PersonFood;
  drink: PersonDrink[];
  burger: boolean;
  warning: boolean;
  accomodation?: boolean;
}

function FormSection() {
  const [teamName, setTeamName] = useState<string>("");
  const [teamNote, setTeamNote] = useState<string>("");
  const [persons, setPersons] = useState<Person[]>([]);

  const [modalDisplay, setModalDisplay] = useState<boolean>(false);

  const isFormValid = useMemo<boolean>(() => {
    return (
      teamName.length > 0 &&
      persons.length > 0 &&
      persons.every((p) => p.name.length > 0)
    );
  }, [persons, teamName]);

  const handleSendForm = () => {
    emailInit("SYk_4yBxt3ODyX49j");
    console.log("sending form");

    let table = `<table><thead><tr><th>Name</th><th>Category</th><th>Food</th><th>Drink</th><th>Burger</th><th>Accommodation</th></tr></thead>`;

    table += "<tbody>";
    for (let person of persons) {
      let drinks = person.drink.join(", ");
      let accommodation = person.accomodation ? "Yes" : "No";
      let burger = person.burger ? "Yes" : "No";

      table += `<tr><td>${person.name}</td><td>${
        categoryLabels[person.category]
      }</td><td>${
        person.food
      }</td><td>${drinks}</td><td>${burger}</td><td>${accommodation}</td></tr>`;
    }

    table += "</tbody></table>";

    emailSend("service_torxvf8", "template_u3cq14m", {
      message: table,
      team_name: teamName,
      notes: teamNote,
    }).then(
      function (response) {
        console.log("Email successfully sent!", response);
      },
      function (error) {
        console.error("Error sending email:", error);
      }
    );

    setPersons([]);
    setModalDisplay(true);
  };

  const handleCreateNewPerson = () => {
    const newPersons = [...persons];
    newPersons.push({
      name: "",
      category: "f",
      food: "all",
      burger: true,
      drink: ["non-alcoholic"],
      warning: true,
      accomodation: false,
    });
    setPersons(newPersons);
  };

  const handlePersonCategory = (
    personIndex: number,
    newCategory: PersonCategory
  ) => {
    const newPersons = [...persons];
    newPersons[personIndex].category = newCategory;

    if (newCategory === "c") {
      newPersons[personIndex].drink = ["non-alcoholic"];
      newPersons[personIndex].warning = true;
    } else if (newCategory === "t") {
      newPersons[personIndex].food = "all";
      newPersons[personIndex].burger = false;
      newPersons[personIndex].warning = true;
      newPersons[personIndex].drink = ["non-alcoholic"];
    }
    setPersons(newPersons);
  };

  const handlePersonFood = (personIndex: number, newFood: PersonFood) => {
    const newPersons = [...persons];
    newPersons[personIndex].food = newFood;
    setPersons(newPersons);
  };

  const handlePersonDrink = (personIndex: number, newDrink: PersonDrink) => {
    const newPersons = [...persons];
    let drinks = newPersons[personIndex].drink;
    let warning = newPersons[personIndex].warning;

    if (newDrink === "non-alcoholic") {
      if (drinks.includes("non-alcoholic")) {
        drinks = [];
      } else {
        drinks = ["non-alcoholic"];
      }
    } else {
      drinks = drinks.filter((d) => d !== "non-alcoholic");
      if (drinks.includes(newDrink)) {
        drinks = drinks.filter((d) => d !== newDrink);
        if (drinks.length === 0) {
          warning = true;
          drinks = ["non-alcoholic"];
        }
      } else {
        warning = false;
        drinks.push(newDrink);
      }
    }
    newPersons[personIndex].drink = drinks;
    newPersons[personIndex].warning = warning;
    setPersons(newPersons);
  };

  const categoryIcons = {
    m: <GiStrong size={20} style={{ verticalAlign: "baseline" }} />,
    f: <PiDressFill size={20} style={{ verticalAlign: "baseline" }} />,
    c: <FaChild size={20} style={{ verticalAlign: "baseline" }} />,
    t: <MdChildFriendly size={20} style={{ verticalAlign: "baseline" }} />,
  };

  const categoryLabels = {
    m: "Muž",
    f: "Žena",
    c: "Dieťa",
    t: "Tutu",
  };

  const handlePersonWarning = (personIndex: number) => {
    const newPersons = [...persons];
    newPersons[personIndex].warning = !newPersons[personIndex].warning;
    setPersons(newPersons);
  };

  const handlePersonBurger = (personIndex: number, newBurger: boolean) => {
    const newPersons = [...persons];
    newPersons[personIndex].burger = newBurger;
    setPersons(newPersons);
  };

  const handlePersonAccomodation = (
    personIndex: number,
    newAccomodation: boolean
  ) => {
    const newPersons = [...persons];
    newPersons[personIndex].accomodation = newAccomodation;
    setPersons(newPersons);
  };

  return (
    <div className="page-section" id="section-form">
      <Container>
        <Heading size={3}>Formulár</Heading>
        <Block>
          Prosíme, aby pozvaní hostia, ktorí boli o to priamo poprosení,
          vyplnili nasledujúci formulár. Ideálne vyplniť jeden formulár za jeden
          tím = partneri, rodina... Po spracovaní všetkých informácií vás budeme
          prípadne kontaktovať s ďalšími inštrukciami. Prosíme, vyplnte formulár
          iba jeden krát.
        </Block>
        <Box id="form">
          {/* team name */}
          <Form.Field horizontal>
            {/* <Form.Label>Názov tímu</Form.Label> */}
            <Form.Control>
              <Form.Input
                size="medium"
                color={teamName.length > 0 ? "success" : "wine"}
                placeholder="názov tímu"
                type="text"
                value={teamName}
                maxLength={20}
                className="team-name-input"
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
              />
            </Form.Control>
          </Form.Field>

          {/* people */}
          {persons.map((person, index) => {
            return (
              <Card className="person-block" colorVariant="primary">
                <Card.Header color="primary">
                  <Card.Header.Title>
                    <Heading size={4}>
                      <span className="person-tag-category">
                        {categoryIcons[person.category]}
                      </span>
                      <b>{person.name} </b>
                      <span style={{ fontSize: "0.6em" }}>
                        (Osoba {`${index + 1}`})
                      </span>
                    </Heading>
                  </Card.Header.Title>

                  <Card.Header.Icon>
                    <FaTrash
                      size={20}
                      className="person-tag-remove"
                      onClick={() => {
                        const newPersons = [...persons].filter(
                          (_, i) => i !== index
                        );
                        setPersons(newPersons);
                      }}
                    />
                  </Card.Header.Icon>
                </Card.Header>

                <Card.Content>
                  <Form.Field
                    key={`person-${index}`}
                    className="person-information"
                  >
                    {/* name */}
                    <Form.Field>
                      <Columns>
                        <Columns.Column size={4}>
                          <Form.Label>1. Meno osoby</Form.Label>
                        </Columns.Column>
                        <Columns.Column size={8}>
                          <Form.Control>
                            <Form.Input
                              color={person.name.length > 0 ? "black" : "wine"}
                              size="small"
                              placeholder="celé meno"
                              type="text"
                              maxLength={20}
                              value={person.name}
                              onChange={(e) => {
                                const newPersons = [...persons];
                                newPersons[index].name = e.target.value;
                                setPersons(newPersons);
                              }}
                            />
                          </Form.Control>
                        </Columns.Column>
                      </Columns>
                    </Form.Field>

                    {/* category */}
                    <Form.Field>
                      <Columns>
                        <Columns.Column size={4}>
                          <Form.Label>{`2. Som / identifikujem sa ako`}</Form.Label>
                        </Columns.Column>
                        <Columns.Column size={8}>
                          <Form.Control>
                            <Form.Checkbox
                              checked={person.category === "f"}
                              onClick={() => handlePersonCategory(index, "f")}
                            >
                              lahodná žena
                              {categoryIcons["f"]}
                            </Form.Checkbox>
                            <Form.Checkbox
                              checked={person.category === "m"}
                              onClick={() => handlePersonCategory(index, "m")}
                            >
                              spotený muž
                              {categoryIcons["m"]}
                            </Form.Checkbox>
                            <Form.Checkbox
                              checked={person.category === "c"}
                              onClick={() => handlePersonCategory(index, "c")}
                            >
                              {`nádejný mladý človek 3-18`}
                              {categoryIcons["c"]}
                            </Form.Checkbox>
                            <Form.Checkbox
                              checked={person.category === "t"}
                              onClick={() => handlePersonCategory(index, "t")}
                            >
                              {`nemluvňa - prosíme zákonných zástupcov o vyplnenie`}
                              {categoryIcons["t"]}
                            </Form.Checkbox>
                          </Form.Control>
                        </Columns.Column>
                      </Columns>
                    </Form.Field>

                    {/* jedlo */}
                    {/* food: "all" | "vegan" | "vegetarian" | "diabetes" | "celiac" | "breatharian"; */}

                    {person.category !== "t" && (
                      <Form.Field>
                        <Columns>
                          <Columns.Column size={4}>
                            <Form.Label>{`3. Jedlo preferujem / zjem`}</Form.Label>
                          </Columns.Column>
                          <Columns.Column size={8}>
                            <Form.Control>
                              <Form.Field>
                                <Form.Control>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "all")
                                    }
                                    checked={person.food === "all"}
                                  >
                                    bez obmedzení
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "vegan")
                                    }
                                    checked={person.food === "vegan"}
                                  >
                                    vegan
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "vegetarian")
                                    }
                                    checked={person.food === "vegetarian"}
                                  >
                                    vegetarian
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "diabetes")
                                    }
                                    checked={person.food === "diabetes"}
                                  >
                                    frutarian
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "celiac")
                                    }
                                    checked={person.food === "celiac"}
                                  >
                                    celiatik
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    onClick={() =>
                                      handlePersonFood(index, "breatharian")
                                    }
                                    checked={person.food === "breatharian"}
                                  >
                                    bretarián
                                  </Form.Checkbox>
                                </Form.Control>
                              </Form.Field>
                            </Form.Control>
                          </Columns.Column>
                        </Columns>
                      </Form.Field>
                    )}

                    {/* burger */}
                    {person.category !== "t" && (
                      <Form.Field>
                        <Columns>
                          <Columns.Column size={4}>
                            <Form.Label>{`4. Mám záujem o večerný burger`}</Form.Label>
                          </Columns.Column>
                          <Columns.Column size={8}>
                            <Form.Control>
                              <Form.Field>
                                <Form.Control>
                                  <Form.Checkbox
                                    checked={person.burger === true}
                                    onChange={() => {
                                      handlePersonBurger(index, true);
                                    }}
                                  >
                                    áno, prosím - jeden hamburger pre mňa
                                    <FaHamburger
                                      style={{
                                        verticalAlign: "baseline",
                                        marginRight: "5px",
                                      }}
                                    />
                                    <Tag className="is-green">odporúčame</Tag>
                                  </Form.Checkbox>
                                  <Form.Checkbox
                                    checked={person.burger === false}
                                    onChange={() => {
                                      handlePersonBurger(index, false);
                                    }}
                                  >
                                    nie, ďakujem - dám si niečo iné
                                  </Form.Checkbox>
                                </Form.Control>
                              </Form.Field>
                            </Form.Control>
                          </Columns.Column>
                        </Columns>
                      </Form.Field>
                    )}

                    {/* accommodation Saturday */}
                    <Form.Field>
                      <Columns>
                        <Columns.Column size={4}>
                          <Form.Label>{`5. Táto osoba by rada ubytovať na noc zo soboty 26 na nedeľu 27`}</Form.Label>
                        </Columns.Column>
                        <Columns.Column size={8}>
                          <Form.Control>
                            <Form.Field>
                              <Form.Control>
                                <Form.Checkbox
                                  checked={person.accomodation === true}
                                  onChange={() => {
                                    handlePersonAccomodation(index, true);
                                  }}
                                >
                                  áno
                                </Form.Checkbox>
                                <Form.Checkbox
                                  checked={person.accomodation === false}
                                  onChange={() => {
                                    handlePersonAccomodation(index, false);
                                  }}
                                >
                                  nie
                                </Form.Checkbox>
                              </Form.Control>
                            </Form.Field>
                          </Form.Control>
                        </Columns.Column>
                      </Columns>
                    </Form.Field>

                    {/* alcohol */}
                    {["f", "m"].includes(person.category) && (
                      <>
                        <Form.Field>
                          <Columns>
                            <Columns.Column size={4}>
                              <Form.Label>{`6. Počas večera preferujem popíjať`}</Form.Label>
                            </Columns.Column>
                            <Columns.Column size={8}>
                              <Form.Control>
                                <Form.Checkbox
                                  checked={person.drink.includes("beer")}
                                  onClick={() =>
                                    handlePersonDrink(index, "beer")
                                  }
                                >
                                  pivo
                                  <PiBeerSteinFill />
                                </Form.Checkbox>
                                <Form.Checkbox
                                  checked={person.drink.includes("wine")}
                                  onClick={() =>
                                    handlePersonDrink(index, "wine")
                                  }
                                >
                                  vínko
                                  <BiSolidWine />
                                </Form.Checkbox>
                                <Form.Checkbox
                                  checked={person.drink.includes("destilates")}
                                  onClick={() =>
                                    handlePersonDrink(index, "destilates")
                                  }
                                >
                                  destiláty
                                  <GiFruitBowl />
                                </Form.Checkbox>
                                <Form.Checkbox
                                  checked={person.drink.includes("gin")}
                                  onClick={() =>
                                    handlePersonDrink(index, "gin")
                                  }
                                >
                                  gin tonic
                                  <BiSolidDrink />
                                </Form.Checkbox>
                                <Form.Checkbox
                                  checked={person.drink.includes(
                                    "non-alcoholic"
                                  )}
                                  onClick={() =>
                                    handlePersonDrink(index, "non-alcoholic")
                                  }
                                >
                                  nepijem
                                  <MdNoDrinks />
                                  <Tag className="is-green">neodporúčame</Tag>
                                </Form.Checkbox>
                              </Form.Control>
                            </Columns.Column>
                          </Columns>
                        </Form.Field>

                        {person.warning === false && (
                          <Block>
                            <Message className="is-wine">
                              <Message.Header>
                                <span>
                                  Upozornenie - Alkohol spôsobuje bezvedomie
                                </span>
                              </Message.Header>
                              <Message.Body>
                                <Block>
                                  <Form.Checkbox
                                    checked={person.warning}
                                    onChange={() => {
                                      handlePersonWarning(index);
                                    }}
                                  >
                                    Beriem na vedomie, že budem v bezvedomí
                                  </Form.Checkbox>
                                </Block>
                              </Message.Body>
                            </Message>
                          </Block>
                        )}
                      </>
                    )}
                  </Form.Field>
                </Card.Content>
              </Card>
            );
          })}

          <div>
            <Button
              onClick={() => {
                handleCreateNewPerson();
              }}
              size="small"
              color="black"
            >
              Pridať osobu do tímu
              <FaPlus />
            </Button>
          </div>

          <Block />

          {/* team notes */}
          <Form.Field horizontal kind="addons">
            <Form.Label>Poznámky</Form.Label>
            <Form.Control fullwidth>
              <Form.Textarea
                maxLength={300}
                size="small"
                placeholder="špeciálne požiadavky + niečo, čo by sme mali vedieť"
                value={teamNote}
                className="team-name-input"
                onChange={(e) => {
                  setTeamNote(e.target.value);
                }}
              />
            </Form.Control>
          </Form.Field>
          <hr />
          <div>
            <Button
              onClick={() => {
                handleSendForm();
              }}
              color="green"
              disabled={isFormValid === false}
              id="send-form-button"
            >
              <MdMail />
              {`Odoslať formulár za tím ${
                teamName ? '"' + teamName + '"' : ""
              } s ${persons.length} členmi`}
            </Button>

            {isFormValid === false && (
              <Message className="is-wine">
                <Message.Body>
                  <Block>
                    <MdWarning size={20} /> Skontrolujte prosím, či sú vyplnené
                    všetky mená, názov tímu a tím má aspoň jedného člena.
                  </Block>
                </Message.Body>
              </Message>
            )}
          </div>
        </Box>
      </Container>

      <Modal show={modalDisplay}>
        <Modal.Card>
          <Modal.Card.Header showClose={false}>
            <Modal.Card.Title>Ďakujeme za vyplnenie formuláru</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            Váš formulár bol odoslaný, ďakujeme za jeho vyplnenie. Prosím
            nevypĺňajte formulár znova. Ak myslíte, že ste spravili chybu alebo
            chcete nejakú odpoveď zmeniť, prosím kontaktujte nás priamo.
          </Modal.Card.Body>
          <Modal.Card.Footer>
            <Button
              color="success"
              onClick={() => {
                setModalDisplay(false);
              }}
            >
              V pohode, nemáš za čo
            </Button>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </div>
  );
}

export default FormSection;
