
import styles from '../styles/Home.module.css'
import { signIn } from 'next-auth/react'
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import Router  from 'next/router';

export default function Home() {
  const { status } = useSession();

  useEffect(()=>{
      if (status == "authenticated") {
          Router.replace("/profile")
      }
  },[status])

  if (status == "loading") {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={styles.home}>
        <button onClick={()=>signIn()}>Login</button>
    </div>
  )
}
