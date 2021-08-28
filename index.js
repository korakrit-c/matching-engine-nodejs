import { MatchingEngine } from './MatchingEngine.js'

let orderBook = {
    "orders": [
        { "command": "sell", "price": 100.003, "amount": 2.4 },
        { "command": "buy", "price": 90.394, "amount": 3.445 },
        { "command": "buy", "price": 89.394, "amount": 4.3 },
        { "command": "sell", "price": 100.013, "amount": 2.2 },
        { "command": "buy", "price": 90.15, "amount": 1.305 },
        { "command": "buy", "price": 90.394, "amount": 1.0 },
        { "command": "sell", "price": 90.394, "amount": 2.2 },
        { "command": "sell", "price": 90.15, "amount": 3.4 },
        { "command": "buy", "price": 91.33, "amount": 1.8 },
        { "command": "buy", "price": 100.01, "amount": 4.0 },
        { "command": "sell", "price": 100.15, "amount": 3.8 }
    ]
}

const matchEngine = new MatchingEngine();
//matchEngine.addOrder("sell", 100.003, 2.4);

for (let order of orderBook.orders) {
    matchEngine.addOrder(order.command, order.price, order.amount);
}

console.log(JSON.stringify(matchEngine.printOrder()));
