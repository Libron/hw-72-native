import {API} from "../API";
import {
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS,
    FETCH_DISHES_FAILURE,
    ADD_DISH_TO_ODER,
    REMOVE_DISH_FROM_ODER,
    TOGGLE_MODAL,
    SAVE_ORDER_REQUEST,
    SAVE_ORDER_SUCCESS,
    SAVE_ORDER_FAILURE,
} from "./actionTypes";

export const fetchDishesRequest = () => {
    return {type: FETCH_DISHES_REQUEST};
};
export const fetchDishesSuccess = dishes => {
    return {type: FETCH_DISHES_SUCCESS, dishes};
};
export const fetchDishesFailure = error => {
    return {type: FETCH_DISHES_FAILURE, error}
};

export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchDishesRequest());
        API.getDishes().then(response => {
            dispatch(fetchDishesSuccess(response.data));
        }, error => {
            console.log(error);
            dispatch(fetchDishesFailure(error));
        });
    }
};

export const addDishToOrder = dishId => {
    return {type: ADD_DISH_TO_ODER, dishId}
};

export const removeDishFromOrder = dishId => {
    return {type: REMOVE_DISH_FROM_ODER, dishId}
};

export const toggleModal = () => {
    return {type: TOGGLE_MODAL}
};

export const saveOrderRequest = () => {
    return {type: SAVE_ORDER_REQUEST};
};
export const saveOrderSuccess = () => {
    return {type: SAVE_ORDER_SUCCESS};
};
export const saveOrderFailure = error => {
    return {type: SAVE_ORDER_FAILURE, error}
};

export const saveOrder = (order) => {
    return (dispatch) => {
        dispatch(saveOrderRequest());
        console.log('--------------SAVE REQUEST:', order);

        API.saveOrder({"-LZk_tz6odif2qbJcs8p":2}).then(() => {
            console.log('--------------SUCCESS', order);
            dispatch(saveOrderSuccess());
            alert('Заказ принят', order.type);
        }, error => {
            dispatch(saveOrderFailure(error));
        });
    }
};

