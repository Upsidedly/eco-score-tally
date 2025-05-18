import { clsx, type ClassValue } from "clsx";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { MatchData } from "./points";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export interface SimpleInputProps<T> {
  onChange?: (v: T) => unknown;
  value?: T | undefined;
  id?: string;
}

export interface MatchDataProps {
  matchData: MatchData;
  setMatchData: Dispatch<SetStateAction<MatchData>>;
}
