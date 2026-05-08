export const items = [
  "Sword",
  "Bow",
  "Rod",
  "Tear",
  "Belt",
  "Cloak",
  "Glove",
  "Chain",
  "Spatula",
];

export const augments = [
  "Economy",
  "Combat",
  "AP",
  "AD",
  "Reroll",
  "Tank",
  "Item",
  "Trait",
];

export const boards = [
  "AP opener",
  "AD opener",
  "Tank frontline",
  "Reroll copies",
  "Strongest board",
  "Win streak",
  "Lose streak",
];
export const units = [
  "AP item holder",
  "AD item holder",
  "Main tank",
  "Multiple reroll copies",
  "Dark Star unit",
  "Brawler unit",
  "Stargazer unit",
  "Primordian unit",
  "Twisted Fate",
  "Vex",
  "Master Yi",
  "Xayah",
];

export const itemTags: Record<string, string[]> = {
  Sword: ["AD"],
  Bow: ["AD", "Attack Speed"],
  Rod: ["AP"],
  Tear: ["AP", "Mana"],
  Belt: ["Tank"],
  Cloak: ["Tank"],
  Glove: ["Flex"],
  Chain: ["Tank"],
  Spatula: ["Emblem"],
};