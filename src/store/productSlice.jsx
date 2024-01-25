import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({  //freeze mtlb immute ho gya na change na dlt read only  
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
})

const productSlice = createSlice({
    name : 'product',
    initialState : {
       data : [],
       status : STATUS.IDLE  
    },
    reducers : {
        // setProducts(state,action){
        //     // do not call async call coz
        //     // reducer pure fn hote
        // // const res = await axios.get('https://fakestoreapi.com/products');
        //       state.data = action.payload
        // },
        // setStatus(state,action){
        //     // action.payload redux ki state ko channge krne ke liye hota hai
        //    state.status = action.payload
        // }
    },
    extraReducers : (builder)=>{
          //create async thunk use kiya isliye 
        //   teen action generate krta same as promise 
           builder.addCase(fetchProd.pending, (state,action)=>{
                    state.status = STATUS.LOADING
           })
           .addCase(fetchProd.fulfilled, (state,action)=>{
             state.data = action.payload
             state.status = STATUS.IDLE
           })
           .addCase(fetchProd.rejected, (state,action)=>{
             state.status = STATUS.ERROR
           })
    }
})

export const { setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


// create async thunk bana banaya deta
export const fetchProd = createAsyncThunk('product/fetch', async()=>{
         const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
})


// thunk - normal function
// to ye thunk implement hua

// export function fetchProd(){
//     return async function fetchProdThunk(dispatch, getState){
//         try {
//          dispatch(setStatus(STATUS.LOADING))  
//          const res = await fetch('https://fakestoreapi.com/products');
//          const data = await res.json();
//          dispatch(setProducts(data))
//          dispatch(setStatus(STATUS.IDLE))
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }
// }