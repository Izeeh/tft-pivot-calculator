export const stages = [
  "2-1",
  "2-5",
  "3-2",
  "3-5",
  "4-1",
  "4-2",
  "5-1",
];

export const levels = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];
export const goldOptions = [
  { label: "0-9", value: "5" },
  { label: "10-19", value: "15" },
  { label: "20-29", value: "25" },
  { label: "30-39", value: "35" },
  { label: "40-49", value: "45" },
  { label: "50+", value: "55" },
];

export const hpOptions = [
  { label: "Low HP", value: "35" },
  { label: "Medium HP", value: "55" },
  { label: "Healthy", value: "75" },
  { label: "Very Healthy", value: "90" },
];
export const economyStates = [
  "Low gold",
  "Stable economy",
  "High economy",
];

export const hpStates = [
  "Low HP",
  "Medium HP",
  "Healthy",
];
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