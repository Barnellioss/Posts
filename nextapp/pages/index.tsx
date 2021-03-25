import { nanoid } from 'nanoid'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MainLayout } from '../components/Header'
import { DeleteBtn, EditButton } from '../components/styledComponents'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { deletePost, requestPosts } from '../store/actions-creators/postsActions'
import { NextThunkDispatch, wrapper } from '../store/index'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter()

  const { posts } = useTypedSelector((state) => state.posts)

  const dispatch = useDispatch()



  return (
    <MainLayout title="Posts App">
      <div className={styles.container}>
        <ul className={styles.postItems}>
          {!posts ? <h3>Loading...</h3> :
            posts.map(post => (
              <li className={styles.postsItem} key={nanoid()}>
                <Link href={`/edit/[id]`} as={`/edit/${post.id}`}><EditButton>Edit</EditButton></Link>
                <div className={styles.postTexts}>
                  <Link href={"/posts/post[id]"} as={`/posts/${post.id}`}><a className={styles.postTitle}>{post.title}</a></Link>
                  <Link href="/posts/post[id]" as={`/posts/${post.id}`} ><a className={styles.postText}>{post.body}</a></Link>
                </div>
                <DeleteBtn onClick={() => dispatch(deletePost(post.id))}>Delete</DeleteBtn>
              </li>
            ))
          }
        </ul>

      </div>
    </MainLayout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await requestPosts())
})



