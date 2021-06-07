import {createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';


// const store= createStore(
//     reducers,
//     {},
//     compose(
//         applyMiddleware(thunk),
//         //autoRehydrate()
//     )
// );


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ['likedJobs']
  }

    // whenever the state changes it stores that change inside asyncStorage.
    // whiteList tells which specific state to persist everytime.


  const persistedReducer = persistReducer(persistConfig, reducers);

  export default () => {
    let store = createStore(persistedReducer,
     {}, compose(
        applyMiddleware(thunk),
      ));
    let persistor = persistStore(store)
    return { store, persistor }
  }

//export default store;