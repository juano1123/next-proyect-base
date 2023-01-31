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
      router('/')
  }, [router, userInfo])

  return (
    <PageLayout title='TODO | Login'>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
            type='email'
            className='form-input'
            {...register('email')}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
            type='password'
            className='form-input'
            {...register('password')}
            required
            />
        </div>
        <button type='submit' className='button' disabled={loading}>
            {loading ? <Spinner /> : 'Login'}
        </button>
        </form>
      </div>
    </PageLayout>
  )
}
