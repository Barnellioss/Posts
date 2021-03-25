/*export interface IComment {
    _id: string;
    username: string;
    text: string
}*/


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


/*export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[]
}*/

export interface PostState {
    posts: NoteType[]
    comments: CommentType[]
}


/*export interface TrackState {
    tracks: ITrack[];
    error: string;
}*/



export enum PostActionTypes {
    CREATE_POST = "CREATE_POST",
    CREATE_COMMENT = "CREATE_COMMENT",
    UPDATE_POST = "UPDATE_POST",
    SET_POSTS = 'SET_POSTS',
    SET_COMMENT = 'SET_COMMENT',
    DELETE_POST = 'DELETE_POST'
}


/*export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}*/



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



/*interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[]
}

interface FetchTracksErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR;
    payload: string
}*/

//export type TrackAction = FetchTracksAction | FetchTracksErrorAction


////////////////////////////////////////////////////////////////////////

