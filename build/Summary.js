"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTrget) {
        this.analyzer = analyzer;
        this.outputTrget = outputTrget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTrget.print(output);
    }
}
exports.Summary = Summary;
