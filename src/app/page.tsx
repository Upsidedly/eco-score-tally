"use client";

import { Formula } from "@/components/formula";
import { MatchDataTabs } from "@/components/match-data-tabs";
import { Button } from "@/components/ui/button";
import { calculatePoints, MatchData } from "@/lib/points";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import Twemoji from "react-twemoji";

const defaults: MatchData = {
  barriersRemoved: 0,
  bioUnits1: 0,
  bioUnits2: 0,
  bioUnits3: 0,
  coopertitionBonus: false,
  hangLevels: [0, 0, 0]
};

export default function Home() {
  const id = useId();
  const [matchData, setMatchData] = useState<MatchData>(defaults);
  const [points, setPoints] = useState<number>()

  useEffect(() => {
    console.log(matchData);
  }, [matchData]);

  return (
    <div className="min-h-screen w-full py-8 md:flex items-center flex-col gap-2">
      <div className="flex gap-8 mb-5 w-full justify-center">
        <Link href="https://first.global" target="_blank">
          <Image
            src="/first_global.png"
            height={800}
            width={800}
            className="size-32 invert brightness-10 hover:scale-110 transition-all"
            alt="First Global"
          />
        </Link>
      </div>
      <h1 className="text-4xl font-semibold mb-2 w-full text-center">Eco-Equilibrium Score Calculator</h1>
      <p className="w-full text-center">The formula is defined as follows:</p>
      <Formula />
      <MatchDataTabs matchData={matchData} setMatchData={setMatchData} />
      <div className="flex gap-5 w-full justify-center">
        <Button onClick={() => setPoints(calculatePoints(matchData))} className="mt-5">Calculate</Button>
        <Button
          variant="secondary"
          className="mt-5"
          onClick={() => setMatchData(defaults)}
        >
          Reset
        </Button>
      </div>
      <h2 className="text-2xl mt-4 w-full text-center"><span className="border border-muted bg-gray-950 p-3 font-mono text-xl">{points ? Math.round(points) : 'N/A'}</span> Points</h2>
      <p className="text-sm text-gray-400">(Rough estimate before game manual)</p>
      <Twemoji options={{ className: "inline h-[1.5em] w-[1.5em] align-middle" }} noWrapper={true}>
        <p className="fixed bottom-2 left-0 right-0 text-center text-gray-500">by Team Jamaica 🇯🇲</p>
      </Twemoji>
    </div>
  );
}
