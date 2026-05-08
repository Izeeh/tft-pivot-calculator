export type CompStyle = "fast8" | "fast9" | "reroll" | "emblem";

export type Comp = {
  name: string;
  style: CompStyle;
  baseScore: number;
  itemTags: string[];
  augmentTags: string[];
  boardTags: string[];
  description: string;
  commit: string;
  avoid: string;
};

export const comps: Comp[] = [
  {
    name: "Dark Stars",
    style: "emblem",
    baseScore: 58,
    itemTags: ["AD", "AP", "Emblem"],
    augmentTags: ["Trait", "Item", "Combat"],
    boardTags: ["Strongest board", "Win streak"],
    description: "Strong if you have emblem/item support and can play tempo.",
    commit: "Commit if you have Dark Star access, strong tempo, or emblem support.",
    avoid: "Avoid if you have no emblem, no direction, and weak economy.",
  },
  {
    name: "Brawler Yi",
    style: "fast8",
    baseScore: 55,
    itemTags: ["AD", "Attack Speed", "Tank"],
    augmentTags: ["Combat", "AD", "Tank"],
    boardTags: ["AD opener", "Tank frontline", "Strongest board"],
    description: "Good AD direction if you have frontline and tempo.",
    commit: "Commit if you have AD items, frontline, and can reach level 8 safely.",
    avoid: "Avoid if your HP is too low and you cannot stabilize before stage 4.",
  },
  {
    name: "Primordian Reroll",
    style: "reroll",
    baseScore: 48,
    itemTags: ["AP", "Tank"],
    augmentTags: ["Reroll", "Combat"],
    boardTags: ["Reroll copies", "AP opener"],
    description: "Playable only if you naturally hit copies early.",
    commit: "Commit if you already have several copies and enough gold to slow roll.",
    avoid: "Avoid if you are already late or do not have natural copies.",
  },
  {
    name: "Vex Fast 9",
    style: "fast9",
    baseScore: 53,
    itemTags: ["AP", "Mana", "Tank"],
    augmentTags: ["Economy", "AP", "Combat"],
    boardTags: ["AP opener", "Strongest board", "Win streak"],
    description: "Best with good HP, economy and AP item direction.",
    commit: "Commit if you have high HP, good economy, and AP item direction.",
    avoid: "Avoid if you are low HP and forced to roll before reaching level 8 or 9.",
  },
  {
    name: "Twisted Fate Reroll",
    style: "reroll",
    baseScore: 50,
    itemTags: ["AP", "Mana"],
    augmentTags: ["Reroll", "AP", "Item"],
    boardTags: ["Reroll copies", "AP opener"],
    description: "Needs early copies or strong reroll conditions.",
    commit: "Commit if you have early copies, AP items, and a reroll-friendly spot.",
    avoid: "Avoid if you do not have copies by stage 3.",
  },
  {
    name: "Stargazer Xayah",
    style: "fast8",
    baseScore: 52,
    itemTags: ["AD", "Attack Speed"],
    augmentTags: ["AD", "Combat", "Item"],
    boardTags: ["AD opener", "Win streak"],
    description: "Good from AD tempo openers and strong carry items.",
    commit: "Commit if you have AD tempo, attack speed items, and enough HP to reach level 8.",
    avoid: "Avoid if you are missing AD items and your board is not strong enough.",
  },
];