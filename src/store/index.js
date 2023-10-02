import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";
const initialcounterState={counter:0,toggle:false};
const initialAuthState={isAuthenticated:false};
const counterSlice=createSlice({
  name:'counter_states',
  initialState:initialcounterState, //same as initialState:initialState.
  reducers:{
     Incrementhandler(state){
      state.counter++;
     },
     Decrementhandler(state){state.counter--;},
     Dynamichandler(state,action){
     state.counter = state.counter + action.payload;
     },
     togglehandler(state){
     state.toggle = !state.toggle;
     }
  }
})
const AuthSlice=createSlice({
  name: 'Auth',
  initialState:initialAuthState,
  reducers:{
    loginhandler(state){
      // state.isAuthenticated = true;
      state.isAuthenticated = true;
    },
    logouthandler(state){
      state.isAuthenticated = false;
    }
  }
})

// const counterReducer = (state = { counter: 0 ,toggle:false}, action) => {
//   if (action.type === "Increment") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle
//     };
//   }
//   if (action.type === "Decrement") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle
//     };
//   }
//   if (action.type === "Dynamic") {
//     return {
//       counter: state.counter + action.amount,
//       toggle: state.toggle
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle
//     };
//   }
//  return state
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {counterreducer:counterSlice.reducer,authreducer:AuthSlice.reducer}
})
export const Authactions = AuthSlice.actions;
export const counteractions = counterSlice.actions;
export default store;
