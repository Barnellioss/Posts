import { Dispatch } from "redux";
import { postsAPI, commentAPI } from "../api/api";
import {ActionTypes, NoteType, PostActionTypes, CommentType} from '../../types/types'



export const requestPosts = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        let response: NoteType[] = await postsAPI.getPosts()
        dispatch({ type: PostActionTypes.SET_POSTS, posts: response})
    }
}

export const createPost = (title: string, text: string) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        let note: NoteType = {
            title: title,
            body: text,
            id: Date.now()
        }
        let response: NoteType = await postsAPI.createPost(note)
        dispatch({ type: PostActionTypes.CREATE_POST, post: response })
    }
}


export const createComment = (text: string, postId: any) => {
    return async (dispatch:  Dispatch<ActionTypes>) => {
        let comment: CommentType = {
            body: text,
            id: postId,
            postId: postId
        }
        let response: CommentType = await commentAPI.createComment(comment) 
        dispatch({ type: PostActionTypes.SET_COMMENT, comments: response })
    }
}

export const getComments = () => {
    return async (dispatch:  Dispatch<ActionTypes>) => {
       let response: CommentType = await commentAPI.getComments()
        dispatch({ type: PostActionTypes.SET_COMMENT, comments: response })
    }
}

export const updatePostData = (note: NoteType) => {
    return async (dispatch:  Dispatch<ActionTypes>) => {
       let response: NoteType = await postsAPI.updatePost(note)
        dispatch({ type:PostActionTypes.UPDATE_POST, post: response })
    }
}


export const deletePost = (id: number) => {
    return async (dispatch:  Dispatch<ActionTypes>) => {
       let response = await postsAPI.deletePost(id)
        dispatch({ type: PostActionTypes.DELETE_POST, payload: id })
    }
}


