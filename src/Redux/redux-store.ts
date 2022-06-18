import { applyMiddleware, combineReducers, createStore } from 'redux';
import { sidebarReducer } from './sidebarReduc';
import { profileReducer } from './profileReduc';
import { messageReducer } from './messageReduc';
import { usersReducer } from './users-reduc';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers(
  {
    sidebar: sidebarReducer,
    profile: profileReducer,
    dialogs: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
  },
);

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type StateTypeFromRedux = ReturnType<typeof rootReducer> // ROOT STATE TYPE

export const stateFromRedux = store.getState();

export type UserAuthTypeFromRedux = typeof stateFromRedux.auth
export type ProfileFromReduxType = typeof stateFromRedux.profile

//@ts-ignore
window.store = store;