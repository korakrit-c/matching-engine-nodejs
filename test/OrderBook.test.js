import { expect } from 'chai';
import { OrderBook } from "../OrderBook.js";
import { MatchingEngine } from '../MatchingEngine.js'

describe('OrderBook', () => {
    it('Import OrderBook', () => {
        const orderBook = new OrderBook();
    });

    it('OrderBook BuySide is empty', () => {
        const orderBook = new OrderBook();
        expect(orderBook.buy).to.empty;
    });

    it('OrderBook SellSide is empty', () => {
        const orderBook = new OrderBook();
        expect(orderBook.sell).to.empty;
    });
});

describe('MatchingEngine', () => {
    it('Import MatchingEngine', () => {
        expect(MatchingEngine).not.undefined;
    });

    it('Add Order to BuySide', () => {
        let [command, price, amount] = ["buy", 90.394, 3.445]
        const matchEngine = new MatchingEngine();
        matchEngine.addOrder(command, price, amount);

        expect(matchEngine.orderBooks.sell).to.empty;
        expect(matchEngine.orderBooks.buy).not.empty;
        expect(matchEngine.orderBooks.buy[price]).not.empty;
        expect(matchEngine.orderBooks.buy[price][0]).to.equal(amount);
    });

    it('Add Order to SellSide', () => {
        let [command, price, amount] = ["sell", 100.003, 2.4]
        const matchEngine = new MatchingEngine();
        matchEngine.addOrder(command, price, amount);

        expect(matchEngine.orderBooks.buy).to.empty;
        expect(matchEngine.orderBooks.sell).not.empty;
        expect(matchEngine.orderBooks.sell[price]).not.empty;
        expect(matchEngine.orderBooks.sell[price][0]).to.equal(amount);
    });
});
