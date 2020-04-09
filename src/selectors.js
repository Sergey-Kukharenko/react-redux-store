import {
    arrayIdenticalValues,
    arrayLength,
    arrayObjectsByKeys,
    compose,
    sumValuesArray,
    unique
} from "./components/utils";
import * as R from "ramda";

export const getPhoneById = (state, id) => state.phones[id];

export const getActiveCategoryId = ownProps => ownProps.match.params.id;

const filter = (state, key) => array => array.filter(item => item[key].toLocaleLowerCase().indexOf(state.phonesPage.search.toLocaleLowerCase()) > -1);

export const getRenderedPhonesLength = state => state.phonesPage.ids.length;

export const getTotalBasketCount = state => state.basket.length;

export const arrayOfValues = state => arrIds => arrIds.map(id => getPhoneById(state, id));

export const getTotalBasketPrice = state =>
    compose(
        sumValuesArray,
        arrayObjectsByKeys('price'),
        arrayOfValues(state))
    (state.basket);

export const getCategories = state => R.values(state.categories) // получаем массив объектов categories

const always = val => () => val;

const when = (fn, fn2) => array => fn() ? fn2(array) : array;

const filterByKey = (key, category) => array => array.filter(item => item[key] === category);

const addFieldToObj = (obj, field, value) => Object.assign(obj, {[field]: +value});

export const getPhones = (state, ownProps) => compose(
    filter(state, 'name'),
    when(always(getActiveCategoryId(ownProps)), filterByKey('categoryId', getActiveCategoryId(ownProps))),
    arrayOfValues(state)
)(state.phonesPage.ids);

export const getBasketPhonesWithCount = state => {

    const phoneCount = id => R.compose(
        arrayLength,
        arrayIdenticalValues(id)
    )(state.basket);

    const phoneWithCount = phone => addFieldToObj(phone, 'count', phoneCount(phone.id));

    const uniqueIds = unique(state.basket);

    const phones = R.compose(
        R.map(phoneWithCount),
        arrayOfValues(state)
    )(uniqueIds);

    return phones
};