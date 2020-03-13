import phones from './mockPhones'
import {findObjBy} from '../components/utils';

export const fetchPhones = async () => {
    // return await superagent.get('/api') // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(phones);
        // reject('error')
    })
};

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