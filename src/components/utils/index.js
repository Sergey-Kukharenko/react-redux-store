export const truncate = (str, symbols) => str.length > 10 ? str.substring(0, symbols) + "..." : str;
// конвертируем массив объектов в объект объектов с ключами 'id' // 1: {}, 2: {}, ...
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