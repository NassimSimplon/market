
import { configureStore } from '@reduxjs/toolkit';
//Reducers
import { translationReducer } from './Translations/Slicer';
import { coinsReducer } from './Coins/Slicer';

 

const store = configureStore({
  reducer: {
    translation:translationReducer,
    coins:coinsReducer
  } 
});


export default store;