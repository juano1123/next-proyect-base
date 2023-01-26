import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout title=' | Home'>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </PageLayout>
  )
}
