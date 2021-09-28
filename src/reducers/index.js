import { combineReducers } from "redux";
import postReducer from './postReducer';
import storiesReducer from './storiesReducer';

export default combineReducers({
    posts: postReducer,
    stories: storiesReducer

})