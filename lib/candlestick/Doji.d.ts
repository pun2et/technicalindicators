import StockData from '../StockData';
import CandlestickFinder from './CandlestickFinder';
export default class Doji extends CandlestickFinder {
    constructor();
    logic(data: StockData): boolean;
}
