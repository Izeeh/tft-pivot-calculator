"use client";

import { useMemo, useState } from "react";
import { comps } from "./data/comps";
import { augments, boards, items, itemTags, stages, units } from "./data/gameData";
import { calculateBestLines } from "./lib/scoring";

function toggleValue(value: string, list: string[], setList: (value: string[]) => void) {
  if (list.includes(value)) {
    setList(list.filter((item) => item !== value));
  } else {
    setList([...list, value]);
  }
}

export default function Home() {
  const [stage, setStage] = useState("");
  const [level, setLevel] = useState("");
  const [gold, setGold] = useState("");
  const [hp, setHp] = useState("");

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedAugments, setSelectedAugments] = useState<string[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);

  const results = useMemo(() => {
    return calculateBestLines({
      stage,
      level,
      gold,
      hp,
      selectedItems,
      selectedAugments,
      selectedBoards,
      selectedUnits,
      itemTags,
      comps,
    });
  }, [stage, level, gold, hp, selectedItems, selectedAugments, selectedBoards, selectedUnits]);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">TFT Pivot Calculator</h1>

        <p className="text-gray-400 mb-8">
          Enter your current game state and calculate the best lines to play.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Game State</h2>

            <div className="mb-6">
              <p className="font-semibold mb-3">Stage</p>
              <div className="flex flex-wrap gap-2">
                {stages.map((stageOption) => (
                  <button
                    key={stageOption}
                    type="button"
                    onClick={() => setStage(stageOption)}
                    className={`rounded-lg border px-4 py-2 ${
                      stage === stageOption
                        ? "bg-white text-black border-white"
                        : "bg-gray-900 border-gray-700"
                    }`}
                  >
                    {stageOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <input
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="rounded-lg bg-gray-900 border border-gray-700 p-3"
                placeholder="Level: 6"
              />

              <input
                value={gold}
                onChange={(event) => setGold(event.target.value)}
                className="rounded-lg bg-gray-900 border border-gray-700 p-3"
                placeholder="Gold: 40"
              />

              <input
                value={hp}
                onChange={(event) => setHp(event.target.value)}
                className="rounded-lg bg-gray-900 border border-gray-700 p-3"
                placeholder="HP: 72"
              />
            </div>

            <h3 className="font-semibold mb-3">Items</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {items.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleValue(item, selectedItems, setSelectedItems)}
                  className={`rounded-lg border px-4 py-2 ${
                    selectedItems.includes(item)
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <h3 className="font-semibold mb-3">Augments</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {augments.map((augment) => (
                <button
                  key={augment}
                  type="button"
                  onClick={() => toggleValue(augment, selectedAugments, setSelectedAugments)}
                  className={`rounded-lg border px-4 py-2 ${
                    selectedAugments.includes(augment)
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-700"
                  }`}
                >
                  {augment}
                </button>
              ))}
            </div>

            <h3 className="font-semibold mb-3">Current Board</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {boards.map((board) => (
                <button
                  key={board}
                  type="button"
                  onClick={() => toggleValue(board, selectedBoards, setSelectedBoards)}
                  className={`rounded-lg border px-4 py-2 ${
                    selectedBoards.includes(board)
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-700"
                  }`}
                >
                  {board}
                </button>
              ))}
            </div>

            <h3 className="font-semibold mb-3">Units / Key Pieces</h3>
            <div className="flex flex-wrap gap-2">
              {units.map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => toggleValue(unit, selectedUnits, setSelectedUnits)}
                  className={`rounded-lg border px-4 py-2 ${
                    selectedUnits.includes(unit)
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-700"
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setStage("");
                setLevel("");
                setGold("");
                setHp("");
                setSelectedItems([]);
                setSelectedAugments([]);
                setSelectedBoards([]);
                setSelectedUnits([]);
              }}
              className="mt-6 w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 font-semibold hover:bg-gray-800"
            >
              Clear inputs
            </button>
          </section>

          <section className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Best Lines</h2>

            <div className="mb-6 rounded-xl border border-gray-800 bg-gray-950 p-4">
              <h3 className="font-semibold mb-2">Selected Inputs</h3>

              <p className="text-sm text-gray-400">Stage: {stage || "None"}</p>
              <p className="text-sm text-gray-400">Level: {level || "None"}</p>
              <p className="text-sm text-gray-400">Gold: {gold || "None"}</p>
              <p className="text-sm text-gray-400">HP: {hp || "None"}</p>

              <p className="text-sm text-gray-400">
                Items: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
              </p>

              <p className="text-sm text-gray-400">
                Augments: {selectedAugments.length > 0 ? selectedAugments.join(", ") : "None"}
              </p>

              <p className="text-sm text-gray-400">
                Board: {selectedBoards.length > 0 ? selectedBoards.join(", ") : "None"}
              </p>

              <p className="text-sm text-gray-400">
                Units: {selectedUnits.length > 0 ? selectedUnits.join(", ") : "None"}
              </p>
            </div>

            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.name} className="rounded-xl bg-gray-900 p-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">{result.name}</span>
                    <span className="font-bold">{result.score}%</span>
                  </div>

                  <p className="text-sm text-gray-400 mt-2">{result.description}</p>

                  <div className="mt-4">
                    <p className="text-sm font-semibold">Why this line:</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-400">
                      {result.reasons.length > 0 ? (
                        result.reasons.map((reason) => <li key={reason}>{reason}</li>)
                      ) : (
                        <li>No strong match yet</li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-green-400">Commit if</p>
                      <p className="text-gray-400">{result.commit}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-red-400">Avoid if</p>
                      <p className="text-gray-400">{result.avoid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}