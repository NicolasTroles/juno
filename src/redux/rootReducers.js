/* Modules */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

/* Reducers */
import toastReducer from './toast/reducer';
import authenticationReducer from './authentication/reducer';
import marvelReducer from './marvel/reducer';


// all the reducers are in one place
const rootReducers = combineReducers({
    toastReducer: toastReducer,
    form: formReducer,
    marvelReducer: marvelReducer,
    authenticationReducer: authenticationReducer,
})

export default rootReducers;
