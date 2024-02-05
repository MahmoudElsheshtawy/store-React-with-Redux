import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

 export const fetchProduct= createAsyncThunk('productSlice/fetchProduct' , async ()=>{

   const response = await fetch("https://fakestoreapi.com/products")
   const data = await response.json()
   console.log(data);
   return data
     
 })

export const productSlice = createSlice({
  name: 'productSlice',
  initialState:[],
  reducers: {},
  extraReducers: (bulider )=>{
    bulider.addCase(fetchProduct.fulfilled,(state ,action)=>{
        return action.payload //to data
    })
  }
})


export const {} = productSlice.actions

export default productSlice.reducer