

export interface NoteType {
    title: string;
    body: string;
    id: number;
    comments?: Array<CommentType>
}

export interface CommentType {
    body?: string
    id?: number
    postId?: string
}


export interface PostState {
    posts: NoteType[]
    comments: CommentType[]
}



export enum PostActionTypes {
    CREATE_POST = "CREATE_POST",
    CREATE_COMMENT = "CREATE_COMMENT",
    UPDATE_POST = "UPDATE_POST",
    SET_POSTS = 'SET_POSTS',
    SET_COMMENT = 'SET_COMMENT',
    DELETE_POST = 'DELETE_POST'
}


interface createPostAction {
    type: PostActionTypes.CREATE_POST;
    post: NoteType
}

interface setPostsAction {
    type: PostActionTypes.SET_POSTS;
    posts: NoteType[]
}

interface setComments {
    type: PostActionTypes.SET_COMMENT;
    comments: CommentType
}

interface deletePostAction {
    type: PostActionTypes.DELETE_POST;
    payload: number
}

interface updatePost {
    type: PostActionTypes.UPDATE_POST;
    post: NoteType
}

export type ActionTypes = createPostAction | setPostsAction | setComments | deletePostAction | updatePost 


