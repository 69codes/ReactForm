import {
    CHANGE_CATEGORY, CHANGE_DATE, CHANGE_ORDER,
    CHANGE_SEARCH, FETCH_TEMPLATE_ERR,
    FETCH_TEMPLATE_ITEM, FETCH_TEMPLATE_PASS, 
    FETCH_TEMPLATE_REQUEST
} from './Types';

const initialstate = {
    category: 'all',
    data: [],
    date: 'default',
    error: '',
    loading: false,
    order: 'default',
    search: '',
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return{
                ...state,
                category:action.payload,
                order: "default",
                date: "default",
                search: "",
            };
        case CHANGE_DATE:
            return{
                ...state,
                date:action.payload
            };
        case CHANGE_ORDER:
            return{
                ...state,
                order:action.payload
            };
        case CHANGE_SEARCH:
            return{
                ...state,
                search: action.payload
            };
        case FETCH_TEMPLATE_ERR:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_TEMPLATE_ITEM:
            return{
                ...state,
                data:action.payload
            };
        case FETCH_TEMPLATE_PASS:
            return{
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_TEMPLATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default reducer;