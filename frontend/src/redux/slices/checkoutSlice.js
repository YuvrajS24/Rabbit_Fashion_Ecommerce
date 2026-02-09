import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


//Async Thunk to create a checkout 
export const createAsyncThunk = createAsyncThunk("checkout/createCheckout", async (checkoutData, {rejectWithValue})=> {

try {

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout`, checkoutData, {

          headers:{
             
                  Authorization: `Bearer ${localStorage.getItem("userToken")}`
          },

    })

    return response.data;
    
} catch (error) {

    return rejectWithValue(error.response.data);

}


})


const checkoutSlice = createSlice({

name:'checkout',

initialState: {

    checkout : null,
    loading : false,
    error : null,

},

reducers:{},

extraReducers: (builder) => {

    builder.addCase(createAsyncThunk.pending, (state)=>{
        
        state.loading = true;
        state.error = null;
    })

    builder.addCase(createAsyncThunk.fulfilled, (state, action)=>{
        
        state.loading = false;
        state.checkout = action.payload;

    })

    builder.addCase(createAsyncThunk.rejected, (state, action)=>{
        
        state.loading = false;
        state.error = action.payload.message;

    })


}

})


export default checkoutSlice.reducer;


