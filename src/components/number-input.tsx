"use client";

import { SimpleInputProps } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useId } from "react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

interface NumberInputProps extends SimpleInputProps<number> {
  label: string;
  minValue?: number,
  maxValue?: number
} 

export default function NumberInput({ onChange, value, label, minValue, maxValue }: NumberInputProps) {
  const id = useId();
  return (
    <NumberField defaultValue={0} maxValue={maxValue} minValue={minValue ?? 0} onChange={onChange} value={value} id={id}>
      <Label htmlFor={id} className="text-sm font-semibold mb-1">
        {label}
      </Label>
      <Group
        id={id}
        className="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]"
      >
        <Button
          slot="decrement"
          className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <MinusIcon size={16} aria-hidden="true" />
        </Button>
        <Input className="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums" />
        <Button
          slot="increment"
          className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <PlusIcon size={16} aria-hidden="true" />
        </Button>
      </Group>
    </NumberField>
  );
}
