import phones from './mockPhones'

export const fetchPhones = async () => {
    // return await superagent.get('/api') // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(phones)
        // reject('error')
    })
}

export const loadMorePhones = async ({offset}) => {
    // fetch.get(`http://google.com/api/phones?offset=${offset}`) // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(phones)
    })
}