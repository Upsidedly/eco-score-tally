"use client";

import { Formula } from "@/components/formula";
import NumberInput from "@/components/number-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MatchData } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { BlockMath } from "react-katex";
import Twemoji from "react-twemoji";

const defaults: MatchData = {
  barriersRemoved: 0,
  biodiversityUnitsAdded: 0,
}

export default function Home() {
  const id = useId();
  const [matchData, setMatchData] = useState<MatchData>(defaults);

  useEffect(() => {
    console.log(matchData)
  }, [matchData])

  return (
    <div className="min-h-screen w-full p-8 md:flex items-center flex-col gap-2">
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
      <Card className="rounded-none md:min-w-[600px]">
        <CardHeader>
          <CardTitle className="w-full text-center">Match Data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 grid-rows-auto gap-3">
          <div className="max-w-[150px]">
            <Label htmlFor={id + "barrier-points"} className="text-sm font-semibold mb-1">
              Barriers Removed
            </Label>
            <NumberInput
              id={id + "barrier-points"}
              value={matchData.barriersRemoved}
              onChange={(v) => setMatchData((md) => ({ ...md, barriersRemoved: v }))}
            />
          </div>
          <div className="flex"></div>
        </CardContent>
      </Card>
      <div className="flex gap-5">
      <Button className="mt-5">
        Calculate
      </Button>
      <Button variant="secondary" className="mt-5" onClick={() => setMatchData(() => ({ barriersRemoved: 0, biodiversityUnitsAdded: 0 }))}>
        Reset
      </Button>
      </div>
      <Twemoji options={{ className: "inline h-[1.5em] w-[1.5em] align-middle" }} noWrapper={true}>
        <p className="fixed bottom-2 left-0 right-0 text-center text-gray-500">by Team Jamaica 🇯🇲</p>
      </Twemoji>
    </div>
  );
}
