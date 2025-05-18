import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MatchData {
  barriersRemoved: number;
  biodiversityUnitsAdded: number;
}

export interface SimpleInputProps<T> {
  onChange?: (v: T) => unknown;
  value?: T | undefined;
  id?: string;
}
