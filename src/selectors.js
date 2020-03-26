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

// начать от сюда
export const getPhones = (state, ownProps) => {
    // R.when(() => activeCategoryId, R.filter(activeCategoryId)), // выполнится, если 1 - я функция будет true
    const activeCategoryId = getActiveCategoryId(ownProps)

    const applySearch = item => R.contains(
        // 1 аргумент есть внутри 2 агумента
        // или поиск подстроки в строке
        state.phonesPage.search, // то, что мы ищем
        R.prop('name', item) // or item.name - получаем имя
    )

    const applyCategory = item => R.equals(
        activeCategoryId,
        R.prop('categoryId', item)
    )

    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)), // фильтр по текущей категории, если не выбрана - игнорирует эту строчку
        R.map(id => getPhoneById(state, id)) // получили объект телефонов
    )(state.phonesPage.ids)

    return phones
}