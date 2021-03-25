import { useState } from 'react'
import { MainLayout } from '../../components/Header'
import styles from '../../styles/Home.module.css'
import { Input, TomatoButton, TextArea } from '../../components/styledComponents'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/actions-creators/postsActions'

export default function Home() {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (value1: string, value2: string) => {

    if (title.length > 0 && text.length > 0) {
      dispatch(createPost(value1, value2))
      setTitle('')
      setText('')
    }

    else setTimeout(() => {alert('Напишіть текст поста :)') }, 4000)
  }


  return (
    <MainLayout title="Posts App">
      <div className={styles.container}>
        <div className={styles.createFormWrapper}>
          <div className={styles.createForm}>
            <Input value={title} onChange={(event) => setTitle(event.target.value)} autoComplete="off" />
            <TextArea value={text} onChange={(event) => setText(event.target.value)} autoComplete="off" />
            <TomatoButton onClick={() => onSubmit(title, text)}>Create new Post</TomatoButton>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
