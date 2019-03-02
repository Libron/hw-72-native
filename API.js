import axios from "./axios-instance";

export const API = {
    getDishes: () => axios.get('dishes.json'),
    saveOrder: (order) => axios.post('orders.json', order),
};