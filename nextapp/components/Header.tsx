import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import styles from './Header.module.css'



export function MainLayout({ children, title = "Next APP" }){
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={styles.navigation}>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/posts/new"}><a>Create post</a></Link>
            </nav>
            <main className={styles.content}>
                {children}
            </main>
        </>
    )
}