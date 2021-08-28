import { OrderBook } from "./OrderBook.js";
import { isEmptyObject, getMax, getMin, sum, minus, abs} from "./utils/utils.js";

export class MatchingEngine {
    orderBooks = {};

    addOrder(command, price, amount) {
        return false;
    }

    printOrder() {
        return this.orderBooks;
    }

}
