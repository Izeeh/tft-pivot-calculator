import type { Comp } from "../data/comps";

type ScoringInput = {
  stage: string;
  level: string;
  gold: string;
  hp: string;
  selectedItems: string[];
  selectedAugments: string[];
  selectedBoards: string[];
  selectedUnits?: string[];
  itemTags: Record<string, string[]>;
  comps: Comp[];
};

export type ScoredComp = Comp & {
  score: number;
  reasons: string[];
};

function clampScore(score: number) {
  return Math.max(5, Math.min(99, Math.round(score)));
}

export function calculateBestLines(input: ScoringInput): ScoredComp[] {
  const {
    stage,
    level,
    gold,
    hp,
    selectedItems,
    selectedAugments,
    selectedBoards,
    selectedUnits = [],
    itemTags,
    comps,
  } = input;

  const allItemTags = selectedItems.flatMap((item) => itemTags[item] || []);
  const numericLevel = Number(level);
  const numericGold = Number(gold);
  const numericHp = Number(hp);

  return comps
    .map((comp) => {
      let score = comp.baseScore;
      const reasons: string[] = [];

      comp.itemTags.forEach((tag) => {
        if (allItemTags.includes(tag)) {
          score += 8;
          reasons.push(`Good ${tag} item fit`);
        }
      });

      comp.augmentTags.forEach((tag) => {
        if (selectedAugments.includes(tag)) {
          score += 10;
          reasons.push(`Good ${tag} augment fit`);
        }
      });

      comp.boardTags.forEach((tag) => {
        if (selectedBoards.includes(tag)) {
          score += 8;
          reasons.push(`Good ${tag} board fit`);
        }
      });

      comp.unitTags.forEach((tag) => {
        if (selectedUnits.includes(tag)) {
          score += 12;
          reasons.push(`Good ${tag} unit fit`);
        }
      });

      if (comp.style === "fast8" || comp.style === "fast9") {
        if (numericGold >= 40) {
          score += 8;
          reasons.push("Good economy for leveling");
        }

        if (numericHp >= 60) {
          score += 6;
          reasons.push("Healthy enough to play for late game");
        }

        if (numericHp > 0 && numericHp < 45) {
          score -= 12;
          reasons.push("Low HP makes this line risky");
        }

        if (numericLevel >= 7) {
          score += 5;
          reasons.push("Level is close to the required board timing");
        }
      }

      if (comp.style === "reroll") {
        if (selectedBoards.includes("Reroll copies") || selectedUnits.includes("Multiple reroll copies")) {
          score += 15;
          reasons.push("You already have reroll copies");
        }

        if (numericLevel > 0 && numericLevel <= 6) {
          score += 6;
          reasons.push("Good level range for reroll");
        }

        if (numericGold >= 30) {
          score += 6;
          reasons.push("Enough gold to roll");
        }

        if (stage.startsWith("4")) {
          score -= 8;
          reasons.push("Late stage makes reroll harder");
        }
      }

      if (comp.style === "emblem") {
        if (allItemTags.includes("Emblem") || selectedAugments.includes("Trait")) {
          score += 18;
          reasons.push("You have emblem or trait support");
        } else {
          score -= 12;
          reasons.push("Missing emblem or trait support");
        }
      }

      return {
        ...comp,
        score: clampScore(score),
        reasons: Array.from(new Set(reasons)).slice(0, 5),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}