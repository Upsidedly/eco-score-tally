"use client";

import { Formula } from "@/components/formula";
import { MatchDataTabs } from "@/components/match-data-tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { calculatePoints, MatchData } from "@/lib/points";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [matchData, setMatchData] = useState<MatchData>(defaults);
  const [points, setPoints] = useState<number>()

  useEffect(() => {
    console.log(matchData);
  }, [matchData]);

  return (
    <div className="min-h-screen w-full py-8 flex items-center flex-col gap-2">
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
      <Accordion type="single" collapsible className="w-[600px] max-w-[96%] border px-5 mb-3">
        <AccordionItem value="item-1">
          <AccordionTrigger>Points Breakdown</AccordionTrigger>
          <AccordionContent>
          <b>Barrier Points</b> – Awarded for moving a large white ball (the BARRIER) from any of the three acrylic pillars (ECOSYSTEMS) into the side goal (MITIGATOR).
<br /><br />
<b>Biodiversity Points</b> – Earned by placing multicoloured balls (BIODIVERSITY UNITS) into the top of any ECOSYSTEM.
<br /><br />
<b>Distribution Factor</b> – A multiplier applied to Biodiversity Points, based on how evenly BIODIVERSITY UNITS are distributed among the three ECOSYSTEMS.
<br /><br />
<b>Protection Multiplier</b> – A multiplier applied to the sum of Barrier Points and the product of Biodiversity Points and the Distribution Factor. It depends on the number of a regional alliance’s robots secured on the ROPE, with additional value based on the height each robot reaches (referred to in the video as a “protection multiplier increment”).
<br /><br />
<b>Coopertition Bonus</b> – A bonus awarded if five or more robots, regardless of regional alliance, are fully supported by the ROPE at the end of the match.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
      <p className="text-sm mt-2 text-gray-400 w-full text-center">(Rough estimate before game manual)</p>
      <Twemoji options={{ className: "inline h-[1.5em] w-[1.5em] align-middle" }} noWrapper={true}>
        <p className="fixed bottom-2 right-2 text-gray-500">by M. Williams of Team Jamaica 🇯🇲</p>
      </Twemoji>
    </div>
  );
}
