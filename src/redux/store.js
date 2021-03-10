import { createStore } from 'redux';

const initialState = {
    loading: false,
    name: 'Trisha',
    address: 'Kelapa Gading'
}

const reducer = (state = initialState, action) => {
    //use action to control loading
    if(action.type === 'SET_LOADING'){
        return {
            ...state,
            loading: action.value,
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;