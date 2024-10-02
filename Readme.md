//trying to learn react
//there is a store in redux
//there is an action in redux which describes what happened
//ties store and action and removes the element from the store
//there are three things in redux 
//first :we are taking an example of cake shop 
//here the store --->cake shop--->holds the state of the application
//action --->taken is what happended i.e;cake ordered
//reducer --->what is does is that is connects the store with action and modifies the store




//global state of the application is stored as the object in the redux store
{
    number of cakes:10
}
//dispatch an action that we are not directly modifying the state we use an object here i.e; that describes what happened 
{
    type:'cake_ordered'
}
//should write reducers which contain state and action
//console.log(`from index.js file`)
const reducer=(state=initialstate,action)=>{
    //we do something here
    return {}
    //object is returned
}


//store has some tasks
//getState()
//dispatch(action)
//subscribe(listener)
//now unusbscribe
//we create the store and store it in the variable which is a function
//createStore is function which takes reducer as an argument





//now we generally use usestate useeffect and react hooks to render ui
//usecontext was used to reduce prop drilling
//we made the store where state is maintained
//suppose we want to create counter app
//data is stored in store and updated inside the store
//onclick -->handleClick -->action dispatch --->store-->reducer-->logic-->state-->ui change
//action  --->{
    object type and payload
}
//slice->states and reducer functions together
//reducers->functions
