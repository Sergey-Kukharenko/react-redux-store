export const getPhoneById = (state, id) => state.phones[id];

export const getPhones = state => state.phonesPage.ids.map(id => getPhoneById(state, id));

export const getRenderedPhonesLength = state => state.phonesPage.ids.length;