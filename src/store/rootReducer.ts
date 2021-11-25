import { combineReducers } from '@reduxjs/toolkit';
import { reducer as homeReducer } from '../features/Home';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
