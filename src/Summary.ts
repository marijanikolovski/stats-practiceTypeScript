import { report } from "process";
import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: String): void
}

export class Summary {
  constructor(
    public analyzer: Analyzer, 
    public outputTrget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]):void {
    const output = this.analyzer.run(matches);
    this.outputTrget.print(output);
  }
}