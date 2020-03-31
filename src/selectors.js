import {arrayObjectsByKeys, compose, sumValuesArray} from "./components/utils";
import * as R from "ramda";

export const getPhoneById = (state, id) => state.phones[id];

export const getActiveCategoryId = ownProps => ownProps.match.params.id;

const filter = (state, key) => array => array.filter(item => item[key].toLocaleLowerCase().indexOf(state.phonesPage.search.toLocaleLowerCase()) > -1);


// export const getPhones = state => compose(
//     filter(state, 'name'),
//     arrayOfValues(state)
// )(state.phonesPage.ids);

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

const filterCategory = (key, category) => array => array.filter(item => item[key] === category);

export const getPhones = (state, ownProps) => compose(
    filter(state, 'name'),
    when(always(getActiveCategoryId(ownProps)), filterCategory('categoryId', getActiveCategoryId(ownProps))),
    arrayOfValues(state)
)(state.phonesPage.ids);

// начать от сюда
export const getBasketPhonesWithCount = state => {

    const phoneCount = id => R.compose(
        R.length, // кол-во определённого телефона
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket) // state.basket - это Ids с повторениями, которые храняться в корзине

    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone) // => в phone создаём поле count = phoneCount

    const uniqueIds = R.uniq(state.basket) // => список Ids делаем уникальным, т.е без повторений

    const phones = R.compose(
        R.map(phoneWithCount), // => получаем массив объектов уникальных телефонов с полем count = phoneCount
        R.map(id => getPhoneById(state, id)) // => получаем массив объектов уникальных телефонов
    )(uniqueIds)

    return phones
};