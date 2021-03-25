import axios from "axios";
import { CommentType, NoteType } from "../../types/types";



export const postsAPI = {
    createPost(note: NoteType) {
        return axios.post(`https://simple-blog-api.crew.red/posts/`, note)
            .then(response => {
                return response.data;
            })
    },
    getPosts() {
        return axios.get(`https://simple-blog-api.crew.red/posts/`)
            .then(response => {
                return response.data;
            })
    },
    getPostWithComments(id: any) {
        return axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
            .then(response => {
                return response.data;
            })
    },
    updatePost(note: NoteType) {
        return axios.put(`https://simple-blog-api.crew.red/posts/${note.id}`, note)
            .then(response => {
                return response.data;
            })
    },
    deletePost(id: number) {
        return axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
    }
}


export const commentAPI = {
    createComment(comment: CommentType) {
        return axios.post(`https://simple-blog-api.crew.red/comments`, comment)
            .then(response => {
                return response.data;
            })
    },
    getComments() {
        return axios.get(`https://simple-blog-api.crew.red/comments`)
            .then(response => {
                return response.data
            })
    }
}







