import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
   name : 'cart',
   initialState,
    reducers : {
        // reducer just normal fun jo action ko perform krte hai
        add(state, action){
            // retutn [...state, action.payload] //phle kuch is trh hota tha par ab
            // createSlice allow krta hai direct immute krne ko, vo ye kaam sambhal leta hai
            // to ye redux toolkit ka ek advantages hai
            state.push(action.payload)
        },
        remove(state,action){
            console.log(state);
            console.log(action.payload);
            return state.filter(item=> item.id !== action.payload )
            console.log('new state', state);
        }
    }
})

export const {add, remove} = cartSlice.actions

export default cartSlice.reducer;
