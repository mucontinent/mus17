let data = require("./result.json");
const classes = [
  "DarkWizard",
  "DarkKnight",
  "FairyElf",
  "MagicGladiator",
  "DarkLord",
  "Summoner",
  "RageFighter",
  "GrowLancer",
  "RuneWizard",
  "Slayer",
  "GunCrusher",
  "LightWizard",
  "LemuriaMage",
];

const getItems = (searchSection) => {
  const itemTypes = data.ItemList.Section.map((item) => {
    return item._attributes;
  });

  const indexOfType = itemTypes.findIndex((object) => {
    return object.Name === searchSection;
  });

  console.log(data.ItemList.Section[indexOfType]);
};

export const getItemsTypes = () => {
  return data.ItemList.Section.map((item) => {
    return item._attributes;
  });
};
