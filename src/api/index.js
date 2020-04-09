import {findObjBy} from '../components/utils';
import phones from './mockPhones';
import categories from './mockCategories';
import request from "superagent";

export const fetchPhones = async () => {

    const {body} = await request.get(
        'http://www.mocky.io/v2/5e58b0562f0000be0c962088'
    )
    return body.phones
    // return await superagent.get('/api') // => в реальном приложении
    // return new Promise((resolve, reject) => {
    //   resolve(phones)
    //   // reject('error')
    // })
}

export const loadMorePhones = async ({offset}) => {
    // fetch.get(`http://google.com/api/phones?offset=${offset}`) // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(phones);
    })
};

export const fetchPhoneById = async (id) => {
    return new Promise(resolve => {
        const phone = findObjBy(id, phones);
        resolve(phone);
    })
};

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories);
    })
};