import {
    ADD_DISH_TO_ODER, REMOVE_DISH_FROM_ODER,
    FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS,
    SAVE_ORDER_FAILURE, SAVE_ORDER_REQUEST, SAVE_ORDER_SUCCESS, TOGGLE_MODAL
} from "./actionTypes";

const initialState = {
  dishes: null,
    loading: false,
    error: null,
    order: {},
    isActiveModal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true};
        case FETCH_DISHES_SUCCESS:
            return {...state, loading: false, dishes: action.dishes};
        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.error};
        case SAVE_ORDER_REQUEST:
            return {...state, loading: true};
        case SAVE_ORDER_SUCCESS:
            return {...state, loading: false, order: {}, isActiveModal: false};
        case SAVE_ORDER_FAILURE:
            return {...state, loading: false, error: action.error, isActiveModal: false};

        case ADD_DISH_TO_ODER:
            const order = {...state.order};
            if (!(action.dishId in state.order)) {
                order[action.dishId] = 1;
            } else {
                order[action.dishId]++;
            }
            return {...state, order};

        case REMOVE_DISH_FROM_ODER:
            if (state.order[action.dishId] > 1) {
                return {
                    ...state,
                    order: {
                        ...state.order,
                        [action.dishId]: state.order[action.dishId] - 1
                    }
                };
            } else if (state.order[action.dishId] === 1) {
                const order = {...state.order};
                delete order[action.dishId];

                if (Object.keys(order).length === 0) {
                    return {...state, order, isActiveModal: false};
                } else {
                    return {...state, order};
                }
            } else {
                return state;
            }

        case TOGGLE_MODAL:
            return {...state, isActiveModal: !state.isActiveModal};

        default:
            return state;
    }
};

export default reducer;