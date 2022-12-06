import Head from 'next/head';
import NavigationComponent from './NavigationComponent';
import links from '../shared/NavigationLinks';

export default function PageLayout({ children, title = "Ardin"}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content='Sitio oficial de gestion de la empresa Ardin, San Jose de Mayo, Uruguay.'/>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavigationComponent links={links}/>
            <main>
                {children}
            </main>
        </>
    )
}