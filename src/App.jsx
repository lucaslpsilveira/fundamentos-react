import { useState } from 'react'
import {Post} from './Components/Post/Post'
import './global.css'
import { Header } from './Components/Header/Header'
import styles from './App.module.css';
import { Sidebar } from './Components/Sidebar/Sidebar';

export function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
          author="Lucas Silveira" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quas ducimus, laboriosam eius nemo in iusto possimus facilis repellat est dolorem magni, nulla voluptatibus dicta assumenda? Velit atque eius nihil!"
        />
        <Post 
          author="Gabrieli Mallet" 
          content="Novo post! muito legal!"
        />
      </main>
      </div>      
    </>
  )
}
