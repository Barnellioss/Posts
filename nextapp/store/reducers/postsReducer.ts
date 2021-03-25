//import { ActionsTypes, CREATE_POST, DELETE_POST, SET_COMMENT, SET_POSTS, UPDATE_POST } from '../actions/postsActions';

import { ActionTypes, PostActionTypes, PostState } from "../../types/types"

let initialState : PostState = {
    posts: [],
    comments: []
}



const postsReducer = (state = initialState, action: ActionTypes) : PostState=> {
    switch (action.type) {
        case PostActionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case PostActionTypes.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case PostActionTypes.UPDATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case PostActionTypes.SET_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comments]
            }
        case PostActionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.payload)
            }
        default:
            return state
    }
}

export default postsReducer;

