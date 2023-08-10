import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    cartItems:[],
    totalPrice:0,
    quantity:0
};

const storeageKey="productincookie";
const storeItems=Cookies.get(storeageKey);

if(storeItems) {
    initialState.cartItems = JSON.parse(storeItems);
    initialState.totalPrice =calculatePrice(initialState.cartItems);
    initialState.quantity =calculateQuantity(initialState.cartItems);
}

function calculatePrice(storeItems){
   return storeItems.reduce((p,n)=> p+n.price,0);
}

function calculateQuantity(storeItems){
    return storeItems.reduce((p,n)=> p+n.quantity,0);
 }

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{

        addToCart:(state,{payload})=>{
            if(state.cartItems.find(item => item.id === payload.id)){
                return state;
            }
            state.cartItems =[...state.cartItems,{...payload,quantity:1}];

           
            state.totalPrice =calculatePrice(state.cartItems);
            state.quantity =calculateQuantity(state.quantity);
            Cookies.set(storeageKey,JSON.stringify(state.cartItems));
        },
        removeFromCart:(state,{payload})=>{
            state.cartItems=state.cartItems.filter(Items=> Items.id !== payload.id);
            state.totalPrice -=payload.price * payload.quantity;
            state.quantity--;
        },
        addQuantity:(state,{payload})=>{
          state.cartItems= state.cartItems.map(items => {
            if(items.id === payload.id){
              return {...items,quantity:items.quantity+=1}
            } 
            else{
                return items;
            }
           }
          )
          state.quantity++;
          state.totalPrice +=payload.price;
        },
        subQuantity:(state,{payload})=>{
            state.cartItems= state.cartItems.map(items => {

                if(items.id === payload.id){
                    return {...items,quantity:items.quantity-=1}
                  } 
                  else{
                      return items;
                  }
                  }
              )
              state.quantity--;
              state.totalPrice -=payload.price;
            
        }

    }
})

export const {addToCart,removeFromCart,addQuantity,subQuantity}=cartSlice.actions;
export default cartSlice.reducer;