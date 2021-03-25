import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { NoteType } from '../../types/types';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { commentAPI, postsAPI } from '../../store/api/api';
import styles from '../../styles/Home.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MainLayout } from '../../components/Header';
import { NextThunkDispatch, wrapper } from '../../store';
import { requestPosts, updatePostData } from '../../store/actions-creators/postsActions';
import { Input, TomatoButton } from '../../components/styledComponents';



interface PostWithComments {
    post: NoteType
}


export default function Home() {
    

    const router = useRouter()
    //@ts-ignore
    let post: NoteType = useTypedSelector(state => state.posts.posts)
    //@ts-ignore
    const filtered = post.filter(post => post.id == router.query.id)

    const [title, setTitle] = useState(filtered[0].title)

    const [text, setText] = useState(filtered[0].body)

    const dispatch = useDispatch()


    function updatePost(title, text) {
        let newPost: NoteType = {
            id: filtered[0].id,
            title: title,
            body: text
        }
        dispatch(updatePostData(newPost))
        console.log(newPost)
    }


    return (
        <MainLayout>
            <div className={styles.container}>
                <h1>Edit Page</h1>
                <Input value={title} onChange={(event) => setTitle(event.target.value)} />
                <Input value={text} onChange={(event) => setText(event.target.value)}/>
                <TomatoButton onClick={() => updatePost(title, text)}>Submit</TomatoButton>
            </div>
        </MainLayout>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await requestPosts())
})




