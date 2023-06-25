import { useState } from "react";
import {
  Block,
  Container,
  Heading,
  Form,
  Button,
  Message,
  Box,
  Tag,
} from "react-bulma-components";

import { MdChildFriendly, MdNoDrinks, MdOutlineNoMeals } from "react-icons/md";
import {
  FaChild,
  FaMale,
  FaFemale,
  FaUserTie,
  FaPlus,
  FaTrash,
  FaHamburger,
} from "react-icons/fa";
import { BiSolidDrink, BiSolidWine } from "react-icons/bi";
import { GiDress, GiFruitBowl, GiLargeDress, GiTie } from "react-icons/gi";
import { PiBeerSteinFill } from "react-icons/pi";

type PersonCategory = "m" | "f" | "c" | "t";
interface Person {
  name: string;
  category: PersonCategory;
  food: "all" | "vegan" | "vegetarian" | "frutarian" | "celiac" | "breatharian";
  burger: boolean;
}

function FormSection() {
  const [teamName, setTeamName] = useState<string>("");
  const [persons, setPersons] = useState<Person[]>([
    {
      name: "",
      category: "f",
      food: "all",
      burger: true,
    },
  ]);

  const handlePersonCategory = (
    personIndex: number,
    newCategory: PersonCategory
  ) => {
    const newPersons = [...persons];
    newPersons[personIndex].category = newCategory;
    setPersons(newPersons);
  };

  return (
    <div style={{}} className="page-section">
      <Container>
        <Heading size={3}>Formulár</Heading>
        <Block>
          Prosíme, aby pozvaní hostia vyplnili nasledujúci formulár. Ideálne
          vyplniť jeden formulár za jeden tím.
        </Block>
        <Box>
          {/* team name */}
          <Form.Field horizontal textSize={"small"}>
            <Form.Label>Názov tímu</Form.Label>
            <Form.Control>
              <Form.Input
                style={{ border: "1px solid black" }}
                size="small"
                placeholder="meno + priezvisko"
                type=""
                value={teamName}
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
              />
            </Form.Control>
          </Form.Field>

          {/* people */}
          {persons.map((person, index) => {
            const categoryIcons = {
              m: <GiTie size={20} />,
              f: <GiDress size={20} />,
              c: <FaChild size={20} />,
              t: <MdChildFriendly size={20} />,
            };

            return (
              <div className="person-block">
                <Tag.Group hasAddons className="person-tag">
                  <Tag className="person-tag-category" size="medium">
                    {categoryIcons[person.category]}
                  </Tag>
                  <Tag
                    color="primary"
                    className="person-tag-name"
                    size="medium"
                  >
                    {`Osoba ${index + 1}: `}{" "}
                    <b style={{ marginLeft: "5px" }}> {person.name}</b>
                  </Tag>
                  <Tag
                    color="white"
                    className="person-tag-remove"
                    size="medium"
                    onClick={() => {
                      const newPersons = [...persons].filter(
                        (p, i) => i !== index
                      );
                      setPersons(newPersons);
                    }}
                  >
                    <FaTrash size={15} />
                  </Tag>
                </Tag.Group>
                <Form.Field key={`person-${index}`}>
                  {/* name */}
                  <Form.Field horizontal>
                    <Form.Label>Meno osoby</Form.Label>
                    <Form.Control>
                      <Form.Input
                        style={{ border: "1px solid black" }}
                        size="small"
                        placeholder="meno + priezvisko"
                        type=""
                        value={person.name}
                        onChange={(e) => {
                          const newPersons = [...persons];
                          newPersons[index].name = e.target.value;
                          setPersons(newPersons);
                        }}
                      />
                    </Form.Control>
                  </Form.Field>

                  {/* category */}
                  <Form.Field kind="addons">
                    <Form.Label>{`Som / identifikujem sa ako`}</Form.Label>
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
                        spotenený muž
                        {categoryIcons["m"]}
                      </Form.Checkbox>
                      <Form.Checkbox
                        checked={person.category === "c"}
                        onClick={() => handlePersonCategory(index, "c")}
                      >
                        {`nádejný mladý človek < 18`}
                        {categoryIcons["c"]}
                      </Form.Checkbox>
                      <Form.Checkbox
                        checked={person.category === "t"}
                        onClick={() => handlePersonCategory(index, "t")}
                      >
                        {`nemluvňa - prosíme rodičov o vyplnenie`}
                        {categoryIcons["t"]}
                      </Form.Checkbox>
                    </Form.Control>
                  </Form.Field>

                  {/* burger */}
                  <Form.Field kind="addons">
                    <Form.Label>
                      {`Mám záujem o večerný burger`}
                      <FaHamburger
                        style={{
                          verticalAlign: "baseline",
                          marginRight: "5px",
                        }}
                      />
                    </Form.Label>
                    <Form.Control>
                      <Form.Field>
                        <Form.Control>
                          <Form.Checkbox>
                            áno, prosím - jeden hamburger pre mňa
                            <Tag color="info">odporúčame</Tag>
                          </Form.Checkbox>
                          <Form.Checkbox>
                            nie, ďakujem - dám si niečo iné, zrovna nemám chuť
                          </Form.Checkbox>
                        </Form.Control>
                      </Form.Field>
                    </Form.Control>
                  </Form.Field>

                  {/* alcohol */}
                  <Form.Field kind="addons">
                    <Form.Label>{`Počas večera plánujem popíjať`}</Form.Label>

                    <Form.Control>
                      <Form.Checkbox>
                        pivo
                        <PiBeerSteinFill />
                      </Form.Checkbox>
                      <Form.Checkbox>
                        vínko
                        <BiSolidWine />
                      </Form.Checkbox>
                      <Form.Checkbox>
                        destiláty
                        <GiFruitBowl />
                      </Form.Checkbox>
                      <Form.Checkbox>
                        gin tonic
                        <BiSolidDrink />
                      </Form.Checkbox>
                      <Form.Checkbox>
                        nepijem
                        <MdNoDrinks />
                      </Form.Checkbox>
                    </Form.Control>
                  </Form.Field>
                  <Block>
                    <Message color="danger">
                      <Message.Header>
                        <span>Upozornenie - Alkohol spôsobuje bezvedomie</span>
                        <Button remove />
                      </Message.Header>
                      <Message.Body>
                        Beriem na vedomie, že budem v bezvedomí
                        <Block>
                          <Form.Checkbox>Beriem na vedomie</Form.Checkbox>
                        </Block>
                      </Message.Body>
                    </Message>
                  </Block>
                </Form.Field>
              </div>
            );
          })}

          <Button
            onClick={() => {
              const newPersons = [...persons];
              newPersons.push({
                name: "",
                category: "f",
                food: "all",
                burger: true,
              });
              setPersons(newPersons);
            }}
          >
            Pridať ďalšiu osobu do tímu
            <FaPlus />
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default FormSection;
