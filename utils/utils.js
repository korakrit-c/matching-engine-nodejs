import BigNumber from "bignumber.js";

export const isEmptyObject = (obj) => {
    return !Object.keys(obj).length;
}

export const getMax = (obj) => {
    const arr = Object.keys(obj);
    return BigNumber.max.apply(null, arr).toNumber() || null;
}

export const getMin = (obj) => {
    const arr = Object.keys(obj);
    return BigNumber.min.apply(null, arr).toNumber() || null;
}

export const toNumber = (x) => {
    return BigNumber(x).toNumber();
}

export const sum = (arr) => {
    return BigNumber.sum.apply(null, arr).toNumber();
}

export const minus = (x, y) => {
    return BigNumber(x).minus(y).toNumber();
}

export const abs = (x) => {
    return BigNumber(x).abs().toNumber();
}