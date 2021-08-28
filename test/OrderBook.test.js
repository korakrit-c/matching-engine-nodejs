import { expect } from 'chai';
import * as fs from 'fs';
import { sum } from "../utils/utils.js";
import { OrderBook } from "../OrderBook.js";
import { MatchingEngine } from "../MatchingEngine.js";

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

    it('[Data Set #1] Validate the volume of price should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/1/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/1/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // expected at buy side
        for (let orderBuy of outputJson.buy) {
            let volumeFromFile = orderBuy.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.buy[orderBuy.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
        // expected at sell side
        for (let orderSell of outputJson.sell) {
            let volumeFromFile = orderSell.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.sell[orderSell.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
    });

    it('[Data Set #2] Validate the volume of price should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/2/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/2/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // expected at buy side
        for (let orderBuy of outputJson.buy) {
            let volumeFromFile = orderBuy.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.buy[orderBuy.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
        // expected at sell side
        for (let orderSell of outputJson.sell) {
            let volumeFromFile = orderSell.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.sell[orderSell.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
    });

    it('[Data Set #3] Validate the volume of price should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/3/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/3/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // expected at buy side
        for (let orderBuy of outputJson.buy) {
            let volumeFromFile = orderBuy.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.buy[orderBuy.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
        // expected at sell side
        for (let orderSell of outputJson.sell) {
            let volumeFromFile = orderSell.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.sell[orderSell.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
    });

    it('[Data Set #4] Validate the volume of price should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/4/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/4/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // expected at buy side
        for (let orderBuy of outputJson.buy) {
            let volumeFromFile = orderBuy.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.buy[orderBuy.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
        // expected at sell side
        for (let orderSell of outputJson.sell) {
            let volumeFromFile = orderSell.volume;
            let volumeFromMatchEngine = sum(matchEngine.orderBooks.sell[orderSell.price]);
            expect(volumeFromMatchEngine).to.equal(volumeFromFile);
        }
    });

    it('[Data Set #1] Validate the JsonObject from a function should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/1/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/1/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // printOrder
        let ObjectJson = matchEngine.printOrder();
        
        // expected JsonObject to equal output.json
        expect(JSON.stringify(ObjectJson)).to.equal(JSON.stringify(outputJson));
    });

    it('[Data Set #2] Validate the JsonObject from a function should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/2/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/2/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // printOrder
        let ObjectJson = matchEngine.printOrder();
        
        // expected JsonObject to equal output.json
        expect(JSON.stringify(ObjectJson)).to.equal(JSON.stringify(outputJson));
    });

    it('[Data Set #3] Validate the JsonObject from a function should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/3/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/3/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // printOrder
        let ObjectJson = matchEngine.printOrder();
        
        // expected JsonObject to equal output.json
        expect(JSON.stringify(ObjectJson)).to.equal(JSON.stringify(outputJson));
    });

    it('[Data Set #4] Validate the JsonObject from a function should be equal as output.json', () => {
        const matchEngine = new MatchingEngine();
        // read file from input.json
        let rawDataInput = fs.readFileSync('./data/4/input.json', 'utf8', (err, rawDataInput) => {});
        let limitOrder = JSON.parse(rawDataInput);

        // add order and then calculate with matching engine
        for (let order of limitOrder.orders) {
            matchEngine.addOrder(order.command, order.price, order.amount);
        }

        // read file from output.json
        let rawDataOutput = fs.readFileSync('./data/4/output.json', 'utf8', (err, rawDataOutput) => {});
        let outputJson = JSON.parse(rawDataOutput);

        // printOrder
        let ObjectJson = matchEngine.printOrder();
        
        // expected JsonObject to equal output.json
        expect(JSON.stringify(ObjectJson)).to.equal(JSON.stringify(outputJson));
    });
});
