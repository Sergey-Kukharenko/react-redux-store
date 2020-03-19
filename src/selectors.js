import {compose, arrayObjectsByKeys, sumValuesArray} from "./components/utils";

export const getPhoneById = (state, id) => state.phones[id];

export const getPhones = state => state.phonesPage.ids.map(id => getPhoneById(state, id));

export const getRenderedPhonesLength = state => state.phonesPage.ids.length;

export const getTotalBasketCount = state => state.basket.length;

export const arrayOfValues = state => arrIds => arrIds.map(id => getPhoneById(state, id));

export const getTotalBasketPrice = state =>
    compose(
        sumValuesArray,
        arrayObjectsByKeys('price'),
        arrayOfValues(state))
    (state.basket);