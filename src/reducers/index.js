import { combineReducers } from 'redux';
import { addressReducer } from './address';
import { authReducer } from './auth';
import { cartReducer } from './carts';
import { userReducer } from './user';

const rootReducer = combineReducers({
  authenticate: authReducer,
  user: userReducer,
  carts: cartReducer,
  address: addressReducer
});

export default rootReducer;
