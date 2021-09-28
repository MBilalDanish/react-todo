import { FETCH_STORIES } from "../actions/types";
const initialState = {
    items: [],
    item: {}
}

export default function foo(state = initialState, action) {
    switch (action.type) {
        case FETCH_STORIES:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}