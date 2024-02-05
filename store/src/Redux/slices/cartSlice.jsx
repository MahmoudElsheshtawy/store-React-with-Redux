import { createSlice } from '@reduxjs/toolkit'



export const cartSlise = createSlice({
  name: 'cartSlise',
  initialState:[],
  reducers: {
    addToCart: (state ,action) => {
   
   const findProduct = state.find((item)=>item.id === action.payload.id);
   if(findProduct){
findProduct.quantity +=1;
   }else{
    const productClone={...action.payload ,quantity:1}
     state.push(productClone)
   }
   
 




    },
    DletFromCart: (state ,action) => {
    return state.filter((item)=> item.id !== action.payload.id)
    },
    clear: (state, action) => {
       return []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, DletFromCart, clear } = cartSlise.actions

export default cartSlise.reducer