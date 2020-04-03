export const truncate = (str, symbols) => str.length > 10 ? str.substring(0, symbols) + "..." : str;

export const convert = (array, key) => array.reduce((result, item,) => {
    result[item[key]] = item;
    return result
}, {});

export const merge = (state, newState) => {
    return {...state, ...newState}
};

export const concat = (a, b) => a.concat(b);

export const arrayOfIdsValues = (array, key) => array.map(item => item[key]);

export const findObjBy = (id, array) => array.filter(item => item.id === id)[0];

export const createObjWithKey = (key, values) => {
    return {[key]: values};
};

export const newObj = array => obj => array.reduce((acc, elem) => {
    acc[elem] = obj[elem];
    return acc;
}, {});

export const sorObj = obj => Object.entries(obj);

export const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

export const mergeIdToArr = (array, id) => [...array, id];

export const arrayObjectsByKeys = key => array => array.map(item => item[key]);

export const sumValuesArray = arr => arr.reduce((a, b) => a + b, 0);

export const unique = (arr) => {
    const result = [];
    arr.map(str => {
        return (!result.includes(str)) && result.push(str);
    });
    return result;
};

export const arrayIdenticalValues = id => array => array.filter(item => item === id);

export const arrayLength = array => array.length;

export const findValInKeyOfObj = (object, key, value) => object[key] === value;

export const isNull = x => x == null;