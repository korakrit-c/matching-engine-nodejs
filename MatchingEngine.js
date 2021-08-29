import { OrderBook } from "./OrderBook.js";
import { isEmptyObject, getMax, getMin, toNumber, sum, minus, abs } from "./utils/utils.js";

export class MatchingEngine {
    orderBooks = {};

    addOrder(command, price, amount) {
        let orderBooks = this.orderBooks;
        if (isEmptyObject(orderBooks)) {
            orderBooks = new OrderBook();
        }

        // check command side
        if (command === "buy") {
            // get best price
            let bestPrice = getMin(orderBooks.sell)
            while (bestPrice !== null && amount > 0 && price >= bestPrice) {
                let amountAtBestPrice = sum(orderBooks.sell[bestPrice]);
                let amountAtPrice = orderBooks.sell[bestPrice][0];
                if (abs(minus(amountAtBestPrice, amount)) > 0) {
                    // trade order
                    orderBooks.sell[bestPrice][0] = minus(amountAtPrice, amount)
                    amount = minus(amount, amountAtPrice);
                }
                // delete order, if amount <= 0
                if (orderBooks.sell[bestPrice][0] <= 0) {
                    orderBooks.sell[bestPrice].shift();
                }
                // delete price, if price has no order
                if (orderBooks.sell[bestPrice].length === 0) {
                    delete orderBooks.sell[bestPrice];
                }
                bestPrice = getMin(orderBooks.sell);
            }
            if (amount > 0) {
                if (orderBooks.buy[price] == null) {
                    orderBooks.buy[price] = [amount];
                } else {
                    orderBooks.buy[price].push(amount);
                }
            }
        } else if (command === "sell") {
            let bestPrice = getMax(orderBooks.buy)
            while (bestPrice !== null && amount > 0 && price <= bestPrice) {
                let amountAtBestPrice = sum(orderBooks.buy[bestPrice]);
                let amountAtPrice = orderBooks.buy[bestPrice][0];
                if (abs(minus(amountAtBestPrice, amount)) > 0) {
                    // trade order
                    orderBooks.buy[bestPrice][0] = minus(amountAtPrice, amount)
                    amount = minus(amount, amountAtPrice);
                }
                // delete order, if amount <= 0
                if (orderBooks.buy[bestPrice][0] <= 0) {
                    orderBooks.buy[bestPrice].shift();
                }
                // delete price, if price has no order
                if (orderBooks.buy[bestPrice].length === 0) {
                    delete orderBooks.buy[bestPrice];
                }
                bestPrice = getMax(orderBooks.buy);
            }
            if (amount > 0) {
                if (orderBooks.sell[price] == null) {
                    orderBooks.sell[price] = [amount];
                } else {
                    orderBooks.sell[price].push(amount);
                }
            }
        }
        this.orderBooks = orderBooks;
    }

    printOrder() {
        let orderVolume = new OrderBook();
        let tempObjectArray = {};
        let tempArray = [];

        // buy side
        tempObjectArray = Object.entries(this.orderBooks.buy).sort((a, b) => a[0]-b[0]).reverse();
        tempObjectArray.forEach(([price, volume]) => {
            volume = sum(volume);
            price = toNumber(price);
            tempArray.push({price, volume});
        })
        orderVolume.buy = tempArray;
        tempArray = [];

        // sell side
        tempObjectArray = Object.entries(this.orderBooks.sell).sort((a, b) => a[0]-b[0]);
        tempObjectArray.forEach(([price, volume]) => {
            volume = sum(volume);
            price = toNumber(price);
            tempArray.push({price, volume});
        })
        orderVolume.sell = tempArray;
        tempArray = [];

        return orderVolume;
    }

}
