import Head from 'next/head';
import NavigationComponent from './NavigationComponent';
import links from '../shared/NavigationLinks';
import { useSelector } from 'react-redux'

export default function PageLayout({ children, title = "TODO"}){

    const { userInfo } = useSelector((state) => state.auth)

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content='TODO Content del sitio'/>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {
                userInfo ? <NavigationComponent links={links} logged={true} /> : null
            }
            <main>
                {children}
            </main>
        </>
    )
}