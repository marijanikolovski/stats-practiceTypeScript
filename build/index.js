"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// Crete an object that satisfies the 'DataReade'
// interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReade and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
