const redux=require("redux")
const produce=require("immer").produce
const createStore=redux.createStore
//first we make the typse of actions
const STREET_UPDATED="STREET_UPDATED"
const initialstate={
    name:"kathmandu",
    address:{
        street:"kathmandu",
        city:"kathmandu",
        country:"nepal"
    }
}
function updatestreet(street){
    return {
        type:STREET_UPDATED,
        payload:street
    }
}
const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state,draft=>{
                draft.address.street=action.payload
            })
        default:
            return state
    }
}
const store=createStore(reducer)

console.log(store.getState())
const unsubscribe=store.subscribe(()=>console.log("update",store.getState()))
store.dispatch(updatestreet("lalitpur"))
console.log(store.getState())
unsubscribe()
