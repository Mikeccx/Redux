import { createStore, compose, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk';
const middlewareList = [thunk];

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose; // eslint-disable-line
const enhancers = composeEnhancers(applyMiddleware(...middlewareList));
const store = createStore(reducer, enhancers)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default createStore(reducer, enhancers)