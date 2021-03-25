import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { MainLayout } from '../../components/Header'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../../store'
import { createComment, getComments, requestPosts } from '../../store/actions-creators/postsActions'
import styles from '../../styles/Home.module.css'
import { NoteType } from '../../types/types'
import {useState } from 'react'
import { Input, TomatoButton } from '../../components/styledComponents'



interface PostWithComments {
  post: NoteType
}


export default function Home() {


  const posts = useTypedSelector((state) => state.posts)

  const [comment, setComment] = useState('')


  const router = useRouter()

  const dispatch = useDispatch()


////Filtering Data
 let filteredData = {
   filteredComments: posts.comments.flat().filter(comment => comment.id == + router.query.id),
   filteredPost: posts.posts.filter(post => post.id == + router.query.id) 
 }

/////Data
 console.log('filtered',filteredData)


  return (
    <MainLayout title="Posts App">
       <div className={styles.container}>
        <>
          {filteredData.filteredComments === undefined && filteredData.filteredPost === undefined ?
            <h4>loading...</h4>
            :
            <>
              <h3>{filteredData.filteredPost[0].title}</h3>
              <h4>{filteredData.filteredPost[0].body}</h4>
            </>
          }


          <hr />
        </>
        <div>
          {!filteredData.filteredComments ?
            <div className="">
              <Input value={comment} onChange={(event) => setComment(event.target.value)} />
              <TomatoButton onClick={() => dispatch(createComment(comment, router.query.id))} >Надіслати</TomatoButton>
            </div> 
            :

            <>
              <div className="">
                <Input value={comment} onChange={(event) => setComment(event.target.value)} />
                <TomatoButton onClick={() => dispatch(createComment(comment, router.query.id))} >Надіслати</TomatoButton>
              </div>
              <ul className={styles.postItems}>
                {filteredData.filteredComments.map(post => (
                  <li className={styles.postsItem} key={nanoid()}>
                    <div className={styles.postTexts}>
                      <h3 className={styles.postText}>{post.body}</h3>
                    </div>
                  </li>
                ))
                }
              </ul>
            </>
          }
        </div>


        </div>
    </MainLayout >
  )
}



export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await requestPosts())
  await dispatch(await getComments())
})

