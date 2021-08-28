import { expect } from 'chai';
import * as utils from "../utils/utils.js";

describe('Utils', () => {
    it('Object is empty', () => {
        let obj = {};
        expect(utils.isEmptyObject(obj)).to.true;
    });

    it('Sum (1, 2, 3) should return 6', () => {
        let arr = [1, 2, 3];
        expect(utils.sum(arr)).to.equal(6);
    });

    it('Minus (1, 2) should return -1', () => {
        expect(utils.minus(1, 2)).to.equal(-1);
    });

    it('Minus (0.3, 0.1) should return 0.2', () => {
        expect(utils.minus(0.3, 0.1)).to.equal(0.2);
    });

    it('Absolute (-0.99) should return 0.99', () => {
        expect(utils.abs(-0.99)).to.equal(0.99);
    });
});
