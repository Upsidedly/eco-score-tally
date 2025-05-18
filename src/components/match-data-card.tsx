import { Label } from "@radix-ui/react-label";
import NumberInput from "./number-input";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useId } from "react";
import { MatchDataProps } from '@/lib/utils'

export function MatchDataCard({ matchData, setMatchData, useOneLevel }: MatchDataProps & { useOneLevel: boolean }) {
    const id = useId()

    return <Card className="rounded-none min-w-[96vw] md:min-w-[600px]">
    <CardHeader>
      <CardTitle className="text-lg w-full text-center">Match Data</CardTitle>
    </CardHeader>
    <CardContent className=" flex-col grid grid-cols-2 md:grid-cols-3 grid-rows-auto gap-3">
      <div className="max-w-[150px] h-ful col-span-full">
        <NumberInput
          label="Barriers Removed"
          value={matchData.barriersRemoved}
          onChange={(v) => setMatchData((md) => ({ ...md, barriersRemoved: v }))}
        />
      </div>
      <div className="max-w-[150px] h-full">
        <NumberInput
          label="Biodiversity Units (Ecosystem 1)"
          value={matchData.bioUnits1}
          onChange={(v) => setMatchData((md) => ({ ...md, bioUnits1: v }))}
        />
      </div>
      <div className="max-w-[150px] h-full">
        <NumberInput
          label="Biodiversity Units (Ecosystem 2)"
          value={matchData.bioUnits2}
          onChange={(v) => setMatchData((md) => ({ ...md, bioUnits2: v }))}
        />
      </div>
      <div className="max-w-[150px] h-full">
        <NumberInput
          label="Biodiversity Units (Ecosystem 3)"
          value={matchData.bioUnits3}
          onChange={(v) => setMatchData((md) => ({ ...md, bioUnits3: v }))}
        />
      </div>
      {useOneLevel ? <div className="max-w-[150px] h-full">
        <NumberInput
          label="Bot Security (Ascent) Level"
          value={matchData.hangLevels[0]}
          minValue={0}
          maxValue={4}
          onChange={(v) => setMatchData((md) => ({ ...md, hangLevels: [v, v, v] }))}
        />
      </div> : <><div className="max-w-[150px] h-full">
        <NumberInput
          label="Bot 1 Security (Ascent) Level"
          value={matchData.hangLevels[0]}
          minValue={0}
          maxValue={4}
          onChange={(v) => setMatchData((md) => ({ ...md, hangLevels: md.hangLevels.with(0, v) as [number, number, number] }))}
        />
      </div>
      <div className="max-w-[150px] h-full">
        <NumberInput
          label="Bot Security (Ascent) Level"
          value={matchData.hangLevels[1]}
          minValue={0}
          maxValue={4}
          onChange={(v) => setMatchData((md) => ({ ...md, hangLevels: md.hangLevels.with(1, v) as [number, number, number] }))}
        />
      </div>
      <div className="max-w-[150px] h-full">
      <NumberInput
          label="Bot Security (Ascent) Level"
          value={matchData.hangLevels[2]}
          minValue={0}
          maxValue={4}
          onChange={(v) => setMatchData((md) => ({ ...md, hangLevels: md.hangLevels.with(2, v) as [number, number, number] }))}
        />
      </div></>}
      <div>
      <Label htmlFor={id} className="text-sm font-semibold mb-1">
    Coopertition Bonus
  </Label>
        <Checkbox className="ml-2 align-middle" id={id} onCheckedChange={(v) => setMatchData((md) => ({ ...md, coopertitionBonus: v.valueOf() as boolean}))} checked={matchData.coopertitionBonus} />
      </div>
    </CardContent>
  </Card>
}