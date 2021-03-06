import { createStore ,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducer/chats'

export default function configureStore() {
  const middlewares=[thunkMiddleware];
  const store = createStore(combineReducers({chats:chatReducer}), applyMiddleware(...middlewares));

  return store;
}