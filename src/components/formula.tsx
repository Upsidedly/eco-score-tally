'use client'

import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css'

export function Formula() {
    return <>
          <span className="text-[0.95rem] lg:text-lg hidden md:block">
        <BlockMath
          math={`
\\text{Match Score} =
\\left\\{
  \\begin{array}{l}
  \\left[
    \\text{Barrier Points} \\\\
    +\\ \\left( \\text{Biodiversity Points} \\times \\text{Distribution Factor} \\right)     \\right] \\\\
    \\times\\ \\text{Protection Multiplier}
  \\end{array}
\\right\\} 
+ \\text{Coopertition Bonus}
`}
        />
      </span>
      <span className="text-[0.7rem] sm:text-sm block md:hidden">
        <BlockMath
          math={`
\\text{Match Score} = \\\\
\\left\\{
  \\begin{array}{l}
    \\left[
    \\text{Barrier Points} \\\\
    +\\ \\left( \\text{Biodiversity Points} \\times \\text{Distribution Factor} \\right) \\right] \\\\
    \\times\\ \\text{Protection Multiplier}
  \\end{array}
\\right\\} \\\\
+\\text{ Coopertition Bonus}
`}
        />
      </span></>
}