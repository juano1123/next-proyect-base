import styles from '../../styles/Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions/authActions'
import Spinner from '../../components/Spinner'
import PageLayout from '../../components/PageLayout'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export default function Login() {
  
  const { loading, userInfo } = useSelector((state) => state.auth)

  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch();

  const router = useRouter();

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  useEffect(() => {
    if (userInfo) 
      router.push('/')
  }, [router, userInfo])

  return (
    <PageLayout title='TODO | Login'>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
              <label htmlFor='email'>Email</label>
              <input type='email' {...register('email')} required />
          </div>
          <div>
              <label htmlFor='password'>Password</label>
              <input type='password' {...register('password')} required />
          </div>
          <button type='submit' disabled={loading}>
              {loading ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
    </PageLayout>
  )
}
