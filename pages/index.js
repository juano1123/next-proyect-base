import PageLayout from '../components/PageLayout'
import styles from '../styles/Login.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  
  const { userInfo } = useSelector((state) => state.auth)

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) 
      router.push('/login')
  }, [router, userInfo])

  return (
    <PageLayout title='TODO | Home'>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </PageLayout>
  )
}
