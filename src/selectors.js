import {arrayObjectsByKeys, compose, sumValuesArray} from "./components/utils";

export const getPhoneById = (state, id) => state.phones[id];

// 00: 11: 51


const filter = (state, key) => array => array.filter(item => item[key].toLocaleLowerCase().indexOf(state.phonesPage.search.toLocaleLowerCase()) > -1);

export const getPhones = state => compose(
    filter(state, 'name'),
    arrayOfValues(state)
)(state.phonesPage.ids);

export const getRenderedPhonesLength = state => state.phonesPage.ids.length;

export const getTotalBasketCount = state => state.basket.length;

export const arrayOfValues = state => arrIds => arrIds.map(id => getPhoneById(state, id));

export const getTotalBasketPrice = state =>
    compose(
        sumValuesArray,
        arrayObjectsByKeys('price'),
        arrayOfValues(state))
    (state.basket);