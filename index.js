const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//initial state
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//action functions
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        quantity: 1
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        quantity: qty
    }
}

//initial state
const initialCakeState = {
    numofCakes: 10,
}

const initialIceCreamState = {
    numofIceCreams: 20,
}

//reducers
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numofCakes: state.numofCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numofCakes: state.numofCakes + action.quantity
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numofIceCreams: state.numofIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numofIceCreams: state.numofIceCreams + action.quantity
            }
        default:
            return state
    }
}

//combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//create store
const store = createStore(rootReducer);

//test the store
console.log(store.getState());
store.dispatch(orderCake());
console.log(store.getState());
store.dispatch(orderIceCream());
console.log(store.getState());
store.dispatch(restockCake(5));
console.log(store.getState());
store.dispatch(restockIceCream(10));
console.log(store.getState());