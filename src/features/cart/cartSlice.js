import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';


const url = 'https://fakestoreapi.com/products';


const initialState = {
    cart: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}


export const getCartItems = createAsyncThunk('cart/getCartItems', 
() => {
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log(error))
}
)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cart = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemId)
        },
        increase: (state, action) =>{
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1}
                }
                return item
            })
        },
        decrease: (state, action) =>{
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1}
                }
                return item
            })
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        }
    }

});



export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer;