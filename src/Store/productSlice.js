import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        status:'idle'
    },
    reducers:{
    //    fetchProducts:(state,action)=>{
    //         state.data = action.payload;
    //    },
      
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.status = "idle"
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status = "error"
        })
        
   }

})
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async()=>{
    const data = await fetch('https://api.escuelajs.co/api/v1/products')
        const response = await data.json();
        return response
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const data = await fetch('https://api.escuelajs.co/api/v1/products')
//         const response = await data.json();
//         dispatch(fetchProducts(response));
//     }
// }